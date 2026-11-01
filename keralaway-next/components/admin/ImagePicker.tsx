"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  value: string;
  onChange: (url: string) => void;
};

export default function ImagePicker({ value, onChange }: Props) {
  const [images, setImages] = useState<string[]>([]);
  const [showGallery, setShowGallery] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/admin/images")
      .then((res) => res.json())
      .then((data) => setImages(data.images ?? []))
      .catch(() => setImages([]));
  }, []);

  const isLocalPath = value.startsWith("/");
  const previewSrc = value.trim();

  return (
    <div className="space-y-3">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-32 h-20 bg-ink/5 border border-ink/15 overflow-hidden relative flex items-center justify-center">
          {previewSrc ? (
            <Image
              src={previewSrc}
              alt="Preview"
              fill
              unoptimized={!isLocalPath}
              className="object-cover"
              onError={() => setLoaded(false)}
              onLoad={() => setLoaded(true)}
            />
          ) : (
            <span className="text-ink/30 text-xs small-caps">No image</span>
          )}
        </div>
        <div className="flex-1">
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/images/filename.jpg or https://..."
            className="w-full border border-ink/20 px-3 py-2 font-display bg-white"
          />
          <button
            type="button"
            onClick={() => setShowGallery((v) => !v)}
            className="small-caps text-brass text-xs mt-2 hover:underline"
          >
            {showGallery ? "Hide" : "Choose from"} images already in the project ({images.length})
          </button>
        </div>
      </div>

      {showGallery && (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 border border-ink/15 bg-white p-4">
          {images.length === 0 ? (
            <p className="text-ink/50 text-xs col-span-full">
              No images found in public/images.
            </p>
          ) : (
            images.map((src) => (
              <button
                key={src}
                type="button"
                onClick={() => {
                  onChange(src);
                  setShowGallery(false);
                }}
                className={`relative aspect-video border-2 overflow-hidden transition-colors ${
                  value === src ? "border-brass" : "border-transparent hover:border-ink/30"
                }`}
                title={src}
              >
                <Image src={src} alt={src} fill className="object-cover" />
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
