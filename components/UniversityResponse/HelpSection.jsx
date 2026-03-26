"use client";

import { useState } from "react";
import FAQ from "../NmimsSection/FAQ";

export default function HelpSection() {
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "University Response Page",
        }),
      });

      const result = await response.json();

      if (!result.success) {
        setStatus(result.error || "Something went wrong.");
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
    } catch (error) {
      setStatus("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

   const faqs = [
  {
    q: "What is university response time in online education?",
    a: "University response time refers to how quickly a university replies to student queries related to admissions, courses, fees, and counseling. In online education, response time is important because the entire admission process depends on communication through calls, emails, or chat platforms. Faster response time indicates better support and efficient communication systems.",
  },
  {
    q: "Why is response time important when choosing an online university?",
    a: "Response time is important because it directly impacts your admission experience. A fast-responding university helps you get quick answers, complete your admission smoothly, and avoid delays. Slow response time can create confusion, delay decision-making, and sometimes lead to missed admission deadlines.",
  },
  {
    q: "Which online universities respond the fastest in India?",
    a: "The fastest responding online universities are usually those with dedicated admission support teams and strong communication systems. These universities typically respond within a few minutes to a few hours through calls, WhatsApp, or email. However, response time can vary depending on workload and inquiry volume.",
  },
  {
    q: "How can I compare university response time in India?",
    a: "You can compare university response time by analyzing how quickly they respond to queries, how detailed their responses are, and how efficiently they follow up. Platforms like Radhya Education Academy provide structured comparisons based on real student interactions and inquiry handling.",
  },
  {
    q: "What is considered a good response time for online universities?",
    a: "A good response time for online universities is usually within a few minutes to a few hours. Universities that respond within 24 hours are considered moderate, while those taking more than 24 hours are generally considered slow in terms of response.",
  },
  {
    q: "What does slow response time indicate about a university?",
    a: "Slow response time may indicate poor communication systems, lack of proper admission support, or high inquiry load without efficient handling. It can also reflect a lower focus on student experience, which may affect your overall journey with the university.",
  },
  {
    q: "Do top online universities always have fast response time?",
    a: "Not always. While many top universities have strong support systems, response time can still vary depending on demand and internal processes. That’s why it is important to compare response time rather than assuming all top universities respond quickly.",
  },
  {
    q: "Does response time affect the admission process?",
    a: "Yes, response time plays a major role in the admission process. Faster responses help you complete documentation, understand eligibility, and secure admission on time. Slow responses can delay the entire process and create unnecessary stress.",
  },
  {
    q: "Which communication channels are used by universities to respond?",
    a: "Online universities usually respond through multiple channels such as phone calls, WhatsApp, email, and website chat support. Universities with faster response time are generally active across all these channels and provide quick assistance.",
  },
  {
    q: "How does Radhya Education Academy measure response time?",
    a: "Radhya Education Academy measures response time based on real student inquiries and interactions. Factors like initial response speed, follow-up communication, clarity of answers, and availability across channels are considered to provide a reliable comparison.",
  },
];

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto bg-[#3C087E]/10 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C087E] mb-4">
            We’re Here to Help You
          </h2>

          <p className="text-[#3C3C43] text-sm sm:text-lg mb-8 max-w-lg">
            Facing an issue with your university? Share your concern with us 
            and our team will review and guide you toward the right resolution.
          </p>

         <div className="bg-white rounded-2xl p-6 shadow-md flex justify-center items-center h-[300px]">
  <img
    src="/Help.png"
    alt="Help"
    className="max-h-full w-auto object-contain"
  />
</div>
        </div>

        {/* RIGHT FORM */}
<div>
  <form onSubmit={handleSubmit}>

    {/* First + Last */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div>
        <label
          htmlFor="firstName"
          className="block text-[#3C087E] font-medium mb-1"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Your name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500"   />
      </div>

      <div>
        <label
          htmlFor="lastName"
          className="block text-[#3C087E] font-medium mb-1"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Your last name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500" />
      </div>
    </div>

    {/* Email */}
    <div>
      <label
        htmlFor="email"
        className="block text-[#3C087E] font-medium mb-1 mt-2"
      >
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your E-mail address"
        value={formData.email}
        onChange={handleChange}
        required
         className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500" />
    </div>

    {/* Phone */}
    <div>
      <label
        htmlFor="phone"
        className="block text-[#3C087E] font-medium mb-1 mt-2"
      >
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="+91 XXXXXXXXXX"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500"  />
    </div>

    {/* Message */}
    <div>
      <label
        htmlFor="message"
        className="block text-[#3C087E] font-medium mb-1 mt-2"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="Your message..."
        value={formData.message}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500" />
    </div>

    {/* Submit */}
    <button
      type="submit"
      disabled={loading}
      className="bg-[#3C087E] hover:bg-[#270652] text-white px-6 py-3 mt-2 rounded-lg transition"
    >
      {loading ? "Sending..." : "Send Message"}
    </button>

    {/* Status */}
    {status && (
      <p
        className={`mt-3 text-sm ${
          status.startsWith("✅")
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {status}
      </p>
    )}

  </form>
</div>

      </div>

      <FAQ faqs={faqs} />
    </section>
  );
}
