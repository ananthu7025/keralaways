"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  adminCreatePackage,
  adminUpdatePackage,
  adminDeletePackage,
  adminSetPublished,
  type PackageFormInput,
} from "@/lib/packages";
import type { ItineraryDay, PriceTier } from "@/lib/supabase/types";

export type PackageActionInput = Omit<
  PackageFormInput,
  "itinerary_days" | "inclusions" | "exclusions" | "price_tiers"
> & {
  itinerary_days: Omit<ItineraryDay, "id" | "package_id">[];
  inclusions: string[];
  exclusions: string[];
  price_tiers: PriceTier[];
};

function revalidatePublicPages(slug: string) {
  revalidatePath("/");
  revalidatePath(`/journeys/${slug}`);
}

export async function createPackageAction(input: PackageActionInput) {
  const id = await adminCreatePackage(input);
  revalidatePublicPages(input.slug);
  redirect(`/admin/packages/${id}/edit`);
}

export async function updatePackageAction(id: string, input: PackageActionInput) {
  await adminUpdatePackage(id, input);
  revalidatePublicPages(input.slug);
}

export async function deletePackageAction(id: string, slug: string) {
  await adminDeletePackage(id);
  revalidatePublicPages(slug);
  redirect("/admin");
}

export async function setPublishedAction(id: string, slug: string, isPublished: boolean) {
  await adminSetPublished(id, isPublished);
  revalidatePublicPages(slug);
}
