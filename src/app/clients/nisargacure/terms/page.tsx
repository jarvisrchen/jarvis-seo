import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/theme-nisargacure/Header";
import Footer from "@/components/theme-nisargacure/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Nisarga Cure — Naturopathy & Wellness Raipur",
  description:
    "Terms of Service for Nisarga Cure. Please read these terms carefully before using our website or booking an appointment.",
  alternates: {
    canonical: "/clients/nisargacure/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the Nisarga Cure website (nisargacure.com) or booking any of our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, clients, and others who access or use our services.`,
  },
  {
    title: "2. Description of Services",
    content: `Nisarga Cure provides naturopathy, yoga therapy, physiotherapy, acupuncture, acupressure, and related holistic wellness services in Raipur, Chhattisgarh, India. We also offer tele-consultation and home visit services.

Our services are provided by Dr. Teertham Dewangan, a licensed naturopathy practitioner with Central and State Registration credentials.`,
  },
  {
    title: "3. Not a Substitute for Emergency Care",
    content: `**IMPORTANT:** The information provided on our website and our naturopathy services are intended for wellness support and are not a substitute for emergency medical care, conventional medical diagnosis, or treatment of acute or life-threatening conditions.

If you are experiencing a medical emergency, please call 112 (India Emergency Services) or go to the nearest hospital emergency department immediately.

Always consult with a qualified medical doctor before starting or discontinuing any medical treatment.`,
  },
  {
    title: "4. Appointment Booking and Cancellations",
    content: `**Booking:** Appointments can be booked online through our Setmore scheduling platform, via WhatsApp (+91 89629 77723), or by email.

**Cancellations:** Please provide at least 24 hours' notice if you need to cancel or reschedule your appointment. Late cancellations may forfeit any advance payment made.

**No-Shows:** If you fail to attend a scheduled appointment without notice, we reserve the right to charge a cancellation fee for future bookings.

**Tele-Consultations:** Technical issues beyond our control (internet connectivity, platform outages) will be rescheduled at no additional charge.`,
  },
  {
    title: "5. Payment Terms",
    content: `Payment is due at the time of service unless otherwise agreed in writing. We accept cash and UPI payments. Prices for services are subject to change; current pricing will be communicated at the time of booking.

Home visit services may include an additional travel charge based on your location within Raipur.`,
  },
  {
    title: "6. Health Disclaimer",
    content: `The content on this website — including articles, descriptions, and advice — is for informational purposes only and does not constitute medical advice.

Individual results from naturopathy and holistic treatments vary. We make no guarantees about specific health outcomes. Treatment recommendations are personalised and based on individual assessment.`,
  },
  {
    title: "7. Intellectual Property",
    content: `All content on the Nisarga Cure website — including text, images, logos, and graphics — is owned by or licensed to Nisarga Cure and is protected by applicable intellectual property laws.

You may not reproduce, distribute, or use our content for commercial purposes without our written permission.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by Indian law, Nisarga Cure shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.

Our total liability to you for any claim shall not exceed the amount you paid for the specific service in question.`,
  },
  {
    title: "9. Privacy",
    content: `Your use of our website and services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.`,
  },
  {
    title: "10. Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Raipur, Chhattisgarh.`,
  },
  {
    title: "11. Changes to Terms",
    content: `We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after any changes constitutes your acceptance of the new terms.`,
  },
  {
    title: "12. Contact Us",
    content: `If you have any questions about these Terms, please contact us:

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

export default function TermsPage() {
  const effectiveDate = "1 September 2025";

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-nunito)]">
      <Header />
      <main id="main-content" className="flex-1">
        {/* Header */}
        <section
          className="py-16 md:py-20 text-center"
          style={{ background: "linear-gradient(135deg, #0d9488 0%, #5b21b6 100%)" }}
          aria-labelledby="terms-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1 id="terms-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Terms of Service
            </h1>
            <p className="text-white/80 text-sm">Effective Date: {effectiveDate}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 text-sm text-amber-800">
              <strong>Please read carefully.</strong> These Terms of Service govern your use of the
              Nisarga Cure website and services. By using our site or booking an appointment, you
              agree to these terms.
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
                href="/clients/nisargacure/privacy"
                className="text-violet-600 hover:text-violet-700 font-semibold text-sm"
              >
                ← Privacy Policy
              </Link>
              <Link
                href="/clients/nisargacure"
                className="text-violet-600 hover:text-violet-700 font-semibold text-sm"
              >
                Back to Home →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
