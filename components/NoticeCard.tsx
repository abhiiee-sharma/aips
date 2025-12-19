"use client";

import Image from "next/image";
import Link from "next/link";

/* Utility */
function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "");
}

/* Props */
type NoticeCardProps = {
  title: string;
  slug: string;
  content: string;
  referenceNumber?: string | null;
  department?: string | null;
  priorityLevel?: string | null;
  publishDate?: string | null;
  pdfUrl?: string | null;
  featuredImage?: {
    sourceUrl: string;
    altText?: string | null;
  } | null;
};

/* Component */
export default function NoticeCard({
  title,
  slug,
  content,
  referenceNumber,
  department,
  priorityLevel,
  publishDate,
  featuredImage,
  pdfUrl,
}: NoticeCardProps) {
  const previewText =
    stripHtml(content || "").slice(0, 140) + "...";

  return (
    <Link
      href={`/notices/${slug}`}
      className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
    >
      {/* LEFT IMAGE */}
      {featuredImage?.sourceUrl ? (
        <div className="relative w-32 h-28 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
          <Image
            src={featuredImage.sourceUrl}
            alt={featuredImage.altText || title}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
      ) : (
        <div className="w-32 h-28 flex-shrink-0 rounded-md bg-gray-200 flex items-center justify-center text-xs text-gray-500">
          No Image
        </div>
      )}

      {/* RIGHT CONTENT */}
      <div className="flex-1">
        <div className="flex justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {title}
            </h2>

            {referenceNumber && (
              <p className="text-sm text-gray-600">
                Ref: {referenceNumber}
              </p>
            )}
          </div>

          {priorityLevel && (
            <span className="h-fit rounded-full px-3 py-1 text-xs font-medium bg-red-100 text-red-700">
              {priorityLevel}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-gray-700">
          {previewText}
        </p>

        <div className="mt-3 text-sm text-gray-600 flex flex-wrap gap-4">
          {department && <span>Dept: {department}</span>}
          {publishDate && (
            <span>
              {new Date(publishDate).toLocaleDateString("en-IN")}
            </span>
          )}
          {pdfUrl && (
            <span className="text-blue-600 font-medium">
              PDF Attached
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
