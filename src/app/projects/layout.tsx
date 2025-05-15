import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Projects | Chen Wei",
  description: "Detailed projects by Chen Wei - full-stack software engineer and computer scientist",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/#projects"
            className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-8"
          >
            <FiArrowLeft className="mr-2" />
            <span>Back to all projects</span>
          </Link>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
} 