export const metadata = {
  title: "Privacy Policy | Radhya Education Academy",
  description:
    "Privacy Policy of Radhya Education Academy Private Limited explaining data collection, usage, cookies, and user rights.",
};

export default function PrivacyPolicyPage() {
  function PolicySection({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
        {title}
      </h2>
      <div className="text-sm md:text-base space-y-1">{children}</div>
    </div>
  );
}
  return (
    <div className="mt-18 flex flex-col text-black">
      {/* Main Content */}
      <section className="bg-purple-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Privacy Policy
          </h1>
          <p className="mt-4 text-2xl md:3xl lg:5xl font-semibold  text-black">
            Radhya Education Academy Private Limited
          </p>
          <p className="mt-1 text-xs text-black">
            Last Updated: <span className="font-medium">[16/01/2026]</span>
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-800 leading-relaxed">
        <p className="mb-4">
         <b>Radhya Education Academy Private Limited</b> (operating under the brand name
          <strong> “Radhya Education Academy”</strong>) ("we", "our", "us") values
          the privacy of every user who visits or uses our website and services.
          This Privacy Policy explains how we collect, use, store, share, and
          protect your personal information when you access our website or interact with our services.
        </p>

        <p className="mb-6">
          By accessing or using our website, you agree to the practices described
          in this Privacy Policy. If you do not agree, please discontinue using
          our platform.
        </p>

        {/* SECTION 1 */}
        <PolicySection title="1. Who We Are">
          <p>
            Radhya Education Academy Private Limited operates as an <b>information
            provider and education counselling platform.</b>
          </p>
          <p className="mt-3">
            We provide information related to online, offline, distance, and
            various academic courses offered by universities and educational
            institutions. All academic information is sourced from<b> official
            university websites or publicly available sources.</b>
          </p>
          <p className="mt-3">
            We are <b>not a university</b>, not a degree-granting body, and we <b>do not
            conduct admissions directly</b>. Admission decisions are controlled by
            respective institutions.
          </p>
        </PolicySection>

        {/* SECTION 2 */}
        <PolicySection title="2. Scope of Policy">
          <p className="mt-3">
           This Privacy Policy applies to:
          </p>
          <ul className="list-disc px-5">
            <li>Our website and digital platforms</li>
            <li>Online enquiry forms, contact forms, and communication channels</li>
            <li>Counselling interactions initiated by users</li>
          </ul>
          <p className="mt-3">
           This policy does <b>not</b> apply to external websites, university portals, or third-party platforms not controlled by us.
          </p>
        </PolicySection>

        {/* SECTION 3 */}
        <PolicySection title="3. Information We Collect">
           <p>
          We may collect <b> personal</b> and <b>non-personal</b> information solely to respond to user enquiries and improve our services. </p>
          <h4 className="font-semibold mt-3"> a) Information You Provide</h4>
          <p>
           When you voluntarily contact us or submit forms, we may collect:
          </p>
          <ul className="list-disc px-5 mt-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Contact number</li>
            <li>Education and course preferences</li>
            <li>Information shared via forms or communication</li>
          </ul>
             <p>
           We collect this only with your consent.
          </p>
          <h4 className="font-semibold mt-6">b) Information Collected Automatically</h4>
           <p>
           When you visit our website, we may collect:
          </p>
          <ul className="list-disc px-5 mt-2">
            <li>IP address</li>
            <li>Browser and device details</li>
            <li>Pages visited and duration</li>
            <li>General interaction behavior</li>
         </ul>
           <p>
          This information is used for analytics, security, and website performance only.
          </p>
        </PolicySection>

        {/* SECTION 4 */}
        <PolicySection title="4. How We Use Your Information">
           <p>We use your information to: </p>
          <ul className="list-disc px-5">
            <li>Provide course and university-related information</li>
            <li>Assist you with counselling and guidance (if you request)</li>
            <li>Respond to enquiries</li>
            <li>Understand user needs and improve website experience</li>
            <li>Communicate updates, services, or offers</li>
             <li>Maintain website security and analytics</li>
          </ul>
          <p className="mt-3 font-medium">
            We <b>do not sell your personal data</b> to anyone.
          </p>
           <p><b>Important: </b>
            Radhya Education Academy Private Limited acts primarily as an <b>information provider</b></p>
          <p><b>Platform: </b>
            If counselling is requested by users, it is provided for guidance purposes only.</p>
         <p>We <b>do not</b> guarantee admission, selection, or outcomes of any kind.</p>
        </PolicySection>

        {/* SECTION 5 */}
        <PolicySection title="5. Information Accuracy Disclaimer">
          <p>
            All course, university, and education-related information displayed on our platform is collected from <b>official university websites or authorized sources</b>.<br/>
However, universities may update details such as admission rules, fee structure, eligibility criteria, or course details without prior notice.
          </p>
          <p>Users are strongly advised to verify details directly with the respective university or official authority before making final decisions.
