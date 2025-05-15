"use client";

import { FiGithub, FiLinkedin, FiMail, FiBookOpen } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/chenwei-profile", label: "GitHub" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/chen-wei-57b225198/", label: "LinkedIn" },
    { icon: <FiBookOpen />, url: "https://mrsa-j.github.io/", label: "Blog" },
    { icon: <FiMail />, url: "mailto:chen_wei@alumni.brown.edu", label: "Email" },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 accent-text">Chen Wei</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              A showcase of my work, skills, and professional journey as a 
              Full-Stack Software Engineer and Computer Scientist.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-zinc-600 dark:text-zinc-400">
              <p>Providence, RI, US</p>
              <p className="mt-2">
                <a 
                  href="mailto:chen_wei@alumni.brown.edu" 
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  chen_wei@alumni.brown.edu
                </a>
              </p>
              <p className="mt-2">
                <a 
                  href="https://www.linkedin.com/in/chen-wei-57b225198/" 
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </p>
              <p className="mt-2">
                <a 
                  href="https://mrsa-j.github.io/" 
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white dark:bg-zinc-800 flex items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors shadow-sm hover:shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            &copy; {currentYear} Chen Wei. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 