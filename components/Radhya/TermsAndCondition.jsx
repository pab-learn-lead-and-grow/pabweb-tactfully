export const metadata = {
  title: "Terms & Conditions | Radhya Education Academy",
  description:
    "Terms & Conditions of Radhya Education Academy Private Limited governing use of the website, services, user responsibilities, and legal policies.",
};

export default function TermsConditionsPage() {
  function PolicySection({ title, children }) {
    return (
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
          {title}
        </h2>
        <div className="text-sm md:text-base space-y-2">{children}</div>
      </div>
    );
  }

  return (
    <div className="mt-18 flex flex-col text-black">
      {/* HEADER */}
      <section className="bg-purple-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold text-black">
            Radhya Education Academy Private Limited
          </p>
          <p className="mt-1 text-xs text-black">
            Last Updated: <span className="font-medium">[16/01/2026]</span>
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-800 leading-relaxed">
        <p className="mb-2">
          Please read these Terms & Conditions carefully before using{" "}
          <strong><a
  href="https://radhyaeducationacademy.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-black text-sm hover:text-[#3C087E] underline"
>
  www.radhyaeducationacademy.com
</a>
</strong>, operated by{" "}
          <strong>Radhya Education Academy Private Limited</strong> (operating
          under the brand name <strong>“Radhya Education Academy”</strong>) (“we”,
          “our”, “us”).
        </p>

        <p className="mb-2">
          By accessing or using this website, you agree to be bound by these Terms
          & Conditions. If you do not agree with any part of these terms, please
          discontinue using this website.
        </p>

        <p className="mb-10">
          These Terms apply to all visitors, users, and individuals who access or interact with our platform and services.
           </p>

        <PolicySection title="1. Nature of Services Provided">
          <p>
            Radhya Education Academy Private Limited operates as an <b>education
            information, counselling, and guidance platform.</b>
          </p>
          <p>
            We provide reliable information related to online, offline, distance
            learning, and other educational programs offered by universities and
            educational institutions.
          </p>
          <p><b>Our Services may include:</b></p>
          <ul className="list-disc px-5">
            <li>Sharing information about universities, colleges, and courses</li>
            <li>Facilitating student enquiries and counselling requests</li>
            <li>
              Assisting with eligibility understanding, fee details, and
              admission processes
            </li>
          </ul>
          <p className="font-bold mt-2">Important Clarification:</p>
          <ul className="list-disc px-5">
            <li>We are <b>not a university</b></li>
            <li>We are <b>not a degree-granting institution</b></li>
            <li>We do <b>not</b> conduct admissions directly</li>
            <li>
             Final decisions regarding admission, eligibility, fee structure, academic delivery, certification, and degrees are solely handled by the respective universities/institutions
            </li>
          </ul>
          <p>All educational information displayed on our website is sourced from <b>official university websites or publicly available sources</b>.</p>
        </PolicySection>

        <PolicySection title="2. Eligibility to Use the Website">
          <ul className="list-disc px-5">
            <li>You are at least 18 years old, or</li>
            <li>
              You are using the platform under supervision of a parent or legal
              guardian
            </li>
          </ul>
          <p>
            You also agree that the information you provide is accurate,
            genuine, and up to date.
          </p>
        </PolicySection>

        <PolicySection title="3. User Responsibilities">
          <p>By accessing this website, you agree to:</p>
          <ul className="list-disc px-5">
            <li>Provide correct and truthful information</li>
            <li>Use the platform only for lawful and genuine enquiry purposes</li>
            <li>Not impersonate any individual or entity</li>
            <li>
              Not misuse, damage, disrupt, or attempt unauthorized access
            </li>
          </ul>
          <p>
            We reserve the right to restrict or terminate access if fraudulent or
            harmful activity is detected.
          </p>
        </PolicySection>

        <PolicySection title="4. Intellectual Property Rights">
          <p>
          All content on this website including text, graphics, images, design, layout, brand elements, and functionality belongs to <b>Radhya Education Academy Private Limited</b> or its licensors and is protected under applicable intellectual property laws.
          </p>
          <p>
           You are <b>strictly prohibited</b> from copying, reproducing, modifying, distributing, or commercially exploiting any content without prior written consent.
          </p>
        </PolicySection>

        <PolicySection title="5. External Links & Third-Party Websites">
          <p>
            Our website may contain links to third-party or university websites that are
            not owned or operated by us.
          </p>
          <p>We are <b>not responsible </b>for:</p>
          <ul className="list-disc px-5">
            <li>Accuracy of such third-party content</li>
            <li>Privacy practices</li>
            <li>Policies, services, or actions of third-party websites</li>
          </ul>
          <p>
            Users must independently verify information and review respective website
            policies.
          </p>
        </PolicySection>

        <PolicySection title="6. Prohibited Activities">
          <p>You agree NOT to use this website for activities that:</p>
          <ul className="list-disc px-5">
            <li>Violating any law or regulation</li>
            <li>Are fraudulent or misleading or harmful</li>
            <li>Infringe intellectual property rights</li>
            <li>Harass, abuse, threaten, or harm others</li>
            <li>Attempt hacking, data theft, or unauthorized access</li>
            <li>Spread malware, spam, or malicious content</li>
          </ul>
          <p>Violations may lead to termination of access and legal action where applicable.</p>
        </PolicySection>

        <PolicySection title="7. Information Accuracy & Limitation of Guarantees">
          <p>
            All information provided is for <b>general informational and guidance purposes only</b>.
          </p>
          <p>We:</p>
          <ul className="list-disc px-5">
            <li>Do <b>not</b> guarantee admission</li>
            <li>Do <b>not</b> guarantee placements or outcomes</li>
            <li>Do <b>not</b> guarantee 100% accuracy of university data at all times</li>
          </ul>
          <p>Universities may update eligibility criteria, fees, and policies without prior notification. Users must verify details directly with respective institutions.</p>
        </PolicySection>

        <PolicySection title="8. Disclaimer of Warranties">
          <p>
            The website and services are provided on an<b> “AS IS” and “AS AVAILABLE”</b>
            basis. We make no warranties, express or implied, regarding:
          </p>
          <ul className="list-disc px-5">
            <li>Accuracy or completeness</li>
            <li>Reliability or suitability</li>
            <li>Uninterrupted or error-free operation</li>
          </ul>
          <p>Use of this website is entirely at your own risk.</p>
        </PolicySection>

        <PolicySection title="9. Limitation of Liability">
          <p>
           To the maximum extent permitted by law, <b>Radhya Education Academy Private Limited</b>, its directors, employees, affiliates, and partners shall not be liable for:
          </p>
           <ul className="list-disc px-5">
            <li>
              Indirect or consequential losses
            </li>
            <li>Financial or opportunity loss</li>
            <li>Data loss</li>
            <li>Errors or omissions in content</li>
            <li>Decisions made based on website information</li>
            <li>Conduct or services of third parties</li>
           </ul>
        </PolicySection>

        <PolicySection title="10. Indemnification">
          <p>
            You agree to indemnify and hold harmless <b>Radhya Education Academy Private Limited</b>, its team, and representatives from any claims, damages, liabilities, or expenses arising due to:
          </p>
           <ul className="list-disc px-5">
            <li>Misuse of the website</li>
            <li>Violation of these Terms</li>
            <li>Submission of false or misleading information</li>
           </ul>
        </PolicySection>

        <PolicySection title="11. Suspension or Termination of Access">
          <p>
            We reserve the right to suspend or terminate access to the website, without prior notice, if:
          </p>
           <ul className="list-disc px-5">
            <li>These Terms are violated</li>
            <li>Illegal or harmful activity is detected</li>
            <li>Website security or integrity is at risk</li>
           </ul>
           <p>This does not limit our legal rights.</p>
        </PolicySection>

        <PolicySection title="12. Governing Law & Jurisdiction">
          <p>
            These Terms are governed by the laws of <b>India</b>.
          </p>
          <p>Any disputes shall fall under the exclusive jurisdiction of courts located in <b>Gwalior, Madhya Pradesh</b>.</p>
        </PolicySection>

        <PolicySection title="13. Changes to These Terms">
          <p>
            We reserve the right to update or modify these Terms & Conditions at any time. Updated terms will be posted with a revised effective date.
          </p>
          <p>Continued use of the website implies acceptance of the updated Terms.</p>
        </PolicySection>

        <PolicySection title="14. Contact Information">
          <p>For any queries regarding these Terms & Conditions, please contact:</p>
          <p><strong>Legal Entity:</strong> Radhya Education Academy Private Limited</p>
          <p><strong>Brand Name:</strong> Radhya Education Academy</p>
          <p><strong>Website:</strong><a
  href="https://radhyaeducationacademy.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-black text-sm hover:text-[#3C087E] underline"
>
  www.radhyaeducationacademy.com
</a>
</p>
          <p><strong>Email:</strong><a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@radhyaeducationacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm lg:text-md hover:text-[#3C087E] underline"
            >
              contact@radhyaeducationacademy.com
            </a></p>
          <p><strong>Phone:</strong> [Contact Number]</p>
          <p><strong>Registered Address:</strong> 25, Mayur Vihar, BP City, Gwalior, Madhya Pradesh, 474006</p>
        </PolicySection>
      </section>
    </div>
  );
}
