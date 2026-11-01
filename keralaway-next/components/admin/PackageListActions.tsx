"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Package } from "@/lib/supabase/types";
import { deletePackageAction, setPublishedAction } from "@/app/admin/actions";

export default function PackageListActions({ pkg }: { pkg: Package }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function togglePublished() {
    setBusy(true);
    await setPublishedAction(pkg.id, pkg.slug, !pkg.is_published);
    router.refresh();
    setBusy(false);
  }

  async function handleDelete() {
    if (!confirm(`Delete "${pkg.title}"? This cannot be undone.`)) return;
    setBusy(true);
    await deletePackageAction(pkg.id, pkg.slug);
  }

  return (
    <div className="flex items-center justify-end gap-4 small-caps text-xs">
      <Link href={`/admin/packages/${pkg.id}/edit`} className="hover:text-brass">
        Edit
      </Link>
      <button onClick={togglePublished} disabled={busy} className="hover:text-brass disabled:opacity-50">
        {pkg.is_published ? "Unpublish" : "Publish"}
      </button>
      <button onClick={handleDelete} disabled={busy} className="text-spice hover:underline disabled:opacity-50">
        Delete
      </button>
    </div>
  );
}
