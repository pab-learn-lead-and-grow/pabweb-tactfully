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
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 px-4 overflow-hidden">
      <div className="relative w-full sm:w-[85%] md:w-[65%] lg:w-[33%] max-w-md h-[95vh] overflow-y-auto no-scrollbar backdrop-blur-lg background-blur/40 border border-gray-300 shadow-xl rounded-2xl p-6 sm:p-5">
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
            <label className="block text-gray-800 font-medium mb-1 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
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
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
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
              <option value="">Select University</option>
              <option>Manipal University Jaipur</option>
              <option>NMIMS</option>
              <option>Amity University</option>
              <option>VIT</option>
            </select>
            {errors.university && (
              <p className="text-red-500 text-xs mt-1">{errors.university}</p>
            )}
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
              <option value="">Select Course</option>
              <option>MBA</option>
              <option>BBA</option>
              <option>BCA</option>
              <option>MCA</option>
            </select>
            {errors.course && (
              <p className="text-red-500 text-xs mt-1">{errors.course}</p>
            )}
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
                placeholder="10-digit number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-1.5 bg-white text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-3 w-full py-2 rounded-lg font-medium text-sm transition duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-700 text-white hover:bg-blue-800"
            }`}
          >
            {loading ? "Submitting..." : "Secure Your Seat Today →"}
          </button>
        </form>
      </div>
    </div>
  );
}
