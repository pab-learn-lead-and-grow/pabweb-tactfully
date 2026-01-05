import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is an Online MBA worth it for working professionals?",
      answer: "Absolutely. An Online MBA allows you to upskill without quitting your job, so there's no loss of income. With accredited universities like NMIMS, you get the same degree value as on-campus programs, plus flexibility and career ROI."
    },
    {
      question: "Will employers value an Online MBA the same as a regular MBA?",
      answer: "Yes. If the university is UGC-entitled and accredited, the degree holds equal recognition. NMIMS, for example, is NAAC A+ and widely accepted by top corporates across India and overseas." 
    },
    {
      question: "How do I choose the right specialisation for my career?",
      answer: "At Radhya Education Academy, we use our assistance model to map your work experience, strengths, and industry trends. Based on your goals — promotion, career switch, or upskilling — we guide you toward the specialisation with the best long-term ROI."
    },
    {
      question: "Can I manage an Online MBA with a full-time job?",
      answer: "Yes. The programs are designed for professionals. You get weekend live sessions, recorded lectures, 24x7 LMS access, and self-paced learning. Most students manage their MBA with 6–8 hours per week."
    },
    {
      question: "What kind of career support will I receive?",
      answer: "You'll get access to university career services, resume reviews, interview prep, and hiring partners. Radhya education academy provides personalised counsellor guidance to help you understand your ROI journey and make confident career decisions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className=" bg-white px-6 sm:px-8 lg:px-4">
      <div className="w-full p-5 lg:p-[60px] mx-auto">
        {/* Header */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold text-[#345895] mb-8 leading-tight">
          What.<br />
          The.<br />
          FAQ?
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300"
              style={{
                boxShadow: '0 4px 0 0 rgba(0, 11, 30, 0.06), 0 8px 0 0 rgba(0, 11, 30, 0.08), 0 0 1px 0 rgba(66, 71, 76, 0.25)'
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <span className="shrink-0 text-2xl font-bold text-gray-600">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}