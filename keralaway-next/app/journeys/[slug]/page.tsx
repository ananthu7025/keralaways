import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPackageBySlug, getAllPackageSlugs } from "@/lib/packages";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PackageTemplate from "@/components/journeys/PackageTemplate";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllPackageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/journeys/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const pkg = await getPackageBySlug(slug);
  if (!pkg) return {};

  return {
    title: `${pkg.title} — Keralaway Tours`,
    description: pkg.subtitle ?? pkg.overview_body?.slice(0, 160) ?? undefined,
  };
}

export default async function JourneyPage(props: PageProps<"/journeys/[slug]">) {
  const { slug } = await props.params;
  const pkg = await getPackageBySlug(slug);

  if (!pkg) notFound();

  return (
    <>
      <Header />
      <main className="bg-paper text-ink overflow-x-hidden">
        <PackageTemplate pkg={pkg} />
      </main>
      <Footer />
    </>
  );
}
