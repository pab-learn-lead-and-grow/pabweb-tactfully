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
    src="/contact.jpg"
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
      <div className="w-full h-[300px] md:h-[400px] px-[50px] py-0 ">
       <iframe
  title="Radhya Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228190.92228516185!2d78.02608783441862!3d26.214061912373356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1768547400757!5m2!1sen!2sin"
  width="100%"
  height="100%"
  allowFullScreen=""
  loading="lazy"
  className="rounded-2xl border bg-purple-50 border-gray-200"
></iframe>

      </div>
      <ConnectToday/>
    </div>
  );
}
