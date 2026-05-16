"use client";

import { useState } from "react";
import { CircleCheckBig, ShieldCheck } from "lucide-react";
import { sanitizeFormData, validateCounsellingForm } from "@/lib/security";

export default function ContactNmims({
  title = "Contact Us",
  subtitle = "Fill the form and our expert counsellor will connect with you shortly.",
  onSuccess,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    university: "",
    course: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required.";
    else if (!/^[a-zA-Z\s\-']{2,}$/.test(form.name.trim()))
      newErrors.name = "Enter a valid name (letters only).";

    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone number must be exactly 10 digits.";

    if (!form.university.trim())
      newErrors.university = "University is required.";
    if (!form.course) newErrors.course = "Please select a course.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      const sanitized = sanitizeFormData(form);
      const validation = validateCounsellingForm({
        name: sanitized.name,
        email: sanitized.email,
        university: sanitized.university,
        course: sanitized.course,
        phoneCode: "+91",
        phone: sanitized.phone,
        message: sanitized.message,
      });

      if (!validation.isValid) {
        setErrors(validation.errors);
        setLoading(false);
        return;
      }

      const response = await fetch("/api/counselling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitized.name,
          email: sanitized.email,
          university: sanitized.university,
          course: sanitized.course,
          phoneCode: "+91",
          phone: sanitized.phone,
          message: sanitized.message,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit form.");
      }

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        university: "",
        course: "",
        phone: "",
        message: "",
      });
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Form submission error:", err);
      setErrors({
        submit: err.message || "Failed to submit. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="w-full bg-gradient-to-b from-white to-purple-50 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <CircleCheckBig size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-[#270652] mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6">
              Your form has been submitted successfully. Our expert counsellor
              will connect with you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-[#9542FF] to-[#180135] text-white font-semibold px-8 py-2 rounded-lg hover:opacity-90 transition"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white text-black placeholder:text-gray-800  rounded-xl p-4">
      <div className="max-w-3xl mx-auto flex flex-col ">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9542FF] to-[#180135] bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base leading-tight">
            {subtitle}
          </p>
        </div>

        <div className="px-2 mt-4">
          <div className="space-y-5">
            <div className="grid md:grid-cols-2 gap-6">
              <Field>
                <input
                  name="name"
                  placeholder="Enter Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className={`input w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-purple-400 ${
                    errors.name ? "border-red-400" : "border-gray-40"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </Field>

              <Field>
                <input
                  name="email"
                  type="email"
                  placeholder="name@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`input w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-purple-400 ${
                    errors.email ? "border-red-400" : "border-gray-40"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </Field>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field>
                <div className="flex border rounded-lg overflow-hidden bg-white">
                  <span className="bg-gray-50 px-3 py-2.5 text-sm text-gray-800 border-r border-gray-200 flex items-center">
                    +91
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="10-digit number"
                    value={form.phone}
                    onChange={handleChange}
                    className={`input w-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-purple-400 ${
                      errors.phone ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </Field>

              <Field>
                <input
                  name="university"
                  placeholder="University name"
                  value={form.university}
                  onChange={handleChange}
                  className={`input w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-purple-400 ${
                    errors.university ? "border-red-400" : "border-gray-40"
                  }`}
                />
                {errors.university && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.university}
                  </p>
                )}
              </Field>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className={`input w-full border rounded-lg px-4 py-2.5 bg-white text-sm outline-none focus:ring-2 focus:ring-purple-400 ${
                    errors.course ? "border-red-400" : "border-gray-40"
                  }`}
                >
                  <option value="">Select Course</option>
                  <option value="Online MBA">Online MBA</option>
                  <option value="Executive MBA">Executive MBA</option>
                  <option value="Online BBA">Online BBA</option>
                  <option value="Online BCA">Online BCA</option>
                  <option value="Online Certifications">
                    Online Certifications
                  </option>
                  <option value="Online Diploma">Online Diploma</option>
                </select>
                {errors.course && (
                  <p className="text-red-500 text-xs mt-1">{errors.course}</p>
                )}
              </Field>

              <Field>
                <textarea
                  name="message"
                  placeholder="Any specific query..."
                  value={form.message}
                  onChange={handleChange}
                  rows={1}
                  className="w-full border border-gray-40 rounded-lg px-4 py-2.5 text-sm outline-none resize-none h-[42px] focus:ring-2 focus:ring-purple-400 bg-white"
                />
              </Field>
            </div>

            <div className="inline-flex mb-2 text-center gap-1.5 bg-[#4D964F]/10 py-1 px-3 rounded-lg">
              <ShieldCheck size={14} className="text-[#4D964F]" />
              <p className="text-[10px] text-[#4D964F]">
                We hate annoying calls too. No spam, no sales calls
              </p>
            </div>

            {errors.submit && (
              <p className="text-red-500 text-sm text-center">
                {errors.submit}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full font-semibold py-3 rounded-lg text-sm transition duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-gradient-to-r from-[#9542FF] to-[#180135] text-white hover:opacity-90"
            }`}
          >
            {loading ? "Submitting..." : "Get My Guidance"}
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-500 text-xs">
            Join 10,000+ students who've transformed their careers
          </p>
          <div className="flex justify-center items-center gap-6 text-gray-400">
            <span className="flex items-center gap-1 text-xs">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              100% Secure
            </span>
            <span className="flex items-center gap-1 text-xs">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.46１a１ １ ０ ００．９５１－．６９ｌ１．０７－３．２９２ｚ" />
              </svg>
              Expert Guidance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="block text-gray-700 font-medium mb-2 text-sm">
          {label}
        </label>
      )}
      {children}
    </div>
  );
}
