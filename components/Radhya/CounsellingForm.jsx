"use client";
import { useState, useEffect } from "react";
import { CircleCheckBig, ShieldCheck } from "lucide-react";

export default function CounsellingForm({ onClose }) {
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
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  /* 🔒 LOCK BACKGROUND SCROLL */
  useEffect(() => {
    if (!hydrated) return;
    
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [hydrated]);

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
      const response = await fetch("/api/counselling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Submission failed");
      }

      alert("✅ Form submitted successfully!");
      onClose();
    } catch (error) {
      alert("Error submitting form: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const countryCodes = [
    { code: "+91", flag: "🇮🇳", name: "India" },
    { code: "+1", flag: "🇺🇸", name: "United States" },
    { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+49", flag: "🇩🇪", name: "Germany" },
    { code: "+61", flag: "🇦🇺", name: "Australia" },
    { code: "+971", flag: "🇦🇪", name: "United Arab Emirates" },
    { code: "+65", flag: "🇸🇬", name: "Singapore" },
    { code: "+33", flag: "🇫🇷", name: "France" },
    { code: "+31", flag: "🇳🇱", name: "Netherlands" },
    { code: "+39", flag: "🇮🇹", name: "Italy" },
  ];

  return (
    <div className="fixed modal inset-0 z-9999 w-screen flex font-[Inter] items-start justify-center pt-12 backdrop-blur-xl overflow-y-auto"
    >
      {/* DARK OVERLAY */}
      <div className=" inset-0 bg-black/50" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-3xl my-auto">
         
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] lg:min-h-[600px]">
          {/* LEFT */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center relative">
            <h2 className="text-3xl md:text-[36px] font-semibold leading-tight text-[#270652] italic text-center">
              Stuck & Confused?
              <br /> Tell us, we'll help.
            </h2>

            <div className="relative max-w-sm hidden md:block">
              <img
                src="/counselling.png"
                alt="Confused you ?"
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="mt-5 md:mt-0 lg:mb-10 text-center px-2">
              <div className="inline-flex items-center gap-1.5 bg-[#4D964F]/5 py-1 px-3 rounded-lg">
                <CircleCheckBig size={14} className="text-[#4D964F]" />
                <span className="text-[10px] text-[#4D964F] italic">
                  Only a certified mentor will assist you.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-2xl p-6">
            <div className="space-y-4 bg-white p-6 rounded-2xl shadow-2xl">
               <button
              onClick={onClose}
              className="absolute top-8 right-8 text-black text-2xl font-bold w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0">
                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-sm">
                    Email Id*
                  </label>
                  <div className="inline-flex items-center gap-1 bg-white py-1 px-1 rounded-4xl">
                    <p className="text-[10px] text-gray-500">
                      We’ll send course comparisons & guidance.
                    </p>
                  </div>
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
                  <label className="block text-gray-700 font-medium mb-1 text-sm">
                    Contact Number*
                  </label>
                  <div className="inline-flex items-center mb-1 gap-1 bg-[#4D964F]/10 py-1 px-3 rounded-4xl">
                    <ShieldCheck size={12} className="text-[#4D964F]" />
                    <p className="text-[8px] text-[#4D964F]">
                      We hate annoying calls too. No spam, no sales calls
                    </p>
                  </div>

                  <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white">
                    <select
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleChange}
                      className="bg-gray-50 px-2 py-2.5 text-gray-700 text-sm outline-none
                      border-r border-gray-300 min-w-14 flex-none
             appearance-none"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0">
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
                    <p className="text-red-500 text-xs mt-1">
                      {errors.university}
                    </p>
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
                    className="w-full border min-w-0 border-gray-300 rounded-lg px-4 py-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none overflow-y-auto text-sm"
                    style={{ maxHeight: '200px' }}
                  >
                    <option value="">Select Course</option>
                    <option value="Online MBA">Online MBA</option>
                    <option value="Executive MBA">Executive MBA</option>
                    <option value="Online BBA">Online BBA</option>
                    <option value="Online BCA">Online BCA</option>
                    <option value="Online MCA">Online MCA</option>
                    <option value="Online BA">Online BA</option>
                    <option value="Online MA">Online MA</option>
                    <option value="Online B.COM">Online B.COM</option>
                    <option value="Online M.COM">Online M.COM</option>
                    <option value="Online MSc">Online MSc</option>
                    <option value="Online Certifications">
                      Online Certifications
                    </option>
                    <option value="Online Diploma">Online Diploma</option>
                    <option value="Online MAJMC">Online MAJMC</option>
                    <option value="Online BAJMC">Online BAJMC</option>
                    <option value="Integrated Prog.">Integrated Prog.</option>
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
                    : "bg-linear-to-r from-[#9542FF] to-[#180135] text-white hover:bg-[#270652]"
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
}
