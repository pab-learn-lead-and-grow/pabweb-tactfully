import Image from "next/image";
import { BadgeCheck, Globe, Briefcase } from "lucide-react";
import ConnectToday from "@/components/NmimsSection/ConnectToday";
import FAQ from "./NmimsSection/FAQ";
import CounsellingModal from "./Radhya/CounsellingModal";

export default function UgcUniversitiesSection() {
  const features = [
    {
      label: "UGC Recognised",
      icon: BadgeCheck,
    },
    {
      label: "National-wide Validity",
      icon: Globe,
    },
    {
      label: "Industry-Valid Programs",
      icon: Briefcase,
    },
  ];

  const faqs = [
    {
      q: "What are UGC approved universities in India?",
      a: "UGC approved universities are institutions recognized by the University Grants Commission. These universities follow academic standards set by UGC and offer valid degrees accepted across India.",
    },
    {
      q: "How can I check if a university is UGC approved?",
      a: "You can check the approval status by visiting the official website of the University Grants Commission or by using trusted education platforms that verify university approvals.",
    },
    {
      q: "Are online degrees from UGC approved universities valid?",
      a: "Yes, online degrees from UGC approved universities are valid for jobs, higher education, and government exams, provided the program is recognized by UGC-DEB guidelines.",
    },
    {
      q: "What is the difference between UGC approved and non-approved universities?",
      a: "UGC approved universities are recognized and follow proper academic standards, while non-approved universities may not provide valid degrees or recognized education.",
    },
    {
      q: "Which are the best UGC approved online universities in India?",
      a: "The best UGC approved online universities are those that offer strong curriculum, accreditation, placement support, and industry relevance. The choice depends on your course and career goals.",
    },
    {
      q: "Is UGC approval mandatory for online and distance education?",
      a: "Yes, UGC approval is mandatory for universities offering online and distance education in India to ensure degree validity and recognition.",
    },
    {
      q: "Can I get a government job with a UGC approved degree?",
      a: "Yes, degrees from UGC approved universities are accepted for government jobs, provided other eligibility criteria are met.",
    },
    {
      q: "What courses are offered by UGC approved universities?",
      a: "UGC approved universities offer a wide range of courses including MBA, BBA, MCA, BCom, BA, and many professional programs.",
    },
    {
      q: "Are private universities also UGC approved?",
      a: "Yes, many private universities in India are approved by UGC and offer recognized degree programs.",
    },
    {
      q: "Why is UGC approval important before taking admission?",
      a: "UGC approval ensures that your degree is valid, recognized, and accepted by employers and educational institutions.",
    },
  ];

  return (
    <>
      <section className="w-full py-12 md:pt-20 px-4 lg:px-10 mt-5 overflow-hidden">
        {/* HERO */}
        <div className="max-w-7xl px-4 md:px-10 mx-auto grid grid-cols-1 lg:grid-cols-3 items-center">
          {/* LEFT */}
          <div className="space-y-4 col-span-2">
            <p className="text-sm font-semibold text-[#3C087E]">
              Government Recognised University
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#3C087E] leading-tight">
              UGC Approved Universities in India (Online & Distance Education
              2026)
            </h1>

            <p className="text-gray-600 text-sm sm:text-base  leading-relaxed text-justify max-w-3xl">
              Choosing a university that is approved by the University Grants
              Commission (UGC) is one of the most important steps before taking
              admission into any online or distance education program, as it
              ensures proper academic standards, quality education, and degree
              validity. This page provides a verified and updated list of UGC
              approved universities in India, helping you explore trusted
              options for online and distance education so that, whether you are
              planning to pursue an online MBA, BBA, MCA, or any other degree
              program, you can confidently choose a university that is
              recognized, reliable, and aligned with your career goals.
              <br />
              Explore verified institutions and make informed decisions with
              complete transparency.
            </p>

            {/* FEATURES */}
            <div className="space-y-4">
              {features.map(({ label, icon: Icon }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-sm md:text-base font-medium text-[#3C087E]"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-full text-[#4D964F] shadow-md">
                    <Icon size={24} />
                  </span>
                  {label}
                </div>
              ))}
            </div>

            {/* MOBILE IMAGE */}
            <Image
              src="/ugc-university.png"
              alt="Universities"
              width={500}
              height={500}
              className="block lg:hidden w-full max-w-md mx-auto mt-6 rounded-3xl object-contain"
              priority
            />

            {/* CTA */}
            <a
              href="https://deb.ugc.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-[#EEA727] hover:scale-105 transition-all text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                View UGC Approved Universities
              </button>
            </a>
          </div>

          {/* DESKTOP IMAGE */}
          <div className="hidden lg:flex justify-center">
            <Image
              src="/ugc-university.png"
              alt="Online MBA universities approved by UGC in India"
              width={500}
              height={500}
              className="w-full max-w-md rounded-3xl object-contain"
              priority
            />
          </div>
        </div>

        {/* CONTENT SECTIONS */}
        <div className="max-w-5xl mx-auto mt-20 space-y-14 text-black">
          {/* SECTION */}
          <section>
            <h2 className="text-2xl md:text-4xl text-center font-bold text-[#3C087E] mb-4">
              What is UGC and Why Approval is Important
            </h2>
            <p className="text-sm md:text-base mt-4 text-justify">
              The University Grants Commission (UGC) is a statutory body in
              India responsible for maintaining the standards of higher
              education. It regulates universities and ensures that they follow
              proper academic guidelines.
              <br />
              UGC approval is important because:
            </p>
            <ul className="list-disc px-5 mt-2">
              <li>It validates the authenticity of the university</li>
              <li>Ensures the degree is recognized across India</li>
              <li>
                Makes you eligible for government jobs and higher education
              </li>
              <li>Protects students from fake or unrecognized institutions</li>
            </ul>
            <p className="text-sm md:text-base mt-4 text-justify">
              Without UGC approval, a degree may not hold value in the job
              market or academic sector.
            </p>
          </section>

          {/* REUSABLE SECTION BLOCKS */}
          {[
            {
              title: "List of UGC Approved Universities in India",
              text: "This page provides a carefully curated and regularly updated list of universities that are officially approved by the University Grants Commission (UGC) and offer online as well as distance education programs in India. Choosing a UGC approved university ensures that your degree holds value across academic institutions, private companies, and government sectors. These universities follow strict academic guidelines, maintain quality standards, and provide recognized qualifications that support long-term career growth and higher education opportunities for students across different domains.",
              subText: "These universities are categorized based on:",
              points: [
                "Online universities",
                "Distance learning universities",
                "Government and private universities",
                "NAAC accredited institutions",
              ],
              footerText:
                "Each university listed here meets the required UGC standards and offers recognized degree programs that are widely accepted across India. This ensures that students can confidently choose a reliable institution without worrying about degree validity, career prospects, or future educational opportunities.",
            },

            {
              title: "UGC Approved Online Universities in India",
              text: "With the rapid growth of digital learning in India, the University Grants Commission (UGC) has approved several universities to offer fully online degree programs that match the quality and credibility of traditional education. These online universities provide flexibility for working professionals and students who want to pursue higher education without attending physical classes. The curriculum, faculty, and assessment methods are designed to meet industry standards, ensuring that students gain practical knowledge and relevant skills required in today’s competitive job market.",
              subText: "UGC approved online universities provide:",
              points: [
                "Online MBA, BBA, MCA, and other programs",
                "Flexible learning schedules",
                "Live and recorded classes",
                "Digital learning platforms",
              ],
              footerText:
                "Choosing a UGC approved online university ensures that your degree is valid, recognized, and accepted by employers across industries. It also allows you to balance education with work and personal commitments while gaining valuable skills for career advancement.",
            },

            {
              title: "UGC Approved Distance Universities in India",
              text: "Distance education continues to be one of the most popular and accessible modes of learning in India, especially for students who cannot attend regular classes. UGC-approved distance universities offer structured programs that allow learners to study at their own pace while maintaining academic standards. These universities provide study materials, online resources, and support systems to help students complete their education effectively. Distance learning is particularly beneficial for individuals seeking affordable education and flexibility without compromising on degree recognition.",
              subText: "These universities provide:",
              points: [
                "Self-paced learning materials",
                "Affordable fee structure",
                "Wide range of courses",
                "Accessibility for students across India",
              ],
              footerText:
                "Distance education is ideal for students who prefer flexible and independent learning while still earning a recognized degree. It enables learners to upgrade their qualifications and improve career opportunities without disrupting their current responsibilities.",
            },

            {
              title: "How to Check if a University is UGC Approved",
              text: "Before taking admission into any university, it is essential to verify whether the institution is approved by the University Grants Commission (UGC). This step ensures that the degree you pursue will be valid and recognized across India. Many students overlook this verification process and later face issues related to degree acceptance in jobs or higher education. By checking approval status through official sources and trusted platforms, you can avoid risks and make a well-informed decision about your academic future.",
              subText: "You can check this by:",
              points: [
                "Visiting the official UGC website",
                "Checking the university's official approval status",
                "Using trusted platforms like Radhya Education Academy",
              ],
              footerText:
                "Always ensure that the university is listed under UGC-approved institutions before taking admission. This simple step can protect you from fraudulent universities and help secure your career by ensuring your degree is valid and widely accepted.",
            },

            {
              title: "Benefits of Choosing UGC Approved Universities",
              text: "Choosing a UGC approved university offers several advantages that directly impact your academic journey and career growth. These universities follow standardized guidelines, ensuring quality education, structured curriculum, and recognized degrees. Whether you are pursuing an online or distance program, UGC approval guarantees that your qualification will be accepted by employers, government organizations, and higher education institutions. It also provides assurance that the university maintains proper infrastructure, faculty standards, and evaluation systems.",
              points: [
                "Valid and recognized degree",
                "Better career opportunities",
                "Eligibility for higher education",
                "Acceptance in government and private sectors",
                "Quality education and curriculum",
              ],
              footerText:
                "This ensures that your investment in education is safe, valuable, and future-proof. A degree from a UGC approved university not only enhances your credibility but also opens doors to better job prospects, career growth, and long-term professional success.",
            },
          ].map((sec, i) => (
            <section key={i}>
              <h2 className="text-2xl md:text-4xl text-center font-bold text-[#3C087E] mt-14 mb-4">
                {sec.title}
              </h2>
              <p className="text-sm md:text-base mt-4 text-justify">
                {sec.text}
              </p>
              <p className="text-sm md:text-base mt-1 text-justify">
                {sec.subText}
              </p>
              <ul className="list-disc px-5 mt-2">
                {sec.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
              <p className="text-sm md:text-base mt-4 text-justify">
                {sec.footerText}
              </p>
            </section>
          ))}
        </div>

        {/* Final */}
        <section>
  <h2 className="text-2xl md:text-4xl max-w-6xl mt-14 mx-auto text-center font-bold text-[#3C087E] mb-4">
    Choose the Right UGC Approved University for Your Career
  </h2>

  <p className="text-sm md:text-base text-black mt-4 text-justify max-w-5xl mx-auto">
    Choosing the right UGC approved university is a crucial decision that can significantly impact your academic journey and long-term career growth. With a wide range of universities offering online and distance education programs in India, it is important to carefully evaluate your options rather than making a quick decision. Factors such as UGC approval status, course curriculum, faculty quality, fee structure, flexibility, and placement support should all be considered before finalizing a university. A well-recognized and accredited institution ensures that your degree is valid, accepted, and valued across industries.
    <br /><br />
    In addition to academic credibility, you should also assess how well the program aligns with your personal goals, whether you are a working professional seeking career advancement or a student aiming for higher education opportunities. Comparing multiple universities, understanding their strengths, and reviewing student support services can help you make a more informed choice. Taking the time to research and select the right university will not only enhance your learning experience but also open doors to better career prospects and long-term professional success.
  </p>
</section>
      </section>

      {/* CTA */}
      <div className="flex justify-center ">
        <CounsellingModal>
          <button className="bg-[#EEA727] text-white px-15 py-3 rounded-xl text-base font-semibold shadow-md hover:scale-105">
            Talk to an Expert Counsellor
          </button>
        </CounsellingModal>
      </div>

      <FAQ faqs={faqs} />
      <ConnectToday />
    </>
  );
}
