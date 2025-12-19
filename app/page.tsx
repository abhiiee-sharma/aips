import { client } from "@/lib/graphql";
import { gql } from "graphql-request";
import Hero from "@/components/Hero";
import AboutUsFrame from "@/components/AboutSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import TestimonialSection from "@/components/Testimonials";
import RecentNotices from "@/components/RecentNotices";

// Unified query to fetch both Notices and Events
const HOME_DATA_QUERY = gql`
  query GetHomeData {
    notices(first: 4) {
      nodes {
        id
        title
        slug
        content
        noticeFields {
          publishDate
        }
      }
    }
    events(first: 9) {
      nodes {
        id
        title
        slug
        content
        eventFields {
          eventDate
          eventTime
          location
          eventStatus
        }
      }
    }
  }
`;

export default async function Home() {
  let noticesData = [];
  let eventsData = [];

  try {
    // Single request for all homepage data
    const data: any = await client.request(HOME_DATA_QUERY);
    
    noticesData = data?.notices?.nodes || [];
    eventsData = data?.events?.nodes || [];
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }

  return (
    <main>
      <Hero />
      
      {/* About Us section */}
      <AboutUsFrame />

      
      
      {/* Testimonials / Voices of Valor */}
      <TestimonialSection />

      {/* Recent Notices from WordPress */}
      <RecentNotices notices={noticesData} />

      {/* Dynamic Events Carousel - Now receiving live data */}
      <UpcomingEvents events={eventsData} />
    </main>
  );
}