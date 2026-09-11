import type { Metadata } from "next";
import NisargaCurePage from "@/components/theme-nisargacure/NisargaCurePage";
import { faqItems } from "@/components/theme-nisargacure/FAQSection";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Nisarga Cure — Naturopathy, Yoga & Wellness Center | Raipur, Chhattisgarh",
  description:
    "Nisarga Cure offers personalised naturopathy, yoga therapy, physiotherapy, acupuncture, and holistic wellness services in Raipur, CG. Led by Dr. Teertham Dewangan. Book your consultation today.",
  keywords: [
    "naturopathy Raipur",
    "naturopathy clinic Raipur",
    "yoga therapy Raipur",
    "physiotherapy Raipur",
    "holistic wellness Raipur",
    "PCOD PCOS treatment Raipur",
    "diabetic management naturopathy",
    "weight management Raipur",
    "acupuncture Raipur",
    "acupressure Raipur",
    "Dr Teertham Dewangan",
    "Nisarga Cure",
    "naturopathy Chhattisgarh",
  ],
  alternates: {
    canonical: "/clients/nisargacure",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nisargacure.com",
    siteName: "Nisarga Cure",
    title: "Nisarga Cure — Naturopathy, Yoga & Wellness Center | Raipur",
    description:
      "Personalised naturopathy, yoga therapy, physiotherapy & acupuncture in Raipur, Chhattisgarh. Empower your natural health journey with Dr. Teertham Dewangan.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=85&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Nisarga Cure — Naturopathy and Wellness Center Raipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nisarga Cure — Naturopathy, Yoga & Wellness | Raipur, CG",
    description:
      "Personalised naturopathy, yoga therapy, physiotherapy & acupuncture in Raipur, Chhattisgarh.",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=85&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://nisargacure.com/#local-business",
  name: "Nisarga Cure",
  alternateName: "Nisarga Cure Naturopathy & Wellness Center",
  description:
    "Nisarga Cure is a naturopathy and wellness center in Raipur, Chhattisgarh. We blend naturopathy therapies with modern holistic practices. Our mission is to empower individuals to take control of their own health through personalized natural solutions.",
  url: "https://nisargacure.com",
  telephone: "+918962977723",
  email: "drteerthamdewangan@gmail.com",
  image:
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=85&auto=format&fit=crop",
  logo: "https://nisargacure.com/clients/nisargacure/logo.png",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No.3, Shri Thakur Singh Complex, Sarona, Near Gautham Chowk, Near Shri Sankalp Hospital",
    addressLocality: "Raipur",
    addressRegion: "Chhattisgarh",
    postalCode: "492099",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.2514,
    longitude: 81.6296,
  },
  hasMap: "https://maps.google.com/?q=Nisarga+Cure+Raipur+Chhattisgarh",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: ["https://nisargacure.com"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Naturopathy & Wellness Services",
    itemListElement: [
      "Naturopathy Consultation",
      "Tele-Consultation",
      "Weight Management",
      "Pain Management",
      "Obesity Management",
      "Diabetic Management",
      "PCOD / PCOS Management",
      "Home Visit",
      "Lifestyle Disorders",
      "Post-Surgery Physical Therapy / Rehabilitation",
      "Yoga Therapy",
      "Physiotherapy",
      "Acupuncture",
      "Acupressure",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  founder: {
    "@type": "Person",
    name: "Dr. Teertham Dewangan",
    jobTitle: "Founder & Chief Naturopathy Practitioner",
    worksFor: { "@id": "https://nisargacure.com/#local-business" },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nisargacure.com/#organization",
  name: "Nisarga Cure",
  url: "https://nisargacure.com",
  logo: "https://nisargacure.com/clients/nisargacure/logo.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+918962977723",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English", "Chhattisgarhi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No.3, Shri Thakur Singh Complex, Sarona, Near Gautham Chowk, Near Shri Sankalp Hospital",
    addressLocality: "Raipur",
    addressRegion: "Chhattisgarh",
    postalCode: "492099",
    addressCountry: "IN",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

// ─── Page Component ──────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <NisargaCurePage />
    </>
  );
}
