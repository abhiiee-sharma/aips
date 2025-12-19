import NoticeCard from "../../components/NoticeCard";
import { client } from "../../lib/graphql";

const QUERY = `
  query {
    notices(first: 10) {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
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
  const data = await client.request(QUERY);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Official Notices
      </h1>

      <div className="grid gap-4">
        {data.notices.nodes.map((notice: any) => (
  <NoticeCard
    key={notice.id}
    title={notice.title}
    slug={notice.slug}
    content={notice.content}
    referenceNumber={notice.noticeFields.referenceNumber}
    department={notice.noticeFields.department}
    priorityLevel={notice.noticeFields.priorityLevel}
    publishDate={notice.noticeFields.publishDate}
    pdfUrl={notice.noticeFields.pdfFile?.node?.mediaItemUrl}
    featuredImage={
      notice.featuredImage?.node
        ? {
            sourceUrl: notice.featuredImage.node.sourceUrl,
            altText: notice.featuredImage.node.altText,
          }
        : null
    }
  />
))}

      </div>
    </main>
  );
}