import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-violet-700 via-blue-600 to-sky-300 p-4">
      <div className="relative max-w-3xl w-full bg-white/90 rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col items-center backdrop-blur-lg ring-1 ring-white/40 border border-white/10 animate-fadeIn">
        {/* Decorative Hero Image */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <Image
            src="/cicd-illustration.svg" // Place your SVG or PNG in /public/
            width={90}
            height={90}
            alt="CI/CD Illustration"
            className="drop-shadow-lg"
            priority
          />
        </div>
        {/* Heading */}
        <h1 className="mt-12 mb-4 text-5xl font-bold text-gray-900 drop-shadow-lg leading-tight tracking-tight">
          🚀 <span className="align-middle">External CI/CD Demo 23-07-2025</span> 🚀
        </h1>
        <p className="text-xl md:text-2xl mb-5 text-gray-700 font-light">
          A modern Next.js app deployed magically from GitHub – experience automation and elegance.
        </p>
        <p className="text-base md:text-lg mb-8 text-gray-600">
          See seamless integration, rapid deployment, and robust workflows all in one place.<br />
          Powered by external Continuous Integration and Delivery – no manual steps, just pure flow.
        </p>
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
          <a
            href="https://github.com/omkar-mane/sample-nextjs"
            className="inline-flex justify-center items-center rounded-full px-7 py-3 bg-gradient-to-br from-blue-600 to-violet-600 text-white font-semibold text-lg shadow-md hover:shadow-xl hover:from-violet-700 hover:to-blue-700 transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.828.092-.643.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.931 0-1.09.39-1.984 1.029-2.68-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.7.11 2.493.324 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.099 2.65.64.696 1.028 1.59 1.028 2.68 0 3.829-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.33-.012 2.41-.012 2.746 0 .267.18.577.688.483C21.137 20.218 24 16.447 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
          <a
            href="https://nextjs.org/docs"
            className="inline-flex justify-center items-center rounded-full px-7 py-3 bg-white border-2 border-gray-900 text-gray-900 font-semibold text-lg shadow-md hover:bg-gray
            -900 hover:text-white hover:border-transparent transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M13 7H7v6h6V7z" />
              <path 
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-8a5 5 0 0110 0A5 5 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
            Learn More About Next.js
          </a>
        </div>
        {/* Footer or attribution */}
        <footer className="mt-10 text-gray-400 text-sm">
          Made with <span className="text-purple-600">♥</span> using Next.js &amp; GitHub Actions.
        </footer>
      </div>
      {/* Fade In Animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(0.33, 1, 0.68, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px);}
          to { opacity: 1; transform: none;}
        }
      `}</style>
    </main>
  );
}
