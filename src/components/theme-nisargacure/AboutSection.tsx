import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #f0fdfa 100%)" }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Meet Your Healer
            </span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Dr. Teertham Dewangan
            </h2>
            <p className="text-lg text-violet-700 font-semibold mb-4">
              Founder &amp; Chief Naturopathy Practitioner, Nisarga Cure
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Teertham Dewangan founded Nisarga Cure with a clear vision: to make natural,
              personalised healthcare accessible to everyone in Raipur and beyond. As a licensed
              naturopathy practitioner with Central and State Registration credentials, she brings
              deep clinical expertise across naturopathy, yoga therapy, physiotherapy, acupuncture,
              and acupressure.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Her philosophy is simple — the body has an innate capacity to heal when given the
              right environment, nutrition, movement, and mindset. Every consultation is an
              opportunity to understand you as a whole person, not just a set of symptoms.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Central Registration", icon: "🏛️" },
                { label: "State Registration", icon: "📋" },
                { label: "Naturopathy & Yoga", icon: "🧘" },
                { label: "Physiotherapy Certified", icon: "🦴" },
              ].map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-violet-100"
                >
                  <span className="text-xl" role="img" aria-label={cred.label}>{cred.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">{cred.label}</span>
                </div>
              ))}
            </div>

            <a
              href="https://teertham.setmore.com/teertham"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg shadow-violet-300"
            >
              Book Appointment with Dr. Dewangan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Founder image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1642975967602-653d378f3b5b?w=800&q=80&auto=format&fit=crop"
                alt="Dr. Teertham Dewangan — Founder of Nisarga Cure, Naturopathy Practitioner, Raipur"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
              {/* Gradient overlay at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-32"
                style={{ background: "linear-gradient(to top, rgba(91,33,182,0.6) 0%, transparent 100%)" }}
                aria-hidden="true"
              />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-lg leading-tight">Dr. Teertham Dewangan</p>
                <p className="text-violet-200 text-sm">Founder, Nisarga Cure · Raipur</p>
              </div>
            </div>

            {/* Decorative ring */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-4 border-teal-200 opacity-60 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-violet-200 opacity-40 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
