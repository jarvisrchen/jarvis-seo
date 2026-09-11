"use client";

import { useState } from "react";

export const faqItems = [
  {
    question: "What is naturopathy and how does it differ from conventional medicine?",
    answer:
      "Naturopathy is a system of healthcare that uses natural therapies — including nutrition, herbal medicine, yoga, acupuncture, and lifestyle counselling — to stimulate the body's own healing processes. Unlike conventional medicine, which often focuses on suppressing symptoms with pharmaceuticals, naturopathy seeks to identify and address the root cause of illness, treating the whole person (mind, body, and spirit) rather than isolated symptoms.",
  },
  {
    question: "Is naturopathy treatment safe? Are there any side effects?",
    answer:
      "When practised by a qualified, registered practitioner like Dr. Teertham Dewangan, naturopathy is extremely safe with minimal side effects. Since treatments use natural modalities and are tailored to each individual, the risk of adverse reactions is very low. We always begin with a thorough health assessment to ensure the treatment plan is appropriate for your specific condition and medical history.",
  },
  {
    question: "How many sessions will I need before seeing results?",
    answer:
      "Results vary depending on your condition, its severity, and how long you have had it. Acute conditions may improve within a few sessions. Chronic conditions — such as diabetes, obesity, or PCOS — typically require a committed programme of 8–12 weeks to see meaningful, lasting results. Dr. Dewangan will set realistic expectations and milestone goals during your initial consultation.",
  },
  {
    question: "Can naturopathy help with conditions like diabetes, PCOS, or hypertension?",
    answer:
      "Yes. Naturopathy has shown excellent outcomes for lifestyle-related chronic conditions. Our Diabetic Management programme helps stabilise blood sugar through targeted nutrition, herbal support, and lifestyle interventions. Our PCOD/PCOS Management programme uses hormone-balancing therapies including yoga and dietary changes. Hypertension responds well to stress-reduction techniques, acupressure, and specific dietary protocols. These programmes complement — and may reduce dependency on — conventional medication over time.",
  },
  {
    question: "Do you offer online or home-visit consultations?",
    answer:
      "Yes! We offer Tele-Consultations via video or phone for patients who cannot visit the clinic in person. We also provide Home Visit services for patients in Raipur who require physiotherapy or naturopathy at their doorstep. Book via our online scheduler or contact us on WhatsApp at +91 89629 77723 to arrange.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(180deg, #f5f3ff 0%, #f0fdfa 100%)" }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            Your Questions,{" "}
            <span className="text-violet-600">Answered</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about naturopathy and getting started at Nisarga Cure.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3" role="list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                role="listitem"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen ? "bg-violet-600 text-white" : "bg-violet-100 text-violet-600"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px bg-gray-100 mb-4" aria-hidden="true" />
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="https://wa.me/918962977723"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-full transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
