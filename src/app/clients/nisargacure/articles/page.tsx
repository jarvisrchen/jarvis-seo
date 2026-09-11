import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/theme-nisargacure/Header";
import Footer from "@/components/theme-nisargacure/Footer";

export const metadata: Metadata = {
  title: "Naturopathy Blog & Articles | Nisarga Cure — Raipur",
  description:
    "Holistic health articles, naturopathy tips, yoga guides, and wellness insights from Dr. Teertham Dewangan at Nisarga Cure, Raipur.",
  alternates: {
    canonical: "/clients/nisargacure/articles",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const upcomingTopics = [
  "5 Natural Ways to Manage Blood Sugar with Naturopathy",
  "How Yoga Therapy Helps with PCOD / PCOS",
  "Acupuncture vs Acupressure: What's the Difference?",
  "A Beginner's Guide to Naturopathy in India",
  "Post-Surgery Recovery: Why Physiotherapy + Naturopathy Work Better Together",
  "Understanding Lifestyle Disorders and How to Reverse Them Naturally",
];

export default function ArticlesPage() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-nunito)]">
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section
          className="py-24 md:py-32 text-center"
          style={{
            background: "linear-gradient(135deg, #5b21b6 0%, #0d9488 100%)",
          }}
          aria-labelledby="articles-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-white/30">
              Blog &amp; Articles
            </span>
            <h1
              id="articles-heading"
              className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight"
            >
              Holistic Health Insights
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Evidence-backed naturopathy guidance, yoga tips, and wellness stories from
              Dr. Teertham Dewangan and the Nisarga Cure team.
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-20 md:py-28" aria-label="Blog coming soon">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-semibold px-5 py-2.5 rounded-full mb-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Coming Soon
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Articles Are On Their Way
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              We&rsquo;re preparing a library of high-quality naturopathy and wellness articles for you.
              In the meantime, connect with us directly for personalised guidance.
            </p>

            {/* Upcoming topics */}
            <div className="bg-gradient-to-br from-violet-50 to-teal-50 rounded-3xl p-8 mb-12 text-left border border-violet-100">
              <h3 className="text-lg font-bold text-gray-900 mb-5 text-center">
                Upcoming Articles We&rsquo;re Writing
              </h3>
              <ul className="space-y-3" aria-label="Upcoming blog topics">
                {upcomingTopics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-violet-200 text-violet-700 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://teertham.setmore.com/teertham"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg shadow-violet-200"
              >
                Book a Consultation Instead
              </a>
              <Link
                href="/clients/nisargacure"
                className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
