"use client";
import ContactSection from "./ContactSection";
import Image from "next/image";
import ConnectToday from "../NmimsSection/ConnectToday";

export default function ContactPage() {

  return (
    <div className="w-full text-[Inter]">
      {/* Top Header Section */}
     <div className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden">
  <Image
    src="/contactRadhya.png"
    alt="Contact Radhya"
    fill
    priority
    className="object-cover object-center"
  />

  <h1 className="relative z-10 text-5xl mt-10 lg:text-[56px] xl:text-[64px] font-extrabold text-white drop-shadow-md">
    Contact us
  </h1>
</div>


      {/* CONTACT CONTENT SECTION */}
      <ContactSection/>

      {/* Map Section */}
      <div className="w-full h-[300px] md:h-[400px] px-[50px] py-0 bg-purple-50">
       <iframe
  title="Radhya Location"
  src="https://www.google.com/maps?q=25,+Mayur+Vihar,+BP+City,+Gwalior,+Madhya+Pradesh,+474006&output=embed"
  width="100%"
  height="100%"
  allowFullScreen=""
  loading="lazy"
  className="rounded-2xl border border-gray-200"
></iframe>

      </div>
      <ConnectToday/>
    </div>
  );
}
