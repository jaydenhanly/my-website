export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-black leading-tight">
              Product designer.
            </h1>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              I help teams build products grounded in great collaboration across stakeholders, developers, and the wider organization. 15 years of experience in product development.
            </p>
          </div>

          <div className="pt-8">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
