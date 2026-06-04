export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © {currentYear} Jayden Hanly. All rights reserved.
          </p>

          <div className="flex gap-6 mt-6 md:mt-0">
            <a
              href="https://www.linkedin.com/in/jaydenhanly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jmhanly@gmail.com"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
