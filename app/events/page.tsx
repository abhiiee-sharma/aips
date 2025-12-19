import EventCard from "@/components/EventCard";
import { client } from "@/lib/graphql";

const QUERY = `
  query {
    events(first: 10) {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
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
  }
`;

export default async function EventsPage() {
  const data = await client.request(QUERY);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Programs & Events
      </h1>

      <div className="grid gap-4">
        {data.events.nodes.map((event: any) => (
          <EventCard
            key={event.id}
            title={event.title}
            slug={event.slug}
            content={event.content}
            featuredImage={event.featuredImage?.node?.sourceUrl}
            eventDate={event.eventFields.eventDate}
            eventTime={event.eventFields.eventTime}
            location={event.eventFields.location}
            eventTypes={event.eventFields.eventTypes}
            eventStatus={event.eventFields.eventStatus}
          />
        ))}
      </div>
    </main>
  );
}
