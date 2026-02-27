import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection"; // <-- Import it here
import ScheduleSection from "@/components/ScheduleSection";
import TracksSection from "@/components/TrackSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { hackathonData } from "@/app/data/eventData";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[#050505]">
        <div id="hero">
          <HeroSection eventData={hackathonData.event} />
        </div>

        {/* Add the About Section Here */}
        <div id="about">
          <AboutSection />
        </div>

        <div id="schedule">
          <ScheduleSection scheduleData={hackathonData.schedule} />
        </div>

        <div id="tracks">
          <TracksSection tracksData={hackathonData.tracks} />
        </div>

        <div id="sponsors">
          <SponsorsSection sponsorsData={hackathonData.sponsors} />
        </div>

        <div id="faqs">
          <FAQSection faqsData={hackathonData.faqs} />
        </div>

        <Footer contactData={hackathonData.contact} />
      </main>
    </>
  );
}
