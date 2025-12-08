"use client";
import { useState } from "react";
import { createSupabaseClient } from "@/lib/supabaseClient";

export default function CounsellingForm({ onClose }) {
  const supabase = createSupabaseClient();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    course: "",
    phoneCode: "+91",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!formData.university) newErrors.university = "Select a university.";
    if (!formData.course) newErrors.course = "Select a course.";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be exactly 10 digits.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.from("counselling_form").insert([
        {
          name: formData.name,
          email: formData.email,
          university: formData.university,
          course: formData.course,
          phone: `${formData.phoneCode} ${formData.phone}`,
          queries: formData.message,
        },
      ]);

      if (error) throw error;

      alert("✅ Form submitted successfully!");
      console.log("Supabase Response:", data);
      onClose();
    } catch (error) {
      console.error("Supabase Error:", error.message);
      alert("Error submitting form: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const countryCodes = [
    { code: "+91", flag: "🇮🇳", name: "India" },
    { code: "+1", flag: "🇺🇸", name: "United States" },
    { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+61", flag: "🇦🇺", name: "Australia" },
    { code: "+971", flag: "🇦🇪", name: "UAE" },
  ];

  return (
    <div className="fixed inset-0 w-screen min-h-screen flex font-[Inter] items-start justify-center pt-18 lg:pt-24 backdrop-blur-2xl overflow-y-auto">
     <div className="absolute w-full max-w-5xl bg-[#E0ECF8] rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] lg:h-[600px]">
          {/* Left Side - Illustration */}
          <div className="bg-[#E0ECF8] p-6 flex flex-col justify-center items-center relative">
            <div className="text-center mb-4">
              <h2 className="text-[36px] font-semibold leading-tight text-[#345895] italic">
                Stuck & Confused?<br/> Tell us, we'll help.
              </h2>
              
            </div>
            
            <div className="relative max-w-sm ">
              <img 
                src="counsellingForm.jpg" 
                alt="Confused you ?"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
            </div>

            <p className="text-xs text-[#345895] mb-10 text-center italic px-2">
              Share a few details & get honest guidance.<br/> No spam, no random calls
            </p>
          </div>

          {/* Right Side - Form */}
          <div className=" bg-[#E0ECF8] m-6 relative">
             <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-black text-2xl font-bold w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>
            <div className="space-y-4 bg-white p-6 rounded-2xl shadow-md">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Email Id*
                  </label>
                  <p className="text-[10px] text-gray-500 mb-1">
                    We'll send course comparisons & guidance.
                  </p>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                 {/* Phone with country code */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Contact Number*
                  </label>
                  <p className="text-[10px] text-gray-500 mb-1">
                    We hate annoying calls too. No spam, no sales calls
                  </p>

                  <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white">
                    <select
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleChange}
                      className="bg-gray-50 px-2 py-2.5 text-gray-700 text-sm outline-none border-r border-gray-300 min-w-[60px]"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white text-gray-800 placeholder-gray-400 outline-none text-sm"
                    />
                  </div>

                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* University and Course Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* University */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    University*
                  </label>
                  <p className="text-[10px] text-gray-500 mb-1">
                    Let's take a better choice 💡
                  </p>
                  <input
                    type="text"
                    name="university"
                    placeholder="Search for University"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                  />
                  {errors.university && (
                    <p className="text-red-500 text-xs mt-1">{errors.university}</p>
                  )}
                </div>

                {/* Course */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Online Course*
                  </label>
                  <p className="text-[10px] text-gray-500 mb-1">
                    Go for the right path for you
                  </p>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                  >
                    <option value="">Select Course</option>
                    <option value="MBA">MBA</option>
                    <option value="BBA">BBA</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="B.COM">B.COM</option>
                    <option value="M.COM">M.COM</option>
                  </select>
                  {errors.course && (
                    <p className="text-red-500 text-xs mt-1">{errors.course}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  What do you need help with?
                </label>
                <textarea
                  name="message"
                  placeholder="e.g. Stuck in low package / Want to switch career / Confused which course is right for me..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition duration-200 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-linear-to-r from-[#345895] to-[#0B2131] text-white hover:bg-[#345895]"
                }`}
              >
                {loading ? "Submitting..." : "Get My Guidance"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

