import MotionWrapper from "../Radhya/MotionWrapper";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import CounsellingModal from "../Radhya/CounsellingModal";
import ConnectToday from "../NmimsSection/ConnectToday";
import ContactNmims from "../Nmims/ContactNmims";
import FAQ from "../NmimsSection/FAQ";

export default function page() {
  const faqs = [
    {
      q: "Is online MBA Manipal valid?",
      a: "Yes, the online mba manipal is valid and recognized. It is offered by Manipal University Jaipur and approved by the University Grants Commission (UGC-DEB). The university is also NAAC A+ accredited, making the manipal university online mba acceptable for jobs and higher education.",
    },
    {
      q: "What is the fee of online MBA Manipal?",
      a: "The online mba manipal fees range between ₹1.5 lakh to ₹1.8 lakh for the full course. The manipal online mba also offers EMI options, semester-wise payments, and scholarships, making it an affordable MBA option.",
    },
    {
      q: "Can I do it without entrance exam?",
      a: "Yes, you can pursue the online mba manipal without an entrance exam. Exams like CAT or MAT are optional, and candidates without scores may take an internal test for admission into the manipal online mba.",
    },
    {
      q: "Is placement guaranteed?",
      a: "No, placement is not guaranteed in the online mba manipal, but placement assistance is provided. The manipal university online mba supports students with resume building, interviews, and job opportunities, while final selection depends on skills and experience.",
    },
    {
      q: "Is online MBA better than distance MBA?",
      a: "Yes, the online mba manipal is better than manipal distance mba in most cases. It offers live classes, interaction, and career support, while distance MBA is mostly self-study with limited engagement.",
    },
  ];

  return (
    <main className="flex flex-col items-center w-full bg-white overflow-visible">
      <section className="relative min-h-[50vh] w-full ">
        {/*Hero Section Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/muj/mujUniv.png"
            alt="Campus of Manipal University Jaipur online MBA course India"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* LOGO */}
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
                src="/manipal.png"
                alt="Online MBA Manipal official logo"
                width={220}
                height={100}
                className="object-contain w-[140px] sm:w-[180px] lg:w-[200px] brightness-25"
              />
            </div>
          </MotionWrapper>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

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
                Online MBA Manipal: Fees, Admission 2026, Eligibility &
                Placements
              </MotionWrapper>

              <MotionWrapper
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-200 text-sm md:text-base leading-relaxed mt-2 max-w-2xl"
              >
                The online mba manipal, also known as manipal online mba or
                manipal university online mba, is a popular choice for students
                and working professionals seeking flexible management education.
                Offered by Manipal University Jaipur, it combines live and
                recorded learning with industry-relevant curriculum, making it a
                better alternative to options like manipal distance mba. In this
                guide, explore key details like fees, admission 2026,
                eligibility, syllabus, placements, and career scope to help you
                choose the right path.
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

      <>
<div className="grid lg:grid-cols-[1fr_400px] gap-2">
  <div>
  <section className="max-w-6xl w-full mt-10 lg:mt-15 px-4 mx-auto">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Online MBA Manipal - Overview, Accreditation & Key Highlights
    </h2>

    <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-3">
      What is Online MBA Manipal?
    </h3>

    <p className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      The online mba manipal is a{" "}
      <b>2-year postgraduate management program</b> designed for students
      and working professionals who want to build strong business and
      leadership skills without attending a physical campus. Offered through{" "}
      <Link
        href="https://radhyaeducationacademy.com/muj/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3C087E] font-bold hover:underline"
      >
        Manipal University Jaipur
      </Link>
      , this program is delivered completely online using a modern learning
      management system.
      <br />
      <br />
      With rising demand for flexible education, the Manipal Online MBA has
      become one of the most searched programs in India, especially among
      candidates looking for{" "}
      <b>career growth, promotions, or industry transition</b>. Unlike
      traditional programs such as manipal distance mba or manipal mba
      correspondence, this online MBA provides a more interactive and
      engaging learning experience through live classes, recorded lectures,
      case studies, and industry-driven assignments.
      <br />
      <br />
      Students searching for online mba from manipal university can expect a
      curriculum that{" "}
      <b>
        combines academic knowledge with real-world business applications
      </b>
      , making it suitable for roles across marketing, finance, HR,
      operations, and emerging domains like data analytics and fintech.
    </p>

    <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-3">
      About Manipal University Jaipur Online MBA
    </h3>

    <p className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      The{" "}
      <b>
        manipal university online mba is offered by Manipal University
        Jaipur
      </b>
      , a well-established institution known for its academic excellence and
      global recognition. The university has built a strong reputation in
      both traditional and online education, making it a trusted choice for
      management studies.
      <br />
      <br />
      The{" "}
      <Link
        href="https://radhyaeducationacademy.com/muj/manipal-jaipur-online-mba/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3C087E] font-bold hover:underline"
      >
        manipal mba online program
      </Link>{" "}
      is structured to meet the needs of modern learners by offering
      flexibility, affordability, and industry relevance. It allows students
      to learn at their own pace while still benefiting from faculty
      guidance, peer interaction, and real-time discussions.
      <br />
      <br />
      One of the key strengths of the online mba manipal is its wide range
      of specializations, including{" "}
      <b>
        Marketing Management, Finance, Human Resource Management,
        Operations, IT & FinTech, and Data Science
      </b>
      . This enables students to align their education with their career
      goals and industry demand.
      <br />
      <br />
      Additionally, the program is designed to support working
      professionals, allowing them to continue their jobs while pursuing
      higher education. This makes the manipal online mba course a practical
      option for those looking to upgrade their skills without taking a
      career break.
    </p>

    <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
      Accreditations & Approvals (UGC, NAAC, AICTE, WES)
    </h3>

    <p className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      The credibility of the online mba manipal is backed by multiple
      approvals and accreditations from recognized bodies, ensuring that the
      degree holds strong value in both India and abroad.
      <br />
      <br />
      The program is approved by the{" "}
      <Link
        href="https://radhyaeducationacademy.com/ugc-approved-universities/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3C087E] font-bold hover:underline"
      >
        University Grants Commission (UGC-DEB)
      </Link>{" "}
      , which means it is a valid and recognized postgraduate degree
      delivered in online mode. This approval ensures that students can use
      the degree for employment, government exams, and higher education.
      <br />
      <br />
      In addition, the university is accredited by the{" "}
      <b>NAAC with an A+ grade</b>, reflecting high academic standards and
      quality education.
      <br />
      <br />
      Other recognitions associated with the manipal university online mba
      include:
    </p>

    <ul className="list-disc pl-5 text-gray-900 mb-2">
      <li>
        <b>AICTE</b>-aligned guidelines for management education
      </li>
      <li>
        <b>WES (World Education Services)</b> recognition for global
        acceptance
      </li>
      <li>
        <b>NBA</b> and other academic endorsements (where applicable)
      </li>
    </ul>

    <p className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      These accreditations make the online mba from manipal university
      comparable to traditional MBA programs, ensuring that students receive
      a degree that is widely accepted across industries.
    </p>
    <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
      Key Highlights of Online MBA Manipal
    </h3>
    <div className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      The online mba manipal stands out due to its combination of{" "}
      <b>flexibility, affordability, and industry relevance</b>. It is
      designed to meet the expectations of both fresh graduates and
      experienced professionals.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Program Highlights:
      </h4>
      <ul className="list-disc pl-5 mb-2">
        <li>
          <b>Duration:</b> 2 Years (4 Semesters)
        </li>
        <li>
          <b>Mode:</b> Fully Online (Live + Recorded Classes)
        </li>
        <li>
          <b>Eligibility:</b> Graduation from a recognized university
        </li>
        <li>
          <b>Learning Platform:</b> Advanced LMS with 24/7 access
        </li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Academic & Career Highlights:
      </h4>
      <ul className="list-disc pl-5 mb-2">
        <li>
          Industry-oriented curriculum aligned with current market trends
        </li>
        <li>Multiple specializations to choose from</li>
        <li>Placement assistance and career support services</li>
        <li>Exposure to real-world case studies and projects</li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Why Students Prefer Online MBA Manipal:
      </h4>
      <ul className="list-disc pl-5 mb-2">
        <li>Flexibility to study while working</li>
        <li>Recognized and accredited degree</li>
        <li>
          <b>Affordable fee structure</b> compared to private MBA colleges
        </li>
        <li>Strong brand value of Manipal University</li>
      </ul>
      Overall, the manipal online mba offers a balanced approach to
      management education, combining academic rigor with practical
      learning. This makes it a strong choice for anyone searching for a
      reliable and career-focused online mba manipal program in India.
    </div>

     <MotionWrapper
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto flex justify-center mt-10 lg:justify-end"
          >
            <div className="relative w-full ">
             <CounsellingModal>
               <Image
                src="/manipal-accreditations.webp"
                alt="Manipal University Online MBA accreditations UGC NAAC AICTE WES ACU approved"
                width={1152}
                height={650}
                className="object-contain w-full h-auto hover:scale-105 rounded-2xl shadow-md"
                priority
              />
             </CounsellingModal>
            </div>
          </MotionWrapper>
  </section>
  <section className="max-w-6xl w-full mt-10 lg:mt-15 px-4 mx-auto">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Why Choose Online MBA Manipal in 2026?
    </h2>
    <div className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      Choosing the online mba manipal in 2026 is a strategic decision for
      students and professionals who want to advance their careers with a
      flexible and recognized management degree. With increasing demand for
      programs like manipal online mba and manipal university online mba,
      this course has emerged as a reliable option for those seeking{" "}
      <b>
        quality education without compromising their professional
        commitments
      </b>
      .
      <br />
      <br />
      The online mba from manipal university is designed to combine academic
      excellence with real-world business applications, making it suitable
      for today’s dynamic job market. Compared to traditional options such
      as manipal distance mba or manipal mba correspondence, this program
      offers a more engaging, interactive, and career-focused learning
      experience.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Flexibility for Working Professionals
      </h3>
      One of the biggest advantages of the online mba manipal is its
      flexibility, making it ideal for working professionals, entrepreneurs,
      and even fresh graduates.
      <br />
      The manipal online mba allows students to:
      <ul className="list-disc pl-5 mb-2">
        <li>Attend live classes or access recorded lectures anytime</li>
        <li>Study at their own pace without leaving their job</li>
        <li>
          <b>Balance work, personal life, and education effectively</b>
        </li>
      </ul>
      Unlike manipal distance education mba, where learning is mostly{" "}
      <b>self-paced with limited interaction</b>, the online mba manipal
      provides structured learning through live sessions, assignments, and
      continuous evaluation.
      <br />
      This flexibility ensures that learners can immediately apply their
      knowledge in real-world work environments, enhancing both their skills
      and career growth.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Industry-Relevant Curriculum
      </h3>
      The manipal university online mba courses are designed to meet current
      industry demands and business trends. The curriculum is regularly
      updated to{" "}
      <b>
        include modern concepts such as digital marketing, data analytics,
        fintech, and strategic management
      </b>
      .
      <br />
      <br />
      Students pursuing the online mba manipal benefit from:
      <ul className="list-disc pl-5 mb-2">
        <li>Case study-based learning</li>
        <li>Real-world business scenarios</li>
        <li>Practical assignments and projects</li>
      </ul>
      This makes the manipal online mba course more{" "}
      <b>
        practical and career-oriented compared to traditional MBA formats
      </b>
      . It ensures that students are equipped with skills that are directly
      applicable in corporate roles.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Recognized & Valuable Degree
      </h3>
      The online mba manipal holds strong academic credibility due to its
      approvals and accreditations. Offered by Manipal University Jaipur,
      the program is recognized by the{" "}
      <b>University Grants Commission (UGC-DEB)</b> and accredited by{" "}
      <b>NAAC with an A+ grade</b>.
      <br />
      <br />
      This ensures that the manipal university online mba degree is:
      <ul className="list-disc pl-5 mb-2">
        <li>Valid for government and private sector jobs</li>
        <li>Accepted for higher education in India and abroad</li>
        <li>
          <b>Equivalent in value to a regular on-campus MBA</b>
        </li>
      </ul>
      For students comparing options like manipal distance mba or manipal
      mba correspondence, the online MBA provides a more recognized and
      interactive learning pathway.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Career Growth & Networking Opportunities
      </h3>
      The online mba manipal is not just about academic learning - it is
      also focused on{" "}
      <Link
        href="https://radhyaeducationacademy.com/blogs/online-mba-for-career-growth/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3C087E] font-bold hover:underline"
      >
        career advancement
      </Link>{" "}
      and professional networking.
      <br />
      <br />
      Students enrolled in the manipal online mba gain access to:
      <ul className="list-disc pl-5 mb-2">
        <li>Career counseling and placement assistance</li>
        <li>Industry webinars and expert sessions</li>
        <li>Networking opportunities with peers and professionals</li>
      </ul>
      Professionals pursuing an online mba from manipal university often
      experience:
      <ul className="list-disc pl-5 mb-2">
        <li>
          {" "}
          <Link
            href="https://radhyaeducationacademy.com/blogs/the-financial-catalyst/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3C087E] font-bold hover:underline"
          >
            Salary growth
          </Link>{" "}
        </li>
        <li>Better job roles</li>
        <li>Career transitions into management positions</li>
      </ul>
      The program helps learners build leadership, communication, and
      strategic thinking skills, which are essential for
      <b> long-term career success</b>.
    </div>
  </section>

  <section className="max-w-6xl w-full mx-auto mt-10 lg:mt-15 px-4">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Online MBA Manipal Specializations & Course Options
    </h2>
    <div className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      The online mba manipal offers a wide range of industry-relevant
      specializations designed to match current market demand and career
      opportunities. Students searching for manipal online mba course or
      online mba courses in manipal university can choose from multiple
      domains based on their interests, skills, and long-term career goals.
      <br />
      <br />
      The manipal university online mba is structured in such a way that
      students{" "}
      <b>
        learn core management subjects in the initial semesters and later
        specialize in a particular field
      </b>
      . This approach ensures both foundational knowledge and domain
      expertise.
      <br />
      <br />
      Compared to traditional options like manipal distance mba or manipal
      mba correspondence, the online MBA provides more flexibility and
      updated specialization choices aligned with modern business needs.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        List of Specializations Offered
      </h3>
      The online mba manipal program offers a wide range of industry-focused
      specializations designed to meet current market demand. Students
      enrolling in the manipal online mba can{" "}
      <b>
        choose from multiple domains based on their career goals and
        interests
      </b>
      .
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Specializations Available in Online MBA Manipal:
      </h4>
      The manipal university online mba courses include the following
      specializations:
      <ul className="list-disc font-bold pl-5 mb-2">
        <li>Marketing Management</li>
        <li>Finance Management</li>
        <li>Human Resource Management</li>
        <li>Operations Management</li>
        <li>IT & FinTech</li>
        <li>Data Science & Analytics</li>
        <li>International Business Management</li>
        <li>Project Management</li>
        <li>Logistics & Supply Chain Management</li>
        <li>Retail Management</li>
        <li>Banking & Finance</li>
        <li>Banking, Financial Services & Insurance (BFSI)</li>
      </ul>
      These options make the manipal online mba suitable for both fresh
      graduates and experienced professionals looking to upskill in a
      specific domain.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Best Specializations in Online MBA Manipal for Career Growth
      </h3>
      Choosing the right specialization in the online mba manipal plays a
      crucial role in shaping your career. Some of the most popular and
      high-demand specializations include:
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Marketing Management
      </h4>
      The manipal online mba in marketing focuses on digital marketing,
      brand management, and consumer behavior. It is ideal for students
      targeting roles in <b>advertising, sales, and digital marketing</b>.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Finance Management
      </h4>
      The manipal university online mba in finance prepares students for
      careers in <b>banking, investment, and financial analysis</b>. This
      specialization is highly preferred by candidates aiming for
      high-paying roles.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Human Resource Management
      </h4>
      The online mba manipal in HR helps students develop skills in{" "}
      <b>recruitment, employee management, and organizational behavior</b>.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Data Science & Analytics
      </h4>
      The manipal online mba in data science is one of the fastest-growing
      specializations, focusing on <b>data-driven decision-making</b> and
      business analytics.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        IT & FinTech
      </h4>
      The manipal mba online in IT and fintech combines technology with
      finance, preparing students for roles in{" "}
      <b>digital banking and financial innovation</b>.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Operations & Supply Chain Management
      </h4>
      The online mba manipal in operations management focuses on{" "}
      <b>logistics, supply chain, and process optimization</b>, which are
      critical for manufacturing and e-commerce sectors.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Most Popular Specializations (Marketing, Finance, HR, Data Science)
      </h3>
      Among all options in the online mba manipal, some specializations are
      highly preferred due to strong career demand and salary growth.
      <table className="w-full border-collapse table-fixed border-gray-300 mt-4 mb-2 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Specialization
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Career Roles
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Industry Demand
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Marketing Management
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Digital Marketing Manager, Brand Manager
            </td>
            <td className="border border-gray-300 px-4 py-3">Very High</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Finance Management
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Financial Analyst, Investment Banker
            </td>
            <td className="border border-gray-300 px-4 py-3">Very High</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Human Resource Management
            </td>
            <td className="border border-gray-300 px-4 py-3">
              HR Manager, Talent Acquisition
            </td>
            <td className="border border-gray-300 px-4 py-3">High</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Data Science &amp; Analytics
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Data Analyst, Business Analyst
            </td>
            <td className="border border-gray-300 px-4 py-3">Very High</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              IT &amp; FinTech
            </td>
            <td className="border border-gray-300 px-4 py-3">
              IT Manager, FinTech Consultant
            </td>
            <td className="border border-gray-300 px-4 py-3">Very High</td>
          </tr>
        </tbody>
      </table>
      Students searching for manipal online mba fees, salary, or ROI often
      prefer these specializations because they offer better job
      opportunities and growth potential.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        How to Choose the Right Specialization in Online MBA Manipal
      </h3>
      Choosing the right specialization in the online mba manipal is a
      crucial step that directly impacts your career growth, job
      opportunities, and salary potential. With multiple options available
      under the manipal online mba,{" "}
      <b>
        students should make an informed decision based on their interests,
        skills, and long-term career goals
      </b>
      .
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        1. Align Specialization with Your Career Goals
      </h4>
      The first step in selecting a specialization in the manipal university
      online mba is to identify your career objective.
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>
          If you want to work in branding, sales, or digital marketing,
          choose <b>Marketing Management</b>
        </li>
        <li>
          If your goal is to enter banking, investment, or finance roles, go
          for <b>Finance Management</b>
        </li>
        <li>
          If you are interested in people management,{" "}
          <b>Human Resource Management</b> is the right choice
        </li>
      </ul>
      Students searching for online mba from manipal university should
      always select a specialization that aligns with their future job
      roles.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        2. Evaluate Industry Demand & Future Scope
      </h4>
      While choosing a specialization in the online mba manipal, it is
      important to consider current market trends and future demand.
      <br />
      <br />
      High-growth specializations include:
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>
          <b>Data Science & Analytics</b> (increasing demand across
          industries)
        </li>
        <li>
          <b>IT & FinTech</b> (driven by digital transformation)
        </li>
        <li>
          <b>Operations & Supply Chain Management</b> (growth in e-commerce
          and logistics)
        </li>
      </ul>
      These options in the manipal online mba course offer better long-term
      career stability and growth opportunities.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        3. Consider Your Educational Background & Skills
      </h4>
      Your past education and existing skills should also influence your
      decision.
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>
          <b>Commerce background</b> → Finance, Banking, BFSI
        </li>
        <li>
          <b>Technical background</b> → IT, Data Science
        </li>
        <li>
          <b>Management or general background</b> → Marketing, HR
        </li>
      </ul>
      The manipal mba online program is flexible, but choosing a familiar
      domain can help you perform better academically and professionally.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        4. Compare Salary Potential of Specializations
      </h4>
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>
          <b>Finance & Data Science</b> → Higher salary potential
        </li>
        <li>
          <b>Marketing</b> → Strong growth opportunities
        </li>
        <li>
          <b>HR</b> → Stable career path
        </li>
      </ul>
      Candidates searching for manipal online mba salary often prefer
      high-paying domains like finance and analytics.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        5. Understand Learning Style & Interest
      </h4>
      Unlike manipal distance mba, the online mba manipal involves active
      participation through live classes, assignments, and projects.
      <br />
      So, choose a specialization that:
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>Keeps you engaged</li>
        <li>Matches your interest</li>
        <li>Motivates you to learn consistently</li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        6. Take Expert Guidance Before Final Decision
      </h4>
      If you are unsure, it is always better to:
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>Talk to academic counselors</li>
        <li>Compare different specializations</li>
        <li>Understand career outcomes</li>
      </ul>
      This helps{" "}
      <b>
        students selecting the manipal university online mba make a
        confident and informed choice
      </b>
      .
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Final Insight
      </h3>
      The flexibility and variety of options in the manipal university
      online mba courses make it one of the most versatile programs
      available today. Whether you are aiming for a{" "}
      <b>career switch, promotion, or skill enhancement</b>, the online mba
      manipal provides the right specialization to match your goals.
    </div>
  </section>

  <section className="max-w-6xl w-full mx-auto mt-10 lg:mt-15 px-4">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Online MBA Manipal Fees Structure 2026, EMI & Scholarships
    </h2>

    <div className="w-full text-sm sm:text-base leading-normal text-black">
      The online mba manipal fees structure is designed to be affordable and
      flexible for students and working professionals. Compared to
      traditional MBA programs, the manipal online mba offers a{" "}
      <b>
        cost-effective option without compromising on quality, recognition,
        or career opportunities
      </b>
      .
      <br />
      <br />
      Students searching for manipal university online mba fees often look
      for <b>
        transparency, payment flexibility, and return on investment
      </b>{" "}
      - and this program delivers on all three aspects.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Total Fees & Semester-wise Breakdown
      </h3>
      The online mba manipal fees for 2026 are structured in a way that
      allows students to{" "}
      <b>pay conveniently either semester-wise or through EMI options</b>.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Fee Details:
      </h4>
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li><b>Total Program Fees</b>: ₹1,50,000 - ₹1,80,000 (approx.)</li>
        <li><b>Per Semester Fees</b>: ₹37,500 - ₹45,000</li>
        <li><b>Duration</b>: 2 Years (4 Semesters)</li>
      </ul>
      The manipal university online mba fees structure remains competitive
      when compared to other private universities offering similar{" "}
      <Link
        href="https://radhyaeducationacademy.com/programs/online-mba/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3C087E] font-bold hover:underline"
      >
        online MBA programs
      </Link>
      .
      <br />
      <br />
      Students looking for manipal online mba course fees should note that
      the <b>total cost may vary slightly</b> depending on specialization
      and updated university guidelines.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mt-4 mb-2">
        EMI & Payment Options
      </h3>
      One of the biggest advantages of the online mba manipal is the
      availability of flexible payment options.
      <br />
      <br />
      Students enrolling in the manipal online mba can benefit from:
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>
          <b>No-cost EMI</b> options
        </li>
        <li>Monthly installment plans</li>
        <li>Semester-wise payment flexibility</li>
      </ul>
      This makes the online mba from manipal university accessible to a
      wider audience, especially working professionals who prefer to manage
      their finances alongside their education.
      <br />
      <br />
      EMI plans for the manipal online mba fees can start from{" "}
      <b>affordable monthly amounts</b>, making it easier to invest in
      higher education without financial burden.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mt-4 mb-2">
        Scholarships & Discounts Available
      </h3>
      The manipal university online mba also offers various scholarships and{" "}
      <b>financial benefits to eligible candidates</b>.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        Scholarship Categories:
      </h4>
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>Merit-based scholarships</li>
        <li>Scholarships for defense personnel</li>
        <li>Benefits for government employees</li>
        <li>Support for differently-abled candidates</li>
      </ul>
      <b>In addition, students may also get:</b>
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>Early-bird discounts</li>
        <li>Annual payment discounts</li>
        <li>Full-fee payment benefits</li>
      </ul>
      These options reduce the overall online mba manipal fees, making it a
      more attractive option for students seeking{" "}
      <b>quality education at an affordable cost</b>.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mt-4 mb-2">
        ROI (Return on Investment) Analysis
      </h3>
      When evaluating the online mba manipal fees, it is important to
      consider the return on investment (ROI).
      <br />
      The manipal online mba provides strong ROI due to:
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>
          <b>Affordable fee structure</b> compared to traditional MBA
          programs
        </li>
        <li>Opportunity to continue working while studying</li>
        <li>
          <b>Career growth and salary increment potential</b>
        </li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Expected ROI:
      </h4>
      <ul className="list-disc ml-5 mt-2 font-bold space-y-1">
        <li>Average salary after MBA: ₹5 - 12 LPA</li>
        <li>
          High-performing candidates: ₹12 - 15 LPA+
        </li>
      </ul>
      Students searching for manipal online mba salary often choose this
      program because it allows them to recover their investment within a
      few years through career advancement and salary hikes.
      <br />
      <br />
      Compared to options like manipal distance mba or other low-engagement
      programs, the{" "}
      <b>
        online mba manipal offers better ROI due to its interactive learning
        and placement support
      </b>
      .
    </div>
  </section>

  <section className="max-w-6xl w-full mt-10 lg:mt-15 px-4 mx-auto">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Online MBA Manipal Eligibility Criteria & Admission Requirements
    </h2>
    <div className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      The online mba manipal eligibility criteria are designed to be simple
      and accessible for a wide range of students, including fresh graduates
      and working professionals. The manipal university online mba{" "}
      <b>
        follows standard academic requirements set by regulatory authorities
      </b>{" "}
      to ensure quality and credibility.
      <br />
      Candidates searching for online mba from manipal university should
      carefully review the eligibility conditions before applying to ensure
      a smooth admission process.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Basic Eligibility Criteria
      </h3>
      To apply for the online mba manipal, candidates must meet the
      following academic requirements:
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Minimum Qualification:
      </h4>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          A <b>Bachelor’s degree (10+2+3 format)</b> from a recognized
          university
        </li>
        <li>
          Degree can be in any discipline (Arts, Commerce, Science,
          Engineering, etc.)
        </li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        Minimum Marks:
      </h4>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li><b>50% aggregate marks for general category</b></li>
        <li>
          <b>45% marks for reserved categories</b> (as per guidelines)
        </li>
      </ul>
      The manipal online mba eligibility criteria are flexible compared to
      many traditional MBA programs, making it easier for students from
      diverse backgrounds to apply.
      <br />
      Candidates searching for mba online manipal university eligibility
      should note that graduation is mandatory for admission.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Entrance Exam Requirements (If Any)
      </h3>
      One of the key advantages of the online mba manipal is that it{" "}
      <b>does not strictly require national-level entrance exams</b> for
      admission.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Accepted Entrance Exams (Optional):
      </h4>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>CAT</li>
        <li>MAT</li>
        <li>CMAT</li>
        <li>GMAT</li>
        <li>XAT</li>
      </ul>
      However, for candidates without valid scores:
      <br />
      This makes the manipal university online mba accessible to a larger
      number of applicants compared to traditional MBA programs that
      strictly depend on entrance exams.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Documents Required:{" "}
      </h3>
      Candidates applying for the online mba manipal must submit the
      required documents during the admission process.
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Graduation mark sheets and degree certificate</li>
        <li>10th & 12th mark sheets</li>
        <li>Valid ID proof (Aadhar card / Passport / PAN card)</li>
        <li>Passport-size photographs</li>
        <li>Work experience certificate (if applicable)</li>
      </ul>
      <b>For international applicants:</b>
      <ul className="list-disc pl-5 mt-1 space-y-1">
        <li>Passport copy</li>
        <li>Visa / PR details</li>
        <li>Equivalence certificate (if required)</li>
      </ul>
      Having all documents ready ensures faster processing for admission
      into the manipal online mba course.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Eligibility for Working Professionals
      </h3>
      The online mba manipal is specifically designed to support working
      professionals who want to{" "}
      <b>upgrade their qualifications without leaving their jobs</b>.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Key Benefits for Working Professionals:
      </h4>
      <ul className="list-disc pl-6 space-y-1 text-gray-900 mb-5">
        <li>No need to quit your job</li>
        <li>Flexible learning schedule</li>
        <li>Weekend or recorded classes</li>
        <li>Practical industry-focused curriculum</li>
      </ul>
      Unlike manipal distance mba, the manipal online mba offers:
      <ul className="list-disc pl-6 space-y-1 text-gray-900 mb-5">
        <li>Live interactive sessions</li>
        <li>Real-time faculty engagement</li>
        <li>Better networking opportunities</li>
      </ul>
      This makes the online mba manipal an ideal choice for professionals
      looking for:
      <ul className="list-disc pl-6 space-y-1 text-gray-900">
        <li>Career growth</li>
        <li>Salary increment</li>
        <li>Role transition</li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Eligibility Summary Table
      </h4>
      <table className="w-full border-collapse table-fixed border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Criteria
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Details
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Qualification
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Graduation (10+2+3)
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Minimum Marks
            </td>
            <td className="border border-gray-300 px-4 py-3">
              50% (45% for reserved categories)
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Entrance Exam
            </td>
            <td className="border border-gray-300 px-4 py-3">Optional</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Work Experience
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Not mandatory
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Mode of Study
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Fully Online
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section className="max-w-6xl w-full mt-10 lg:mt-15 px-4 mx-auto">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Online MBA Manipal Admission Process 2026
    </h2>
    <div className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      The online mba manipal admission process 2026 is simple, fully online,
      and designed to make it easy for students and working professionals to
      apply without any hassle. Candidates searching for manipal online mba
      admission or online mba from manipal university can{" "}
      <b>complete the entire process digitally</b>, from registration to
      final enrollment.<br />
      The manipal university online mba admission follows a structured
      approach to ensure smooth application, document verification, and
      confirmation.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Step-by-Step Admission Process
      </h3>
      The online mba manipal admission process can be completed in a few
      easy steps:
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Step 1: Online Registration
      </h4>
      Visit the official admission portal of Manipal University Jaipur or
      apply through an authorized counselling platform. Register using your
      basic details like name, email ID, and contact number.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Step 2: Fill Application Form
      </h4>
      Complete the application form by entering:
      <ul className="list-disc pl-5 space-y-1">
        <li>Personal details</li>
        <li>Academic qualifications</li>
        <li>Work experience (if applicable)</li>
      </ul>
      Candidates applying for the manipal online mba course must ensure that
      all information is accurate.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Step 3: Upload Required Documents
      </h3>
      Upload scanned copies of:
      <ul className="list-disc pl-5 space-y-1">
        <li>Educational certificates</li>
        <li>ID proof</li>
        <li>Passport-size photograph</li>
      </ul>
      This step is essential for verification in the manipal university
      online mba admission process.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Step 4: Pay Application / Semester Fees
      </h3>
      Pay the required fee using:
      <ul className="list-disc pl-5 space-y-1">
        <li>Online payment (UPI, Debit/Credit Card, Net Banking)</li>
        <li>EMI option (if applicable)</li>
      </ul>
      The initial fee is usually adjusted in the total online mba manipal
      fees structure.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Step 5: Admission Confirmation
      </h3>
      After successful verification, candidates receive:
     <ul className="list-disc pl-5 space-y-1">
        <li>Admission confirmation</li>
        <li>Access to LMS (Learning Management System)</li>
        <li>Course onboarding details</li>
      </ul>
      This completes the online mba manipal admission process 2026.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Important Admission Dates & Cycles
      </h3>
      The manipal online mba admission 2026 is conducted multiple times a
      year, making it flexible for applicants.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Admission Cycles:
      </h4>
     <ul className="list-disc pl-5 mb-2 space-y-1">
        <li>January / February Session</li>
        <li>July / August Session</li>
      </ul>
      Students searching for manipal university online mba admission dates
      should apply early to secure their preferred batch and specialization.
      <br />
      <br />
      <strong>Key Points:</strong>
     <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Applications are usually open throughout the year</li>
        <li>Limited seats in high-demand specializations</li>
        <li>Early applicants may get fee benefits or scholarships</li>
      </ul>
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Tips for Successful Admission
      </h3>
      To ensure a smooth admission into the online mba manipal, candidates
      should follow these expert tips:
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Apply Early
      </h4>
      Applying early increases your chances of:
     <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Securing your preferred specialization</li>
        <li>Availing scholarships or discounts</li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Keep Documents Ready
      </h4>
      Prepare all required documents in advance to avoid delays in the
      manipal online mba admission process.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Choose the Right Specialization
      </h4>
      Select a specialization aligned with your career goals to maximize the
      benefits of the manipal university online mba.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Check Eligibility Carefully
      </h4>
      Before applying, confirm that you meet the online mba manipal
      eligibility criteria to avoid rejection or delays.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Seek Expert Guidance
      </h4>
      If you are unsure, consult admission experts or counsellors to make
      informed decisions regarding the online mba from manipal university.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Admission Process Summary
      </h4>
      <table className="w-full border-collapse table-fixed border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Step
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">
              Registration
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Sign up on admission portal
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">
              Application Form
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Fill personal &amp; academic details
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">
              Document Upload
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Submit required documents
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">
              Fee Payment
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Pay application/semester fee
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">
              Confirmation
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Get admission &amp; LMS access
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section className="max-w-6xl w-full mt-10 lg:mt-15 px-4 mx-auto">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Online MBA Manipal Syllabus & Curriculum Structure
    </h2>
    <div className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      The online mba manipal syllabus is designed to provide a strong
      foundation in management principles while also offering
      specialization-based learning aligned with industry requirements. The
      manipal university online mba courses follow a{" "}
      <b>structured 2-year curriculum divided into 4 semesters</b>, ensuring
      a balanced mix of theoretical knowledge and practical application.
      <br />
      <br />
      Students searching for online mba from manipal university can expect a
      curriculum that focuses on real-world business scenarios, strategic
      thinking, and leadership development.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Semester-Wise Curriculum Breakdown
      </h3>
      The online mba manipal course structure is divided into four
      semesters, where the{" "}
      <b>
        first year focuses on core management subjects and the second year
        emphasizes specialization and advanced topics
      </b>
      .
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Semester 1: Foundation of Management
      </h4>
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Management Process & Organizational Behaviour</li>
        <li>Financial Accounting</li>
        <li>Managerial Economics</li>
        <li>Business Communication</li>
        <li>Marketing Management</li>
        <li>Data Visualization / Business Tools</li>
      </ul>
      This semester builds the basic understanding required for the manipal
      online mba program.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Semester 2: Core Business Functions
      </h4>
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Financial Management</li>
        <li>Human Resource Management</li>
        <li>Operations Management</li>
        <li>Management Information System (MIS)</li>
        <li>Business Research Methods</li>
        <li>Legal Aspects of Business</li>
      </ul>
      Students gain insights into key functional areas of business in the
      manipal university online mba.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Semester 3: Specialization Begins
      </h4>
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Research Methodology</li>
        <li>Elective Subjects (based on chosen specialization)</li>
        <li>Industry-oriented case studies</li>
      </ul>
      Students choosing online mba manipal specializations start focusing on
      their selected domain.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Semester 4: Advanced Learning & Project
      </h4>
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Strategic Management</li>
        <li>International Business</li>
        <li>Business Leadership</li>
        <li>Final Project / Capstone</li>
      </ul>
      This semester prepares students for real-world challenges and career
      opportunities after the manipal mba online.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Core Subjects vs Electives
      </h3>
      The online mba manipal curriculum is divided into:
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Core Subjects (Compulsory)
      </h4>
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Marketing Management</li>
        <li>Financial Management</li>
        <li>HR Management</li>
        <li>Operations Management</li>
        <li>Business Communication</li>
        <li>Strategic Management</li>
      </ul>
      These subjects are common for all students in the manipal online mba
      course and provide a <b>strong foundation in management</b>.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Elective Subjects (Specialization-Based)
      </h4>
      For Example:
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Marketing: Digital Marketing, Brand Management</li>
        <li>Finance: Investment Analysis, Banking</li>
        <li>HR: Talent Management, Organizational Development</li>
        <li>Data Science: Business Analytics, Data Modelling</li>
      </ul>
      This flexibility makes the online mba manipal highly customizable
      according to career goals.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Key Learning Outcomes
      </h3>
      The online mba manipal is designed to develop both academic knowledge
      and practical skills required in the business world.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        After Completing the Program, Students Will Be Able To:
      </h4>
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Develop strong leadership and managerial skills</li>
        <li>Make data-driven business decisions</li>
        <li>Understand global business strategies</li>
        <li>
          Solve real-world business problems using analytical thinking
        </li>
        <li>Apply domain-specific expertise based on specialization</li>
      </ul>
      The manipal online mba course ensures that{" "}
      <b>
        students are industry-ready and capable of handling dynamic business
        environments
      </b>
      .
    </div>
  </section>

  <section className="max-w-6xl w-full mt-10 lg:mt-15 px-4 mx-auto">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Online MBA Manipal Learning Experience & LMS Platform
    </h2>
    <div className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      The online mba manipal learning experience is designed to provide a
      flexible yet engaging environment for students and working
      professionals. Unlike traditional programs such as manipal distance
      mba or manipal mba correspondence, the manipal online mba{" "}
      <b>
        focuses on interactive, technology-driven learning that combines
        live teaching with self-paced study
      </b>
      .
      <br />
      <br />
      Delivered through a modern digital platform, the manipal university
      online mba ensures that students receive high-quality education with
      continuous academic support and real-world exposure.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Learning Methodology (Live + Recorded)
      </h3>
      The online mba manipal course follows a hybrid learning model that
      includes both live and recorded components.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Key Learning Methods:
      </h4>
      <p className="mt-2 font-bold">Live Online Classes:</p>
      Real-time sessions conducted by experienced faculty, allowing students
      to interact, ask questions, and participate in discussions.
      <p className="mt-2 font-bold">Recorded Lectures:</p>
      Pre-recorded sessions available on demand, enabling students to learn
      at their own pace.
      <p className="mt-2 font-bold">Case Studies & Assignments:</p>
      Industry-based case studies help students apply theoretical concepts
      to real-world business scenarios.
      <p className="mt-2 font-bold">Webinars & Guest Lectures:</p>
      Sessions with industry experts provide exposure to current trends and
      practices.
      <br />
      <br />
      This approach makes the online mba manipal far more engaging compared
      to manipal distance education mba, where learning is mostly self-paced
      with limited interaction.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        LMS Features & Student Dashboard
      </h3>
      The manipal online mba LMS (Learning Management System) is a central
      platform that supports all academic activities and student engagement.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Key LMS Features:
      </h4>
      <p className="mt-2 font-bold">24/7 Access to Study Material</p>
      Students can access lectures, notes, and resources anytime.
      <p className="mt-2 font-bold">Interactive Dashboard</p>
      Track progress, assignments, and course completion status.
      <p className="mt-2 font-bold">Assignment Submission & Evaluation</p>
      Submit assignments online and receive feedback from faculty.
      <p className="mt-2 font-bold">Discussion Forums</p>
      Engage with peers and faculty for doubt-solving and collaboration.
      <p className="mt-2 font-bold">Mobile-Friendly Access</p>
      Learn anytime, anywhere using mobile or desktop devices.
      <br />
      <br />
      The LMS used in the online mba manipal{" "}
      <b>ensures a seamless and user-friendly learning experience</b>,
      making it ideal for working professionals managing busy schedules.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Faculty & Student Support System
      </h3>
      The manipal university online mba provides strong academic and student
      support to ensure a smooth learning journey.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Faculty Support:
      </h4>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Highly qualified faculty members with industry experience</li>
        <li>Regular live sessions and doubt-solving classes</li>
        <li>Personalized academic guidance</li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Student Support Services:
      </h4>
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Dedicated student support team</li>
        <li>Career counseling and mentorship</li>
        <li>Technical support for LMS access</li>
        <li>Placement and skill development assistance</li>
      </ul>
      Unlike manipal distance mba, the online mba manipal ensures{" "}
      <b>continuous interaction between students and faculty</b>, improving
      learning outcomes and engagement.
    </div>
  </section>

  <section className="max-w-6xl w-full mt-10 lg:mt-15 px-4 mx-auto">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Online MBA Manipal Examination Pattern & Evaluation System
    </h2>
    <div className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      The online mba manipal examination pattern is designed to ensure a
      fair, transparent, and comprehensive evaluation of students’ academic
      performance. The manipal university online mba follows a{" "}
      <b>structured assessment system</b> that combines continuous{" "}
      <b>internal evaluation with semester-end examinations</b>.
      <br />
      Unlike traditional programs such as manipal distance mba or manipal
      mba correspondence, the manipal online mba uses a{" "}
      <b>technology-driven and interactive evaluation approach</b>, ensuring
      that students are assessed consistently throughout the course.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Internal Assessment (Assignments & Quizzes)
      </h3>
      The online mba manipal internal assessment plays a crucial role in the
      overall evaluation process.
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>
          <strong>Total Marks:</strong> 30 marks per subject
        </li>
        <li>
          <strong>Assessment Type:</strong> Continuous Internal Assessment
          (CIA)
        </li>
        <li>
          <strong>Components:</strong> Assignments, Quizzes &amp; Practical
          submissions
        </li>
      </ul>
      Students enrolled in the manipal online mba course are required to
      submit <b>two assignments per subject</b>, and the average score is
      considered for internal evaluation.
      <br />
      This system ensures continuous learning and regular engagement, unlike
      manipal distance education mba, where evaluation is often limited to
      final exams.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Term-End Examination Pattern
      </h3>
      The manipal online mba exam pattern includes a structured semester-end
      examination conducted after each semester.
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          <strong>Duration:</strong> 3 Hours
        </li>
        <li>
          <strong>Maximum Marks:</strong> 70 marks
        </li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Question Paper Pattern:
      </h4>
      <table className="w-full border-collapse table-fixed border-gray-300 rounded-lg mb-2 overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Section
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Type of Questions
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Marks
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">
              Part A
            </td>
            <td className="border border-gray-300 px-4 py-3">
              MCQs (10 Questions × 2 Marks)
            </td>
            <td className="border border-gray-300 px-4 py-3">20 Marks</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">
              Part B
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Short Answer (4 out of 6)
            </td>
            <td className="border border-gray-300 px-4 py-3">20 Marks</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">
              Part C
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Long Answer (3 out of 4)
            </td>
            <td className="border border-gray-300 px-4 py-3">30 Marks</td>
          </tr>
        </tbody>
      </table>
      The online mba manipal exam structure ensures that students are
      evaluated on both conceptual understanding and analytical skills.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        Passing Criteria & Grading System
      </h3>
      To successfully complete the online mba manipal, students must meet
      the minimum passing criteria set by the university.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Passing Criteria:
      </h4>
      <ul className="list-disc pl-5 mt-2 mb-2 font-bold space-y-1">
        <li>Minimum 40% marks in Internal Assessment (IA)</li>
        <li>Minimum 40% marks in Term-End Examination (TEE)</li>
      </ul>
      Students must pass both components individually. If a student fails in
      one component, they need to reappear only for that part.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Grading System:
      </h4>
      <table className="w-full border-collapse table-fixed border-gray-300 mb-2 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Marks Range
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Grade
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Performance
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3">90–100</td>
            <td className="border border-gray-300 px-4 py-3">A+</td>
            <td className="border border-gray-300 px-4 py-3">
              Outstanding
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">80–89</td>
            <td className="border border-gray-300 px-4 py-3">A</td>
            <td className="border border-gray-300 px-4 py-3">Excellent</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">75–79</td>
            <td className="border border-gray-300 px-4 py-3">B+</td>
            <td className="border border-gray-300 px-4 py-3">
              Distinction
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">70–74</td>
            <td className="border border-gray-300 px-4 py-3">B</td>
            <td className="border border-gray-300 px-4 py-3">Very Good</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">60–69</td>
            <td className="border border-gray-300 px-4 py-3">C+</td>
            <td className="border border-gray-300 px-4 py-3">Good</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">50–59</td>
            <td className="border border-gray-300 px-4 py-3">C</td>
            <td className="border border-gray-300 px-4 py-3">Average</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">40–49</td>
            <td className="border border-gray-300 px-4 py-3">D+</td>
            <td className="border border-gray-300 px-4 py-3">Pass</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">Below 40</td>
            <td className="border border-gray-300 px-4 py-3">F</td>
            <td className="border border-gray-300 px-4 py-3">Reappear</td>
          </tr>
        </tbody>
      </table>
      The manipal university online mba grading system also includes:
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>
          <strong>GPA (Grade Point Average):</strong> Semester-wise
          performance
        </li>
        <li>
          <strong>CGPA (Cumulative Grade Point Average):</strong> Overall
          program performance
        </li>
      </ul>
      These scores play an important role in placements and career
      opportunities after the manipal online mba.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Online Proctored Exam System
      </h3>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Key Features:
      </h4>
      The online mba manipal exams are conducted through a secure and
      technology-enabled platform.
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Remote Proctored Exams</li>
        <li>AI-based monitoring systems</li>
        <li>Secure login and identity verification</li>
        <li>Real-time supervision</li>
      </ul>
      This ensures fairness and integrity in examinations while{" "}
      <b>allowing students to appear from any location</b>.<br />
      Unlike manipal distance mba, the online mba manipal provides a more
      advanced and reliable examination system supported by digital tools.
    </div>
  </section>

  <section className="max-w-6xl w-full mt-10 lg:mt-15 px-4 mx-auto">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Online MBA Manipal Placements, Salary & Career Opportunities
    </h2>
    <div className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      The online mba manipal placements ecosystem is designed to support
      students in building strong career opportunities across industries.
      The manipal university online mba not only focuses on academic
      learning but also provides <b>structured career support</b>, making it
      a preferred choice for students and working professionals.
      <br />
      Candidates searching for manipal online mba salary or online mba from
      manipal university career scope can expect strong growth opportunities
      depending on their experience, specialization, and skillset.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Placement Assistance & Career Support
      </h3>
      The manipal online mba offers comprehensive placement assistance to
      help students prepare for the job market.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Career Support Services:
      </h4>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Resume building and profile optimization</li>
        <li>Interview preparation sessions</li>
        <li>Career counseling and mentorship</li>
        <li>Access to job portals and hiring networks</li>
        <li>Industry webinars and skill development programs</li>
      </ul>
      The online mba manipal focuses on making students industry-ready by
      improving both technical and soft skills.
      <br />
      Unlike manipal distance mba, the online MBA provides{" "}
      <b>structured career support and industry interaction</b>, which
      enhances employability.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Average Salary After Online MBA Manipal
      </h3>
      The manipal online mba salary depends on various factors such as
      experience level, specialization, and industry demand.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        Expected Salary Range:
      </h4>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          <strong>Freshers:</strong> ₹4 - ₹6 LPA
        </li>
        <li>
          <strong>Mid-level professionals:</strong> ₹6 - ₹10 LPA
        </li>
        <li>
          <strong>Experienced candidates:</strong> ₹10 - ₹15 LPA+
        </li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Salary Comparison by Experience:
      </h4>
      <table className="w-full border-collapse table-fixed border-gray-300 mb-2 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Experience Level
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Average Salary
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3">0 - 2 Years</td>
            <td className="border border-gray-300 px-4 py-3">₹4 - 6 LPA</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">2 - 5 Years</td>
            <td className="border border-gray-300 px-4 py-3">₹6 - 10 LPA</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">5+ Years</td>
            <td className="border border-gray-300 px-4 py-3">
              ₹10 - 15 LPA+
            </td>
          </tr>
        </tbody>
      </table>
      Students pursuing the online mba manipal often see salary growth due
      to promotions, role transitions, and skill enhancement.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Top Job Roles & Career Options
      </h3>
      After completing the manipal university online mba, graduates can
      explore a wide range of career opportunities across industries.
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Marketing Manager</li>
        <li>Financial Analyst</li>
        <li>Human Resource Manager</li>
        <li>Operations Manager</li>
        <li>Business Analyst</li>
        <li>Data Analyst</li>
        <li>Project Manager</li>
        <li>Investment Banker</li>
      </ul>
      Students choosing online mba manipal specializations like Finance,
      Marketing, or Data Science can access high-demand roles in their
      respective domains.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Top Recruiters Hiring MBA Graduates
      </h3>
      Graduates of the manipal online mba are hired by leading companies
      across sectors such as IT, consulting, finance, and e-commerce.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Top Recruiters Include:
      </h4>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Accenture</li>
        <li>Infosys</li>
        <li>Tata Consultancy Services</li>
        <li>Deloitte</li>
        <li>IBM</li>
        <li>Wipro</li>
        <li>Capgemini</li>
      </ul>
      These companies actively hire MBA graduates for roles in{" "}
      <b>management, analytics, consulting, and operations</b>.
    </div>
  </section>

  <section className="max-w-6xl w-full mt-10 lg:mt-15 px-4 mx-auto">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Online MBA Manipal vs Distance MBA - Key Differences
    </h2>
    <div className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      Many students searching for online mba manipal often get confused
      between manipal distance mba, manipal mba correspondence, and the
      manipal online mba program. While both options allow flexible
      learning, they differ significantly in terms of teaching methodology,
      interaction, and career outcomes.
      <br />
      Understanding the difference between online mba manipal and manipal
      distance education mba is essential before making a decision, as it
      directly impacts your learning experience and career growth.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        What is Manipal Distance MBA?
      </h3>
      The manipal distance mba, also known as manipal mba correspondence or
      manipal distance education mba, is a self-paced learning program where
      students primarily rely on{" "}
      <b>study materials without regular live interaction</b>.
      <br />
      In a distance mba manipal university program:
      <ul className="list-disc pl-5 mb-2 space-y-1">
        <li>
          Learning is mostly based on printed or digital study material
        </li>
        <li>Limited or no live classes</li>
        <li>Minimal interaction with faculty</li>
        <li>Exams may be conducted periodically</li>
      </ul>
      While the manipal distance mba offers flexibility,{" "}
      <b>it lacks the interactive and immersive learning experience</b>{" "}
      provided by the online mba manipal.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Online MBA vs Distance MBA - Comparison Table
      </h3>
      To clearly understand the difference between online mba manipal and
      manipal distance mba, here is a detailed comparison:
      <table className="w-full border-collapse table-fixed border-gray-300 mb-2 mt-4 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Feature
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Online MBA Manipal
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Distance MBA Manipal
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Mode of Learning
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Live + Recorded Classes
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Self-paced Study
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Interaction
            </td>
            <td className="border border-gray-300 px-4 py-3">
              High (Live sessions, discussions)
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Very Limited
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">LMS Access</td>
            <td className="border border-gray-300 px-4 py-3">
              Advanced Digital Platform
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Basic Study Material
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Faculty Support
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Regular interaction
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Minimal support
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Career Support
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Placement assistance available
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Limited or none
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Flexibility
            </td>
            <td className="border border-gray-300 px-4 py-3">High</td>
            <td className="border border-gray-300 px-4 py-3">High</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Engagement Level
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Interactive
            </td>
            <td className="border border-gray-300 px-4 py-3">Passive</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Industry Exposure
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Case studies, webinars
            </td>
            <td className="border border-gray-300 px-4 py-3">Limited</td>
          </tr>
        </tbody>
      </table>
      The online mba manipal clearly provides a more engaging and
      career-oriented learning experience compared to the manipal distance
      education mba.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Which One is Better for You?
      </h3>
      Choosing between online mba manipal and manipal mba correspondence
      depends on your <b>learning style, career goals, and expectations</b>.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Choose Online MBA Manipal if you:
      </h4>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Want interactive learning with live classes</li>
        <li>Need placement support and career guidance</li>
        <li>Prefer practical exposure through case studies</li>
        <li>Are a working professional seeking career growth</li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Choose Distance MBA Manipal if you:
      </h4>
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Prefer self-study with minimal interaction</li>
        <li>Have limited time for live sessions</li>
        <li>Are only looking for a basic qualification</li>
      </ul>
      For most students and professionals, the{" "}
      <b>online mba manipal is a better choice than manipal distance mba</b>{" "}
      because it offers:
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Better learning experience</li>
        <li>Higher engagement</li>
        <li>Strong career support</li>
      </ul>
      The manipal online mba aligns more closely with modern industry
      requirements, making it a preferred option for career-focused
      individuals.
    </div>
  </section>

  <section className="max-w-6xl w-full mt-10 lg:mt-15 px-4 mx-auto">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Online MBA Manipal vs Other Universities
    </h2>
    <div className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      When choosing the right online MBA program, many students compare the
      online mba manipal with other top universities in India such as{" "}
      <Link
        href="https://radhyaeducationacademy.com/nmims/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3C087E] font-bold hover:underline"
      >
        NMIMS
      </Link>
      ,{" "}
      <Link
        href="https://radhyaeducationacademy.com/amity/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3C087E] font-bold hover:underline"
      >
        Amity
      </Link>
      , and{" "}
      <Link
        href="https://radhyaeducationacademy.com/jain/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3C087E] font-bold hover:underline"
      >
        Jain University
      </Link>
      . While all these institutions offer recognized online MBA programs,
      they differ in terms of fees, learning experience, specialization
      options, and career support.
      <br />
      Below is a detailed comparison of the manipal online mba with other
      popular online MBA programs to help you make an informed decision.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Manipal vs NMIMS Online MBA
      </h3>
      The online mba manipal and NMIMS Online MBA are among the most
      searched programs in India.
      <p className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Comparison Table
      </p>
      <table className="w-full border-collapse table-fixed border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Feature
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Online MBA Manipal
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              NMIMS Online MBA
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3">University</td>
            <td className="border border-gray-300 px-4 py-3">
              Manipal University Jaipur
            </td>
            <td className="border border-gray-300 px-4 py-3">NMIMS</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">Fees</td>
            <td className="border border-gray-300 px-4 py-3">
              ₹1.5  -  ₹1.8 Lakhs
            </td>
            <td className="border border-gray-300 px-4 py-3">
              ₹1.8  -  ₹2.2 Lakhs
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Learning Mode
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Live + Recorded
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Mostly Recorded + Live
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Specializations
            </td>
            <td className="border border-gray-300 px-4 py-3">Wide range</td>
            <td className="border border-gray-300 px-4 py-3">
              Limited compared to Manipal
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Placement Support
            </td>
            <td className="border border-gray-300 px-4 py-3">Yes</td>
            <td className="border border-gray-300 px-4 py-3">Yes</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Brand Value
            </td>
            <td className="border border-gray-300 px-4 py-3">Strong</td>
            <td className="border border-gray-300 px-4 py-3">
              Very Strong
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Key Insights :{" "}
      </p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          Choose{" "}
          <Link
            href="https://radhyaeducationacademy.com/nmims-online-mba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3C087E] font-bold hover:underline"
          >
            NMIMS Online MBA
          </Link>{" "}
          for stronger brand recognition
        </li>
        <li>
          Choose online mba manipal for better affordability and
          specialization variety
        </li>
      </ul>
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Manipal vs Amity Online MBA
      </h3>
      The online mba manipal is also frequently compared with{" "}
      <Link
        href="https://radhyaeducationacademy.com/amity/amity-online-mba/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3C087E] font-bold hover:underline"
      >
        Amity University Online MBA
      </Link>
      .
      <p className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Comparison Table
      </p>
      <table className="w-full border-collapse table-fixed border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Feature
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Online MBA Manipal
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Amity Online MBA
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3">University</td>
            <td className="border border-gray-300 px-4 py-3">
              Manipal University Jaipur
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Amity University Online
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">Fees</td>
            <td className="border border-gray-300 px-4 py-3">
              ₹1.5  -  ₹1.8 Lakhs
            </td>
            <td className="border border-gray-300 px-4 py-3">
              ₹1.6  -  ₹2 Lakhs
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Accreditation
            </td>
            <td className="border border-gray-300 px-4 py-3">
              UGC, NAAC A+
            </td>
            <td className="border border-gray-300 px-4 py-3">
              UGC, NAAC A+
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              LMS Platform
            </td>
            <td className="border border-gray-300 px-4 py-3">Advanced</td>
            <td className="border border-gray-300 px-4 py-3">Advanced</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Global Exposure
            </td>
            <td className="border border-gray-300 px-4 py-3">Good</td>
            <td className="border border-gray-300 px-4 py-3">Strong</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Career Support
            </td>
            <td className="border border-gray-300 px-4 py-3">Good</td>
            <td className="border border-gray-300 px-4 py-3">Strong</td>
          </tr>
        </tbody>
      </table>
      <p className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Key Insights :{" "}
      </p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Choose Amity Online MBA for global exposure</li>
        <li>Choose Manipal Online MBA for balanced cost + quality</li>
      </ul>
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Manipal vs Jain Online MBA
      </h3>
      Another popular comparison is between the online mba manipal and{" "}
      <Link
        href="https://radhyaeducationacademy.com/jain/jain-online-mba/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3C087E] font-bold hover:underline"
      >
        Jain University Online MBA
      </Link>
      .
      <p className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Comparison Table
      </p>
      <table className="w-full border-collapse table-fixed border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Feature
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Online MBA Manipal
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Jain Online MBA
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3">University</td>
            <td className="border border-gray-300 px-4 py-3">
              Manipal University Jaipur
            </td>
            <td className="border border-gray-300 px-4 py-3">
              Jain University
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">Fees</td>
            <td className="border border-gray-300 px-4 py-3">
              ₹1.5  -  ₹1.8 Lakhs
            </td>
            <td className="border border-gray-300 px-4 py-3">
              ₹1.6  -  ₹2 Lakhs
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Specializations
            </td>
            <td className="border border-gray-300 px-4 py-3">
              More diverse
            </td>
            <td className="border border-gray-300 px-4 py-3">Moderate</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Flexibility
            </td>
            <td className="border border-gray-300 px-4 py-3">High</td>
            <td className="border border-gray-300 px-4 py-3">High</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Placement Support
            </td>
            <td className="border border-gray-300 px-4 py-3">Yes</td>
            <td className="border border-gray-300 px-4 py-3">Yes</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Industry Exposure
            </td>
            <td className="border border-gray-300 px-4 py-3">Strong</td>
            <td className="border border-gray-300 px-4 py-3">Moderate</td>
          </tr>
        </tbody>
      </table>
      <p className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Key Insights :{" "}
      </p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Choose Jain Online MBA for flexibility</li>
        <li>
          Choose online mba manipal for better specialization options and
          structured learning
        </li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Overall Comparison Snapshot
      </h4>
      <table className="w-full border-collapse table-fixed border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Feature
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Manipal
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              NMIMS
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Amity
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Jain
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3">Fees</td>
            <td className="border border-gray-300 px-4 py-3">₹1.5–1.8L</td>
            <td className="border border-gray-300 px-4 py-3">₹1.8–2.2L</td>
            <td className="border border-gray-300 px-4 py-3">₹1.6–2L</td>
            <td className="border border-gray-300 px-4 py-3">₹1.6–2L</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Brand Value
            </td>
            <td className="border border-gray-300 px-4 py-3">Strong</td>
            <td className="border border-gray-300 px-4 py-3">
              Very Strong
            </td>
            <td className="border border-gray-300 px-4 py-3">Strong</td>
            <td className="border border-gray-300 px-4 py-3">Moderate</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Specializations
            </td>
            <td className="border border-gray-300 px-4 py-3">High</td>
            <td className="border border-gray-300 px-4 py-3">Medium</td>
            <td className="border border-gray-300 px-4 py-3">Medium</td>
            <td className="border border-gray-300 px-4 py-3">Medium</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">LMS</td>
            <td className="border border-gray-300 px-4 py-3">Advanced</td>
            <td className="border border-gray-300 px-4 py-3">Good</td>
            <td className="border border-gray-300 px-4 py-3">Advanced</td>
            <td className="border border-gray-300 px-4 py-3">Good</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-3">
              Placement Support
            </td>
            <td className="border border-gray-300 px-4 py-3">Yes</td>
            <td className="border border-gray-300 px-4 py-3">Yes</td>
            <td className="border border-gray-300 px-4 py-3">Yes</td>
            <td className="border border-gray-300 px-4 py-3">Yes</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Final Verdict: Which Online MBA is Best?
      </h3>
      Choosing between these universities depends on your priorities:
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Budget-conscious → Online MBA Manipal</li>
        <li>Brand-focused → NMIMS</li>
        <li>Global exposure → Amity</li>
        <li>Balanced option → Jain</li>
      </ul>
      Overall, the online mba manipal offers one of the best combinations of{" "}
      <b>affordability, flexibility, and specialization diversity</b>,
      making it a strong choice for most students.
       <MotionWrapper
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto flex justify-center mt-10 lg:justify-end"
          >
            <div className="relative w-full ">
             <CounsellingModal>
               <Image
                src="/manipal-details.webp"
                alt="Benefits of UGC entitled Manipal Online MBA"
                width={1152}
                height={650}
                className="object-contain w-full h-auto hover:scale-105 rounded-2xl shadow-md"
                priority
              />
             </CounsellingModal>
            </div>
          </MotionWrapper>
    </div>
  </section>


    <section className="max-w-6xl w-full mt-10 lg:mt-15 px-4 mx-auto">
    <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] mb-4">
      Is Online MBA Manipal Worth It in 2026?
    </h2>
    <div className="text-sm sm:text-base font-regular leading-normal text-justify text-gray-900">
      The online mba manipal has become one of the most popular choices
      among students and working professionals looking for a{" "}
      <b>flexible and industry-recognized MBA program</b>. With increasing
      demand for online management education, many candidates search for
      whether the manipal online mba is actually{" "}
      <b>
        worth the investment in terms of career growth, placements, learning
        quality, and degree value
      </b>
      .
      <br />
      The Manipal University Jaipur Online MBA is backed by UGC entitlement,
      NAAC A+ accreditation, and industry-oriented curriculum, making it a
      credible option for students seeking flexible higher education.
      <br />
      <br />
      However, like every program, the manipal university online mba also
      comes with its own strengths and limitations. Below is a detailed
      expert review to help you decide whether the online mba manipal is the
      right choice for you in 2026.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Pros of Online MBA Manipal
      </h3>
      The online mba manipal offers several advantages that make it a strong
      option compared to many other{" "}
      <Link
        href="https://radhyaeducationacademy.com/programs/online-mba/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3C087E] font-bold hover:underline"
      >
        online MBA programs
      </Link>{" "}
      in India.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        1. UGC-Entitled & NAAC A+ Accredited Degree
      </h4>
      One of the biggest strengths of the manipal online mba is its
      recognition and accreditation.
      <br />
      The program is:
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>
          <b>UGC-entitled</b>
        </li>
        <li>Offered by a NAAC A+ accredited university</li>
        <li>Recognized for online education in India and abroad</li>
      </ul>
      This ensures that the online mba from manipal university is valid for:
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Private jobs</li>
        <li>Government opportunities</li>
        <li>Higher education</li>
      </ul>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        2. Flexible Learning for Working Professionals
      </h4>
      The manipal mba online is specifically designed for:
      <ul className="list-disc pl-5 mt-2  mb-2 space-y-1">
        <li>Working professionals</li>
        <li>Entrepreneurs</li>
        <li>Students seeking flexible education</li>
      </ul>
      with:
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Live classes</li>
        <li>Recorded lectures</li>
        <li>Mobile LMS access</li>
      </ul>
      students can <b>learn without leaving their jobs</b>.<br />
      This is one of the biggest reasons why the online mba manipal is
      preferred over traditional MBA programs.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        3. Wide Range of Industry-Focused Specializations
      </h4>
      The manipal university online mba courses offer{" "}
      <b>multiple career-oriented specializations</b> such as:
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li> Finance</li>
        <li>Marketing</li>
        <li>HR Management</li>
        <li>Data Science & Analytics</li>
        <li>IT & FinTech</li>
        <li>Operations Management</li>
      </ul>
      This gives students flexibility to align their education with industry
      demand and career goals.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        4. Strong Learning Experience & LMS
      </h4>
      Unlike manipal distance mba or manipal mba correspondence, the online
      mba manipal offers an interactive digital learning environment.
      <br />
      Students get:
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li> Live faculty interaction</li>
        <li>Real-world case studies</li>
        <li>Online assignments & quizzes</li>
        <li>Career support services</li>
      </ul>
      This creates a more engaging and modern learning experience.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        5. Affordable Compared to Traditional MBA Programs
      </h4>
      The manipal online mba fees are significantly lower than many
      full-time MBA programs while still offering recognized credentials and
      placement support. The average fee range is approximately:{" "}
      <b>₹1.5 - ₹1.8 Lakhs</b> for the complete program
      <br />
      This makes the online mba manipal a cost-effective option for many
      students.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Cons of Online MBA Manipal
      </h3>
      While the online mba manipal has many advantages, students should also
      consider a few limitations before making a decision.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        1. Less Campus Exposure Compared to Full-Time MBA
      </h4>
      Since the program is fully online:
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>
          <b>Students may miss traditional campus life</b>
        </li>
        <li>Limited face-to-face networking opportunities</li>
      </ul>
      Candidates looking for full-time campus immersion may prefer regular
      MBA programs.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        2. Self-Discipline is Important
      </h4>
      The manipal online mba requires:
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Time management</li>
        <li>Consistent participation</li>
        <li>Self-motivation</li>
      </ul>
      Students who are not comfortable with online learning may find it
      challenging initially.
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        {" "}
        3. Placement Outcomes Depend on Skills & Experience
      </h4>
      While the university provides placement assistance, salary packages
      and job opportunities depend heavily on:
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li> Work experience</li>
        <li>Communication skills</li>
        <li>Specialization</li>
        <li>Industry demand</li>
      </ul>
      The online mba manipal can support career growth, but individual
      effort remains important.
      <h3 className="text-xl md:text-2xl font-bold text-[#270652] mb-2 mt-2">
        Final Verdict
      </h3>
      <h4 className="text-base md:text-xl font-bold text-[#270652] mb-2 mt-2">
        Is Online MBA Manipal Worth It in 2026?
      </h4>
      Yes - for most students and working professionals, the online mba
      manipal is worth considering in 2026 because it offers a strong
      balance of:
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Flexibility</li>
        <li>Recognition</li>
        <li>Affordability</li>
        <li>Industry-oriented curriculum</li>
        <li>Career support</li>
      </ul>
      The Manipal University Jaipur Online MBA is especially suitable for:
      <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
        <li>Working professionals seeking promotions</li>
        <li>Students wanting flexible MBA education</li>
        <li>
          Candidates looking for affordable alternatives to regular MBA
          programs
        </li>
      </ul>
      Compared to manipal distance mba or basic correspondence programs, the
      manipal online mba provides a{" "}
      <b>
        significantly better learning experience, modern LMS infrastructure,
        and improved industry relevance
      </b>
      .
    </div>
  </section>
  </div>
    <div className="lg:block justify-start sticky mt-15 max-w-[360px] relative overflow-visible">    
        <ContactNmims />
      </div>
  </div>
</>

  <FAQ faqs={faqs} heading="Online MBA Manipal FAQs" />
  <ConnectToday />
</main>
  );
}

