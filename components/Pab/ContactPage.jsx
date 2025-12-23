"use client";
import { useState } from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { createSupabaseClient } from "@/lib/supabaseClient";
import ContactSection from "./ContactSection";
import ConnectToday from "../NmimsSection/ConnectToday";

export default function ContactPage() {
  const supabase = createSupabaseClient();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const { firstName, lastName, email, phone, message } = formData;

    // ✅ Insert form data into Supabase
    const { error } = await supabase.from("contact_messages").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        message,
      },
    ]);

    if (error) {
      console.error("❌ Error inserting data:", error);
      setStatus("Something went wrong. Please try again!");
    } else {
      setStatus("✅ Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }

    setLoading(false);
  };

  return (
    <div className="w-full text-[Inter]">
      {/* Top Header Section */}
      <div
        className="w-full h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/contactpab.png')",
        }}
      >
        <h1 className="text-5xl mt-10  lg:text-[56px] font-extrabold text-white drop-shadow-md">
          Contact us
        </h1>
      </div>

      {/* CONTACT CONTENT SECTION */}
      <ContactSection/>

      {/* Map Section */}
      <div className="w-full h-[300px] md:h-[400px] px-[50px] py-0 bg-white">
        <iframe
          title="PAB Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0859417925176!2d75.89152967349607!3d22.725046827369216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd35df0f5b3d%3A0x77dd968e66ca42f2!2sRafael%20Tower%2C%20Greater%20Kailash%20Road%2C%20Old%20Palasia%2C%20Indore%2C%20Madhya%20Pradesh%20452018!5e0!3m2!1sen!2sin!4v1762260085393!5m2!1sen!2sin"
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
