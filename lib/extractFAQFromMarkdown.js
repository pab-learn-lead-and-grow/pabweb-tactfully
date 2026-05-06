function extractFAQFromMarkdown(content) {
  if (!content || typeof content !== 'string') return [];

  const faqs = [];

  // Find FAQ section heading and capture everything until next same/higher-level heading
  const sectionPattern = /^(#{1,6})\s*(FAQs?|Frequently Asked Questions|Common Questions|Questions\s*&\s*Answers|Q&A)\s*$/gim;
  let sectionMatch;

  while ((sectionMatch = sectionPattern.exec(content)) !== null) {
    const headingLevel = sectionMatch[1].length;
    const start = sectionMatch.index + sectionMatch[0].length;
    const remaining = content.substring(start);

    // Section ends at next heading of same or higher level (fewer or equal #s)
    const endPattern = new RegExp(`\\n#{1,${headingLevel}}\\s`, 'm');
    const endMatch = remaining.match(endPattern);
    const sectionContent = endMatch ? remaining.substring(0, endMatch.index) : remaining;

    // Pattern 1: ### Question heading followed by answer paragraph
    const headingPattern = /^#{2,6}\s+(.+?)$\s*\n([\s\S]*?)(?=\n#{2,6}\s|\n*$)/gm;
    let match;
    while ((match = headingPattern.exec(sectionContent)) !== null) {
      const question = match[1].trim().replace(/\*\*|__|\*|_/g, '').replace(/^\d+[\.\)]\s*/, '');
      const answer = match[2].trim().replace(/\*\*|__|\*|_/g, '').replace(/^>\s*/gm, '');
      if (question && answer) {
        faqs.push({ question, answer });
      }
    }

    // Pattern 2: **Q: Question** followed by Answer
    if (faqs.length === 0) {
      const qaPattern = /\*\*Q[:\.]?\s*(.+?)\*\*[\s\S]*?(?:A[:\.]?\s*|Answer[:\.]?\s*)([\s\S]*?)(?=\*\*Q[:\.]?\s*|\n\*\*|\n*$)/g;
      let qaMatch;
      while ((qaMatch = qaPattern.exec(sectionContent)) !== null) {
        const question = qaMatch[1].trim().replace(/\*\*|__|\*|_/g, '');
        const answer = qaMatch[2].trim().replace(/\*\*|__|\*|_/g, '');
        if (question && answer) {
          faqs.push({ question, answer });
        }
      }
    }
  }

  return faqs;
}

function buildFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export { extractFAQFromMarkdown, buildFAQSchema };
