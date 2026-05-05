function extractFAQFromMarkdown(content) {
  if (!content || typeof content !== 'string') return [];

  const faqSectionRegex = /^#{1,4}\s*(FAQ|Frequently Asked Questions|FAQs|Common Questions|Questions & Answers|Q&A)[\s\S]*?(?=\n#{1,4}\s|\n*$)/gim;
  
  const faqMatches = content.match(faqSectionRegex);
  if (!faqMatches || faqMatches.length === 0) return [];

  const faqs = [];

  for (const section of faqMatches) {
    // Pattern 1: ### Question followed by answer paragraph
    const headingPattern = /^#{2,4}\s+(.+?)$\n([\s\S]*?)(?=\n#{2,4}\s|\n*$)/gm;
    let match;
    while ((match = headingPattern.exec(section)) !== null) {
      const question = match[1].trim().replace(/\*\*|__|\*|_/g, '');
      const answer = match[2].trim().replace(/\*\*|__|\*|_/g, '').replace(/^>\s*/gm, '');
      if (question && answer) {
        faqs.push({ question, answer });
      }
    }

    // Pattern 2: **Q: Question** or **Question:** followed by A: or answer
    const qaPattern = /\*\*Q[:\.]?\s*(.+?)\*\*[\s\S]*?(?:A[:\.]?\s*|Answer[:\.]?\s*)([\s\S]*?)(?=\*\*Q[:\.]?\s*|\n\*\*|\n*$)/g;
    let qaMatch;
    while ((qaMatch = qaPattern.exec(section)) !== null) {
      const question = qaMatch[1].trim().replace(/\*\*|__|\*|_/g, '');
      const answer = qaMatch[2].trim().replace(/\*\*|__|\*|_/g, '');
      if (question && answer && !faqs.some(f => f.question === question)) {
        faqs.push({ question, answer });
      }
    }

    // Pattern 3: **Question?** followed by answer paragraph
    const boldQuestionPattern = /\*\*(.+?\?)\*\*\n([\s\S]*?)(?=\n\*\*|\n*$)/g;
    let boldMatch;
    while ((boldMatch = boldQuestionPattern.exec(section)) !== null) {
      const question = boldMatch[1].trim().replace(/\*\*|__|\*|_/g, '');
      const answer = boldMatch[2].trim().replace(/\*\*|__|\*|_/g, '').replace(/^>\s*/gm, '');
      if (question && answer && !faqs.some(f => f.question === question)) {
        faqs.push({ question, answer });
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
