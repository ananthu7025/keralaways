import Link from "next/link";
import { adminGetAllPackages } from "@/lib/packages";
import PackageListActions from "@/components/admin/PackageListActions";

export default async function AdminDashboardPage() {
  const packages = await adminGetAllPackages();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="editorial-headline text-4xl text-ink">Packages</h1>
        <Link
          href="/admin/packages/new"
          className="small-caps bg-brass text-night px-6 py-3 hover:bg-night hover:text-paper transition-colors"
        >
          + New Package
        </Link>
      </div>

      {packages.length === 0 ? (
        <p className="text-ink/60 font-display italic">
          No packages yet. Create your first one.
        </p>
      ) : (
        <div className="bg-white border border-ink/10">
          <table className="w-full text-left">
            <thead>
              <tr className="small-caps text-ink/50 text-xs border-b border-ink/10">
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Slug</th>
                <th className="px-5 py-3">Featured</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.id} className="border-b border-ink/5 last:border-0">
                  <td className="px-5 py-4 font-display text-ink">{pkg.title}</td>
                  <td className="px-5 py-4 text-ink/60 text-sm">{pkg.slug}</td>
                  <td className="px-5 py-4 text-ink/60 text-sm">
                    {pkg.featured_order ?? "&mdash;"}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`small-caps text-xs px-2 py-1 ${
                        pkg.is_published
                          ? "bg-moss/10 text-moss-deep"
                          : "bg-ink/5 text-ink/50"
                      }`}
                    >
                      {pkg.is_published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <PackageListActions pkg={pkg} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
