import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen mt-18 flex flex-col bg-[#FBF5EF] text-[#0C1446]">
      {/* Main Content */}
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            <Image
              src="/radhyalogo.png"
              alt="Radhya Education"
              width={220}
              height={150}
              className="mx-auto mb-4 object-contain"
              priority
            />

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Privacy Policy
            </h1>

            <p className="mt-2 text-sm text-gray-600">
              Last Updated:{" "}
              <span className="font-semibold text-[#0C1446]">
                October 25, 2025
              </span>
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-6 pb-16">
            <article className="bg-white/60 rounded-2xl p-8 md:p-12">
              <p className="mb-6 text-base leading-relaxed">
                <strong>MBA Course Online Privacy Policy</strong> describes how we
                collect, use, and protect your personal information when you
                visit our website or use our services.
              </p>

              {/* Section 1 */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">
                  1. Information We Collect
                </h2>

                <h3 className="font-semibold mt-3">Personal Information</h3>
                <p className="mb-2">
                  We may collect the following types of personal information:
                </p>

                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Name and contact information</li>
                  <li>Educational background and work experience</li>
                  <li>Payment information</li>
                  <li>Academic records and progress</li>
                  <li>Communication preferences</li>
                  <li>Technical device and browser data</li>
                </ul>

                <h3 className="font-semibold mt-3">
                  Automatically Collected Information
                </h3>

                <ul className="list-disc list-inside space-y-1">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring websites</li>
                  <li>Device and OS</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">
                  2. How We Use Your Information
                </h2>

                <ul className="list-disc list-inside space-y-1">
                  <li>Provide educational services</li>
                  <li>Process enrollments and payments</li>
                  <li>Course communication</li>
                  <li>Customer support</li>
                  <li>Marketing (with consent)</li>
                  <li>Website improvement</li>
                  <li>Legal compliance</li>
                  <li>Fraud prevention</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">
                  3. Information Sharing
                </h2>

                <p className="mb-3">
                  We do not sell your personal information. We may share data
                  with:
                </p>

                <ul className="list-disc list-inside space-y-1">
                  <li>Payment processors</li>
                  <li>Email and analytics services</li>
                  <li>Educational platforms</li>
                  <li>Customer support partners</li>
                </ul>
              </section>

              {/* Remaining sections abbreviated for clarity */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">
                  4. Data Security
                </h2>
                <p>
                  We use appropriate security measures but cannot guarantee
                  absolute protection.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">
                  5. Cookies
                </h2>
                <p>
                  Cookies help us enhance your browsing experience. You may
                  disable them in browser settings.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">
                  6. Your Rights
                </h2>
                <p>
                  You may request access, correction, deletion, or portability
                  of your data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  7. Policy Updates
                </h2>
                <p>
                  Changes will be posted on this page with an updated date.
                </p>
              </section>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
