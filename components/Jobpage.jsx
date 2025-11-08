"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Briefcase, Wallet, MapPin, Clock } from "lucide-react";
import { createSupabaseClient } from "@/lib/supabaseClient";

export default function JobDetails() {
  const { jobId } = useParams(); // Optional if dynamic
  const supabase = createSupabaseClient();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Inside Sales Executive",
    experience: "",
    resume: null,
  });
  const [loading, setLoading] = useState(false);

  // ✅ Handle Input Changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation before upload
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.position ||
      !formData.experience ||
      !formData.resume
    ) {
      alert("⚠️ Please fill all fields and upload your resume before submitting.");
      setLoading(false);
      return;
    }

    try {
      let resumeUrl = null;

      // ✅ Upload resume to Supabase Storage
      const fileExt = formData.resume.name.split(".").pop();
      const fileName = `${Date.now()}_${formData.name.replace(/\s+/g, "_")}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("resume")
        .upload(fileName, formData.resume);

      if (uploadError) throw uploadError;

      // ✅ Get public URL of uploaded resume
      const { data: publicUrlData } = supabase.storage
        .from("resume")
        .getPublicUrl(fileName);

      resumeUrl = publicUrlData.publicUrl;

      // ✅ Insert form data into Supabase `job_form`
      const { error } = await supabase.from("job_form").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          experience: formData.experience,
          resume_url: resumeUrl,
        },
      ]);

      if (error) throw error;

      alert("✅ Application submitted successfully!");

      // ✅ Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "Inside Sales Executive",
        experience: "",
        resume: null,
      });
      e.target.reset();
    } catch (error) {
      console.error("Supabase Error:", error.message);
      alert("❌ Error submitting form: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl bg-white mx-auto px-5 md:px-10 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b pb-6">
        <div>
          <p
            className="text-blue-900 text-xs mb-2 inline-block px-2 py-1 rounded-md"
            style={{
              backgroundColor: "rgba(6, 78, 146, 0.1)",
              border: "1px solid rgba(6, 78, 146, 0.1)",
            }}
          >
            5 min ago
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black">
            Inside Sales Executive
          </h1>
          <p className="text-black mt-2 text-sm mb-6">
            Lead generation, cold calling, counseling prospects, end-to-end sales.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-black">
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" /> Fresher
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" /> Full Time
            </span>
            <span className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-blue-600" />
              ₹2,40,000–3,00,000
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" /> Indore, Madhya Pradesh
            </span>
          </div>
        </div>

        <button className="mt-5 md:mt-0 bg-[#003087] hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-medium transition">
          Apply Job
        </button>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Job Description */}
          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">Job Description</h2>
            <p className="text-black leading-relaxed">
              As an Inside Sales Executive, you'll be the bridge between learners and
              opportunities. You will connect with prospective students, understand
              their goals, and guide them toward the right PAB program that helps them
              learn, lead, and grow in their careers.
            </p>
          </section>

          {/* Key Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">
              Key Responsibilities
            </h2>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>
                Connect with potential students via calls, WhatsApp, or email to
                understand their needs.
              </li>
              <li>
                Counsel learners who pursue MBA, MCA, and Certification programs offered
                through our partners.
              </li>
              <li>
                Manage and nurture leads through sales funnel while ensuring timely
                enrollment.
              </li>
              <li>
                Maintain accurate records of conversations and follow-ups using CRM
                tools.
              </li>
              <li>
                Collaborate with the marketing and operations team for smooth onboarding
                of students.
              </li>
            </ul>
          </section>

          {/* Professional Skills */}
          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">
              Professional Skills
            </h2>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>Excellent communication and interpersonal skills (English & Hindi).</li>
              <li>Strong customer relationship skills.</li>
              <li>Positive attitude and passion for helping people grow.</li>
              <li>Basic understanding of CRM tools and management tasks.</li>
              <li>Adaptable, quick learner, and resilient under rejection.</li>
            </ul>
          </section>

          {/* Tags */}
          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Fulltime", "Sales", "Indore", "Corporate", "Location"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[rgba(6,78,146,0.1)] text-[#064E92] rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Apply Form */}
        <div
          className="p-6 rounded-2xl shadow-md"
          style={{
            backgroundColor: "rgba(6, 78, 146, 0.1)",
          }}
        >
          <h3 className="text-2xl text-center font-semibold text-black mb-1">
            Apply for this Job
          </h3>
          <p className="text-black text-center mb-6">Fill out the form below</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-black font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg bg-white px-4 py-2 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-lg bg-white px-4 py-2 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">Position</label>
              <input
                type="text"
                name="position"
                onChange={handleChange}
                value={formData.position}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">Experience</label>
              <select
                name="experience"
                onChange={handleChange}
                defaultValue=""
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="" disabled hidden>
                  Years of Experience
                </option>
                <option value="0-1 Years">0-1 Years</option>
                <option value="2-5 Years">2-5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
            </div>

            <div>
              <label htmlFor="resume" className="block text-black font-medium mb-2">
                Upload Resume
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-600 cursor-pointer hover:bg-blue-50 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full font-semibold py-2 rounded-lg transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-blue-900 hover:bg-blue-800 text-white"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Related Jobs */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-black mb-5">Related Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              time: "5 min ago",
              title: "Digital Marketing Specialist (Google Ads & Meta Ads)",
              desc: "Lead generation, cold calling, counseling prospects, end-to-end sales",
              type: "Full Time",
              salary: "₹2,40,000–3,00,000",
              location: "Indore, Madhya Pradesh",
            },
            {
              time: "10 min ago",
              title: "Inside Sales Executive",
              desc: "Lead generation, cold calling, counseling prospects, end-to-end sales",
              type: "Full Time",
              salary: "₹2,40,000–3,00,000",
              location: "Indore, Madhya Pradesh",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <p
                className="text-blue-900 text-xs mb-2 inline-block px-2 py-1 rounded-md"
                style={{
                  backgroundColor: "rgba(6, 78, 146, 0.1)",
                  border: "1px solid rgba(6, 78, 146, 0.1)",
                }}
              >
                {job.time}
              </p>
              <h3 className="text-xl font-semibold text-black">{job.title}</h3>
              <p className="text-black text-sm mt-2 mb-6">{job.desc}</p>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-black text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" /> {job.type}
                </span>
                <span className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-blue-600" /> {job.salary}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" /> {job.location}
                </span>
              </div>
              <button className="mt-6 bg-[#003087] hover:bg-blue-900 text-white px-4 py-2 rounded-lg font-medium transition">
                Job Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
