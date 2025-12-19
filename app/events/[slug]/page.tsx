import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/lib/graphql";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const QUERY = `
  query EventBySlug($slug: ID!) {
    event(id: $slug, idType: SLUG) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      eventFields {
        eventDate
        eventTime
        location
        eventTypes
        eventStatus
      }
    }
  }
`;

export default async function EventDetailPage({ params }: PageProps) {
  // 1. Await the params promise (Next.js 15 requirement)
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) {
    notFound();
  }

  // 2. Pass the unwrapped slug to the request
  // Ensure 'slug' matches the key in your variables object
  const data: any = await client.request(QUERY, { slug });

  if (!data?.event) {
    notFound();
  }

  const event = data.event;
  const fields = event.eventFields;
  const status = fields.eventStatus?.[0];
  const type = fields.eventTypes?.[0];

  const isLocalImage = event.featuredImage?.node?.sourceUrl?.includes(".local");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO IMAGE */}
      {event.featuredImage?.node?.sourceUrl && (
        <div className="relative w-full h-[320px] bg-gray-200">
          <Image
            src={event.featuredImage.node.sourceUrl}
            alt={event.featuredImage.node.altText || event.title}
            fill
            className="object-cover"
            priority
            unoptimized={isLocalImage}
          />
        </div>
      )}

      {/* CONTENT CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 -mt-16 relative z-10">
        <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>

        <div className="mt-2 text-sm text-gray-600 flex flex-wrap gap-4">
          {fields.eventDate && (
            <span>
              📅 {new Date(fields.eventDate).toLocaleDateString("en-IN")}
            </span>
          )}
          {fields.eventTime && <span>⏰ {fields.eventTime}</span>}
          {fields.location && <span>📍 {fields.location}</span>}
        </div>

        <div className="mt-4 flex gap-3">
          {type && (
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
              {type}
            </span>
          )}
          {status && (
            <span
              className={`px-3 py-1 text-sm rounded-full ${
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

        <div
          className="prose prose-gray max-w-none mt-6"
          dangerouslySetInnerHTML={{ __html: event.content }}
        />
      </div>
    </main>
  );
}