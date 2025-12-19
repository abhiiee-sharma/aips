import { client } from "../../lib/graphql";
import Link from "next/link";
import { ArrowRight, FileText, Building2, Calendar } from "lucide-react";

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
    // bg-gray-50 and pt-20 to match the "Valor" theme and detach from navbar
    <main className="min-h-screen bg-gray-50 pt-12 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Consistent Heading Style with reduced padding */}
        <div className="mb-8">
          <p className="text-[#ef4444] font-bold mb-1 uppercase tracking-widest text-xs italic">
            Official Announcements
          </p>
          <h1 className="text-[#003366] text-3xl md:text-4xl font-bold">
            Recent Notices
          </h1>
        </div>

        {/* Horizontal List of Notices */}
        <div className="flex flex-col gap-4">
          {notices.map((notice: any) => (
            <Link 
              key={notice.id} 
              href={`/notices/${notice.slug}`}
              className="block group"
            >
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Left Side: Notice Title and Meta Data */}
                <div className="flex-grow max-w-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[#003366] group-hover:text-blue-700 transition-colors">
                      {notice.title}
                    </h3>
                    {/* Priority Badge */}
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                      notice.noticeFields.priorityLevel === 'High' 
                      ? 'bg-red-50 text-red-600 border-red-100' 
                      : 'bg-blue-50 text-[#003366] border-blue-100'
                    }`}>
                      {notice.noticeFields.priorityLevel || "Normal"}
                    </span>
                  </div>

                  {/* Horizontal Metadata Row */}
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

                  {/* Strictly 2-line preview, no HTML or Images */}
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {notice.content.replace(/<[^>]*>?/gm, '')}
                  </p>
                </div>

                {/* Right Side: Read Full Notice Action */}
                <div className="shrink-0 flex items-center justify-end">
                  <div className="flex items-center gap-2 bg-[#003366] text-white px-5 py-2.5 rounded-xl font-bold text-sm group-hover:bg-[#002244] transition-colors shadow-sm">
                    <span>Read Notice</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State handling */}
        {notices.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">No official notices found at this time.</p>
          </div>
        )}
      </div>
    </main>
  );
}