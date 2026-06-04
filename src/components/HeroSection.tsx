import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
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

          {/* Headshot */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/profile/headshot.jpg"
                alt="Jayden Hanly"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
