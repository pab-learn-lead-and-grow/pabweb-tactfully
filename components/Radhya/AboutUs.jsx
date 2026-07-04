import MotionWrapper from "./MotionWrapper";
import Image from "next/image";
import ConnectToday from "../NmimsSection/ConnectToday";

export default function WhatSetsUsApart() {
  const items = [
    {
      title: "Dedicated Counsellor From Day One",
      desc: "A dedicated point of contact who supports you through every step of your journey. No confusion. No chaos. Just clarity.",
      tags: ["Support", "Clarity", "Trust"],
      img: "/aboutUs/set1.png",
    },
    {
      title: "Real experts, real advice",
      desc: "Subject Matter Experts who understand your goals and give advice that actually works in real life.",
      tags: ["Expertise", "Insight", "Direction"],
      img: "/aboutUs/set2.png",
    },
    {
      title: "Career-Focused Program Recommendations",
      desc: "Guidance to choose online and offline programs that deliver real results, not just another certificate.",
      tags: ["Growth", "Outcomes", "Opportunity"],
      img: "/aboutUs/set3.png",
    },
    {
      title: "Help exactly when you need it",
      desc: "Doubts solved right away. No waiting. No ticket systems. No stress.",
      tags: ["Instant", "Accessible", "Reliable"],
      img: "/aboutUs/set4.png",
    },
    {
      title: "Support Beyond Admission",
      desc: "Regular check-ins to keep you moving forward and improving continuously.",
      tags: ["Accountability", "Consistency", "Momentum"],
      img: "/aboutUs/set5.png",
    },
  ];

  return (
    <main>
    <section className="max-w-7xl mx-auto bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-16 font-sans">
  {/* HEADER */}
 <MotionWrapper
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="md:mb-20 mt-12"
>
  <div className="flex justify-center lg:justify-start">
    <div className="inline-block text-center lg:text-left">
      <h2
        className="text-4xl md:text-5xl lg:text-[96px]
        font-bold leading-none
        bg-[linear-gradient(90deg,#FFB901_0%,#AD6F35_35.58%,#57216D_52.4%,#3C087E_100%)]
        bg-clip-text text-transparent"
      >
        At Radhya
      </h2>
      {/* SEO H1 (hidden) */}
<h1 className="sr-only">
  About Radhya Education Academy - Online Education & Career Counselling Experts
</h1>

      <div className="flex justify-center lg:justify-end">
        <p className="handdrawn-underline text-sm md:text-xl text-[#D68E0E] italic leading-none mt-2">
          Education Academy
        </p>
      </div>
    </div>
  </div>
</MotionWrapper>

  {/* MAIN GRID */}
  <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 max-w-7xl mx-auto mt-20">
    {/* LEFT STACK (Education + Learning) */}
    <div className="flex flex-col gap-6">
      {/* EDUCATION */}
      <MotionWrapper
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
        className="
          relative
          rounded-2xl
          bg-linear-to-br from-[#270562] to-[#3C087E]/50
          text-white
          p-5 md:p-6
          shadow-lg
          lg:max-w-[90%]
          lg:h-[250px]
          lg:self-end
          overflow-hidden
        "
      >
        {/* TEXT BLOCK – leave room for image on lg+ */}
        <div className="relative z-10 lg:pr-[40%]">
          <h3 className="text-lg md:text-2xl  font-semibold mb-3">
            Education with Real Return on Learning
          </h3>

          <p className="text-sm leading-relaxed opacity-90">
            We believe education isn't about collecting degrees. Our focus is
            helping professionals achieve measurable growth through better
            opportunities, higher salaries, and leadership impact.
          </p>
        </div>

        {/* IMAGE – bottom-right on lg+, normal flow on mobile */}
        <div className="
          mt-4
          flex justify-center
          lg:mt-0
          lg:absolute lg:bottom-0 lg:right-0
          lg:w-[45%]
          lg:justify-end
        ">
          <Image
            src="/aboutUs/aboutEd.png"
            alt="Education"
            width={240}
            height={200}
            className="w-[140px] md:w-40 lg:w-full lg:p-6 h-auto object-contain"
          />
        </div>
      </MotionWrapper>

      {/* LEARNING */}
      <MotionWrapper
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="
          relative
          rounded-2xl
           bg-linear-to-br from-[#270562] to-[#3C087E]/50
          text-white
          p-6 md:p-8
          shadow-lg
          lg:max-w-[70%]
          lg:self-end
          overflow-hidden
        "
      >
        {/* TEXT BLOCK – padded so it never overlaps image */}
        <div className="relative z-10 ">
          <h3 className="text-lg md:text-2xl font-semibold lg:pr-[6%] mb-3 leading-tight">
            Smarter & Purpose-Driven
            Learning Choices
          </h3>

          <p className="text-sm leading-relaxed lg:pr-[35%] xl:pr-[55%] opacity-90">
            In a world full of online and offline education opportunities, we stand out by making learning
            personal, practical, and aligned with real goals. We guide
            individuals to choose programs that genuinely support their
            ambitions.
          </p>
        </div>

        {/* IMAGE – bottom-right on lg+, stacked below on mobile */}
        <div className="
          mt-4
          flex justify-center
          lg:mt-0
          lg:absolute lg:bottom-0 lg:right-0
          lg:w-[55%]
          lg:justify-end
        ">
          <Image
            src="/aboutUs/aboutLearn.png"
            alt="Learning"
            width={420}
            height={320}
            className="w-40 md:w-[200px] lg:w-full lg:p-6 h-auto object-contain"
          />
        </div>
      </MotionWrapper>
    </div>

    {/* RIGHT CARD (Career) */}
    <MotionWrapper
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative rounded-3xl
      bg-linear-to-b from-[#270562] to-[#3C087E]/50
        text-white shadow-xl
        flex flex-col
        lg:max-w-[75%]
        lg:self-start
        xl:-translate-y-38

      "
    >
      <div className="p-6 md:p-8 ">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          Not Just Courses -<br/> Career Transformation
        </h3>

        <p className="text-sm leading-relaxed opacity-95">
          We don't sell courses or push universities. We understand careers and
  guide learners toward informed decisions that deliver real, lasting
  outcomes. Every recommendation is backed by personalized counselling,
  transparent guidance, and a commitment to helping learners build rewarding
  careers through the right educational choices.
        </p>
      </div>

      <div className="mt-4 flex justify-center">
        <Image
          src="/aboutUs/aboutCar.png"
          alt="Career"
          width={400}
          height={360}
          className="w-[180px] md:w-[260px] lg:w-[450px] h-auto object-contain"
        />
      </div>
    </MotionWrapper>
  </div>
</section>
<MotionWrapper
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-20"
>
  <div className="rounded-3xl bg-linear-to-br from-[#270562] to-[#3C087E] text-white p-8 md:p-12 shadow-xl overflow-hidden relative">

    <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

    <div className="relative z-10 max-w-5xl">

      <span className="inline-flex px-4 py-2 rounded-full bg-white/10 text-[#EEA727] text-sm font-medium">
        About Radhya Education Academy
      </span>

      <h2 className="text-[28px] md:text-4xl font-bold mt-2 mb-6">
        Helping Students Make Smarter Education Decisions
      </h2>

      <p className="text-white/90 leading-8 text-base md:text-lg">
        Radhya Education Academy is a career-focused education counselling
        platform dedicated to helping students and working professionals
        confidently choose the right university and program. We simplify the
        decision-making process by comparing accredited universities,
        understanding individual career goals, and providing personalized
        counselling that goes beyond admissions. Our mission is to empower every
        learner with transparent information, expert guidance, and continuous
        support throughout their higher education journey.
      </p>

    </div>

  </div>
</MotionWrapper>
<MotionWrapper
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-10"
>
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      {
        value: "10,000+",
        label: "Students Guided",
      },
      {
        value: "50+",
        label: "University Partners",
      },
      {
        value: "100+",
        label: "Programs Compared",
      },
      {
        value: "4.8/5",
        label: "Average Student Rating",
      },
    ].map((item) => (
      <div
        key={item.label}
        className="rounded-2xl border border-[#3C087E] p-8 shadow-lg text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="text-4xl font-bold text-[#EEA727]">
          {item.value}
        </h3>

        <p className="mt-3 text-[#3C087E] ">
          {item.label}
        </p>
      </div>
    ))}

  </div>
</MotionWrapper>

      <section className="max-w-7xl mx-auto font-sans px-6 md:px-16 lg:px-24 py-16">
        {/* HEADING */}
       <MotionWrapper
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  <h2
    className="
      text-4xl md:text-5xl lg:text-[64px]
      font-bold
      bg-[#270652]
      bg-clip-text text-transparent
      leading-tight mb-2
    "
  >
    What Sets Us Apart
  </h2>
</MotionWrapper>

        <p className="text-[#333333] text-sm md:text-base lg:text-xl mb-12">
          We turn direction into transformation.
        </p>

        {/* CONTENT BLOCKS */}
        <div className="flex flex-col gap-16">
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
                        alt={item.title}
                        width={500}
                        height={350}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div className={isRight ? "md:order-1" : "md:order-2"}>
                  <h3 className="text-xl md:text-[25px] lg:text-[48px] font-bold text-[#D68E0E] leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[#A4A4A4] mt-3 max-w-md">{item.desc}</p>

                  <div className="flex flex-wrap gap-1 lg:gap-2 mt-5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1 lg:px-5 lg:py-2 border border-gray-300 rounded-full text-[10px]  md:text-sm text-black hover:bg-gray-100 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </section>

 <MotionWrapper
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="max-w-7xl mx-auto px-4 sm:px-8 bg-[#3C087E]/10  lg:px-16 py-20"
>
  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-[2fr_1.5fr_1.5fr]
      gap-8
      items-start
    "
  >
    {/* ================= LEFT CONTENT ================= */}

    <div className="md:pr-6">

      <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight text-[#270652]">
        Meet Our Expert Counsellors
      </h2>

      <p className="mt-6 text-base md:text-lg leading-8 text-gray-700 max-w-xl">
        Behind every successful admission is a counsellor who understands your
        goals, listens to your aspirations, and helps you choose the right
        university with complete transparency, expert advice, and personalized
        guidance throughout your education journey.
      </p>

    </div>

    {/* ================= CARD 1 ================= */}

    <div
      className="
        rounded-3xl
        border
        border-[#3C087E]/10
        bg-white
        shadow-lg
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        h-full
      "
    >

      <div className="p-6 flex flex-col">

        <h3 className="text-2xl font-bold text-[#270652]">
          Mayank Sharma
        </h3>

        <p className="mt-1 text-[#D68E0E] font-semibold">
          Senior Career Counsellor
        </p>

        <p className="mt-4 text-sm leading-7 text-gray-600 flex-grow">
          Specializes in Online MBA admissions, university comparisons,
          scholarship guidance,specialization guidance and career planning for working professionals.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          <span className="rounded-full bg-[#3C087E]/10 px-3 py-1 text-xs font-medium text-[#3C087E]">
            Online MBA
          </span>

          <span className="rounded-full bg-[#EEA727]/15 px-3 py-1 text-xs font-medium text-[#D68E0E]">
            Career Guidance
          </span>

        </div>

      </div>

    </div>

    {/* ================= CARD 2 ================= */}

    <div
      className="
        rounded-3xl
        border
        border-[#3C087E]/10
        bg-white
        shadow-lg
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        h-full
      "
    >

      <div className="p-6 flex flex-col">

        <h3 className="text-2xl font-bold text-[#270652]">
          Priya Mehta
        </h3>

        <p className="mt-1 text-[#D68E0E] font-semibold">
          Admission & University Advisor
        </p>

        <p className="mt-4 text-sm leading-7 text-gray-600 flex-grow">
          Helps students compare universities, understand eligibility,
          evaluate programmes, and complete admissions with confidence and
          personalized support.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          <span className="rounded-full bg-[#3C087E]/10 px-3 py-1 text-xs font-medium text-[#3C087E]">
            Admissions
          </span>

          <span className="rounded-full bg-[#EEA727]/15 px-3 py-1 text-xs font-medium text-[#D68E0E]">
            University Comparison
          </span>

        </div>

      </div>

    </div>

  </div>
</MotionWrapper>
      <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-20 font-sans">
        <div className="max-w-7xl mx-auto ">
          {/* VISION */}
          <MotionWrapper
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex gap-6 mb-10 items-start"
          >
            {/* Image */}
            <div className="shrink-0">
              <Image
                src="/aboutUs/missionAndVision.png"
                alt="Vision"
                width={100}
                height={220}
                className="w-[120px] md:w-[110px] lg:w-[70px] xl:w-[90px] object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <p className="inline-block bg-linear-to-r from-[#3C087E] to-[#FFB901] bg-clip-text text-transparent font-semibold italic text-lg mb-1">
                Vision
              </p>

              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black mb-3">
                The Big Picture
              </h3>

              <p className="text-gray-600 text-xs md:text-lg lg:text-[15px] xl:text-[22px] leading-tight max-w-6xl">
             We aspire to be the leading provider of comprehensive learning and counselling solutions, empowering students, working professionals, and organizations to make informed and confident education choices. Whether it is online learning opportunities or traditional offline education pathways, our goal is to guide individuals and teams toward the right programs, equipping them with the knowledge, skills, and clarity needed to achieve their academic and professional aspirations in an ever-evolving world.</p>
            </div>
          </MotionWrapper>

          {/* MISSION */}
          <MotionWrapper
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex gap-6 items-start"
          >
            {/* Image */}
            <div className="shrink-0">
              <Image
                src="/aboutUs/missionAndVision.png"
                alt="Mission"
                width={100}
                height={220}
                className="w-[120px] md:w-[110px] lg:w-[70px] xl:w-[90px] object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <p className= "inline-block bg-linear-to-r from-[#3C087E] to-[#FFB901] bg-clip-text text-transparent font-semibold italic text-lg mb-1">
                 Mission
              </p>

              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black mb-3">
                The Game Plan
              </h3>

              <p className="text-gray-600 text-xs md:text-lg lg:text-[15px] xl:text-[22px] leading-tight max-w-6xl">
              Our mission is to support students and working professionals as they navigate their education and career paths, helping them overcome barriers and achieve meaningful growth. By providing reliable information, personalized counselling, and access to suitable online and offline learning opportunities, we enable smarter decision-making and create transformative experiences that empower individuals to reach their full potential and achieve their biggest career goals.</p>
            </div>
          </MotionWrapper>
        </div>
      </section>
      <ConnectToday />
    </main>
  );
}
