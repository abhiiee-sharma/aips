import Link from "next/link";

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "");
}

type NoticeCardProps = {
  title: string;
  slug: string;                // 👈 REQUIRED
  content: string;
  referenceNumber?: string | null;
  department?: string | null;
  priorityLevel?: string | null;
  publishDate?: string | null;
};

export default function NoticeCard({
  title,
  slug,
  referenceNumber,
  department,
  priorityLevel,
  publishDate,
  content,
}: NoticeCardProps ) {
  const previewText =
    stripHtml(content || "").slice(0, 140) + "...";

  return (
    <Link
      href={`/notices/${slug}`}
      className="block bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
    >
      <div className="flex justify-between gap-4">
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
          <span className="rounded-full px-3 py-1 text-xs font-medium bg-red-100 text-red-700">
            {priorityLevel}
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        {previewText}
      </p>

      <div className="mt-4 text-sm text-gray-600">
        {department && <p>Department: {department}</p>}
        {publishDate && (
          <p>
            Published on:{" "}
            {new Date(publishDate).toLocaleDateString()}
          </p>
        )}
      </div>
    </Link>
  );
}
