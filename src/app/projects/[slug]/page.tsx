import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiCalendar, FiTag } from "react-icons/fi";

// Define project data types
type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Project = {
  id: string;
  title: string;
  description: string;
  content: string[];
  category: "machine-learning" | "software-development" | "data-analysis";
  tags: string[];
  images: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  featured: boolean;
};

// Example project data (you would normally fetch this from a database or API)
const projectsData: Record<string, Project> = {
  "ama-interview": {
    id: "ama-interview",
    title: "AMA Interview",
    description: "An AI-powered interview preparation platform that helps users ace interviews with expert AI feedback.",
    content: [
      "Built a responsive customer support chat bot and contact page in React, integrating Resend API for real-time email delivery for the AMA Interview platform.",
      "Implemented a scalable WebSocket system with a global React frontend provider to manage connections, auto-update message queues, and expose action APIs.",
      "Created a seamless user experience that allows users to practice with 5000+ real interview questions from 100+ top companies.",
      "Designed and developed features that help users save 90% on coaching costs while providing 98% accuracy in AI feedback.",
      "Integrated with LinkedIn to allow users to start mock interviews directly from job posts and analyze interviewer preferences."
    ],
    category: "software-development",
    tags: ["React", "FastAPI", "WebSockets", "Supabase", "AI", "Resend API"],
    images: [
      {
        src: "/placeholder-project.jpg",
        alt: "AMA Interview Platform",
        width: 800,
        height: 600
      }
    ],
    liveUrl: "https://www.amainterview.ai/",
    date: "2025-04-01",
    featured: true
  },
  "ama-autopilot": {
    id: "ama-autopilot",
    title: "AMA Autopilot",
    description: "An intelligent automation platform that streamlines workflow processes using AI.",
    content: [
      "Developed a cutting-edge automation platform that helps users streamline their workflow processes using AI technology.",
      "Built a real-time task management system with priority queuing and intelligent scheduling capabilities.",
      "Implemented data synchronization across multiple devices with offline capabilities and conflict resolution.",
      "Created an intuitive dashboard that provides analytics and insights on productivity and task completion rates.",
      "Designed an API integration system that connects with popular productivity tools and services."
    ],
    category: "software-development",
    tags: ["React", "Node.js", "WebSockets", "AI", "Automation", "Analytics"],
    images: [
      {
        src: "/placeholder-project.jpg",
        alt: "AMA Autopilot Dashboard",
        width: 800,
        height: 600
      }
    ],
    date: "2025-01-15",
    featured: true
  },
  "ai-recipe-generator": {
    id: "ai-recipe-generator",
    title: "AI Recipe Generator",
    description: "A machine learning system that generates recipes based on available ingredients using natural language processing.",
    content: [
      "This project uses advanced NLP techniques to understand ingredient relationships and generate contextually appropriate recipes.",
      "The system was built using PyTorch and a transformer-based architecture to analyze thousands of recipes and learn patterns in culinary combinations.",
      "I implemented a user-friendly web interface where users can input available ingredients and dietary restrictions to receive personalized recipe suggestions.",
      "The backend is powered by a fine-tuned language model that understands cooking terminology and can generate step-by-step instructions."
    ],
    category: "machine-learning",
    tags: ["PyTorch", "NLP", "React", "Python", "Flask"],
    images: [
      {
        src: "/placeholder-project.jpg",
        alt: "AI Recipe Generator Interface",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/chenwei-profile/ai-recipe-generator",
    liveUrl: "https://ai-recipe-demo.example.com",
    date: "2021-04-15",
    featured: true
  },
  "dining-planner": {
    id: "dining-planner",
    title: "Hypertext Dining Planner",
    description: "A collaborative dining planning system using hypertext and recommendation algorithms.",
    content: [
      "Developed a hypertext-based collaborative planning tool for groups to organize dining experiences.",
      "Implemented restaurant recommendation algorithms based on user preferences and historical choices.",
      "Built a real-time collaboration feature using WebSockets to allow multiple users to plan simultaneously.",
      "Designed an intuitive UI with responsive design to work across desktop and mobile devices."
    ],
    category: "software-development",
    tags: ["React", "Node.js", "WebSockets", "MongoDB", "Recommendation Algorithms"],
    images: [
      {
        src: "/placeholder-project.jpg",
        alt: "Dining Planner Dashboard",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/chenwei-profile/dining-planner",
    liveUrl: "https://dining-planner-demo.example.com",
    date: "2020-11-22",
    featured: true
  },
  "financial-risk-models": {
    id: "financial-risk-models",
    title: "Quantitative Risk Models",
    description: "Financial risk assessment models built during my internship at Goldman Sachs.",
    content: [
      "Developed quantitative models to assess financial market risk and predict potential fluctuations.",
      "Implemented optimization algorithms for data processing and risk calculation using Python and SQL.",
      "Collaborated with quantitative analysts to translate complex financial models into efficient code.",
      "Created data visualization dashboards to help analysts interpret risk calculations more effectively."
    ],
    category: "data-analysis",
    tags: ["Python", "SQL", "Financial Modeling", "Data Visualization", "Risk Analysis"],
    images: [
      {
        src: "/placeholder-project.jpg",
        alt: "Risk Model Visualization",
        width: 800,
        height: 600
      }
    ],
    date: "2022-08-10",
    featured: false
  }
};

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const project = projectsData[params.slug];
  
  if (!project) {
    return {
      title: "Project Not Found"
    };
  }
  
  return {
    title: `${project.title} | Chen Wei`,
    description: project.description,
  };
}

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = Object.keys(projectsData);
  return slugs.map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug];
  
  // If project doesn't exist, show 404
  if (!project) {
    notFound();
  }
  
  return (
    <article className="bg-white dark:bg-zinc-800/50 rounded-xl shadow-sm overflow-hidden">
      {/* Project Header */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full bg-blue-500">
        {project.images && project.images.length > 0 ? (
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            fill
            style={{ objectFit: "cover" }}
            className="transition-all duration-300"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-white text-xl font-medium">
            Project Screenshot
          </div>
        )}
      </div>
      
      <div className="p-6 sm:p-8">
        {/* Project Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          {project.title}
        </h1>
        
        {/* Project Metadata */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center">
            <FiCalendar className="mr-1" />
            <span>{new Date(project.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long'
            })}</span>
          </div>
          
          <div className="flex items-center">
            <FiTag className="mr-1" />
            <span>{project.category.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}</span>
          </div>
        </div>
        
        {/* Project Description */}
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
          {project.description}
        </p>
        
        {/* Project Content */}
        <div className="space-y-4 mb-8">
          {project.content.map((paragraph, index) => (
            <p key={index} className="text-zinc-600 dark:text-zinc-400">
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full text-sm font-medium text-zinc-800 dark:text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Project Links */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-700">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg text-zinc-800 dark:text-zinc-200 transition-colors"
            >
              <FiGithub className="mr-2" />
              <span>View on GitHub</span>
            </a>
          )}
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors"
            >
              <FiExternalLink className="mr-2" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
} 