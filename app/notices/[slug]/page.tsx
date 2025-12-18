import { notFound } from "next/navigation";
// Adjust this import to point to where you defined your GraphQL client
import { client } from "@/lib/graphql";

// 1. The Query (taken from your error log)
const QUERY = `
  query GetNotice($slug: ID!) {
    notice(id: $slug, idType: SLUG) {
      title
      content
      noticeFields {
        referenceNumber
        department
        priorityLevel
        publishDate
        pdfFile {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

// 2. Define the Props type for Next.js 15
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NoticeDetail({ params }: PageProps) {
  // 3. CRITICAL FIX: Await the params before accessing properties
  const { slug } = await params;

  // 4. Debugging log (optional, you can remove this later)
  console.log("Fetching notice for slug:", slug);

  try {
    // 5. Fetch data using the awaited slug
    const data: any = await client.request(QUERY, {
      slug: slug,
    });

    // 6. Handle case where notice is not found
    if (!data?.notice) {
      return notFound();
    }

    const notice = data.notice;

    // 7. Render the UI
    return (
      <main className="max-w-4xl mx-auto p-6">
        <article className="prose lg:prose-xl">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">{notice.title}</h1>

          {/* Meta Data Grid */}
          <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg mb-8 text-sm">
            <div>
              <span className="font-semibold">Ref No:</span>{" "}
              {notice.noticeFields?.referenceNumber || "N/A"}
            </div>
            <div>
              <span className="font-semibold">Department:</span>{" "}
              {notice.noticeFields?.department || "General"}
            </div>
            <div>
              <span className="font-semibold">Date:</span>{" "}
              {notice.noticeFields?.publishDate || "N/A"}
            </div>
            <div>
              <span className="font-semibold">Priority:</span>{" "}
              <span className={notice.noticeFields?.priorityLevel === 'High' ? 'text-red-600 font-bold' : ''}>
                {notice.noticeFields?.priorityLevel || "Normal"}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div 
            className="mb-8"
            dangerouslySetInnerHTML={{ __html: notice.content }} 
          />

          {/* PDF Download Link */}
          {notice.noticeFields?.pdfFile?.node?.mediaItemUrl && (
            <a 
              href={notice.noticeFields.pdfFile.node.mediaItemUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Download PDF Attachment
            </a>
          )}
        </article>
      </main>
    );

  } catch (error) {
    console.error("Error fetching notice:", error);
    // You can return a custom error UI here if you want
    return (
      <div className="p-10 text-center text-red-500">
        Error loading notice. Please try again later.
      </div>
    );
  }
}