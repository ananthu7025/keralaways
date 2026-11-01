import Link from "next/link";
import LogoutButton from "@/components/admin/LogoutButton";

export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return (
    <div className="min-h-screen bg-mist/20">
      <header className="bg-night text-paper px-6 md:px-12 py-5 flex items-center justify-between">
        <Link href="/admin" className="editorial-headline text-2xl">
          Keralaway <em className="editorial-italic text-brass">Admin</em>
        </Link>
        <nav className="flex items-center gap-6 small-caps">
          <Link href="/admin" className="hover:text-brass transition-colors">
            Packages
          </Link>
          <Link href="/admin/packages/new" className="hover:text-brass transition-colors">
            + New Package
          </Link>
          <Link href="/" target="_blank" className="hover:text-brass transition-colors">
            View Site
          </Link>
          <LogoutButton />
        </nav>
      </header>
      <main className="px-6 md:px-12 py-10">{children}</main>
    </div>
  );
}
