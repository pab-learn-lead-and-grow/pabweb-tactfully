
import HeroSection from "./HeroSection";
import dynamic from "next/dynamic";
import CounsellingModal from "./CounsellingModal";
import KnowledgeSection from "./KnowledgeSection";
import TestimonialsSection from "./TestimonialSection";

const AllInOneSection = dynamic(() => import("./All-in-one"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse"></div>
});
const CoursesSection = dynamic(() => import("./CoursesSection"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse"></div>
});
const FaqSection = dynamic(() => import("./Faq"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse"></div>
});
const ContactSection = dynamic(() => import("./ContactSection"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse"></div>
});
const LogoSection = dynamic(() => import("./LogoSection"), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse"></div>
});

export default function HomePage({ latestNews = [] }) {

const logos = [
  { src: "/nmims.png", href: "/nmims", alt: "NMIMS University" },
  { src: "/manipal.png", href: "/muj", alt: "Manipal University Jaipur" },
  { src: "/amity.png", href: "/amity", alt: "Amity University" },
  { src: "/jain.png", href: "/jain", alt: "Jain University" },
  { src: "/smu.png", href: "/smu", alt: "Sikkim Manipal University" },
];

  return (
    <div className="flex flex-col bg-white font-sans">
      <HeroSection />

      <div className="h-[120px]">
        <LogoSection logos={logos}/>
      </div>

      <CoursesSection />
      <AllInOneSection />

      {/* ✅ Knowledge Section (clean) */}
      <KnowledgeSection latestNews={latestNews} />

      {/* Testimonials */}
      <TestimonialsSection />

      <ContactSection />
      <FaqSection/>

      <section className="w-full h-60 md:h-90 bg-[#3C087E] mt-5 md:mt-8 xl:mt-20 py-20 flex flex-col items-center text-left">
        <h1 className="text-xl md:text-4xl font-bold text-white max-w-4xl text-center px-4">
          Get Expert Career Counselling for the Right Online, Offline & Distance Learning Courses
        </h1>

        <CounsellingModal>
          <button className="mt-5 md:mt-15 text-white py-3 px-5 rounded-xl bg-[#EEA727] shadow-md hover:scale-105 transition font-semibold">
            Connect Now
          </button>
        </CounsellingModal>
      </section>
    </div>
  );
}