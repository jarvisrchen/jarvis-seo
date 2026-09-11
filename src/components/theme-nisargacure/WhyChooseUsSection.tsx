import Image from "next/image";

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "100% Natural Approach",
    description:
      "Every treatment uses the body's own healing intelligence — no synthetic drugs, no invasive procedures. Pure naturopathy.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Personalised Therapies",
    description:
      "No two patients receive the same protocol. Dr. Dewangan designs each treatment plan based on your unique constitution, history, and goals.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Modern Holistic Practices",
    description:
      "We bridge traditional healing wisdom with contemporary science — integrating yoga, acupuncture, physiotherapy, and nutrition counselling.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Multiple Healing Modalities",
    description:
      "Yoga Therapy, Acupuncture, Acupressure, Physiotherapy — one clinic, 14 evidence-informed healing pathways tailored to your needs.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      className="py-20 md:py-28 bg-white"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=900&q=80&auto=format&fit=crop"
                alt="Group yoga therapy session — holistic wellness at Nisarga Cure"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(91,33,182,0.3) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 sm:right-4 bg-white rounded-2xl p-5 shadow-xl border border-violet-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-gray-900 leading-none">4.9★</p>
                  <p className="text-xs text-gray-500 mt-0.5">Patient satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Why Nisarga Cure
            </span>
            <h2
              id="why-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Healing That Works{" "}
              <span className="text-violet-600">With Your Body</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              At Nisarga Cure, we believe in empowering you — not just treating symptoms. Our
              approach addresses the root cause using nature's own pharmacy, guided by a licensed
              practitioner.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
