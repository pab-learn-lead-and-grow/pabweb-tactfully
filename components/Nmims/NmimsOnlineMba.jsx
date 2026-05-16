import MotionWrapper from "../Radhya/MotionWrapper";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Download,
  GraduationCap,
  Laptop,
  Users,
} from "lucide-react";
import CounsellingModal from "../Radhya/CounsellingModal";
import ContactNmims from "./ContactNmims";
import AnimatedCounter from "@/components/NmimsSection/AnimatedCounter";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";

export default function page() {
  const stats = [
    { value: 25, suffix: "%", label: "Average Salary Growth" },
    { value: 82000, suffix: "+", label: "Strong Global Alumni Network" },
    { value: 500, suffix: "+", label: "Hiring Partners" },
  ];

  const items = [
    {
      title: "NMIMS Online MBA in Marketing",
      link: "https://radhyaeducationacademy.com/blogs/nmims-online-mba-marketing-2026-guide/",
      desc: "The NMIMS Online MBA in Marketing focuses on building expertise in branding, digital marketing, consumer behaviour, and market research. This online MBA in marketing equips students with the latest marketing strategies required for business growth in a digital-first world.",
      desc2: "With an industry-oriented curriculum, the NMIMS Online MBA Marketing program prepares learners for roles in brand management, digital marketing, sales, and advertising. It is one of the most preferred online MBA specializations for students aiming to build a career in marketing and business development.",
      img: "/specializations/marketing.png",
      alt: "NMIMS Online MBA Marketing specialization marketing branding course",
    },
    {
      title: "NMIMS Online MBA in Finance",
      link: "https://radhyaeducationacademy.com/blogs/nmims-online-mba-financial-management-2026/",
      desc: "The NMIMS Online MBA in Finance is designed to provide in-depth knowledge of financial management, investment strategies, and risk analysis. This online MBA in finance helps students understand financial markets, corporate finance, and banking operations.",
      desc2: "The NMIMS Online MBA Finance program opens career opportunities in roles such as financial analyst, investment banker, and portfolio manager. It is among the top choices for those looking for online MBA courses in finance in India with strong career growth potential.",
      img: "/specializations/finance.png",
      alt: "NMIMS Online MBA Finance specialization course",
    },
    {
      title: "NMIMS Online MBA in Human Resource Management",
      link: "https://radhyaeducationacademy.com/blogs/nmims-online-mba-hr-2026/",
      desc: "The NMIMS Online MBA in Human Resource Management focuses on talent acquisition, employee engagement, performance management, and organizational behaviour. This online MBA in HR prepares students for strategic HR roles across industries.",
      desc2: "The NMIMS Online MBA HR program is ideal for professionals looking to grow into leadership positions in HR. It is one of the most popular online MBA courses for working professionals in the HR domain.",
      img: "/specializations/hr.png",
      alt: "NMIMS Online MBA Human Resource Management HR specialization course",
    },
    {
      title: "NMIMS Online MBA in Business Management",
      link: "https://radhyaeducationacademy.com/business-analytics-vs-business-management-2026/",
      desc: "The NMIMS Online MBA in Business Management is designed to develop leadership, strategic thinking, and managerial skills. This online MBA in business management helps students understand business operations, decision-making, and organizational growth.",
      desc2: "The NMIMS Online MBA Business Management program is suitable for professionals aiming for leadership and managerial roles across industries. It offers strong career opportunities in business strategy, consulting, and management roles.",
      img: "/specializations/business.png",
      alt: "NMIMS Online MBA Business Management specialization course",
    },
    {
      title: "NMIMS Online MBA in Operations and Data Science",
      link: "https://radhyaeducationacademy.com/blogs/nmims-online-mba-operations-data-science-2026/",
      desc: "The NMIMS Online MBA in Operations & Data Science combines operational efficiency with advanced data-driven decision-making. This online MBA in operations and data science covers supply chain management, logistics, analytics, and process optimization.",
      desc2: "The NMIMS Online MBA Operations & Data Science program is ideal for learners who want to build careers in operations, logistics, analytics, and process innovation. It is a highly in-demand online MBA specialization in India.",
      img: "/specializations/data.png",
      alt: "NMIMS Online MBA Operations and Data Science specialization course",
    },
    {
      title: "NMIMS Online MBA in Business Analytics",
      link: "https://radhyaeducationacademy.com/business-analytics-vs-business-management-2026/",
      desc: "The NMIMS Online MBA in Business Analytics focuses on data interpretation, business intelligence, and analytical decision-making. This online MBA in business analytics helps students understand how to use data for strategic business growth.",
      desc2: "With increasing demand for analytics professionals, the NMIMS Online MBA Business Analytics program is a trending specialization. It prepares learners for roles in data analysis, business intelligence, and analytics consulting.",
      img: "/specializations/analytics.png",
      alt: "NMIMS Online MBA Business Analytics specialization course",
    },
    {
      title: "NMIMS Online MBA in Information Technology Management",
      link: "https://radhyaeducationacademy.com/blogs/nmims-online-mba-it-2026-fees-syllabus-career-roi/",
      desc: "The NMIMS Online MBA in IT Management is designed for professionals who want to combine business management with technology. This online MBA in IT management covers IT strategy, project management, and digital transformation.",
      desc2: "The NMIMS Online MBA IT Management program is ideal for those aiming for leadership roles in IT and technology-driven organizations. It is a valuable specialization for careers in IT consulting, project management, and digital business.",
      img: "/specializations/software.png",
      alt: "NMIMS Online MBA IT Management specialization course",
    },
  ];

 const faqs = [
  {
    q: "What is the eligibility for NMIMS Online MBA 2026?",
    a: "To apply for the NMIMS Online MBA, candidates must have a bachelor’s degree from a recognised university with a minimum of 50% marks (45% for reserved categories). The program is open to both fresh graduates and working professionals seeking a flexible online MBA degree in India.",
  },
  {
    q: "What are the NMIMS Online MBA fees in 2026?",
    a: "The total NMIMS Online MBA fees range between ₹1,96,000 to ₹2,00,000. Students can pay ₹1,05,000 annually or ₹55,000 per semester. A one-time admission fee of ₹1,200 and an examination fee of ₹800 per subject may also be applicable.",
  },
  {
    q: "Is there any entrance exam for NMIMS Online MBA admission?",
    a: "No, there is no entrance exam required for the NMIMS Online MBA admission. Candidates are selected based on their academic qualifications, making it a convenient option for those looking for direct admission in online MBA courses in India.",
  },
  {
    q: "What is the last date to apply for NMIMS Online MBA 2026?",
    a: "For the July 2026 session, candidates can apply without late fees until 10th August 2026. With a late fee of ₹500, applications are accepted until 31st August 2026, and with ₹1000 late fees, the final last date of admission is 16th September 2026.",
  },
  {
    q: "Are EMI options available for NMIMS Online MBA fees?",
    a: "Yes, NMIMS Online MBA fees EMI options are available. The university offers flexible payment plans, including semester-wise and annual payments, along with loan and no-cost EMI facilities for students and working professionals.",
  },
  {
    q: "Is NMIMS Online MBA valid and recognised?",
    a: "Yes, the NMIMS Online MBA is approved by UGC and AICTE and offered through NMIMS CDOE, which holds NAAC A++ accreditation. It is widely recognised for its quality education and is considered a valid online MBA degree in India.",
  },
  {
    q: "Does NMIMS Online MBA provide placements?",
    a: "The NMIMS Online MBA placements support includes career services such as resume building, interview preparation, and job assistance. While placements depend on individual skills and experience, many students secure roles in top companies across industries.",
  },
  {
    q: "Is NMIMS Online MBA good for working professionals?",
    a: "Yes, the NMIMS Online MBA for working professionals is designed with flexible learning options, including live and recorded classes. It allows professionals to upgrade their skills and advance their careers without leaving their jobs.",
  },
];

  const feesCards = [
    {
      title: "Annual Payment",
      duration: "(2 Years)",
      program: "Online MBA",
      amount: "₹1,05,000",
      note: "Per Year",
    },
    {
      title: "Semester Wise",
      duration: "(4 Semesters)",
      program: "Online MBA",
      amount: "₹55,000",
      note: "Per Semester",
    },
    {
      title: "One Time Payment",
      duration: "(total cost)",
      program: "Online MBA",
      amount: "₹1,96,000",
      note: "full payment",
    },
  ];

  return (
    <main className="flex flex-col items-center w-full bg-white overflow-hidden">
      <section className="relative min-h-[50vh] w-full ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/nmims/nmimsUniv.png"
            alt="NMIMS Online MBA 2026 banner admission fees placements program overview"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        {/* LOGO - move to left screen edge, keep same height */}
        <div className="relative z-10 w-full mt-20">
          <MotionWrapper
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex"
          >
            <div className="bg-white rounded-r-2xl shadow-md h-[60px] sm:h-[80px] -mb-5 flex items-center px-3 sm:px-4">
              <Image
                src="/nmims.png"
                alt="NMIMS CDOE official logo Centre for Distance and Online Education NMIMS"
                width={220}
                height={100}
                className="object-contain w-[140px] sm:w-[180px] lg:w-[200px]"
              />
            </div>
          </MotionWrapper>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* TWO COLUMN GRID STARTS HERE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* LEFT DIV */}
            <div>
              <MotionWrapper
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-white text-sm md:text-base italic font-light"
              >
                Online Master of Business Administration
              </MotionWrapper>

              <MotionWrapper
                as="h1"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-white text-[28px] md:text-5xl font-bold mt-2 leading-tight"
              >
                NMIMS Online MBA :
                Eligibility, Admission, Fees & Placements 2026
              </MotionWrapper>

              <MotionWrapper
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-200 text-sm md:text-base leading-relaxed mt-2 max-w-2xl"
              >
                NMIMS CDOE is one of India's leading management universities, recognised for academic excellence, flexible online learning, and industry-oriented education. The NMIMS Online MBA is a 24-month postgraduate management programme designed for working professionals, graduates, and entrepreneurs seeking career-focused online education. With semester fees starting at ₹55,000, the Online MBA NMIMS programme combines flexibility, placement support, and industry-relevant learning for modern professionals.
                 </MotionWrapper>

              <MotionWrapper
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <CounsellingModal>
                                  <button className="flex items-center gap-2 bg-[#EEA727] font-semibold text-[#3C087E] px-5 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                                    Download Brochure
                                    <Download className="w-5 h-5" />
                                  </button>
                                </CounsellingModal>
              </MotionWrapper>
            </div>

            {/* RIGHT DIV */}
            <div className="w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <ContactNmims />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl bg-white py-10 px-4 mt-10 lg:mt-15 lg:px-15">
        {/* ======= ABOUT NMIMS SECTION ======= */}
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-10 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
              About NMIMS Online MBA for Working Professionals
            </h2>

            <p className="text-black leading-relaxed text-sm sm:text-base mb-10">
             SVKM’s Narsee Monjee Institute of Management Studies (NMIMS), established in 1981 and granted Deemed-to-be-University status by the University Grants Commission (UGC) in 2003, has emerged as one of the most recognised private universities in India. Through
             {" "} <Link
  href="https://radhyaeducationacademy.com/nmims/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#3C087E] font-bold hover:underline"
>
 NMIMS CDOE (Centre for Distance and Online Education)
</Link>{" "} , the university offers industry-oriented NMIMS Online MBA programme designed for flexible learning and career advancement.
             <br />
              <br />
              The NMIMS Online MBA is a 2-year postgraduate management programme specially designed for working professionals, entrepreneurs, and graduates seeking career growth through online education. Students can choose from industry-relevant specialisations including Marketing Management, Business Management, Finance Management, Human Resource Management, IT Management, Business Analytics, and Operations & Data Science Management. The programme combines live interactive sessions, recorded lectures, case-based learning, and practical business exposure to create a modern online learning experience. <b>Admissions for the July 2026 batch are currently open</b>, with NMIMS Online MBA fees starting at ₹55,000 per semester.
              </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-full flex md:justify-end">
            <div className="max-w-7xl overflow-hidden  relative w-full h-[250px] md:h-full">
              <Image
                src="/nmims/aboutNmims.png"
                alt="About NMIMS university online MBA institute India NAAC accredited NMIMS CDOE"
                fill
                className="rounded-2xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl text-left px-4 mt-10 lg:mt-15 mx-auto">
        <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
          NMIMS Online MBA Accreditations & Recognitions
        </h2>
        <p className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
          NMIMS Online MBA is recognised under <b>Category-I by UGC and AICTE</b> and ranked among the top universities in India under the NIRF 2024 framework. {" "} <Link
  href="https://online.nmims.edu/about"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#3C087E] font-bold hover:underline"
>
 NMIMS CDOE (Centre for Distance and Online Education)
</Link>{" "}  has secured an {" "} <Link
  href="https://online.nmims.edu/about/awards"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#3C087E] font-bold hover:underline"
>
 NAAC A++ accreditation
</Link>{" "} with an impressive score of 3.6 for the fourth consecutive cycle, along with a prestigious 5-star rating since its inception, highlighting its consistent excellence in online education and flexible management learning. The university is also regularly featured among the top 10 business schools in India, further strengthening its credibility. Over the years, NMIMS Online MBA has received multiple recognitions, including the Golden Peacock Award (2007), the National Award for Excellence in Education (2021), and the Education Innovation Award by Entrepreneur India (2022). Positive NMIMS Online MBA reviews from students and working professionals further reinforce its reputation for quality learning and strong career outcomes.
          <br />
          <br />
          The <b>2-year NMIMS Online MBA</b> from NMIMS CDOE is designed for professionals seeking flexible management education without affecting their work commitments. As a pioneer in distance and online education, NMIMS has been offering accessible learning solutions since the mid-1990s and achieved <b>Deemed-to-be-University</b> status in 2003. The programme provides live classes, recorded sessions, digital learning resources, and an industry-oriented curriculum through an advanced online platform. With multiple specialisations and a learner-centric approach, NMIMS Online MBA continues to be a preferred choice for students and professionals across cities and rural areas looking for a recognised and career-focused online MBA in India.
          </p>

        {/* BLUE BAR */}
        <MotionWrapper
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#3C087E]/10 rounded-tr-full rounded-tl-2xl rounded-br-2xl rounded-bl-full py-4 sm:py-6 md:py-10 mt-10 px-8 sm:px-10 md:px-16"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 text-center text-[#3C087E]">
            {stats.map((stat, idx) => (
              <MotionWrapper
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <p className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>

                <p className="text-[8px] md:text-[16px] xl:text-[20px] font-bold opacity-90 leading-tight">
                  {stat.label}
                </p>
              </MotionWrapper>
            ))}
          </div>
        </MotionWrapper>
      </section>
      <section className="max-w-7xl px-4 md:px-10 lg:px-20 py-10 mt-10 lg:mt-15 text-center">
        {/* TITLE */}
         <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
         NMIMS Online MBA Admission 2026
        </h2>
        <p className="text-sm sm:text-base font-regular leading-relaxed text-justify text-gray-900">
        Admissions for the NMIMS Online MBA at NMIMS CDOE (Centre for Distance and Online Education) are conducted twice a year for the January and July academic sessions. <strong >For the July 2026 session, registrations started on 19th March 2026 </strong>. Candidates can complete their NMIMS Online MBA admission without late fees until 10th August 2026. 
        <br /><br />
       After this, late fee of <strong>₹500 is applicable from 11th August to 31st August 2026</strong>, followed by <strong>₹1000 from 1st September to 16th September 2026</strong>, which is the final admission date. As seats are limited in this {" "} <Link
  href="https://radhyaeducationacademy.com/programs/online-mba/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#3C087E] font-bold hover:underline"
>
 online MBA program
</Link>{" "} for working professionals, applicants are advised to apply early.
        <br /><br />
          The admission process for the Online MBA NMIMS program is completely online and based on academic qualifications. There is <strong>no entrance exam required</strong>, making it accessible for students and professionals looking for flexible online MBA courses in India. Candidates can apply through the official NMIMS admission portal and choose from flexible NMIMS Online MBA fees payment options.
          <br /><br />
          Re-registration for existing students begins on 19th March 2026 and can be completed without late fees until 31st July 2026. A late fee of ₹1000 is applicable from 1st August to 10th September 2026, with closure on 10th September 2026.
          </p>

        {/* TABLE WRAPPER */}
        <div className="w-full mt-10">
          <h3 className="text-2xl md:text-3xl font-bold text-[#270652] mb-4">
          Important Dates for July Session 2026
        </h3>
          <table className="w-full border-collapse table-fixed">
            {/* HEADER */}
            <thead>
              <tr className="bg-[#F6A410] text-white text-[12px] md:text-[16px]">
                <th className="py-3 rounded-l-lg">PARTICULARS</th>
                <th className="py-3 rounded-r-lg">DATES</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="divide-y divide-[#D6D6D6] border-b border-gray-300">
              {[
                { p: "Registration Starts", d: "19th March, 2026" },
                {
                  p: "Admission Without Late Fees",
                  d: "19th March, 2026 to 10th August, 2026",
                },
                {
                  p: "Admission With Late Fees Of Rs. 500/-",
                  d: "11th August, 2026 to 31st August, 2026",
                },
                {
                  p: "Admission With Late Fees Of Rs. 1000/-",
                  d: "1st September, 2026 to 16th September, 2026",
                },
                { p: "Last Date of Admission", d: "16th September, 2026" },
                { p: "Re-Registration Starts", d: "	19th March, 2026" },
                {
                  p: "Re-Registration Without Late Fees",
                  d: "19th March, 2026 to 31st July, 2026",
                },
                {
                  p: "Re-Registration With Late Fees Of Rs. 1000/-",
                  d: "1st August, 2026 to 10th September, 20266",
                },
                { p: "Closure of Re-Registration", d: "10th September, 2026" },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="text-[10px] text-black sm:text-[12px] md:text-[16px]"
                >
                  <td className="py-3 px-2  wrap-break-words">{row.p}</td>
                  <td className="py-3 px-2 wrap-break-words">{row.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="max-w-7xl px-4 md:px-10 lg:px-20 py-10 mt-10 lg:mt-15">
        <div className="max-w-7xl mx-auto">
          {/* Title animation */}
          <MotionWrapper
            as="h2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-[32px] md:text-4xl font-bold text-[#270652]"
          >
           NMIMS Online MBA Eligibility Criteria 2026
          </MotionWrapper>

          {/* Card container */}
          <MotionWrapper
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row max-w-7xl items-center gap-20"
          >
            {/* Left text */}
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-black text-[20px] md:text-3xl font-medium mt-10 leading-tight md:w-3/5"
            >
             The eligibility criteria for the NMIMS Online MBA programme require a Bachelor’s Degree (10+2+3) in any discipline from a recognised University or an equivalent qualification recognised by the Association of Indian Universities (AIU) with minimum 50% marks at Graduation Level. (45% for SC/ST/OBC/PwD).
               </MotionWrapper>

            {/* Right image animation */}
            <MotionWrapper
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-[45%] w-full flex justify-end"
            >
              <Image
                src="/nmims/nmimsEligibility.png"
                alt="NMIMS Online MBA eligibility criteria graduation requirements admission qualification"
                width={520}
                height={350}
                className="w-full max-w-105  h-auto rounded-xl object-contain"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </MotionWrapper>
          </MotionWrapper>
        </div>
      </section>


      <section className="max-w-7xl px-4 md:px-10 lg:px-20 py-10 mt-10 lg:mt-15 text-center">
        <div className="w-full flex flex-col items-center text-center">
          {/* HEADING */}
          <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
            NMIMS Online MBA Fees Structure 2026
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-900 text-sm md:text-base leading-relaxed text-justify mt-4 max-w-6xl">
           The NMIMS Online MBA fees for 2026 are structured to provide flexibility for students and working professionals. The total fee for the 2-year NMIMS Online MBA at NMIMS CDOE program is approximately <b>₹1,96,000 to ₹2,00,000</b>, making it a competitive option among online MBA courses in India.
           <br/> <br/>
           The fee for the online MBA at NMIMS CDOE is <b>₹1,05,000 annually</b> and <b>₹55,000 semester-wise</b>, allowing candidates to choose a payment option based on their convenience. Additionally, a <b>one-time admission fee of ₹1,200</b> is applicable at the time of registration.
           <br /> <br />
            Apart from the program fee, students may need to pay an <b>examination fee of ₹800 per subject</b> as per university guidelines. For learners considering advanced options, the <b>NMIMS Executive MBA fee is approximately ₹4,00,000</b>. With flexible payment options, EMI facilities, & loan support, the NMIMS Online MBA cost remains accessible for those seeking a recognised online MBA degree for working professionals.</p>


            <h3 className="text-2xl md:text-3xl font-bold text-[#270652] mt-10">
            Total Program Fee of NMIMS Online MBA 2026
          </h3>

          {/* SUBTEXT */}
          <p className="text-gray-900 text-sm md:text-base leading-relaxed text-justify mt-2 max-w-6xl">
            The total NMIMS Online MBA fees structure includes tuition fees along with minimal additional charges. The overall program cost is approximately <b>₹1,96,000 to ₹2,00,000 </b> for the complete 2-year duration.
          </p>
          {/* CARDS */}
          <div className="max-w-4xl w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 place-items-center">
            {feesCards.map((card, idx) => (
              <MotionWrapper
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-linear-to-b from-[#270652] to-[#3C087E]/50 rounded-3xl shadow-xl p-8 w-full max-w-sm h-70 flex flex-col justify-between text-center"
              >
                <div>
                  <p className="font-semibold text-white text-lg">
                    {card.title}
                  </p>

                  <p className="text-sm text-gray-200 mt-1">{card.duration}</p>

                  <p className="text-[#D7C6FF] font-bold text-[26px] mt-5">
                    {card.program}
                  </p>

                  <div className="w-14 h-[2px] bg-white mx-auto mt-4 mb-4" />
                </div>

                <div>
                  <p className="text-4xl font-bold text-white">{card.amount}</p>

                  <p className="text-xs text-gray-200 mt-2">{card.note}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-[#270652] mt-10">
            NMIMS Online MBA Semester-Wise Fee Breakdown
          </h3>
          <p className="text-gray-900 text-sm md:text-base leading-relaxed text-justify mt-4 max-w-6xl">
            The NMIMS Online MBA semester-wise fees allow students to pay in smaller instalments of <b>₹ 55,000/- across 4 semesters</b>. This structure is ideal for working professionals managing finances alongside their careers.
            <br /> <br />
            This flexible online MBA fees structure helps students plan their education without financial burden.
          </p>

           <h3 className="text-2xl md:text-3xl font-bold text-[#270652] mt-10">
            NMIMS Online MBA Fee EMI Options
          </h3>
          <p className="text-gray-900 text-sm md:text-base leading-relaxed text-justify mt-4 max-w-6xl">
           To make the NMIMS Online MBA program more accessible, the university offers EMI and loan facilities. Students can choose annual or semester-wise payment options, along with financing support through partner institutions.
           </p>

            <div className="bg-[#3C087E] w-full max-w-5xl mt-10 mb-4">
       <h3 className="text-2xl md:text-3xl  font-bold text-white py-4">
           NMIMS CDOE Online MBA Fee Structure 2025 - 26
          </h3>
      </div>

           

            {/* TABLE WRAPPER */}
      <div className="overflow-x-auto">
         <table className="w-full max-w-5xl border border-gray-200 border-collapse table-fixed">

          <tbody>
            {[
              ["Total Program Fee", "₹ 1,96,000/- (One-time Payment)"],
              ["Annual Fee", "₹ 1,05,000/- (Two-Installments)"],
              ["Semester-wise Fee", "₹ 55,000/- (Four Installments)"],
              ["EMI Options", "3, 6, 9, 12 months option with loan facility"],
              ["Application Processing Fees", "₹ 1200/- (Non-refundable)"],
              ["Registration Fees", "₹ 10,000/- (Adjusted later)"],
              ["Examination Fees", "₹ 800/ subject"],
              ["Project Fees", "₹ 800/ attempt"],
            ].map((row) => (
              <tr
                key={row[0]}
                className="border-b border-gray-200 odd:bg-[#F5F5F5] even:bg-white"
              >
                <td className="w-[42%] py-4 px-4 text-sm md:text-base font-semibold text-black align-top leading-relaxed">
                  {row[0]}
                </td>

                <td className="py-4 px-4 text-sm md:text-base text-black leading-relaxed">
                  {row[1]}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

       <p className="text-gray-900 text-sm md:text-base leading-relaxed text-justify mt-4 max-w-6xl">
       <b> NOTE : </b> This flexible structure makes it one of the most preferred online MBA programs for working professionals in India.
       </p>

       <h3 className="text-2xl md:text-3xl font-bold text-[#270652] mt-10">
          NMIMS Online MBA Specialization-wise Fee Details
          </h3>
            <p className="text-gray-900 text-sm md:text-base leading-relaxed text-justify mt-4 max-w-6xl">
              The NMIMS Online MBA specializations are offered under a uniform fee structure, meaning the cost remains the same across all major domains.
            </p>

              <div className="bg-[#3C087E] w-full max-w-5xl mt-10 mb-4">
       <h3 className="text-2xl md:text-3xl py-4 font-bold text-white ">
           NMIMS Online MBA Specializations Fee Details
          </h3>
      </div>

       {/* TABLE WRAPPER */}
      <div className="overflow-x-auto">
        <table className="w-full max-w-5xl border border-gray-200 border-collapse table-fixed">

          {/* TABLE HEAD */}
          <thead>
            <tr className="bg-[#ECECEC] text-black">
              <th className="w-[50%] py-4 px-3 text-left text-xs md:text-base font-semibold">
                Specialization
              </th>

              <th className="w-[25%] py-4 px-3 text-center text-xs md:text-base font-semibold">
                Annual Fee
              </th>

              <th className="w-[25%] py-4 px-3 text-center text-xs md:text-base font-semibold">
                Semester Fee
              </th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {[
              [
                "NMIMS Online MBA in Marketing",
                "1,05,000",
                "55,000",
              ],
              [
                "NMIMS Online MBA in Finance",
                "1,05,000",
                "55,000",
              ],
              [
                "NMIMS Online MBA in Human Resource",
                "1,05,000",
                "55,000",
              ],
              [
                "NMIMS Online MBA in Operations & Data Science",
                "1,05,000",
                "55,000",
              ],
              [
                "NMIMS Online MBA in Business Management",
                "1,05,000",
                "55,000",
              ],
              [
                "NMIMS Online MBA in Business Analytics",
                "1,05,000",
                "55,000",
              ],
              [
                "NMIMS Online MBA in IT Management",
                "1,05,000",
                "55,000",
              ],
            ].map((row) => (
              <tr
                key={row[0]}
                className="border-b border-gray-200 odd:bg-[#F5F5F5] even:bg-white"
              >
                <td className="py-4 px-3 text-left text-sm md:text-base text-black leading-relaxed">
                  {row[0]}
                </td>

                <td className="py-4 px-3 text-sm text-center md:text-base text-black whitespace-nowrap">
                  ₹ {row[1]}
                </td>

                <td className="py-4 px-3 text-sm md:text-base text-center text-black whitespace-nowrap">
                  ₹ {row[2]}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

       <p className="text-gray-900 text-sm md:text-base leading-relaxed text-start mt-4 max-w-6xl">
       <b> NOTE : </b> This ensures that students can choose their preferred domain without worrying about variations in NMIMS MBA fees.
       </p>


          {/* CTA */}
          <CounsellingModal>
            <button className="mt-10 text-white bg-[#F6A410] font-medium px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
              Compare All Plans
            </button>
          </CounsellingModal>
        </div>
      </section>

      <section className="w-full px-4 md:px-12 lg:px-20 py-12 font-sans">
        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#3C087E]/10 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm"
        >
          {/* Heading */}
          <p className="text-center text-black text-2xl md:text-[40px] font-bold mb-6">
            Note
          </p>

          {/* Sub-heading */}
          <p className="text-black text-sm font-semibold md:text-base mb-6 leading-relaxed">
            Note: To get a detailed understanding of the fee structure, contact
            a student counsellor.
          </p>

          {/* Bullet Points */}
          <ul className="text-black text-sm md:text-base space-y-2 leading-relaxed pl-5 list-disc">
            <li>
              Admission Processing Fee of ₹1,200/- applicable for all
              admissions.
            </li>
            <li>
              An initial amount of ₹10,000/- from the program fee will be
              collected at the time of registration.
            </li>
            <li>Exam fee : ₹800/- per subject, per attempt</li>
            <li>Project fee : ₹800/- per attempt</li>
            <li>
              Students also have the option to pay the full program fee of
              ₹196,000/- if they prefer.
            </li>
            <li>
              The above-mentioned fee structure is subject to change at the
              discretion of the University.
            </li>
            <li>
              Any payment made via Demand Draft should be made in favour of{" "}
              <b>SVKM’s NMIMS</b>{" "} payable at Mumbai.
            </li>
            <li>
              Now avail loan facility to pay fees for the Program even without a
              credit card
            </li>
            <li>
              Finance Options Available with No Cost Emi*. Please contact a
              counsellor to know more.
            </li>
          </ul>

          {/* Scholarship Policy */}
          <div className="mt-8">
            <p className="text-black text-lg md:text-xl font-bold mb-2">
              Scholarship Policy
            </p>

            <p className="text-black text-sm md:text-base leading-relaxed">
              The University offers special incentives to our armed forces,
              Defence Personnel and their immediate family with a 20% Defence
              Scholarship on the program fee.
            </p>
          </div>
        </MotionWrapper>
      </section>

      <section className="max-w-7xl px-4 md:px-10 lg:px-20 py-10 mt-10 text-center">
        {/* Faded Background Heading */}
        <h2 className="text-[32px] md:text-4xl text-center mb-4 font-bold text-[#270652]">
          NMIMS Online MBA Exam Pattern
        </h2>

        <div className="max-w-6xl mx-auto relative">
          {/* Sub Text */}
          <MotionWrapper
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-black text-sm sm:text-base max-w-5xl mx-auto text-justify"
          >
            NMIMS Online MBA is recognised for its interactive learning environment and industry-oriented teaching methodologies designed specifically for working professionals and online learners. Through its advanced <b>Learning Management System (LMS)</b>, students receive access to live interactive lectures, recorded video sessions, e-books, assignments, discussion forums, and digital study materials that support flexible online learning.
            <br />
            <br />
            The NMIMS MBA exam online process is designed for convenience and accessibility. Online examinations are generally conducted on weekends, helping students balance academic and professional commitments effectively. The learning platform ensures that students pursuing online MBA from NMIMS can experience flexible and career-focused education from anywhere.
          </MotionWrapper>
        </div>
      </section>

    <section className="max-w-7xl px-4 md:px-10 lg:px-20 py-10 mt-10">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center font-sans gap-10">

    {/* LEFT CONTENT */}
    <div className="space-y-5 flex flex-col">

      <p className="text-[#1F1717] mb-1 mt-5 text-sm font-regular">
        Degree Sample
      </p>

      <h2 className="text-[#270652] text-[32px] md:text-4xl font-bold leading-tight">
        NMIMS Online MBA
        <br />
        Program Certificate
      </h2>

      <p className="text-gray-900 w-full text-base">
        The <b>NMIMS Online MBA Program Certificate</b> is awarded by
        SVKM’s NMIMS (Deemed-to-be University), a highly reputed institution
        in India. It is a <b>UGC-DEB entitled degree</b> with strong national
        and international recognition. NMIMS holds <b>UGC autonomy</b>, a
        <b> NAAC A++ accreditation</b>, and is{" "}
        <b>ranked 24th in Management by NIRF</b>, highlighting its academic
        excellence. The certificate is widely recognized by{" "}
        <b>top corporates and startups</b>, making it a valuable credential
        for career growth without leaving your job.
      </p>

      {/* CTA BUTTON - Desktop Only */}
      <div className="hidden md:flex justify-start">
        <CounsellingModal>
          <button className="bg-[#F6A410] text-white font-medium text-sm px-10 py-2 rounded-lg shadow-lg transform hover:scale-105 duration-200">
            Know more
          </button>
        </CounsellingModal>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex flex-col items-center gap-5">

      <Image
        src="/nmims/mba/mba-certificate-sample.webp"
        alt="NMIMS Online MBA certificate UGC approved degree sample NMIMS CDOE"
        width={500}
        height={350}
        className="w-full max-w-xs md:max-w-md rounded-lg shadow-sm"
        sizes="(max-width: 768px) 90vw, 500px"
      />

      {/* CTA BUTTON - Mobile Only */}
      <div className="flex md:hidden justify-center">
        <CounsellingModal>
          <button className="bg-[#F6A410] text-white font-medium text-sm px-10 py-2 rounded-lg shadow-lg transform hover:scale-105 duration-200">
            Know more
          </button>
        </CounsellingModal>
      </div>

    </div>

  </div>
</section>

      <section className="max-w-7xl font-sans px-6 md:px-16 lg:px-24 py-16">
        {/* HEADING */}
        <MotionWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
           <h2 className="text-[#270652] text-[32px] md:text-4xl font-bold leading-tight mb-4">
            NMIMS Online MBA Specializations
          </h2>
        </MotionWrapper>

        <p className="text-[#333333] text-sm sm:text-base mb-10">
        The NMIMS Online MBA Specializations offered by NMIMS CDOE (Centre for Distance and Online Education) are designed to match evolving industry demands and career opportunities. The program now offers <b>7 industry-relevant specializations</b>, including <b>Marketing, Finance, Human Resource Management, Operations & Data Science, Business Management, Business Analytics, and IT Management</b>. This makes the NMIMS Online MBA program one of the most versatile
        {" "} <Link
  href="https://radhyaeducationacademy.com/programs/online-mba/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#3C087E] font-bold hover:underline"
>
 online MBA courses in India
</Link>{" "} 
 for students and working professionals.
        <br/>
         <br/>Each specialization in the NMIMS Online MBA course is developed under the guidance of industry experts and academic leaders, ensuring a strong blend of theoretical knowledge and practical application. The curriculum combines core management subjects with specialization-specific learning, supported by case studies, projects, and insights from experienced faculty. With a flexible learning approach and industry-focused structure, the NMIMS Online MBA specializations help learners build domain expertise and prepare for high-growth roles in today’s competitive business environment.
        </p>

        {/* CONTENT BLOCKS */}
        <div className="flex flex-col gap-8">
          {items.map((item, index) => {
            const isRight = index % 2 === 1; // 2nd + 4th item on right

            return (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                {/* IMAGE */}
                <div className={isRight ? "md:order-2" : "md:order-1"}>
                  <div className="relative flex justify-center md:justify-start">
                    <div className="w-[80%] md:w-[90%] overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        width={500}
                        height={350}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div className={isRight ? "md:order-1" : "md:order-2"}>
                  <Link href={item.link}>
                    <h2 className="text-xl md:text-2xl font-bold text-[#D68E0E] leading-tight hover:text-[#270652] transition-colors duration-200 cursor-pointer">
                      {item.title}
                    </h2>
                  </Link>

                  <p className="text-[#333333] mt-3 max-w-lg">{item.desc}</p>
                  <p className="text-[#333333] mt-3 max-w-lg">{item.desc2}</p>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </section>

         <section className="max-w-7xl px-4 md:px-10 lg:px-20 py-10 mt-10 text-center">
        <div className="w-full  flex flex-col items-center text-center">
          {/* HEADING */}
          <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-10">
            Key Reasons to Choose NMIMS Online MBA
          </h2>
            <ul className="max-w-4xl list-disc pl-5 text-left space-y-4 text-black text-base md:text-lg">

      <li className="leading-relaxed">
        <strong>UGC-Approved & NAAC A++ Accredited</strong> → Recognised and trusted degree
      </li>

      <li className="leading-relaxed">
        <strong>Flexible Learning for Working Professionals</strong> → Study anytime, anywhere
      </li>

      <li className="leading-relaxed">
        <strong>Industry-Relevant Curriculum</strong> → Updated with latest business trends
      </li>

      <li className="leading-relaxed">
        <strong>Strong Brand Value (NMIMS)</strong> → High credibility among employers
      </li>

      <li className="leading-relaxed">
        <strong>Career Support & Placement Assistance</strong> → Resume, interview, job access
      </li>

      <li className="leading-relaxed">
        <strong>Multiple Specializations</strong> → Marketing, Finance, HR, Analytics, IT & more
      </li>

      <li className="leading-relaxed">
        <strong>Affordable Fees with EMI Options</strong> → High ROI compared to full-time MBA
      </li>

    </ul>
          </div>
      </section>

      <section className="max-w-7xl bg-white font-sans px-6 md:px-12 lg:px-20 mt-8">
        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* HEADING */}
          <div className="max-w-7xl text-left mb-12">
            <p className="text-black text-base font-medium">
              What will you gain?
            </p>

            <h2 className="text-3xl sm:text-3xl lg:text-4xl max-w-7xl font-bold text-[#270652] leading-tight mt-2">
              NMIMS Online MBA Program Outcome
            </h2>
          </div>

          {/* CONTENT ROW */}
          <div className="flex flex-col md:grid md:grid-cols-[65%_35%] items-center gap-10">
            {/* LEFT: Points */}
            <div className="flex flex-col gap-6">
              {/* Point 1 */}
              <MotionWrapper
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-7"
              >
                <div className="flex items-center justify-center bg-[#270652] text-white rounded-full w-15 h-15 shrink-0 p-3">
                  <Briefcase size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black">
                    Industry-Ready Skill Development
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base">
                    Enhance your professional capabilities with the NMIMS Online MBA, designed to build practical, job-ready skills aligned with current industry demands and business environments.
                  </p>
                </div>
              </MotionWrapper>

              {/* Point 2 */}
              <MotionWrapper
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                viewport={{ once: true }}
                className="flex items-start gap-7"
              >
                <div className="flex items-center justify-center bg-[#270652] text-white rounded-full w-15 h-15 shrink-0 p-3">
                  <Users size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black">
                    Industry-Relevant Curriculum
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base">
                    Gain exposure to an updated, industry-oriented online MBA curriculum that is recognised by top corporate organisations, startups, and modern business ecosystems.
                  </p>
                </div>
              </MotionWrapper>

              {/* Point 3 */}
              <MotionWrapper
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-7"
              >
                <div className="flex items-center justify-center bg-[#270652] text-white rounded-full w-15 h-15 shrink-0 p-3">
                  <GraduationCap size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black">
                    Expert Academic Guidance
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base">
                    Learn from experienced academicians, IIT/IIM faculty, and industry experts who provide real-world insights and practical knowledge throughout the program.
                  </p>
                </div>
              </MotionWrapper>

              {/* Point 4 */}
              <MotionWrapper
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                viewport={{ once: true }}
                className="flex items-start gap-7"
              >
                <div className="flex items-center justify-center bg-[#270652] text-white rounded-full w-15 h-15 shrink-0 p-3">
                  <Laptop size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black">
                    Flexible Online Learning
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base">
                   Access live and recorded lectures anytime, anywhere through an advanced platform, making the NMIMS Online MBA for working professionals highly convenient and flexible.
                  </p>
                </div>
              </MotionWrapper>
            </div>

            {/* RIGHT: Image */}
            <MotionWrapper
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden md:flex w-full justify-end items-center"
            >
              <div className="relative w-full max-w-[260px] lg:max-w-[320px]">
                <Image
                  src="/mba.png"
                  alt="What will you gain"
                  width={450}
                  height={450}
                  className="object-contain w-full rounded-lg h-auto"
                  priority
                />
              </div>
            </MotionWrapper>
          </div>
        </MotionWrapper>
      </section>

 <section className="max-w-7xl bg-white font-sans px-6 md:px-12 lg:px-20 py-12 mt-10">
  <MotionWrapper
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >
    {/* HEADING */}
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-8 leading-tight">
     NMIMS Distance MBA Programme
    </h2>

    {/* CONTENT ROW */}
    <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] items-center gap-10 lg:gap-16">

      
       {/* LEFT IMAGE */}
      <MotionWrapper
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full flex justify-center lg:justify-start"
      >
        <div className="relative w-full max-w-80 sm:max-w-90 ">
          <Image
            src = "/nmims/mba/distance.webp"
            alt="NMIMS Distance MBA student studying online from home distance learning program India"
            width={450}
            height={450}
            className="object-contain w-full h-auto rounded-2xl shadow-md"
            priority
          />
        </div>
      </MotionWrapper>

          {/* RIGHT CONTENT */}
      <div className="w-full">
        <p className="text-sm sm:text-base leading-relaxed text-gray-900">
     The NMIMS Distance MBA offered by NMIMS CDOE (Centre for Distance and Online Education) is a flexible 2-year postgraduate program designed for students and working professionals seeking quality management education. The program is structured across 4 semesters and provides access to a well-designed curriculum that combines core management principles with industry-relevant knowledge. With its strong academic reputation and presence among the top business schools in India, the NMIMS distance learning MBA continues to be a preferred choice for learners looking for 
     {" "} <Link
  href="https://radhyaeducationacademy.com/blogs/distance-education-india-2026/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#3C087E] font-bold hover:underline"
>
recognised distance MBA courses
</Link>{" "} in India.
     <br /><br />
       The NMIMS Distance MBA admission requires candidates to have a <b>bachelor’s degree with a minimum of 50% marks</b> from a recognised university. The program is delivered through a flexible online learning platform, allowing students to balance their studies with work commitments. With a large learner base, strong alumni network, and growing demand for distance MBA programs, the NMIMS MBA distance learning option provides excellent opportunities for career growth, skill development, and professional advancement.
 </p>
      </div>

    </div>
  </MotionWrapper>
</section>

       <section className="max-w-7xl bg-white font-sans px-6 md:px-12 lg:px-20 py-12">
  <MotionWrapper
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >
    {/* HEADING */}
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-8 leading-tight">
     NMIMS Online MBA for Working Professionals (MBA-WX)
    </h2>

    {/* CONTENT ROW */}
    <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] items-center gap-10 lg:gap-16">

      {/* LEFT CONTENT */}
      <div className="w-full">
        <p className="text-sm sm:text-base leading-relaxed text-gray-900">
       The 
        {" "} <Link
  href="https://radhyaeducationacademy.com/nmims/nmims-mumbai-online-mba-working-executives/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#3C087E] font-bold hover:underline"
>
 NMIMS Online MBA for Working Professionals (MBA-WX)
</Link>{" "}  offered by NMIMS CDOE (Centre for Distance and Online Education) is a premium executive-level program designed for experienced professionals looking to accelerate their careers. This online executive MBA program is structured over <b>2 years and divided into 8 terms, of 3 months each, with a maximum validity of 4 years</b>. The program is available in multiple industry-relevant domains such as <b> Marketing Management, Leadership & Strategy, Operations & Supply Chain Management, Applied Finance, and Digital Marketing</b> making it ideal for professionals seeking specialised online MBA courses for working professionals.
       <br />
        <br />
        The NMIMS MBA-WX admission requires candidates to hold a <b>bachelor’s degree with a minimum of 55% marks (50% for reserved categories)</b> along with at least <b>3 years of work experience</b>. The total NMIMS Online MBA WX fees are approximately <b>₹4,00,000</b> for the complete program. With a flexible learning format, industry-oriented curriculum, and strong academic credibility, the NMIMS executive MBA online program is a preferred choice for
         {" "} <Link
  href="https://radhyaeducationacademy.com/blogs/nmims-for-working-professionals/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#3C087E] font-bold hover:underline"
>
 working professionals
</Link>{" "}  aiming for leadership roles, career growth, and higher salary potential through a recognised online MBA degree in India.
      </p>
      </div>

      {/* RIGHT IMAGE */}
      <MotionWrapper
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full flex justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-70 sm:max-w-80 lg:max-w-100">
          <Image
            src = "/nmims/mba/executive.webp"
            alt="NMIMS Online MBA for Working Professionals MBA WX executive"
            width={450}
            height={450}
            className="object-contain w-full h-auto rounded-2xl shadow-md"
            priority
          />
        </div>
      </MotionWrapper>

    </div>
  </MotionWrapper>
</section>

<section className="w-full px-4 md:px-10 lg:px-20 py-10 font-sans relative">
        {/* Faded Background Heading */}
        <h2 className="text-[32px] md:text-4xl text-center mb-4 font-bold text-[#270652]">
          NMIMS Online MBA Placements & Career Support
        </h2>

        
            <MotionWrapper
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex justify-center lg:justify-end"
      >
        <div className="relative w-full ">
          <Image
            src="/nmimsTieups.png"
            alt="NMIMS Online MBA placements salary recruiters career opportunities NMIMS CDOE"
            width={1152}
            height={400}
            className="object-contain w-full h-auto rounded-2xl shadow-md"
            priority
          />
        </div>
      </MotionWrapper>
       

        <div className="max-w-6xl mx-auto mt-10 relative">
          {/* Sub Text */}
          <p
            className="text-black text-sm sm:text-base max-w-6xl mx-auto text-justify mb-16"
          >
          The
           {" "} <Link
  href="https://radhyaeducationacademy.com/blogs/nmims-online-mba-salary-growth-2026/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#3C087E] font-bold hover:underline"
>
 NMIMS Online MBA placements
</Link>{" "}  offered through NMIMS CDOE (Centre for Distance and Online Education) focus on providing strong career support and professional growth opportunities. The university offers comprehensive placement assistance, including <b>resume building, LinkedIn profile enhancement, interview preparation, and soft skills training</b>. This makes the NMIMS Online MBA program a preferred choice for students and working professionals looking for career advancement through online MBA courses in India.
          <br /><br />
          As per recent trends, a significant number of students from the NMIMS Online MBA program secure opportunities in reputed organisations across industries such as finance, marketing, IT, consulting, and operations. The NMIMS Online MBA placements and salary outcomes continue to improve, with reported <b>highest packages reaching up to ₹12 LPA and average packages around ₹7.2 LPA</b>. Top recruiters include leading companies like Tata Group, Google, Amazon, Infosys, Bajaj Group, and Vivo. The program not only supports job placements but also focuses on overall skill development, helping learners achieve long-term career growth.
          </p>
        </div>
      </section>

            <section className="max-w-7xl bg-white font-sans px-6 md:px-12 lg:px-20 py-12">
  <MotionWrapper
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >
    {/* HEADING */}
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-8 leading-tight">
    NMIMS Online MBA Lateral Admissions 2026
    </h2>

    {/* CONTENT ROW */}
    <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] items-center gap-10 lg:gap-16">

      {/* LEFT CONTENT */}
      <div className="w-full">
        <p className="text-sm sm:text-base leading-relaxed text-gray-900">
       The NMIMS Online MBA lateral admissions 2026 offered by NMIMS CDOE (Centre for Distance and Online Education) provide an excellent opportunity for students and working professionals to fast-track their management education. Through this pathway, eligible candidates can secure<b> direct entry into the second or third semester of the NMIMS Online MBA program</b>, depending on their academic background and prior qualifications. This makes it a flexible option for those who have already completed relevant studies and are looking to continue their online MBA course without starting from the first semester.
       <br />
          <br />
       The NMIMS Online MBA lateral entry admission process is conducted <b>completely online and follows a merit-based selection approach</b>. By opting for lateral admission, learners can save time while gaining in-depth knowledge of business management, leadership, and industry-oriented skills. With its structured curriculum and strong academic reputation, the NMIMS Online MBA program through lateral entry remains a preferred choice for candidates seeking a recognised online MBA degree for working professionals in India.
      </p>
      </div>

      {/* RIGHT IMAGE */}
      <MotionWrapper
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full flex justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-70 sm:max-w-80 lg:max-w-100">
          <Image
            src = "/nmims/mba/lateral.webp"
            alt="NMIMS Online MBA lateral admission fast track career growth"
            width={450}
            height={450}
            className="object-contain w-full h-auto rounded-2xl shadow-md"
            priority
          />
        </div>
      </MotionWrapper>

    </div>
  </MotionWrapper>
</section>
      

      <FAQ faqs={faqs} />

      <ConnectToday />
    </main>
  );
}
