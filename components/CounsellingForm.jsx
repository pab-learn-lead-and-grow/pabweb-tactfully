"use client";
import { useState } from "react";

export default function CounsellingForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    course: "",
    phoneCode: "+91",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
    const response = await fetch("/api/counselling", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Form submitted successfully!");
      console.log("Supabase Response:", result.data);
    } else {
      alert("Error submitting form: " + result.error);
    }
  } catch (error) {
    console.error("Network Error:", error);
    alert("Network error. Please try again.");
  }
  };

  const countryCodes = [
    { code: "+91", flag: "🇮🇳", name: "India" },
    { code: "+1", flag: "🇺🇸", name: "United States" },
    { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+61", flag: "🇦🇺", name: "Australia" },
    { code: "+81", flag: "🇯🇵", name: "Japan" },
    { code: "+49", flag: "🇩🇪", name: "Germany" },
    { code: "+33", flag: "🇫🇷", name: "France" },
    { code: "+971", flag: "🇦🇪", name: "UAE" },
    { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
    { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
    { code: "+92", flag: "🇵🇰", name: "Pakistan" },
    { code: "+65", flag: "🇸🇬", name: "Singapore" },
    { code: "+60", flag: "🇲🇾", name: "Malaysia" },
    { code: "+254", flag: "🇰🇪", name: "Kenya" },
    { code: "+27", flag: "🇿🇦", name: "South Africa" },
    { code: "+34", flag: "🇪🇸", name: "Spain" },
    { code: "+39", flag: "🇮🇹", name: "Italy" },
    { code: "+7", flag: "🇷🇺", name: "Russia" },
    { code: "+86", flag: "🇨🇳", name: "China" },
    { code: "+82", flag: "🇰🇷", name: "South Korea" },
    { code: "+62", flag: "🇮🇩", name: "Indonesia" },
    { code: "+63", flag: "🇵🇭", name: "Philippines" },
    { code: "+90", flag: "🇹🇷", name: "Turkey" },
    { code: "+31", flag: "🇳🇱", name: "Netherlands" },
    { code: "+32", flag: "🇧🇪", name: "Belgium" },
    { code: "+46", flag: "🇸🇪", name: "Sweden" },
    { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  ];

  return (
    <div className="fixed inset-0 z-50  flex justify-center items-center bg-black/40 px-4 overflow-hidden">
      <div className="relative w-[30%]  max-w-md h-[700px] backdrop-blur-3xl border border-gray-400 shadow-lg rounded-2xl p-6 sm:p-5 max-h-[95vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center">
          <p className="text-xs text-[#170F49] font-medium">
            2D : 12H : 20M{" "}
            <span className="ml-2 bg-white text-blue-700 text-xs px-2 py-0.5 rounded-full">
              Limited time
            </span>
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-blue-900 mt-1">
            Last Chance! Early Bird Admissions Closing Shortly
          </h2>
          <p className="text-[#170F49] text-xs mt-1">
            Get personalized guidance from our counsellor.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-2 mt-3 bg-white/10 p-2 rounded-2xl backdrop-blur-md"
          autoComplete="off"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-800 font-medium mb-1 text-sm">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-800 font-medium mb-1 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>

          {/* University */}
          <div>
            <label className="block text-gray-800 font-medium mb-1 text-sm">
              University
            </label>
            <select
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            >
              <option value="" disabled>
                Select University
              </option>
              <option>Manipal University Jaipur</option>
              <option>Sikkim Manipal University</option>
              <option>NMIMS</option>
              <option>Vivekanand Global University</option>
              <option>MIT Pune</option>
              <option>Alliance University Bangalore</option>
              <option>VIT</option>
              <option>Sharda University</option>
              <option>Jain University Bangalore</option>
              <option>Shoolini University</option>
              <option>Symbiosis University</option>
              <option>Amity University</option>
              <option>LPU</option>
              <option>Chandigarh University</option>
            </select>
          </div>

          {/* Course */}
          <div>
            <label className="block text-gray-800 font-medium mb-1 text-sm">
              Course
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            >
              <option value="" disabled>
                Select Course
              </option>
              <option>MBA</option>
              <option>BBA</option>
              <option>BCA</option>
              <option>MCA</option>
              <option>BA</option>
              <option>MA</option>
              <option>Diploma</option>
              <option>MA-JMC</option>
              <option>BA-JMC</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-800 font-medium mb-1 text-sm">
              Phone
            </label>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <select
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
                className="bg-gray-50 border-r border-gray-300 px-2 py-1.5 text-gray-700 text-sm outline-none focus:ring-2 focus:ring-blue-500 w-24"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-1.5 bg-white text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-3 w-full bg-blue-700 text-white font-medium py-2 rounded-lg hover:bg-blue-800 transition duration-200 text-sm"
          >
            Secure Your Seat Today →
          </button>
        </form>
      </div>
    </div>
  );
}