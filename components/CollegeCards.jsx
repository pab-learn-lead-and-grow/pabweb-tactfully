import { supabase } from "@/lib/supabaseClient";
import CollegeCardsClient from "./CollegeCardsClient";
import ConnectToday from "./NmimsSection/ConnectToday";
import FAQ from "./NmimsSection/FAQ";
import Link from "next/link";

export const revalidate = 3600; // Revalidate every hour

export default async function CollegeCards() {

  const faqs = [
  {
    q: "Which are the top online universities in India in 2026?",
    a: "The top online universities in India in 2026 are those that are approved by UGC, have strong NAAC accreditation, and offer industry-relevant programs. These universities provide online MBA, BBA, MCA, and other degree programs with updated curriculum, flexible learning, and placement support. The best university for you depends on your course, budget, and career goals, so it is always recommended to compare multiple universities before making a decision.",
  },
  {
    q: "How to choose the best online university in India?",
    a: "To choose the best online university in India, you should evaluate multiple factors such as UGC approval, NAAC accreditation, course curriculum, fees, placement support, and student reviews. It is also important to check whether the university offers industry-relevant specializations and strong academic support. Comparing universities based on these parameters helps you make an informed and career-focused decision.",
  },
  {
    q: "Are online universities in India approved by UGC valid?",
    a: "Yes, online universities approved by UGC are completely valid in India. Degrees from UGC-recognized universities are accepted for jobs, higher education, and government exams. However, it is important to verify the university’s approval status before taking admission to ensure that your degree holds proper value.",
  },
  {
    q: "Which is better: online degree or distance education in India?",
    a: "Both online degrees and distance education are valid, but online degrees are generally considered better because they offer live classes, interactive learning, and better student support. Distance education is more self-paced, while online programs provide a more structured and engaging learning experience.",
  },
  {
    q: "Which online university is best for MBA in India?",
    a: "The best online university for MBA in India depends on factors like specialization, fees, placement support, and accreditation. Top universities offer MBA programs in fields like Marketing, Finance, HR, and Business Analytics with flexible learning options. It is recommended to compare universities based on ROI, curriculum, and career outcomes before selecting one.",
  },
  {
    q: "What is the eligibility for online MBA and BBA in India?",
    a: "For an online MBA, candidates generally need a bachelor’s degree from a recognized university. Some universities may also require work experience. For online BBA, students must have completed 12th grade from a recognized board. Eligibility criteria may vary slightly depending on the university.",
  },
  {
    q: "Do online universities provide placement support?",
    a: "Yes, many top online universities in India provide placement support, including resume building, interview preparation, and job assistance. However, the level of placement support varies from one university to another, so it is important to check this before enrolling.",
  },
  {
    q: "Is an online degree worth it in 2026?",
    a: "Yes, an online degree is highly valuable in 2026, especially when pursued from a recognized university. It allows students and working professionals to upgrade their qualifications, improve career opportunities, and gain relevant skills without leaving their jobs.",
  },
  {
    q: "What are the fees for online universities in India?",
    a: "The fees for online universities in India vary depending on the course and university. Online MBA programs typically range from affordable to premium pricing based on university reputation and features. Comparing fees along with placement support and ROI is important before making a decision.",
  },
  {
    q: "How can I compare online universities in India easily?",
    a: "You can compare online universities based on approvals, rankings, courses, fees, and placements using trusted platforms like Radhya Education Academy. This helps you evaluate multiple options in one place and choose the best university for your needs.",
  },
];

  const { data: universities } = await supabase
    .from("universities")
    .select("*")
    .order("rating", { ascending: false });

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12 mt-10 ">

        <h1 className="text-3xl md:text-5xl max-w-4xl md:px-10 mx-auto leading-[120%] font-bold text-center text-[#3C087E] mb-4">
         Top Online Universities in India (UGC Approved & Ranked 2026)
        </h1>

        <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
       Choosing the right university is the foundation of a successful online education journey. With the rapid growth of digital learning in India, thousands of students and working professionals are now exploring flexible degree options. However, with so many universities offering online programs, it often becomes confusing to identify which ones are truly recognized, reliable, and worth your investment.</p>

        <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
       At Radhya Education Academy, we simplify this process by bringing you a carefully curated list of the top online universities in India. These universities are selected after evaluating key factors such as UGC approval, NAAC accreditation, NIRF rankings, course quality, faculty expertise, fees, and placement support. Our goal is to ensure that you get access to trusted and high-quality education options without wasting time on unnecessary research.
 </p>

       <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
      Whether you are looking for an online MBA, BBA, MCA, or other degree programs, this page helps you explore and compare the best universities in one place. You can quickly review important details, understand the strengths of each university, and shortlist the right option based on your career goals, budget, and learning preferences.
 </p>

        <CollegeCardsClient universities={universities || []} />

        <div className="mt-20">
          <h2 className="text-2xl md:text-4xl  mx-auto leading-[120%] font-bold text-center text-[#3C087E] mb-4">
         Best Online Universities in India for MBA, BBA & More
        </h2>
           <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
     The demand for online education in India has increased significantly, especially among working professionals and students looking for flexible learning options. Today, some of the best online universities in India offer a wide range of programs including MBA, BBA, MCA, BA, and BCom.
     </p>

      <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
     Online MBA remains one of the most popular choices, as it helps professionals upgrade their skills without leaving their jobs. Similarly, undergraduate programs like BBA and BCom are gaining popularity among students who want to build a strong foundation in business and management.
</p>

      <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
    Top universities now offer industry-relevant curriculum, live classes, recorded lectures, and practical exposure through projects and case studies. This ensures that students not only earn a degree but also gain real-world skills.
 </p>

      </div>
        <div className="mt-20">
          <h2 className="text-2xl md:text-4xl  mx-auto leading-[120%] font-bold text-center text-[#3C087E] mb-4">
         Compare UGC Approved Online Universities
        </h2>
           <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
     One of the biggest concerns for students is whether their degree will be valid and recognized. This is where UGC approval becomes extremely important.
     </p>

      <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
     All the universities listed on this page are either approved by UGC or comply with government guidelines for online education. Many of them are also accredited by NAAC and recognized by AICTE, ensuring credibility and quality.

</p>

      <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
   When comparing universities, students should look beyond just the brand name and consider multiple factors such as:
 </p>
 <ul className="list-disc px-5 md:px-16 text-black mt-2">
<li>
  Accreditation and approvals
</li>
<li>Course structure and specialization</li>
<li>Faculty quality</li>
<li>Student support services</li>
<li>Placement assistance</li>
 </ul>
  <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
  By comparing these factors, you can choose a university that aligns with your career goals.</p>

      </div>
       <div className="mt-20">
          <h2 className="text-2xl md:text-4xl  mx-auto leading-[120%] font-bold text-center text-[#3C087E] mb-4">
       Why Choose Online Degree in India
        </h2>
           <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
   Online degrees have become a preferred option for many students due to their flexibility and affordability. Unlike traditional education, online learning allows you to study from anywhere and at your own pace.
     </p>

      <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
    For working professionals, this is a great opportunity to upgrade their qualifications without taking a career break. Students can also access high-quality education from top universities without relocating to another city
</p>

  <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
  Some key benefits include:</p>
 <ul className="list-disc px-5 md:px-16 text-black mt-2">
<li>Flexible learning schedule</li>
<li>Lower fees compared to regular programs</li>
<li>Access to digital learning resources</li>
<li>Opportunity to learn while working</li>
 </ul>
  <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
  With advancements in technology, online education now offers an experience similar to classroom learning, including live sessions, discussions, and doubt-solving.</p>

      </div>
      <div className="mt-20">
          <h2 className="text-2xl md:text-4xl  mx-auto leading-[120%] font-bold text-center text-[#3C087E] mb-4">
      How to Select the Best Online University
        </h2>
         <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
  Choosing the right university can be overwhelming, but focusing on the right criteria can simplify the process.
  </p>
           <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
  First, always check whether the university is UGC approved. This ensures your degree will be valid for jobs and further studies. Next, review the course curriculum to ensure it matches industry requirements.
  </p>

      <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
    You should also evaluate the return on investment by comparing fees with placement opportunities. Universities that provide career support, internships, and placement assistance offer better long-term value.
</p>

  <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
 Additionally, consider student reviews, alumni success stories, and faculty expertise. These factors give you a clear idea of the university's credibility and performance.</p>
    <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
Overall, before choosing a university, consider:</p>
 <ul className="list-disc px-5 md:px-16 text-black mt-2">
<li>Flexible learning schedule</li>
<li>Lower fees compared to regular programs</li>
<li>Access to digital learning resources</li>
<li>Opportunity to learn while working</li>
 </ul>


      </div>
       <div className="mt-20">
          <h2 className="text-2xl md:text-4xl  mx-auto leading-[120%] font-bold text-center text-[#3C087E] mb-4">
          Explore Complete List of Online Universities
        </h2>
           <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
    While this page provides a quick overview of the top universities, it is always recommended to explore the complete list before making a decision.
 </p>

      <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
    By visiting the detailed list page, you can compare universities more effectively based on fees, courses, eligibility, and placement support. This helps you shortlist the best options and make an informed decision.
</p>

      </div>
       {/* VIEW MORE */}
      <div className="flex justify-center mt-12">
        <Link href="/online-universities-directory-india/">
          <button className="bg-[#EEA727] text-white px-15 py-3 rounded-xl text-base font-semibold shadow-md hover:scale-105">
            View Online Universities List
          </button>
        </Link>
      </div>
</div>
     <FAQ faqs={faqs} />
      <ConnectToday />
    </>
  );
}