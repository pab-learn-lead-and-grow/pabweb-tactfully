import UniversityListClient from "./UniversityListClient";
import FAQ from "@/components/NmimsSection/FAQ";
import ConnectToday from "./NmimsSection/ConnectToday";

export default function UniversityList({ initialData = [] }) {

  const faqs = [
    {
      q: "What are UGC Approved Universities?",
      a: "UGC approved universities are institutions recognized by the University Grants Commission to offer valid degree programs in India.",
    },
    {
      q: "Is a UGC approved online degree valid?",
      a: "Yes, an online degree from a UGC-approved and entitled university is valid for jobs, government exams, and higher education.",
    },
    {
      q: "How can I check if a university is UGC approved?",
      a: "You can verify recognition through the official UGC website or consult trusted education guidance platforms like Radhya Education Academy.",
    },
    {
      q: "Are UGC approved distance education universities safe for admission?",
      a: "Yes, enrolling in a UGC approved distance education university ensures your degree is legitimate and recognized nationwide.",
    }
  ];

  return (
    <>
      <section className="py-12 lg:py-24 mt-10 px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl max-w-6xl mx-auto font-bold text-center text-[#3C087E] mb-4">
          UGC Approved Universities in India
        </h2>

        <span className="block max-w-3xl mx-auto bg-yellow-400 h-1"></span>

        <div className="text-[#3C087E] text-xl sm:text-2xl font-bold text-center mx-auto mt-2">
          Updated List for Online & Distance Education for year 2026
        </div>

        {/* SEO Paragraphs */}
        <p className="text-sm md:text-base text-black max-w-5xl mt-8 mx-auto text-justify">
          Choosing from UGC Approved Universities in India is the first and most important step before taking admission into any online or distance education program. The University Grants Commission (UGC) is the official regulatory authority that ensures universities meet national academic standards and are authorized to offer valid degree programs. Whether you are planning to pursue an online MBA, distance education course, or any online degree, verifying UGC approval safeguards your career and ensures your qualification is recognized for private jobs, government exams, and higher studies. However, beyond recognition, students should also compare universities based on accreditation, program structure, fee range, specialization options, learning flexibility, and overall academic credibility.
        </p>

        <p className="text-sm md:text-base text-black max-w-5xl mt-2 mx-auto text-justify mb-14">
          With the rapid growth of online and distance learning in India, comparing UGC approved universities has become essential for making an informed decision. Many students actively search for UGC approved online MBA programs and distance education universities to ensure long-term career value. A UGC-entitled online degree holds the same validity as a regular degree when issued by a recognized institution, but selecting the right university depends on your career goals, budget, and preferred specialization. At Radhya Education Academy, we simplify this process by helping students compare top UGC approved universities and choose the institution that best aligns with their professional aspirations.
        </p>

        {/* Interactive list */}
        <UniversityListClient initialData={initialData} />

      </section>

      <FAQ faqs={faqs} />

      <ConnectToday />
    </>
  );
}