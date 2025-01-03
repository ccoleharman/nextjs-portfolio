import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Cole Harman | Portfolio",
  description: "Welcome to Cole Harman's Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 p-0 bg-neutral-900">
        <header className="flex justify-between items-center text-white text-sm fixed top-0 left-0 w-full bg-neutral-900 shadow-md z-50 sm:text-xl">
          <h1 className="sm:m-5 m-2 ml-3">Cole Harman</h1>
          <nav className="mr-5">
            <Link
              className="p-2 sm:m-2 rounded hover:bg-gradient-to-r hover:to-sky-500 hover:from-sky-600"
              href="/"
              aria-label="Contact"
            >
              Home
            </Link>
            <Link
              className="p-2 sm:m-2 rounded hover:bg-gradient-to-r hover:to-sky-500 hover:from-sky-600"
              href="/about"
              aria-label="Contact"
            >
              About
            </Link>
            <Link
              className="p-2 sm:m-2 rounded hover:bg-gradient-to-r hover:to-sky-500 hover:from-sky-600"
              href="/projects"
              aria-label="Projects"
            >
              Projects
            </Link>
            <Link
              className="p-2 sm:m-2 rounded hover:bg-gradient-to-r hover:to-sky-500 hover:from-sky-600"
              href="javascript: document.body.scrollIntoView(false);"
              aria-label="Contact"
            >
              Contact
            </Link>
          </nav>
          <div className="flex space-x-4 mr-5">
            <a
              href="https://www.linkedin.com/in/christian-cole-harman-58877a325/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-700 hidden sm:block"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="sm:w-6 sm:h-6 w-4 h-4"
              />
            </a>
            <a
              href="https://github.com/ccoleharman"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-orange-500 hidden sm:block"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="sm:w-6 sm:h-6 w-4 h-4"
              />
            </a>
          </div>
        </header>
        <main className="sm:mt-16 min-[375]:mt-9 mt-14">{children}</main>
        <footer id="contact" className="bg-neutral-800 text-white p-5 w-screen">
          <h2 className="text-lg font-bold mb-4 text-center">
            Let&apos;s Connect
          </h2>
          <div className="container mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://www.linkedin.com/in/christian-cole-harman-58877a325/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-700"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/ccoleharman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-orange-500"
              >
                <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
              </a>
              <a
                href="mailto:cole_harman@yahoo.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-gray-400 hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
              </a>
            </div>
            <p className="mt-4 italic">
              &quot;Looking for a motivated developer? Let&apos;s build
              something great together!&quot;
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
