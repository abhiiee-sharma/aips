type NoticeCardProps = {
  title: string;
  referenceNumber?: string | null;
  department?: string | null;
  priorityLevel?: string | null;
  publishDate?: string | null;
  pdfUrl?: string | null;
};

export default function NoticeCard({
  title,
  referenceNumber,
  department,
  priorityLevel,
  publishDate,
  pdfUrl,
}: NoticeCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {title}
          </h2>

          {referenceNumber && (
            <p className="text-sm text-gray-600 mt-1">
              Ref: {referenceNumber}
            </p>
          )}
        </div>

        {priorityLevel && (
          <span className="shrink-0 rounded-full px-3 py-1 text-xs font-medium bg-red-100 text-red-700">
            {priorityLevel}
          </span>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-700 space-y-1">
        {department && <p>Department: {department}</p>}
        {publishDate && <p>Published on: {publishDate}</p>}
      </div>

      {pdfUrl && (
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm font-medium text-blue-700 hover:underline"
        >
          View PDF →
        </a>
      )}
    </div>
  );
}
