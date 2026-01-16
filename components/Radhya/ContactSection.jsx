"use client";

import { useState } from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function ContactSection() {

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

    if (!/^\d{10}$/.test(phone)) {
      setStatus("❌ Phone number must be exactly 10 digits.");
      setLoading(false);
      return;
    }

    try {
      // Insert into contact_messages table
      const { data, error } = await supabase.from("contact_messages").insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          message,
        },
      ]);

      if (error) {
        setStatus("❌ Something went wrong. Please try again!");
        throw error;
      }

      // Send emails (only on successful insert)
      try {
        const response = await fetch("/api/contact-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            message,
          }),
        });

        if (!response.ok) {
          console.error("Email notification failed");
        }
      } catch (emailError) {
        console.error("Email notification error:", emailError);
        // Don't fail the form if email fails
      }

      setStatus("✅ Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("❌ Error sending message: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-8 md:px-10 py-12 bg-white grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT SECTION */}
      <div className="flex flex-col bg-white justify-center space-y-3">
        <h2 className="text-3xl md:text-4xl xl:text-[54px] font-bold leading-snug text-black">
          You Will Grow,
          <br /> You Will Succeed.
          <br /> We Promise That
        </h2>

        <p className="text-black mx-2 font-regular">Radhya Education Academy</p>

        {/* FIXED: ALWAYS 2×2 GRID */}
        <div className="grid grid-cols-2 mx-2 gap-6 mt-8">
          <div className="flex flex-col space-y-2">
            <Phone className="text-[#3C087E] w-6 h-6" />
            <span className="font-semibold text-lg text-black">
              Call for inquiry
            </span>
            <a
              href="tel:xxxxxxxxx"
              className="text-black text-sm hover:text-[#3C087E] underline"
              aria-label="Call Radhya Education"
            >
              +91 xxxxxxxxx
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <Mail className="text-[#3C087E] w-6 h-6" />

            <span className="font-semibold text-lg text-black">
              Send us email
            </span>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@radhyaeducationacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xs md:text-sm break-words hover:text-[#3C087E] underline"
            >
              contact@radhyaeducationacademy.com
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <Clock className="text-[#3C087E] w-6 h-6" />
            <span className="font-semibold text-lg text-black">
              Opening hours
            </span>
            <span className="text-black text-sm whitespace-nowrap">
              Mon-Sat: 10AM-10PM
            </span>
          </div>

          <div className="flex flex-col space-y-2">
            <MapPin className="text-[#3C087E] w-6 h-6" />
            <span className="font-semibold text-lg text-black">Office</span>
            <span className="text-black text-sm">Gwalior, MP</span>
          </div>
        </div>
      </div>

      {/* RIGHT — FORM SECTION */}
      <div className=" p-6 rounded-2xl shadow-md bg-[#3C087E]/10">
        <h3 className="text-2xl font-semibold text-center text-black mb-1">
          Contact Info
        </h3>
        <p className="text-black text-center mb-6">Send us a message</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* FIRST + LAST NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-black font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-black font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your E-mail address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-black font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="XXXXXXXXXX"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-black font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-[#9542FF] to-[#180135] text-white font-semibold py-2 rounded-lg shadow-md
      transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-xl
      active:scale-100"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <p
              className={`text-center mt-3 font-medium ${
                status.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
