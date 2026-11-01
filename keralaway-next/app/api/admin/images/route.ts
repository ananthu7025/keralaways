import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"]);

export async function GET() {
  const imagesDir = path.join(process.cwd(), "public", "images");

  let files: string[] = [];
  try {
    const entries = await readdir(imagesDir, { withFileTypes: true });
    files = entries
      .filter((e) => e.isFile() && IMAGE_EXTENSIONS.has(path.extname(e.name).toLowerCase()))
      .map((e) => e.name)
      .sort();
  } catch {
    files = [];
  }

  return NextResponse.json({ images: files.map((name) => `/images/${name}`) });
}
