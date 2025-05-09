import Carousel from "@/components/Carousel";
import FeaturedOpportunities from "@/components/Featured";
import Hero from "@/components/Hero";
import TrustSection from "@/components/Trusted";
import Competition from "@/components/Competition";
import TopMentorsSection from "@/components/TopMentors";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustSection />
      <Carousel />
      <FeaturedOpportunities />
      <Competition />
      <TopMentorsSection />
    </div>
  );
}
