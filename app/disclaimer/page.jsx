export const metadata = {
  title: "Disclaimer | Radhya Education Academy",
  description:
    "Disclaimer of Radhya Education Academy Private Limited governing use of the website, services, user responsibilities, and legal policies.",
};

export default function DisclaimerPage() {
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
            Disclaimer
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold text-black">
            Radhya Education Academy Private Limited
          </p>
          <p className="mt-1 text-xs text-black">
            Last Updated: <span className="font-medium">[DD/MM/YYYY]</span>
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-800 leading-relaxed">
        <p className="mb-2">
          This Disclaimer applies to the use of {" "}
          <strong>[Website URL]</strong>, owned and operated by{" "}
          <strong>Radhya Education Academy Private Limited</strong> (operating
          under the brand name <strong>“Radhya Education Academy”</strong>) (“we”,
          “our”, “us”).
        </p>

        <p className="mb-10">
        By accessing or using this website, you acknowledge and agree to the statements outlined in this Disclaimer. If you do not agree, please discontinue using the website.
        </p>

        <PolicySection title="1. Nature of Our Services">
          <p>
           Radhya Education Academy is an <b>education information and counselling platform</b>.<br/>
We provide guidance and information related to online, offline, distance, and various academic programs offered by universities and educational institutions.

          </p>
          <p><b>Important clarification:</b></p>
          <ul className="list-disc px-5">
            <li>We are <b>not a university</b></li>
            <li>We are <b>not an academic institute</b></li>
            <li>
              We are <b>not a degree/diploma issuing authority</b>
            </li>
            <li>We do <b>not</b> conduct admissions directly</li>
          </ul>
          <p>All final decisions regarding admission, course delivery, fees, eligibility, academic performance, certification, and degree issuance are handled solely by the respective universities or educational institutions.</p>
          </PolicySection>

        <PolicySection title="2.  Information Source & Accuracy">
          <p>The information provided on our website:</p>
          <ul className="list-disc px-5">
            <li>Is sourced from official university/college websites</li>
            <li>Publicly available educational sources</li>
            <li>University brochures or authorized platforms</li>
          </ul>
          <p>
           We make reasonable efforts to ensure accuracy, but:
          </p>
           <ul className="list-disc px-5">
            <li>Universities and institutions may update details at any time</li>
            <li>Fees, eligibility, duration, curriculum, and policies may change without notice</li>
          </ul>
          <p>
            Therefore, <b>we do not guarantee</b>:
          </p>
          <ul className="list-disc px-5">
            <li>Absolute accuracy</li>
            <li>
              Completeness
            </li>
            <li>Timeliness</li>
            <li>Suitability of information at all times</li>
          </ul>
          <p>Users are <b>strongly advised</b> to verify all academic and admission-related details directly from the official university website or authorized authority before making any decision.</p>
        </PolicySection>

        <PolicySection title="3. No Professional or Legal Advice">
          <p>The information provided on this website is:</p>
         <ul className="list-disc px-5">
          <li>For <b>general informational and guidance purposes only</b></li>
          <li>Not intended as professional, legal, admission, financial, or career advice</li>
         </ul>
         <p>Any decisions made based on information from this platform are done:</p>
         <ul className="list-disc px-5">
          <li>At your own discretion</li>
          <li>At your own responsibility</li>
         </ul>
         <p>We are not responsible for consequences arising from decisions made based on website content.</p>
        </PolicySection>

        <PolicySection title="4. Third-Party Links & External Websites">
          <p>
            Our website may contain:
          </p>
          <ul className="list-disc px-5">
            <li>Links to third-party websites</li>
            <li>University portals</li>
            <li>Partner platforms</li>
          </ul>
          <p>
            We <b>do not</b>:
          </p>
           <ul className="list-disc px-5">
            <li>Control these websites</li>
            <li>Endorse their content</li>
            <li>Guarantee their accuracy</li>
            <li>Control their policies or practices</li>
           </ul>
           <p>Users are responsible for reviewing:</p>
           <ul className="list-disc px-5">
            <li>Terms & Conditions</li>
            <li>Privacy Policies</li>
            <li>Authenticity of external platforms</li>
           </ul>
           <p>We are not liable for any loss, damage, or consequences arising from reliance on third-party websites.</p>
        </PolicySection>

        <PolicySection title="5. No Guarantees or Promises">
          <p>Radhya Education Academy Private Limited does <b>not</b>:</p>
          <ul className="list-disc px-5">
            <li>Guarantee admission in any university or institution</li>
            <li>Guarantee placement or career outcomes</li>
            <li>Guarantee seat availability</li>
            <li>Guarantee scholarship approval</li>
          </ul>
          <p>Admission, selection, eligibility, and outcomes are governed solely by the <b> respective educational institutions</b>.</p>
        </PolicySection>

        <PolicySection title="6. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, Radhya Education Academy Private Limited, including its directors, employees, partners, and affiliates shall <b>not</b> be liable for:
          </p>
          <ul className="list-disc px-5">
            <li>Errors or inaccuracies in content</li>
            <li>Changes made by universities or institutions</li>
            <li>Financial losses or damages</li>
            <li>Loss of opportunity</li>
            <li>Any direct, indirect, incidental, or consequential damages</li>
            <li>Decisions taken based on website information</li>
          </ul>
          <p>Use of this website is entirely <b>at your own risk</b>.</p>
           </PolicySection>

        <PolicySection title="7. Changes to This Disclaimer">
          <p>
            We reserve the right to modify or update this Disclaimer at any time without prior notice. Any changes will be posted on this page with a revised “Last Updated” date.
          </p>
          <p>Continued use of the website signifies acceptance of updated terms.</p>
        </PolicySection>

        <PolicySection title="8. Contact Information">
          <p>For clarification or concerns regarding this Disclaimer, please contact:</p>
          <p><strong>Legal Entity:</strong> Radhya Education Academy Private Limited</p>
          <p><strong>Brand Name:</strong> Radhya Education Academy</p>
          <p><strong>Website:</strong> [Website URL]</p>
          <p><strong>Email:</strong> [Official Email Address]</p>
          <p><strong>Phone:</strong> [Contact Number]</p>
          <p><strong>Registered Address:</strong> [Registered Address]</p>
        </PolicySection>
      </section>
    </div>
  );
}
