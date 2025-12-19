import { client } from "../../lib/graphql";
import Link from "next/link";
import { ArrowRight, FileText, Building2, Calendar, Download } from "lucide-react";

const QUERY = `
  query {
    notices(first: 10) {
      nodes {
        id
        title
        slug
        content
        noticeFields {
          referenceNumber
          category
          priorityLevel
          department
          publishDate
          pdfFile {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

export default async function NoticesPage() {
  const data: any = await client.request(QUERY);
  const notices = data?.notices?.nodes || [];

  return (
    // Updated background to the Valor Grey bg-[#F8F9FA]
    <main className="min-h-screen bg-[#F8F9FA] pt-12 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Consistent Heading Style */}
        <div className="mb-10">
          <p className="text-[#ef4444] font-bold mb-1 uppercase tracking-widest text-[11px] italic">
            Official Announcements
          </p>
          <h1 className="text-[#003366] text-3xl md:text-4xl font-bold tracking-tight">
            Recent Notices
          </h1>
          <div className="h-1 w-12 bg-yellow-400 mt-4 rounded-full"></div>
        </div>

        {/* Horizontal List of Notices */}
        <div className="flex flex-col gap-4">
          {notices.map((notice: any) => (
            <div 
              key={notice.id}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              {/* Left Side: Clickable Content Area */}
              <Link href={`/notices/${notice.slug}`} className="flex-grow max-w-4xl group">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-[#003366] group-hover:text-blue-700 transition-colors leading-tight">
                    {notice.title}
                  </h3>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                    notice.noticeFields.priorityLevel === 'High' 
                    ? 'bg-red-50 text-red-600 border-red-100' 
                    : 'bg-blue-50 text-[#003366] border-blue-100'
                  }`}>
                    {notice.noticeFields.priorityLevel || "Normal"}
                  </span>
                </div>

                {/* Metadata Row */}
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1.5">
                    <FileText size={14} className="text-[#ef4444]" />
                    <span>Ref: {notice.noticeFields.referenceNumber || "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Building2 size={14} className="text-gray-400" />
                    <span>{notice.noticeFields.department || "General"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gray-400" />
                    <span>{notice.noticeFields.publishDate}</span>
                  </div>
                </div>

                {/* 2-line preview */}
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {notice.content.replace(/<[^>]*>?/gm, '')}
                </p>
              </Link>

              {/* Right Side: Action Buttons */}
              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                {/* PDF Download Button */}
                {notice.noticeFields.pdfFile?.node?.mediaItemUrl && (
                  <a 
                    href={notice.noticeFields.pdfFile.node.mediaItemUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-red-50 hover:text-[#ef4444] transition-all border border-gray-200"
                  >
                    <Download size={16} />
                    <span>PDF</span>
                  </a>
                )}

                {/* View Details Button */}
                <Link 
                  href={`/notices/${notice.slug}`}
                  className="flex items-center gap-2 bg-[#003366] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#002244] transition-colors shadow-sm group"
                >
                  <span>Read Notice</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {notices.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">No official notices found at this time.</p>
          </div>
        )}
      </div>
    </main>
  );
}