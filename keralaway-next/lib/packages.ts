import { createServerClient, createServiceRoleClient } from "@/lib/supabase/server";
import type { Package, PackageWithItinerary, ItineraryDay } from "@/lib/supabase/types";

export async function getPublishedPackages(): Promise<Package[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .eq("is_published", true)
    .order("featured_order", { ascending: true, nullsFirst: false });

  if (error) throw error;
  return data ?? [];
}

export async function getPackageBySlug(
  slug: string
): Promise<PackageWithItinerary | null> {
  const supabase = createServerClient();
  const { data: pkg, error } = await supabase
    .from("packages")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) throw error;
  if (!pkg) return null;

  const { data: days, error: daysError } = await supabase
    .from("itinerary_days")
    .select("*")
    .eq("package_id", pkg.id)
    .order("day_number", { ascending: true });

  if (daysError) throw daysError;

  return { ...pkg, itinerary_days: days ?? [] };
}

export async function getAllPackageSlugs(): Promise<string[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("packages")
    .select("slug")
    .eq("is_published", true);

  if (error) throw error;
  return (data ?? []).map((row) => row.slug);
}

// ── Admin (service-role) helpers — call only from server code behind the admin password gate ──

export async function adminGetAllPackages(): Promise<Package[]> {
  const supabase = createServiceRoleClient();
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function adminGetPackageById(
  id: string
): Promise<PackageWithItinerary | null> {
  const supabase = createServiceRoleClient();
  const { data: pkg, error } = await supabase
    .from("packages")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  if (!pkg) return null;

  const { data: days, error: daysError } = await supabase
    .from("itinerary_days")
    .select("*")
    .eq("package_id", pkg.id)
    .order("day_number", { ascending: true });

  if (daysError) throw daysError;

  return { ...pkg, itinerary_days: days ?? [] };
}

export type PackageFormInput = Omit<
  Package,
  "id" | "created_at" | "updated_at"
> & {
  itinerary_days: Omit<ItineraryDay, "id" | "package_id">[];
};

export async function adminCreatePackage(input: PackageFormInput): Promise<string> {
  const supabase = createServiceRoleClient();
  const { itinerary_days, ...packageFields } = input;

  const { data: pkg, error } = await supabase
    .from("packages")
    .insert(packageFields)
    .select("id")
    .single();

  if (error) throw error;

  if (itinerary_days.length > 0) {
    const { error: daysError } = await supabase.from("itinerary_days").insert(
      itinerary_days.map((day) => ({ ...day, package_id: pkg.id }))
    );
    if (daysError) throw daysError;
  }

  return pkg.id;
}

export async function adminUpdatePackage(
  id: string,
  input: PackageFormInput
): Promise<void> {
  const supabase = createServiceRoleClient();
  const { itinerary_days, ...packageFields } = input;

  const { error } = await supabase
    .from("packages")
    .update({ ...packageFields, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw error;

  const { error: deleteError } = await supabase
    .from("itinerary_days")
    .delete()
    .eq("package_id", id);
  if (deleteError) throw deleteError;

  if (itinerary_days.length > 0) {
    const { error: daysError } = await supabase.from("itinerary_days").insert(
      itinerary_days.map((day) => ({ ...day, package_id: id }))
    );
    if (daysError) throw daysError;
  }
}

export async function adminDeletePackage(id: string): Promise<void> {
  const supabase = createServiceRoleClient();
  const { error } = await supabase.from("packages").delete().eq("id", id);
  if (error) throw error;
}

export async function adminSetPublished(
  id: string,
  isPublished: boolean
): Promise<void> {
  const supabase = createServiceRoleClient();
  const { error } = await supabase
    .from("packages")
    .update({ is_published: isPublished, updated_at: new Date().toISOString() })
    .eq("id", id);
  if (error) throw error;
}
