import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import SpecializationSection from "./SpecializationSection";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online BA valid in India?",
    a: "Yes, an Online BA is valid if the university is UGC-approved.",
  },
  {
    q: "Can I do an Online BA after 12th?",
    a: "Yes, students can pursue an Online BA after completing 10+2.",
  },
  {
    q: "What is the duration of an Online BA?",
    a: "Typically 3 years divided into 6 semesters.",
  },
  {
    q: "Is Online BA good for career?",
    a: "Yes, it builds strong analytical and communication skills and opens diverse career opportunities.",
  },
  {
    q: "Can I do MA after Online BA?",
    a: "Yes, Online BA graduates are eligible for MA and other postgraduate programs.",
  },
];

const roles = [
  "Content Writer",
  "Journalist",
  "Public Relations Executive",
  "Social Worker",
  "Teacher",
  "Civil Services Aspirant",
  "Research Assistant",
  "Human Resource Executive",
];

const specializationsData = [
  {
    slug: "english",
    specialization_name: "English",
    cover_image: "/specializations/english.png",
  },
  {
    slug: "sociology",
    specialization_name: "Sociology",
    cover_image: "/specializations/sociology.png",
  },
  {
    slug: "economics",
    specialization_name: "Economics",
    cover_image: "/specializations/economics.png",
  },
  {
    slug: "political science",
    specialization_name: "Political Science",
    cover_image: "/specializations/political.png",
  },
  {
    slug: "journalism",
    specialization_name: "Journalism and Mass Communication",
    cover_image: "/specializations/journalism.png",
  },
];

