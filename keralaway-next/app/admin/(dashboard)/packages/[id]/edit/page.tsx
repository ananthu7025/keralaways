import { notFound } from "next/navigation";
import { adminGetPackageById } from "@/lib/packages";
import PackageForm from "@/components/admin/PackageForm";
import { updatePackageAction } from "@/app/admin/actions";

export default async function EditPackagePage(props: PageProps<"/admin/packages/[id]/edit">) {
  const { id } = await props.params;
  const pkg = await adminGetPackageById(id);

  if (!pkg) notFound();

  async function handleSubmit(input: Parameters<typeof updatePackageAction>[1]) {
    "use server";
    await updatePackageAction(id, input);
  }

  return (
    <div>
      <h1 className="editorial-headline text-4xl text-ink mb-8">Edit: {pkg.title}</h1>
      <PackageForm initial={pkg} onSubmit={handleSubmit} />
    </div>
  );
}
