const testimonials = [
  {
    name: "Priya S.",
    location: "Raipur, CG",
    rating: 5,
    text: "Dr. Dewangan completely transformed my health journey. I had been struggling with PCOS for years, trying different medications with little relief. After just three months of naturopathy and yoga therapy at Nisarga Cure, my cycles have regulated and I feel like myself again.",
    service: "PCOD / PCOS Management",
  },
  {
    name: "Ramesh K.",
    location: "Raipur, CG",
    rating: 5,
    text: "I was skeptical about naturopathy at first, but my diabetic numbers have improved significantly without increasing my medication. The personalised diet plan and acupressure sessions have made a huge difference. I strongly recommend Nisarga Cure.",
    service: "Diabetic Management",
  },
  {
    name: "Anita M.",
    location: "Raipur, CG",
    rating: 5,
    text: "After my knee surgery, I was worried about my recovery timeline. The post-surgery rehabilitation program at Nisarga Cure combined physiotherapy with natural therapies, and I was back on my feet much faster than my surgeon expected. Exceptional care!",
    service: "Post-Surgery Rehabilitation",
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Client Stories
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            Real People,{" "}
            <span className="text-violet-600">Real Healing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our patients who have experienced the Nisarga Cure difference.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-gradient-to-br from-violet-50 to-teal-50 rounded-2xl p-7 border border-violet-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote mark */}
              <div className="text-4xl text-violet-200 font-serif leading-none mb-2" aria-hidden="true">
                &ldquo;
              </div>

              <p className="text-gray-700 leading-relaxed flex-1 text-sm sm:text-base">
                {t.text}
              </p>

              {/* Service tag */}
              <div className="mt-5 mb-4">
                <span className="inline-block bg-white border border-violet-200 text-violet-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {t.service}
                </span>
              </div>

              {/* Author */}
              <footer className="flex items-center gap-3 pt-4 border-t border-violet-100">
                <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="font-bold text-gray-900 text-sm not-italic">{t.name}</cite>
                  <p className="text-xs text-gray-500">{t.location} · Client testimonial</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Review CTA */}
        <div className="text-center mt-12">
          <a
            href="/reviews-client-satisfaction"
            className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors"
          >
            Read all client reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
