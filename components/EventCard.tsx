"use client";

import Image from "next/image";
import Link from "next/link";

/* Utility */
function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "");
}

/* Props */
type EventCardProps = {
  title: string;
  slug: string;
  content: string;
  featuredImage?: string | null;

  eventDate?: string | null;
  eventTime?: string | null;
  location?: string | null;

  eventTypes?: string[] | null;
  eventStatus?: string[] | null;
};

/* Component */
export default function EventCard({
  title,
  slug,
  content,
  featuredImage,
  eventDate,
  eventTime,
  location,
  eventTypes,
  eventStatus,
}: EventCardProps) {
  const previewText =
    stripHtml(content || "").slice(0, 140) + "...";

  const status = eventStatus?.[0];
  const type = eventTypes?.[0];

  // handle local WordPress image issue
  const isLocalImage = featuredImage?.includes(".local");

  return (
    <Link href={`/events/${slug}`} className="block">
      <div className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
        {/* LEFT IMAGE */}
        {featuredImage ? (
          <div className="relative w-32 h-28 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover"
              sizes="128px"
              unoptimized={isLocalImage}
            />
          </div>
        ) : (
          <div className="w-32 h-28 flex-shrink-0 rounded-md bg-gray-200 flex items-center justify-center text-xs text-gray-500">
            No Poster
          </div>
        )}

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          <div className="flex justify-between gap-3">
            <div>
              {/* BIGGER TITLE */}
              <h2 className="text-xl font-bold text-gray-900 leading-snug">
                {title}
              </h2>

              {/* ONE-LINE META */}
              <div className="mt-1 text-sm text-gray-600 flex flex-wrap items-center gap-4">
                {eventDate && (
                  <span>
                    📅{" "}
                    {new Date(eventDate).toLocaleDateString("en-IN")}
                  </span>
                )}
                {eventTime && <span>⏰ {eventTime}</span>}
                {location && <span>📍 {location}</span>}
              </div>
            </div>

            {/* STATUS BADGE */}
            {status && (
              <span
                className={`h-fit rounded-full px-3 py-1 text-xs font-medium ${
                  status === "Upcoming"
                    ? "bg-green-100 text-green-700"
                    : status === "Completed"
                    ? "bg-gray-200 text-gray-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status}
              </span>
            )}
          </div>

          <p className="mt-2 text-sm text-gray-700">
            {previewText}
          </p>

          {/* EVENT TYPE */}
          {type && (
            <div className="mt-3">
              <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded">
                {type}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
