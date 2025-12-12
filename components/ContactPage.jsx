"use client";
import { useState } from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { createSupabaseClient } from "@/lib/supabaseClient";

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
      <div className="max-w-7xl mx-auto md:px-10 py-12 bg-white grid grid-cols-1 md:grid-cols-2 xl:gap-15">
        {/* Left Info Section */}
        <div className="flex flex-col px-5 bg-white justify-center space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight text-black">
            You Will Grow,<br/>
            You Will Succeed.<br/>
            We Promise That
          </h2>
          <p className="text-black md:font-medium">PAB Learn Lead and Grow</p>

          {/* Info Items */}
          <div className="grid grid-cols-2 gap-10 mt-8">
            {/* Call */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-4">
                <Phone className="text-[#345895] w-6 h-6" />
              </div>
              <span className="font-semibold text-lg text-black">
                Call for inquiry
              </span>
              <span className="text-black text-sm">+91 9999999999</span>
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-4">
                <Mail className="text-[#345895] w-6 h-6" />
              </div>
              <span className="font-semibold text-lg text-black">
                Send us email
              </span>
              <span className="text-black text-sm">info@pab.com</span>
            </div>

            {/* Hours */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-4">
                <Clock className="text-[#345895] w-6 h-6" />
              </div>
              <span className="font-semibold text-lg text-black">
                Opening hours
              </span>
              <span className="text-black text-sm whitespace-nowrap">
                Mon - Sat: 10AM - 10PM
              </span>
            </div>

            {/* Office */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-4">
                <MapPin className="text-[#345895] w-6 h-6" />
              </div>
              <span className="font-semibold text-lg text-black">Office</span>
              <span className="text-black text-sm">Indore, MP</span>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div
          className="bg-blue-50 max-w-[500px] p-8 mt-5 rounded-2xl shadow-md"
          style={{
            backgroundColor: "rgba(6, 78, 146, 0.1)",
          }}
        >
          <h3 className="text-2xl font-semibold text-center text-black mb-1">
            Contact Info
          </h3>
          <p className="text-black text-center mb-6">Send us a message</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#345895] text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

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

      {/* Map Section */}
      <div className="w-full h-[300px] md:h-[400px] p-[50px] bg-white">
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
    </div>
  );
}