export default function ba() {
  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="bg-white py-12 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center mt-10 lg:mt-0">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
              Online BA in India 2026: Top Colleges, Fees, Admission &
              Eligibility
            </h1>

            <p className="text-black leading-relaxed font-inter text-center md:text-left text-xs lg:text-[18px] mb-10">
              Online BA programs have gained significant popularity in recent
              years, offering flexible learning opportunities for students and
              aspiring professionals alike. These programs are designed to
              deliver industry-relevant knowledge through digital platforms,
              combining live sessions with recorded content. Learners can
              develop foundational skills in areas such as humanities, social
              sciences, and communication, while balancing personal and academic
              commitments. Additionally, online BA programs emphasize practical
              exposure through projects, case studies, and real-world
              applications, helping students build confidence and prepare for
              careers in a competitive environment effectively today while
              enhancing critical thinking and communication abilities
              consistently.
            </p>

            <p className="text-black leading-relaxed font-inter text-center md:text-left text-xs lg:text-[18px] mb-10">
              Online BA programs typically have a duration of 3 years,
              structured into 6 semesters, making them suitable for students
              after completing their 12th education. These programs are
              recognized by UGC-approved universities, ensuring their validity
              and acceptance across industries. With a semester-based structure,
              learners can gradually build expertise in core subjects like
              psychology, sociology, and political science while also choosing
              specializations based on their career goals, ensuring a
              well-rounded and industry-relevant education experience.
            </p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
          <div className=" relative max-w-sm mx-auto justify-center">
            {" "}
            <div className="max-w-7xl overflow-hidden">
              <Image
                src="/mba.png"
                alt="Eligibility criteria for Online MBA admission in India"
                width={461}
                height={644}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] xl:text-[64px] font-bold text-[#270652] leading-tight mb-6">
            Who Should Pursue an Online BA?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div>
              <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
                <p>
                  An Online BA is ideal for students who want to build a strong
                  foundation in humanities and social sciences right after
                  completing their 12th. It offers flexibility, affordability,
                  and industry-relevant learning for individuals at the
                  beginning of their academic and professional journey.
                </p>

                <p>
                  Whether you aim to pursue higher education like MA, prepare
                  for government exams, or explore careers in media, education,
                  or public services, an Online BA equips you with essential
                  knowledge and critical thinking skills.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:pt-2">
              <ul className="space-y-6">
                {[
                  "Students after 12th interested in humanities",
                  "Aspirants preparing for government exams",
                  "Individuals interested in social sciences",
                  "Students seeking flexible and affordable education",
                  "Learners interested in media and communication",
                  "Future professionals in public services and education",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-[#4D964F] rounded-full group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-lg sm:text-xl font-medium text-[#374151] group-hover:text-[#345895] transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ProgramsList title="Top Online BA Universities" categoryId="ba" />

      <WhyProgramSection
        title="Why Choose an Online BA Program?"
        description={[
          "Flexible learning format suitable for students and early learners in humanities and social sciences.",
          "UGC-approved degrees ensure credibility and recognition across academic and professional fields.",
          "Strong foundation in subjects like psychology, sociology, and political science.",
          "Affordable compared to traditional on-campus programs.",
          "Prepares students for higher studies, government exams, and diverse career opportunities.",
        ]}
      />
      <section className="w-full px-4 md:px-10 lg:px-20 py-12 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Title animation */}
          <MotionWrapper
            as="h2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-[32px] md:text-5xl lg:text-[64px] font-bold text-[#270652]"
          >
            Eligibility for Online BA Program
          </MotionWrapper>

          {/* Card container */}
          <MotionWrapper
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-col md:flex-row max-w-7xl items-center gap-10"
          >
            {/* Left text */}
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-black  text-[20px] md:text-3xl font-medium leading-relaxed md:w-3/5"
            >
              10+2 (Higher Secondary) from a recognised board with minimum
              required percentage as per university guidelines.
            </MotionWrapper>

            {/* Right image animation */}
            <MotionWrapper
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-[45%] w-full flex justify-end pr-0 mt-0 md:pr-0"
            >
              <Image
                src="/nmims/nmimsEligibility.png"
                alt="Eligibility criteria for Online BA admission in India"
                width={520}
                height={350}
                className="w-full max-w-105  h-auto rounded-xl object-contain"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </MotionWrapper>
          </MotionWrapper>
        </div>
      </section>
      <section className="w-full px-4 md:px-12 lg:px-20 py-12 font-sans">
        <MotionWrapper
          as="h2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="block text-center mx-auto mb-10 text-[32px] md:text-5xl lg:text-[64px] font-bold text-[#270652]"
        >
          Fees for Online BA Program
        </MotionWrapper>
        <div className="max-w-4xl mx-auto bg-[#3C087E]/5 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm">
          {/* Sub-heading */}
          <p className="text-black text-sm font-semibold md:text-base mb-6 leading-relaxed">
            Note: To get a detailed understanding of the fee structure, contact
            a student counsellor.
          </p>

          {/* Bullet Points */}
          <ul className="text-black text-sm md:text-base space-y-2 leading-relaxed pl-5 list-disc">
            <li>
              Admission processing fees may be applicable at the time of
              enrolment, depending on the university.
            </li>
            <li>
              An initial registration amount is usually required to confirm
              admission, which is adjusted in the total program fee.
            </li>
            <li>
              Examination fees are generally charged per subject and per
              attempt, as per university guidelines.
            </li>
            <li>
              Project or dissertation fees may also be applicable based on the
              program structure and university policies.
            </li>
            <li>
              Students may have the option to pay the full program fee in one go
              or choose flexible payment plans, depending on the university.
            </li>
            <li>
              The fee structure, including all components, is subject to change
              as per the university’s discretion.
            </li>
            <li>
              Payment methods (such as online transfer, demand draft, etc.) and
              payee details vary from one university to another.
            </li>
            <li>
              Many universities offer financial assistance options such as
              education loans, EMI facilities, or no-cost EMI plans.
            </li>
            <li>
              Students are advised to check eligibility with the respective
              university or counsellor.
            </li>
          </ul>

          {/* Scholarship Policy */}
          <div className="mt-8">
            <p className="text-black text-lg md:text-xl font-bold mb-2">
              Scholarship Policy
            </p>

            <p className="text-black text-sm md:text-base leading-relaxed">
              Scholarships and financial assistance options may be available
              depending on the university.Common scholarship categories may
              include:
            </p>
            <ul className="text-black text-sm md:text-base space-y-2 leading-relaxed pl-5 list-disc">
              <li>Defence personnel and their families</li>
              <li>Merit-based scholarships Corporate or alumni benefits</li>
              <li>
                The eligibility criteria, percentage of scholarship, and
                applicable terms vary by university.
              </li>
              <li>
                Students are advised to connect with a counsellor to explore
                available scholarship opportunities and eligibility.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SpecializationSection
        title=" Online BA Specializations"
        description={[
          "Choose from industry-relevant BA specializations designed for diverse career paths.",
          "Each specialization focuses on real-world skills in humanities, communication, and social sciences.",
        ]}
        programName="BA"
        specializations={specializationsData}
      />

      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#270652] leading-tight mb-6">
                Career Opportunities After Online BA
              </h2>

              <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
                <p>
                  An Online BA opens doors to diverse career opportunities
                  across fields such as education, media, public services, and
                  social work. It equips students with critical thinking,
                  communication, and analytical skills required to begin their
                  professional journey.
                </p>

                <p>
                  Students can either enter the workforce or pursue higher
                  education like MA to unlock advanced career opportunities in
                  specialized fields.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:pt-2 lg:pl-20">
              <ul className="space-y-6">
                {roles.map((role, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-[#4D964F] rounded-full group-hover:scale-110 transition-transform duration-200" />

                    <span className="text-lg sm:text-xl font-medium text-[#374151] group-hover:text-[#345895] transition-colors duration-200">
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] xl:text-[64px] font-bold text-[#270652] leading-tight mb-6">
            Future of Online BA
          </h2>

          <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
            <p>
              The future of Online BA programs is evolving with advancements in
              digital learning, making education more accessible and
              skill-oriented for students after 12th. With the integration of
              interactive platforms and real-world exposure, students can build
              strong foundations in humanities and social sciences.
            </p>

            <p>
              As organizations increasingly value communication, analytical
              thinking, and adaptability, Online BA graduates are gaining better
              opportunities across diverse fields. The program also serves as a
              strong stepping stone for higher education and competitive
              examinations.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div className="w-full mt-10 flex justify-center lg:justify-start">
              <div className="w-full  max-w-[500px]">
                <Image
                  src="/nmimsCareer.png"
                  alt="Career scope and future opportunities after Online BBA"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain rounded-xl"
                  priority
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:pt-10">
              <ul className="space-y-6">
                {[
                  "Growing demand for communication professionals",
                  "Expansion of media and public service careers",
                  "Rise of digital and content-driven roles",
                  "Opportunities in government and civil services",
                  "Focus on analytical and critical thinking skills",
                  "Pathway to MA and higher studies",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-[#4D964F] rounded-full group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-lg sm:text-xl font-medium text-[#374151] group-hover:text-[#345895] transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <ConnectToday />
    </main>
  );
}
