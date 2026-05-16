import DynamicFaqItem from "./DynamicFaqItem";

export default function DynamicFaq({ heading, faqs }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
          .map((segment) =>
            segment.type === "paragraph"
              ? segment.content
              : segment.items.join(", ")
          )
          .join(" "),
      },
    })),
  };

  return (
    <section className="max-w-5xl w-full mt-10 lg:mt-15 px-4 mx-auto py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h2 className="text-[32px] md:text-4xl font-bold text-[#270652] text-center mx-auto mb-10">
        {heading}
      </h2>

      <div className="max-w-6xl px-4 items-left justify-start">
        {faqs.map((faq, i) => (
          <DynamicFaqItem key={i} faq={faq} />
        ))}
      </div>
    </section>
  );
}
