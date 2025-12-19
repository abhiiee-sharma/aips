import { client } from "@/lib/graphql";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

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
  const data: any = await client.request(QUERY);
  const events = data?.events?.nodes || [];

  return (
    // bg-gray-50 and pt-20 to detach from navbar and match valor theme
    <main className="min-h-screen bg-gray-50 pt-20 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Valor-style Heading: Smaller scale and reduced padding */}
        <div className="mb-8">
          <p className="text-[#ef4444] font-bold mb-1 uppercase tracking-widest text-xs italic">
            Programs & Initiatives
          </p>
          <h1 className="text-[#003366] text-3xl md:text-4xl font-bold">
            Organised Events
          </h1>
        </div>

        {/* Horizontal List */}
        <div className="flex flex-col gap-4">
          {events.map((event: any) => (
            <Link 
              key={event.id} 
              href={`/events/${event.slug}`}
              className="block group"
            >
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Left Side: Title and Meta */}
                <div className="flex-grow max-w-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[#003366] group-hover:text-blue-700 transition-colors">
                      {event.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-[#003366] border border-blue-100">
                      {event.eventFields.eventStatus || "Active"}
                    </span>
                  </div>

                  {/* Horizontal Meta Info */}
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#ef4444]" />
                      <span>{event.eventFields.eventDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-gray-400" />
                      <span>{event.eventFields.eventTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-gray-400" />
                      <span className="line-clamp-1">{event.eventFields.location}</span>
                    </div>
                  </div>

                  {/* Strictly 2-line preview, no images */}
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {event.content.replace(/<[^>]*>?/gm, '')}
                  </p>
                </div>

                {/* Right Side: Read More Button */}
                <div className="shrink-0 flex items-center justify-end">
                  <div className="flex items-center gap-2 bg-[#003366] text-white px-5 py-2.5 rounded-xl font-bold text-sm group-hover:bg-[#002244] transition-colors">
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {events.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">No programs found at this time.</p>
          </div>
        )}
      </div>
    </main>
  );
}