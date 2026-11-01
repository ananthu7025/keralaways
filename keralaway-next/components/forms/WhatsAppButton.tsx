"use client";

function shareCurrentPageOnWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(
    "Check out this thoughtfully curated Kerala journey by Keralaway: "
  );
  window.open(`https://api.whatsapp.com/send?text=${text}${url}`, "_blank");
}

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 left-6 z-[45] flex flex-col gap-3">
      <button
        onClick={shareCurrentPageOnWhatsApp}
        title="Share this page on WhatsApp"
        className="flex items-center justify-center h-12 w-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer border-none"
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.785 1.453 5.387 0 9.773-4.387 9.777-9.778.002-2.613-1.015-5.068-2.865-6.92C16.488 2.057 14.04 1.04 11.43 1.04c-5.39 0-9.778 4.388-9.782 9.779-.001 1.702.469 3.361 1.36 4.811L1.936 21.05l5.882-1.542L6.647 19.154zm10.603-5.326c-.302-.151-1.791-.882-2.073-.984-.282-.102-.487-.151-.692.151-.205.302-.795.984-.974 1.189-.179.205-.359.231-.661.08-1.536-.768-2.673-1.336-3.743-3.176-.282-.487.282-.452.808-.984.14-.14.282-.328.359-.477.08-.151.04-.282-.02-.403-.06-.12-.487-1.179-.667-1.615-.175-.421-.351-.365-.482-.372-.124-.007-.267-.008-.411-.008-.143 0-.377.054-.575.27-.198.216-.755.738-.755 1.8 0 1.062.772 2.087.88 2.238.108.151 1.517 2.316 3.676 3.248.514.222.915.355 1.23.455.518.165.989.141 1.361.085.414-.062 1.791-.733 2.047-1.442.257-.709.257-1.317.179-1.442-.078-.126-.282-.203-.585-.354z" />
        </svg>
      </button>
    </div>
  );
}