</p>
        </PolicySection>

        {/* SECTION 6 */}
        <PolicySection title="6. Cookies & Tracking Technologies">
  <p>
    We use cookies and similar technologies to enhance user experience and
    understand visitor behaviour.
  </p>
  <p className="font-bold">Types of Cookies</p>

  <ul className="list-disc px-5 ">
    <li>
      <span className="font-semibold">Essential Cookies:</span>{" "}
      <span className="font-normal">
        Required for core website functions.
      </span>
    </li>

    <li>
      <span className="font-semibold">
        Analytics Cookies (e.g., Google Analytics):
      </span>{" "}
      <span className="font-normal">
        For traffic and performance analysis.
      </span>
    </li>

    <li>
      <span className="font-semibold">
        Advertising Cookies (Google Ads & Remarketing):
      </span>{" "}
      <span className="font-normal">
        For marketing performance and ad relevance.
      </span>
    </li>
  </ul>
  <p className="font-bold mt-4">Google Services Usage</p>
  <p>We may use:</p>
  <ul className="list-disc px-5">
    <li>Google Analytics</li>
    <li>Google Ads</li>
    <li>Google Remarketing Tools</li>
  </ul>
  <p>Google uses cookies (including DART cookies) to serve relevant ads based on your visits to our and other websites.<br />
  You may opt out of Google advertising cookies via the  <a
    href="https://myadcenter.google.com/home?sasb=true&ref=ad-settings"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#3C087E] font-bold underline hover:text-blue-950"
  >
    Google Ads & Content Network Privacy Policy
  </a>.</p>
  <p>Users can manage or disable cookies through browser settings. However, disabling cookies may affect website functionality.</p>
</PolicySection>

        {/* SECTION 7 */}
        <PolicySection title="7. Data Retention">
          <p>
           We retain your personal information only for as long as:
          </p>
           <ul className="list-disc px-5">
    <li>Required to fulfill the purpose it was collected for</li>
    <li>Required for legal, regulatory, or business purposes</li>
    </ul>
    <p>If you wish your data to be deleted, you may contact us.</p>
  
        </PolicySection>

        {/* SECTION 8 */}
        <PolicySection title="8. Data Security">
          <p>
           We take reasonable administrative, technical, and organizational measures to secure your data against unauthorized access, disclosure, alteration, or destruction.
          </p>
          <p>However, no online platform can guarantee 100% security. Users are advised to exercise caution while sharing information online.</p>
        </PolicySection>

        {/* SECTION 9 */}
        <PolicySection title="9. Children’s Privacy">
          <p>
           Our services are not intended for individuals under <b>13 years of age</b>.</p>
           <p>
We do not knowingly collect data from children. If such data is discovered, it will be deleted promptly.
          </p>
        </PolicySection>

        {/* SECTION 10 */}
        <PolicySection title="10. International Users (GDPR/EEA/UK Rights)">
          <p>If you are located in the <b>European Economic Area (EEA) or United Kingdom</b>, you may have the following rights under GDPR:</p>
          <ul className="list-disc px-5">
            <li>Right to access your data</li>
            <li>Right to rectify inaccurate information</li>
            <li>Right to request deletion</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent anytime</li>
          </ul>
          <p>For exercising rights, please contact us.</p>
          <p><b>Cookie Consent (EEA/UK Users)</b></p>
          <p>Non-essential cookies are only activated after explicit consent. Users can update or withdraw cookie preferences anytime.</p>
        </PolicySection>

        {/* SECTION 11 */}
        <PolicySection title="11. User Rights (General)">
          <p>
            Depending on applicable laws, users may:
          </p>
          <ul className="list-disc px-5">
  <li>Request access to their personal data</li>
  <li>Request corrections or updates</li>
  <li>
    Request deletion of stored data 
      (subject to legal obligations)
    
  </li>
  <li>Opt-out of marketing communications</li>
</ul>
<p>To exercise these rights, contact us using the details below.</p>
        </PolicySection>

        {/* SECTION 12 */}
        <PolicySection title="12. Third-Party Websites">
          <p>
         Our website may contain links to university or third-party websites. We are <b>not responsible</b> for:
          </p>
           <ul className="list-disc px-5">
  <li>Their content</li>
  <li>Their privacy practices</li>
  <li>
  Their policies or services
  </li>
</ul>
<p>Users should review third-party privacy policies independently.</p>
        </PolicySection>

        {/* SECTION 13 */}
        <PolicySection title="13. Updates to This Policy">
          <p>
           We may update this Privacy Policy periodically to reflect operational, legal, or regulatory changes. Updates will be posted with a revised effective date. Continued use of our website means acceptance of changes.
          </p>
        </PolicySection>

        {/* SECTION 14 */}
        <PolicySection title="14. Contact Information">
          <p>For privacy concerns, requests, or clarifications, contact us:</p>
          <ul>
            <li>
              <strong>Legal Entity Name:</strong> Radhya Education Academy Private Limited
            </li>
            <li>
              <strong>Brand Name:</strong> Radhya Education Academy
            </li>
            <li>
              <strong>Website:</strong><a
  href="https://radhyaeducationacademy.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-black text-sm hover:text-[#3C087E] underline"
>
  www.radhyaeducationacademy.com
</a>

            </li>
            <li>
              <strong>Email:</strong>
               <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@radhyaeducationacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm lg:text-md hover:text-[#3C087E] underline"
            >
              contact@radhyaeducationacademy.com
            </a>
            </li>
            <li>
              <strong>Phone:</strong> [Contact Number]
            </li>
            <li>
              <strong>Address:</strong> 25, Mayur Vihar, BP City, Gwalior, Madhya Pradesh, 474006
            </li>
          </ul>
        </PolicySection>
      </section>
    </div>
  );
}
