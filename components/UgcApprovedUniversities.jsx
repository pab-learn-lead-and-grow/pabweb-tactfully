
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-4 flex flex-col col-span-2" >
          <p className="text-sm font-semibold text-[#3C087E]">
            Government Recognised University
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#3C087E] mb-2 leading-tight">
            UGC Approved Universities in India (Online & Distance Education 2026)
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-2 leading-relaxed text-justify max-w-3xl">
        Choosing a university that is approved by the University Grants Commission (UGC) is one of the most important steps before taking admission into any online or distance education program, as it ensures proper academic standards, quality education, and degree validity. This page provides a verified and updated list of UGC approved universities in India, helping you explore trusted options for online and distance education so that, whether you are planning to pursue an online MBA, BBA, MCA, or any other degree program, you can confidently choose a university that is recognized, reliable, and aligned with your career goals.
          </p>

          <p className="text-gray-600 text-base md:text-lg mb-2 leading-relaxed max-w-3xl">
            Explore verified institutions and make informed decisions with
            complete transparency.
          </p>

          {/* Feature Items */}
          <div className="flex flex-col gap-4">
            {features.map(({ label, icon: Icon }, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-sm md:text-base font-medium text-[#3C087E]"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full text-[#4D964F] shadow-md">
                  <Icon size={24} />
                </div>
                {label}
              </div>
            ))}
          </div>

          {/* IMAGE (Mobile Only) */}
          <div className="block lg:hidden order-4">
            <div className="relative w-full max-w-md mx-auto mt-6"
            >
              <Image
                src="/ugc-university.png"
                alt="Universities"
                width={500}
                height={500}
                className="rounded-3xl object-contain"
                priority
              />
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://deb.ugc.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 bg-[#EEA727] hover:scale-105 transition-all text-white px-6 py-3 w-fit rounded-lg font-semibold shadow-md"
            >
              View UGC Approved Universities
            </button>
          </a>

        </div>

        {/* RIGHT IMAGE (Desktop Only) */}
        <div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden lg:flex justify-center"
        >
          <div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-md"
          >
            <Image
              src="/ugc-university.png"
              alt="Universities"
              width={500}
              height={500}
              className="rounded-3xl object-contain"
              priority
            />
          </div>
        </div>

      </div>
        <div className="text-start max-w-5xl mx-auto justify-center mt-20">
            <h2 className="text-2xl md:text-4xl text-center leading-[120%] font-bold text-[#3C087E] mb-4">
           What is UGC and Why Approval is Important
        </h2>
              <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
The University Grants Commission (UGC) is a statutory body in India responsible for maintaining the standards of higher education. It regulates universities and ensures that they follow proper academic guidelines.
</p>

      <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
UGC approval is important because:
</p>
<ul className="list-disc px-5 text-start text-black mt-2">
<li>It validates the authenticity of the university</li>
<li>Ensures the degree is recognized across India</li>
<li>Makes you eligible for government jobs and higher education</li>
<li>Protects students from fake or unrecognized institutions</li>
 </ul>
 <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
 Without UGC approval, a degree may not hold value in the job market or academic sector.</p>
          </div>
      <div className="text-start max-w-5xl mx-auto justify-center mt-14">
            <h2 className="text-2xl md:text-4xl text-center leading-[120%] font-bold text-[#3C087E] mb-4">
           List of UGC Approved Universities in India
        </h2>
              <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
This page provides a curated list of universities that are approved by UGC and offer online and distance education programs.</p>

      <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
These universities are categorized based on:
</p>
<ul className="list-disc px-5 text-start text-black mt-2">
<li>Online universities</li>
<li>Distance learning universities</li>
<li>Government and private universities</li>
<li>NAAC accredited institutions</li>
 </ul>
 <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
 Each university listed here meets the required standards and offers recognized degree programs.</p>
          </div>
           <div className="text-start max-w-5xl mx-auto justify-center mt-14">
             <h2 className="text-2xl md:text-4xl text-center leading-[120%] font-bold text-[#3C087E] mb-4">
           UGC Approved Online Universities in India
        </h2>
              <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
  With the rise of digital learning, UGC has also approved several universities to offer fully online degree programs.
        </p>
              <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
UGC approved online universities provide:</p>

<ul className="list-disc px-5 text-start text-black mt-2">
<li>Online MBA, BBA, MCA, and other programs</li>
<li>Flexible learning schedules</li>
<li>Live and recorded classes</li>
<li>Digital learning platforms</li>
 </ul>
 <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
Choosing a UGC approved online university ensures that your degree is valid and accepted by employers.</p>
          </div>
           <div className="text-start max-w-5xl mx-auto justify-center mt-14">
            <h2 className="text-2xl md:text-4xl text-center leading-[120%] font-bold text-[#3C087E] mb-4">
          UGC Approved Distance Universities in India
        </h2>
              <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
Distance education is another popular mode of learning in India. UGC-approved distance universities offer programs that allow students to study at their own pace.
</p>

<p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
These universities provide:</p>

<ul className="list-disc px-5 text-start text-black mt-2">
<li>Self-paced learning materials</li>
<li>Affordable fee structure</li>
<li>Wide range of courses</li>
<li>Accessibility for students across India</li>
 </ul>
 <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
Distance education is ideal for students who prefer flexible and independent learning.</p>
          </div>
           <div className="text-start max-w-5xl mx-auto justify-center mt-14">
            <h2 className="text-2xl md:text-4xl text-center leading-[120%] font-bold text-[#3C087E] mb-4">
          How to Check if a University is UGC Approved
        </h2>
              <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
Before taking admission, it is important to verify whether a university is approved by UGC.</p>

<p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
You can check this by:</p>

<ul className="list-disc px-5 text-start text-black mt-2">
<li>Visiting the official UGC website</li>
<li>Checking the university’s official approval status</li>
<li>Using trusted platforms like Radhya Education Academy</li>
 </ul>
 <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
Always ensure that the university is listed under UGC-approved institutions to avoid risks.</p>
          </div>
            <div className="text-start max-w-5xl mx-auto justify-center mt-14">
            <h2 className="text-2xl md:text-4xl text-center leading-[120%] font-bold text-[#3C087E] mb-4">
          Benefits of Choosing UGC Approved Universities
        </h2>
              <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
Choosing a UGC approved university offers multiple benefits:</p>


<ul className="list-disc px-5 text-start text-black mt-2">
<li>Valid and recognized degree</li>
<li>Better career opportunities</li>
<li>Eligibility for higher education</li>
<li>Acceptance in government and private sectors</li>
<li>Quality education and curriculum</li>
 </ul>
 <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
This ensures that your investment in education is safe and valuable.</p>
          </div>
           <div className="text-start max-w-6xl mx-auto justify-center mt-14">
            <h2 className="text-2xl md:text-4xl text-center leading-[120%] font-bold text-[#3C087E] mb-4">
          Choose the Right UGC Approved University for Your Career
        </h2>
              <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
Selecting the right university depends on your course, budget, and career goals. It is important to compare universities based on approvals, courses, fees, and placement support.</p>
 <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
Taking the time to evaluate your options will help you choose a university that aligns with your long-term career plans.</p>
          </div>
    </section>
     {/* VIEW MORE */}
          <div className="flex justify-center">
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