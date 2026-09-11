import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/theme-nisargacure/Header";
import Footer from "@/components/theme-nisargacure/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Nisarga Cure — Naturopathy & Wellness Raipur",
  description:
    "Privacy Policy for Nisarga Cure. Learn how we collect, use, and protect your personal information when you use our website and services.",
  alternates: {
    canonical: "/clients/nisargacure/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `When you use our website or contact us, we may collect the following types of information:

• **Personal Identification Information:** Name, email address, phone number, and any other information you provide voluntarily through our contact form or booking system.
• **Health Information:** Details about your health conditions or concerns that you share with us for the purpose of obtaining a consultation or treatment.
• **Usage Data:** Information about how you interact with our website, including pages visited, time spent, and browser type (collected anonymously via cookies).
• **Booking Information:** Appointment details collected through our third-party booking platform (Setmore).`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect for the following purposes:

• To respond to your enquiries and provide the healthcare services you request.
• To schedule and manage appointments.
• To send appointment reminders and follow-up communications.
• To improve our website and services based on usage patterns.
• To comply with legal and regulatory obligations under Indian law.

We will never use your health information for marketing purposes without your explicit consent.`,
  },
  {
    title: "3. Sharing of Information",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share information in the following limited circumstances:

• **Service Providers:** With trusted third-party providers (e.g., Setmore for appointment booking) who assist us in operating our website and services, subject to confidentiality agreements.
• **Legal Requirements:** When required by law, court order, or governmental authority.
• **Medical Necessity:** With other healthcare professionals involved in your care, with your explicit consent.`,
  },
  {
    title: "4. Data Security",
    content: `We take reasonable technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.

Your health information is treated with the utmost confidentiality in accordance with applicable Indian healthcare regulations.`,
  },
  {
    title: "5. Cookies",
    content: `Our website uses cookies to improve your browsing experience. Cookies are small text files stored on your device. We use:

• **Essential Cookies:** Required for the website to function properly.
• **Analytics Cookies:** To understand how visitors interact with our website (anonymised data).

You can disable cookies in your browser settings, though this may affect website functionality.`,
  },
  {
    title: "6. Third-Party Links",
    content: `Our website may contain links to third-party websites (e.g., Setmore booking, Google Maps, WhatsApp). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies separately.`,
  },
  {
    title: "7. Your Rights",
    content: `Under applicable Indian data protection laws, you have the right to:

• Access the personal information we hold about you.
• Request correction of inaccurate information.
• Request deletion of your personal data (subject to legal obligations).
• Withdraw consent for data processing at any time.

To exercise these rights, please contact us at drteerthamdewangan@gmail.com.`,
  },
  {
    title: "8. Children's Privacy",
    content: `Our services are not directed to children under 18 years of age without parental consent. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a revised effective date. We encourage you to review this page periodically.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

**Nisarga Cure**
Shop No.3, Shri Thakur Singh Complex, Sarona,
Near Gautham Chowk, Near Shri Sankalp Hospital,
Raipur, Chhattisgarh 492099

Email: drteerthamdewangan@gmail.com
Phone / WhatsApp: +91 89629 77723`,
  },
];

function renderContent(content: string) {
  return content.split("\n\n").map((para, i) => (
    <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0 whitespace-pre-line text-sm sm:text-base">
      {para.split(/\*\*(.*?)\*\*/g).map((part, j) =>
        j % 2 === 1 ? <strong key={j} className="font-semibold text-gray-800">{part}</strong> : part
      )}
    </p>
  ));
}

export default function PrivacyPage() {
  const effectiveDate = "1 September 2025";

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-nunito)]">
      <Header />
      <main id="main-content" className="flex-1">
        {/* Header */}
        <section
          className="py-16 md:py-20 text-center"
          style={{ background: "linear-gradient(135deg, #5b21b6 0%, #0d9488 100%)" }}
          aria-labelledby="privacy-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1 id="privacy-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Privacy Policy
            </h1>
            <p className="text-white/80 text-sm">Effective Date: {effectiveDate}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5 mb-10 text-sm text-violet-800">
              <strong>Summary:</strong> Nisarga Cure respects your privacy. We collect only the
              information necessary to provide our healthcare services and will never sell your
              personal data. Your health information is kept strictly confidential.
            </div>

            <div className="space-y-10">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                  <div>{renderContent(section.content)}</div>
                </article>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <Link
                href="/clients/nisargacure"
                className="text-violet-600 hover:text-violet-700 font-semibold text-sm"
              >
                ← Back to Home
              </Link>
              <Link
                href="/clients/nisargacure/terms"
                className="text-violet-600 hover:text-violet-700 font-semibold text-sm"
              >
                Terms of Service →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
