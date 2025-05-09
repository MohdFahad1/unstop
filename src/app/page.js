import Carousel from "@/components/Carousel";
import FeaturedOpportunities from "@/components/Featured";
import Hero from "@/components/Hero";
import TrustSection from "@/components/Trusted";
import Competition from "@/components/Competition";
import TopMentorsSection from "@/components/TopMentors";
import MockTest from "@/components/MockTest";
import PracticeSection from "@/components/Practice";
import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustSection />
      <Carousel />
      <FeaturedOpportunities />
      <Competition />
      <TopMentorsSection />
      <MockTest />
      <PracticeSection />
      <SkillsSection />
    </div>
  );
}
