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

          {/* Image Placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
              <p className="text-center text-gray-600 px-4">
                <span className="text-4xl mb-2 block">📷</span>
                Add your headshot<br />
                <code className="text-sm bg-gray-300 px-2 py-1 rounded inline-block mt-2">
                  public/images/profile/headshot.jpg
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
