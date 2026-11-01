import PackageForm from "@/components/admin/PackageForm";
import { createPackageAction } from "@/app/admin/actions";

export default function NewPackagePage() {
  return (
    <div>
      <h1 className="editorial-headline text-4xl text-ink mb-8">New Package</h1>
      <PackageForm onSubmit={createPackageAction} />
    </div>
  );
}
