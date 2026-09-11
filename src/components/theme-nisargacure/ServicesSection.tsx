const services = [
  {
    emoji: "🌿",
    name: "Naturopathy Consultation",
    description:
      "Comprehensive evaluation using natural diagnostic techniques to design your personalised healing plan.",
  },
  {
    emoji: "📱",
    name: "Tele-Consultation",
    description:
      "Connect with Dr. Dewangan from the comfort of your home via video or phone consultation.",
  },
  {
    emoji: "⚖️",
    name: "Weight Management",
    description:
      "Sustainable, diet-and-lifestyle-based programs to help you reach and maintain your ideal weight.",
  },
  {
    emoji: "🩹",
    name: "Pain Management",
    description:
      "Natural therapies targeting chronic and acute pain — without dependence on painkillers.",
  },
  {
    emoji: "💪",
    name: "Obesity Management",
    description:
      "Holistic approach addressing metabolic imbalances, nutrition, movement, and mindset.",
  },
  {
    emoji: "🩸",
    name: "Diabetic Management",
    description:
      "Naturopathic protocols to stabilise blood sugar levels and reduce dependency on medication.",
  },
  {
    emoji: "🌸",
    name: "PCOD / PCOS Management",
    description:
      "Hormone-balancing therapies combining nutrition, yoga, and herbal interventions for women's health.",
  },
  {
    emoji: "🏠",
    name: "Home Visit",
    description:
      "Personalised naturopathy and physiotherapy sessions delivered directly to your doorstep in Raipur.",
  },
  {
    emoji: "☀️",
    name: "Lifestyle Disorders",
    description:
      "Targeted programs for hypertension, stress, sleep disorders, thyroid issues, and more.",
  },
  {
    emoji: "🏥",
    name: "Post-Surgery Rehabilitation",
    description:
      "Evidence-based physical therapy and naturopathy to accelerate safe recovery after surgery.",
  },
  {
    emoji: "🧘",
    name: "Yoga Therapy",
    description:
      "Therapeutic yoga sequences designed for your specific health condition and fitness level.",
  },
  {
    emoji: "🦴",
    name: "Physiotherapy",
    description:
      "Manual therapy, exercises, and electrotherapy to restore mobility, strength, and function.",
  },
  {
    emoji: "🪡",
    name: "Acupuncture",
    description:
      "Ancient needle-based healing to stimulate energy flow, reduce pain, and restore balance.",
  },
  {
    emoji: "👐",
    name: "Acupressure",
    description:
      "Non-invasive pressure-point therapy for pain relief, stress reduction, and overall wellness.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(180deg, #f5f3ff 0%, #ffffff 100%)" }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            What We Offer
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            Holistic Healing,{" "}
            <span className="text-violet-600">14 Modalities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From ancient wisdom to modern physiotherapy — every treatment at Nisarga Cure is
            personalised to your unique health journey.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service) => (
            <article
              key={service.name}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-teal-50 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                <span role="img" aria-label={service.name}>
                  {service.emoji}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://teertham.setmore.com/teertham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold text-base px-8 py-4 rounded-full transition-colors duration-200 shadow-lg shadow-violet-300"
          >
            Book Your First Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
