
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  BadgeCheck,
  Clock,
  Ticket,
  Users,
} from "lucide-react";
import CounsellingModal from "./Radhya/CounsellingModal";

export default function CollegeCardsClient({ universities }) {


  const LOGO_BUCKET_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/logos`;
  const CLG_BUCKET_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/News`;

  const getLogoUrl = (path) => (path ? `${LOGO_BUCKET_URL}/${path}` : null);
  const getImageUrl = (path) => (path ? `${CLG_BUCKET_URL}/${path}` : null);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {universities.map((uni) => (
          <div
            key={uni.university_id}
            className="bg-white rounded-2xl shadow-md p-5 transition hover:shadow-xl"
          >
            {/* IMAGE */}
            <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
              <Image
                src={getImageUrl(uni.image_url)}
                alt={uni.name}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />

              {/* LOGO */}
              <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow">
                <Image
                  src={getLogoUrl(uni.logo_url)}
                  alt={uni.name}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>

            {/* TITLE */}
            <div className="flex justify-between items-center text-black mt-4">
              <h3 className="text-2xl sm:text-3xl font-semibold">{uni.name}</h3>
              <span className="text-2xl sm:text-3xl font-semibold text-yellow-500">
                ⭐ {uni.rating}/5
              </span>
            </div>

            {/* ACCREDITATION */}
            <div className="inline-flex items-center gap-2 mt-4 bg-[#3C087E]/10 px-3 py-2 rounded-lg">
              {uni.accreditation?.map((acc, i) => (
                <Image
                  key={i}
                  src={getLogoUrl(acc.logo)}
                  alt={acc.name}
                  width={96}
                  height={60}
                  className="object-contain"
                />
              ))}
            </div>

            {/* METRICS */}
            <div className="mt-5 space-y-2 text-[10px] sm:text-sm font-medium text-black">
              {[
                { label: "Education Quality", value: uni.education_quality, icon: GraduationCap },
                { label: "Placement Assistance", value: uni.placement_assistance, icon: Briefcase },
                { label: "Brand Value", value: uni.brand_value, icon: BadgeCheck },
                { label: "Response Time", value: uni.response_time, icon: Clock },
                { label: "Ticket Resolution", value: uni.ticket_resolution, icon: Ticket },
                { label: "Alumni", value: uni.alumni_strength, icon: Users },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#3C087E] rounded-full" />
                  <span className="w-40">{label}</span>

                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#3C087E] text-white">
                    <Icon size={14} />
                  </div>

                  <div className="w-[40%] bg-[#F0F2F5] rounded-full h-2">
                    <div
                      className="bg-[#1755E7] h-2 rounded-full"
                      style={{ width: `${(Number(value) || 0) * 10}%` }}
                    />
                  </div>

                  <span className="w-10 text-right text-[#3C087E]">
                    {value}/10
                  </span>
                </div>
              ))}
            </div>

            {/* FEES */}
            <div className="flex justify-between items-center text-xl lg:text-2xl mt-6 bg-[#FFD66C]/10 rounded-lg p-3">
              <span className="font-semibold text-[#3C087E]">
                Fees: ₹{uni.fees?.toLocaleString()}
              </span>
              {uni.emi_available && (
                <span className="italic text-[#3C087E]">EMI Available</span>
              )}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-4">
              <CounsellingModal>
                <button
                className="px-5 bg-[#FFD66C] hover:scale-105 hover:bg-yellow-500 text-black py-2 rounded-lg"
              >
                View Details
              </button>
              </CounsellingModal>

              <CounsellingModal>
                <button
                className="px-5 bg-[#3C087E] hover:scale-105 hover:bg-purple-800 text-white py-2 rounded-lg"
              >
                Download Brochure
              </button>
              </CounsellingModal>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MORE */}
      <div className="flex justify-end mt-10">
        <Link href="/universitieslist">
          <button className="bg-[#3C087E] text-white px-8 py-3 rounded-full text-sm font-semibold shadow-md hover:scale-105">
            View More
          </button>
        </Link>
      </div>
    </>
  );
}