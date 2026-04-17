export default function FAQ({ faqs }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="w-full px-4 md:px-10 py-16 bg-white">
      
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#270652] mb-10 text-center">
        Frequently Asked Questions
      </h2>

      {/* FAQ Container */}
      <div className="max-w-4xl mx-auto">

        {faqs.map((faq, i) => (
        <details key={i} className="border-b py-5 group">
          
          <summary className="cursor-pointer font-semibold text-lg text-black flex justify-between items-center">
            {faq.q}
            <span className="transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>

          <p className="mt-3 text-black leading-relaxed">
            {faq.a}
          </p>

        </details>
      ))}


      </div>
    </section>
  );
}