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
  "youtube-teller": {
    id: "youtube-teller",
    title: "YouTube Teller",
    description: "A video storytelling model that automatically generates descriptive captions for YouTube videos using deep learning techniques.",
    content: [
      "YouTube Teller is a video captioning system that analyzes video frames to generate coherent natural language descriptions of the content. This project was developed as part of a team effort to improve video accessibility and searchability.",
      "The system uses a combination of computer vision and natural language processing techniques. We extract frames from videos at various intervals and process them through a CLIP encoder to understand the visual content.",
      "For the language generation component, we implemented a transformer-based architecture with a GPT-2 pretrained model to produce fluent and contextually relevant captions based on the visual features.",
      "We experimented with three different approaches for frame selection: single frame analysis, sequential frame processing, and mean frame representation. Our evaluation showed that the mean frame approach achieved the best results across multiple metrics.",
      "The model was trained and evaluated on the YouTubeClips dataset, which contains short video clips with human-annotated descriptions. Our system achieved strong performance on standard metrics including BLEU (0.520), CIDEr (0.584), METEOR (0.302), and ROUGE (0.647).",
      "My primary contributions to this project included preprocessing the dataset, implementing the caption generator using the GPT-2 pretrained model, and conducting ablation studies to analyze the impact of different components on the overall performance."
    ],
    category: "machine-learning",
    tags: ["Python", "PyTorch", "Computer Vision", "NLP", "CLIP", "Transformer", "GPT-2"],
    images: [
      {
        src: "/projects/mldl/Youtube-Teller.jpeg",
        alt: "YouTube Teller System Architecture",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/MRSA-J/Youtube-Teller",
    liveUrl: "https://devpost.com/software/video-storytelling",
    date: "2022-05-15",
    featured: true
  },
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
        src: "/projects/sde/AMA Interview.png",
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
        src: "/projects/sde/AMA Autocopilot.png",
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
  },
  "gesture-nauts": {
    id: "gesture-nauts",
    title: "Gesture-Nauts",
    description: "A 3D gesture recognition system that provides corresponding animations upon recognition.",
    content: [
      "Developed a 3D gesture recognition system that implements hand gesture detection using MediaPipe and deep learning for real-time interaction.",
      "Created a machine learning pipeline that processes hand landmarks extracted from video frames to classify different hand gestures.",
      "Trained a custom keypoint classifier on the HaGRID (HAnd Gesture Recognition Image Dataset) with data augmentation techniques to improve model robustness.",
      "Implemented real-time visualization of fingertip coordinates and gesture history to enhance user interaction.",
      "Built a web interface that demonstrates the gesture recognition capabilities and provides corresponding animations upon successful recognition.",
      "The system can recognize 18 different hand gestures including call, dislike, fist, four, like, mute, ok, and various finger combinations."
    ],
    category: "machine-learning",
    tags: ["Python", "MediaPipe", "TensorFlow", "Computer Vision", "Machine Learning", "Gesture Recognition"],
    images: [
      {
        src: "/placeholder-project.jpg",
        alt: "Gesture-Nauts Demo",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/MRSA-J/Gesture-Nauts",
    liveUrl: "",
    date: "2023-04-20",
    featured: true
  },
  "dev-project1": {
    id: "dev-project1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, cart functionality, payment processing, and order management.",
    content: [
      "Developed a comprehensive e-commerce platform with a focus on user experience and performance.",
      "Implemented secure user authentication and authorization system with multiple roles (customer, admin, vendor).",
      "Built a robust product management system with categories, search, filtering, and inventory tracking.",
      "Created a seamless shopping cart and checkout experience with integration to Stripe payment processing.",
      "Designed an order management system with order tracking, history, and automated email notifications."
    ],
    category: "software-development",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Stripe API"],
    images: [
      {
        src: "/projects/sde/E-commerce.png",
        alt: "E-Commerce Platform Dashboard",
        width: 800,
        height: 600
      }
    ],
    liveUrl: "https://dev-project1-demo.example.com",
    date: "2023-06-15",
    featured: true
  },
  "twitter-sentiment": {
    id: "twitter-sentiment",
    title: "Twitter World Economy Sentiment Analysis",
    description: "A comprehensive analysis of Twitter sentiment towards the world economy and financial institutions during the 2023 banking collapses.",
    content: [
      "Led a data science team in analyzing Twitter sentiment during the Silicon Valley Bank (SVB) and Credit Suisse collapses to understand public perception of financial institutions and the world economy.",
      "Implemented a web scraping pipeline using snscrape to collect over 10,000 tweets related to SVB, Credit Suisse, and world economy topics during critical periods.",
      "Conducted data preprocessing and cleaning to prepare tweets for analysis, including text normalization, removal of irrelevant content, and feature extraction.",
      "Developed three machine learning models (LDA, Multinomial Naive Bayes, and SVM) to classify tweets by sentiment and identify key topics of discussion.",
      "Performed statistical hypothesis testing to validate three key hypotheses about public sentiment before and after banking collapses.",
      "Created insightful visualizations including word frequency plots, sentiment distribution charts, and temporal trend analyses to communicate findings effectively.",
      "Analyzed the socio-historical context and potential impact of public sentiment on financial markets and economic policy decisions."
    ],
    category: "data-analysis",
    tags: ["Python", "NLP", "Machine Learning", "Hypothesis Testing", "Sentiment Analysis", "Data Visualization"],
    images: [
      {
        src: "/placeholder-project.jpg",
        alt: "Twitter Sentiment Analysis Dashboard",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/MRSA-J/Twitter-World-Economy-Sentiment-Analysis",
    date: "2023-05-10",
    featured: true
  },
  "wayfare-weave": {
    id: "wayfare-weave",
    title: "Wayfare Weave",
    description: "A map-based dining planning platform that enables users to explore and share their favorite restaurants and culinary experiences.",
    content: [
      "Led the UI design and database implementation for a collaborative dining planning platform using React, TypeScript, and MongoDB.",
      "Integrated Google Maps API with custom markers, geocoding, and autocomplete features to provide an interactive and intuitive location-based interface.",
      "Created a restaurant node system allowing users to add, categorize, and comment on dining establishments, with robust information display and interaction capabilities.",
      "Implemented a calendar scheduling system with React-Big-Calendar that enables users to plan and organize dining experiences with drag-and-drop functionality.",
      "Built user authentication and profile management systems that allow personalized experiences and saved preferences.",
      "Designed a responsive interface that works seamlessly across desktop and mobile devices, with categories dynamically generated based on user input."
    ],
    category: "software-development",
    tags: ["TypeScript", "React", "Node.js", "MongoDB", "Google Maps API", "Authentication", "Calendar"],
    images: [
      {
        src: "/placeholder-project.jpg",
        alt: "Wayfare Weave Platform",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/MRSA-J/Wayfare-Weave",
    liveUrl: "https://wayfare-weave.vercel.app/",
    date: "2023-05-10",
    featured: true
  },
  "greenplatter": {
    id: "greenplatter",
    title: "GreenPlatter",
    description: "A sustainability-focused food platform that helps users make environmentally conscious dining choices.",
    content: [
      "Contributed to the development of GreenPlatter, a platform focused on promoting sustainable food choices and reducing environmental impact through informed dining decisions.",
      "Implemented features for recipe suggestions based on seasonal and locally available ingredients to reduce carbon footprint associated with food transportation.",
      "Created a rating system for restaurants based on their sustainability practices, including waste management, energy efficiency, and locally sourced ingredients.",
      "Developed user profiles that track personal carbon footprint reduction through sustainable food choices and provide customized recommendations.",
      "Integrated with external sustainability databases to provide accurate environmental impact data for different food items and dining establishments.",
      "Designed an intuitive, engaging UI with Next.js and Tailwind CSS that emphasizes environmental metrics while maintaining user experience quality."
    ],
    category: "software-development",
    tags: ["React", "Node.js", "PostgreSQL", "Next.js", "Tailwind CSS", "Sustainability"],
    images: [
      {
        src: "/placeholder-project.jpg",
        alt: "GreenPlatter Interface",
        width: 800,
        height: 600
      }
    ],
    liveUrl: "https://greenplatter.net/",
    date: "2023-09-15",
    featured: true
  },
  "foodie": {
    id: "foodie",
    title: "Foodie",
    description: "A mobile application for food lovers to discover, review, and share their dining experiences.",
    content: [
      "Developed Foodie, a cross-platform mobile application using React Native and Expo to create a social platform for food enthusiasts.",
      "Implemented a restaurant discovery system with geolocation features, filtering options, and personalized recommendations based on user preferences and past activity.",
      "Built a review and rating system allowing users to share photos, comments, and detailed feedback about their dining experiences.",
      "Created a social component with features for following other users, sharing posts, and receiving updates about friends' food discoveries.",
      "Integrated with Firebase for real-time database functionality, user authentication, and cloud storage for images and media.",
      "Utilized Redux for state management and GraphQL for efficient data fetching across the application."
    ],
    category: "software-development",
    tags: ["React Native", "Firebase", "Redux", "GraphQL", "Expo", "Mobile Development"],
    images: [
      {
        src: "/placeholder-project.jpg",
        alt: "Foodie Mobile App",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/MRSA-J/Foodie-MobileAppVersion",
    date: "2022-11-05",
    featured: true
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
            style={{ 
              objectFit: "cover",
              objectPosition: project.id === "ama-autopilot" ? "center 40%" : "center"
            }}
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
          
          {project.id === "youtube-teller" && (
            <a
              href="https://devpost.com/software/video-storytelling"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white transition-colors"
            >
              <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 16.526h-1.58V5.864h1.58v12.272zm4.006-5.523L9.43 11.108h2.79l2.172 1.505-2.172 1.504H9.43l2.172-1.504zm3.798 5.523h-1.581V5.864h1.581v12.272z"/>
              </svg>
              <span>View on DevPost</span>
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