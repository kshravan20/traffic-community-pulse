import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrafficMap from "@/components/TrafficMap";
import CommunityFeatures from "@/components/CommunityFeatures";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrafficMap />
        <CommunityFeatures />
        <Analytics />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
