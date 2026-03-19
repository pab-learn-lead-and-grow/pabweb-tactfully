import { supabase } from "@/lib/supabaseClient";
import CollegeCardsClient from "./CollegeCardsClient";
import ConnectToday from "./NmimsSection/ConnectToday";

export default async function CollegeCards() {

  const { data: universities } = await supabase
    .from("universities")
    .select("*")
    .order("rating", { ascending: false });

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12 mt-10 lg:py-24">

        <h1 className="text-3xl md:text-5xl font-bold text-center text-[#3C087E] mb-4">
          Top Accredited Universities in India
        </h1>

        <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
          University Accreditations and Approvals refer to the official recognition granted to institutions by regulatory bodies to ensure they meet required academic and quality standards. In India, the University Grants Commission (UGC) is the statutory body that approves universities and authorizes them to award valid degrees. UGC approval means the university is legally recognized by the government. The National Assessment and Accreditation Council (NAAC) provides accreditation, which is a quality grading system that evaluates institutions based on teaching, infrastructure, research, and overall performance. Similarly, the All India Council for Technical Education (AICTE) grants approval to technical and management programs such as MBA and engineering courses.
        </p>

        <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
          Understanding these approvals is essential before enrolling in any online, distance, or regular degree program. A university may offer attractive courses, but without proper accreditation and approval, the degree may not be valid for government jobs, higher education, or certain professional opportunities. Verifying UGC recognition, checking NAAC grades, and confirming AICTE approval for technical programs ensures academic credibility and long-term career security. At Radhya Education Academy, we guide students in carefully evaluating university accreditations and approvals so they can choose recognized institutions with confidence and clarity.
        </p>

        <CollegeCardsClient universities={universities || []} />

      </div>

      <ConnectToday />
    </>
  );
}