import React from "react";

export default function Disclaimer() {
  const data = {
    header: {
      title: "Disclaimer",
      company: "Radhya Education Academy Private Limited",
      lastUpdated: "16/01/2026",
    },

    intro: [
      {
        type: "p",
        content: (
          <>
            This Disclaimer applies to the use of{" "}
            <strong>
              <a
                href="https://radhyaeducationacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-sm hover:text-[#3C087E] underline"
              >
                www.radhyaeducationacademy.com
              </a>
            </strong>
            , owned and operated by{" "}
            <strong>Radhya Education Academy Private Limited</strong> (operating
            under the brand name <strong>“Radhya Education Academy”</strong>) (“we”,
            “our”, “us”).
          </>
        ),
      },
      {
        type: "p",
        content:
          "By accessing or using this website, you acknowledge and agree to the statements outlined in this Disclaimer. If you do not agree, please discontinue using the website.",
      },
    ],

    sections: [
      {
        title: "1. Nature of Our Services",
        content: [
          {
            type: "p",
            content: (
              <>
                Radhya Education Academy is an{" "}
                <b>education information and counselling platform</b>.
                <br />
                We provide guidance and information related to online, offline,
                distance, and various academic programs offered by universities
                and educational institutions.
              </>
            ),
          },
          {
            type: "p",
            content: <b>Important clarification:</b>,
          },
          {
            type: "list",
            items: [
              <>We are <b>not a university</b></>,
              <>We are <b>not an academic institute</b></>,
              <>We are <b>not a degree/diploma issuing authority</b></>,
              <>We do <b>not</b> conduct admissions directly</>,
            ],
          },
          {
            type: "p",
            content:
              "All final decisions regarding admission, course delivery, fees, eligibility, academic performance, certification, and degree issuance are handled solely by the respective universities or educational institutions.",
          },
        ],
      },

      {
        title: "2. Information Source & Accuracy",
        content: [
          { type: "p", content: "The information provided on our website:" },
          {
            type: "list",
            items: [
              "Is sourced from official university/college websites",
              "Publicly available educational sources",
              "University brochures or authorized platforms",
            ],
          },
          {
            type: "p",
            content: "We make reasonable efforts to ensure accuracy, but:",
          },
          {
            type: "list",
            items: [
              "Universities and institutions may update details at any time",
              "Fees, eligibility, duration, curriculum, and policies may change without notice",
            ],
          },
          {
            type: "p",
            content: (
              <>
                Therefore, <b>we do not guarantee</b>:
              </>
            ),
          },
          {
            type: "list",
            items: [
              "Absolute accuracy",
              "Completeness",
              "Timeliness",
              "Suitability of information at all times",
            ],
          },
          {
            type: "p",
            content:
              "Users are strongly advised to verify all academic and admission-related details directly from the official university website or authorized authority before making any decision.",
          },
        ],
      },

      {
        title: "3. No Professional or Legal Advice",
        content: [
          { type: "p", content: "The information provided on this website is:" },
          {
            type: "list",
            items: [
              <>For <b>general informational and guidance purposes only</b></>,
              "Not intended as professional, legal, admission, financial, or career advice",
            ],
          },
          {
            type: "p",
            content:
              "Any decisions made based on information from this platform are done:",
          },
          {
            type: "list",
            items: ["At your own discretion", "At your own responsibility"],
          },
          {
            type: "p",
            content:
              "We are not responsible for consequences arising from decisions made based on website content.",
          },
        ],
      },

      {
        title: "4. Third-Party Links & External Websites",
        content: [
          { type: "p", content: "Our website may contain:" },
          {
            type: "list",
            items: [
              "Links to third-party websites",
              "University portals",
              "Partner platforms",
            ],
          },
          {
            type: "p",
            content: (
              <>
                We <b>do not</b>:
              </>
            ),
          },
          {
            type: "list",
            items: [
              "Control these websites",
              "Endorse their content",
              "Guarantee their accuracy",
              "Control their policies or practices",
            ],
          },
          {
            type: "p",
            content: "Users are responsible for reviewing:",
          },
          {
            type: "list",
            items: [
              "Terms & Conditions",
              "Privacy Policies",
              "Authenticity of external platforms",
            ],
          },
          {
            type: "p",
            content:
              "We are not liable for any loss, damage, or consequences arising from reliance on third-party websites.",
          },
        ],
      },

      {
        title: "5. No Guarantees or Promises",
        content: [
          {
            type: "p",
            content: (
              <>
                Radhya Education Academy Private Limited does <b>not</b>:
              </>
            ),
          },
          {
            type: "list",
            items: [
              "Guarantee admission in any university or institution",
              "Guarantee placement or career outcomes",
              "Guarantee seat availability",
              "Guarantee scholarship approval",
            ],
          },
          {
            type: "p",
            content:
              "Admission, selection, eligibility, and outcomes are governed solely by the respective educational institutions.",
          },
        ],
      },

      {
        title: "6. Limitation of Liability",
        content: [
          {
            type: "p",
            content: (
              <>
                To the fullest extent permitted by law, Radhya Education Academy
                Private Limited, including its directors, employees, partners,
                and affiliates shall <b>not</b> be liable for:
              </>
            ),
          },
          {
            type: "list",
            items: [
              "Errors or inaccuracies in content",
              "Changes made by universities or institutions",
              "Financial losses or damages",
              "Loss of opportunity",
              "Any direct, indirect, incidental, or consequential damages",
              "Decisions taken based on website information",
            ],
          },
          {
            type: "p",
            content: (
              <>
                Use of this website is entirely <b>at your own risk</b>.
              </>
            ),
          },
        ],
      },

      {
        title: "7. Changes to This Disclaimer",
        content: [
          {
            type: "p",
            content:
              "We reserve the right to modify or update this Disclaimer at any time without prior notice. Any changes will be posted on this page with a revised “Last Updated” date.",
          },
          {
            type: "p",
            content:
              "Continued use of the website signifies acceptance of updated terms.",
          },
        ],
      },

      {
        title: "8. Contact Information",
        content: [
          {
            type: "p",
            content:
              "For clarification or concerns regarding this Disclaimer, please contact:",
          },
          {
            type: "p",
            content: (
              <>
                <strong>Legal Entity:</strong> Radhya Education Academy Private Limited
              </>
            ),
          },
          {
            type: "p",
            content: (
              <>
                <strong>Brand Name:</strong> Radhya Education Academy
              </>
            ),
          },
          {
            type: "p",
            content: (
              <>
                <strong>Website:</strong>{" "}
                <a
                  href="https://radhyaeducationacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-sm hover:text-[#3C087E] underline"
                >
                  www.radhyaeducationacademy.com
                </a>
              </>
            ),
          },
          {
            type: "p",
            content: (
              <>
                <strong>Email:</strong>{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@radhyaeducationacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-sm lg:text-md hover:text-[#3C087E] underline"
                >
                  contact@radhyaeducationacademy.com
                </a>
              </>
            ),
          },
          {
            type: "p",
            content: (
              <>
                <strong>Phone:</strong> [Contact Number]
              </>
            ),
          },
          {
            type: "p",
            content: (
              <>
                <strong>Registered Address:</strong> 25, Mayur Vihar, BP City,
                Gwalior, Madhya Pradesh, 474006
              </>
            ),
          },
        ],
      },
    ],
  };

  return (
    <div className="mt-18 flex flex-col text-black">
      
      {/* HEADER */}
      <section className="bg-purple-50 py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          {data.header.title}
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-semibold">
          {data.header.company}
        </p>
        <p className="mt-1 text-xs">
          Last Updated:{" "}
          <span className="font-medium">{data.header.lastUpdated}</span>
        </p>
      </section>

      {/* CONTENT */}
      <article className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-800 leading-relaxed space-y-6">
        
        {/* INTRO */}
        <div className="space-y-4">
          {data.intro.map((block, i) => renderBlock(block, i))}
        </div>

        {/* SECTIONS */}
        {data.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              {section.title}
            </h2>

            <div className="space-y-3 text-sm md:text-base">
              {section.content.map((block, j) =>
                renderBlock(block, j)
              )}
            </div>
          </section>
        ))}
      </article>
    </div>
  );
}

/* 🔥 Core renderer */
function renderBlock(block, key) {
  if (block.type === "p") {
    return <p key={key}>{block.content}</p>;
  }

  if (block.type === "list") {
    return (
      <ul key={key} className="list-disc px-5 space-y-1">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  return null;
}