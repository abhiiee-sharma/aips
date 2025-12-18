import { client } from "@/lib/graphql"; // Ensure this is imported to use .request()
import { gql } from "graphql-request";
import Hero from "@/components/Hero";
import AboutUsFrame from "@/components/AboutSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import TestimonialSection from "@/components/Testimonials";
import RecentNotices from "@/components/RecentNotices";

const RECENT_NOTICES_QUERY = gql`
  query GetRecentNotices {
    notices(first: 5) {
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
  }
`;

// 1. Mark the function as async
export default async function Home() {
  let noticesData = [];

  try {
    // 2. Fetch the data inside the component
    const data: any = await client.request(RECENT_NOTICES_QUERY);
    
    // 3. Extract nodes and handle potential nulls
    noticesData = data?.notices?.nodes || [];
  } catch (error) {
    console.error("Error fetching notices for Home:", error);
    // noticesData remains an empty array, preventing a crash
  }

  return (
    <main>
      <Hero />
      
      {/* About Us section */}
      <AboutUsFrame />
      
      {/* Testimonials / Voices of Valor */}
      <TestimonialSection />

      {/* Recent Events / Notices from WordPress */}
      <RecentNotices notices={noticesData} />

      {/* Upcoming Events Carousel */}
      <UpcomingEvents />
    </main>
  );
}