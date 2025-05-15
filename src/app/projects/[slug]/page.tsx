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

type ContentItem = {
  type: 'text' | 'image';
  content: string;
  alt?: string;
  width?: number;
  height?: number;
};

type Project = {
  id: string;
  title: string;
  description: string;
  content: (string | ContentItem)[];
  category: "machine-learning" | "software-development" | "data-analysis";
  tags: string[];
  images: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  productUrl?: string;
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
    date: "2022-12-15",
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
    tags: ["React", "WebSockets", "Supabase", "AI", "Resend API"],
    images: [
      {
        src: "/projects/sde/AMA Interview.png",
        alt: "AMA Interview Platform",
        width: 800,
        height: 600
      }
    ],
    liveUrl: "https://www.amainterview.ai/",
    productUrl: "https://www.amainterview.ai/product",
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
    tags: ["React", "Node.js", "WebSockets", "FastAPI", "AI", "Automation", "Analytics"],
    images: [
      {
        src: "/projects/sde/AMA Autocopilot.png",
        alt: "AMA Autopilot Dashboard",
        width: 800,
        height: 600
      }
    ],
    date: "2025-05-15",
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
        src: "/projects/mldl/GestureNauts.png",
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
      {
        type: 'image',
        content: '/projects/data/TwitterSentimentAnalyst.png',
        alt: 'Twitter Sentiment Analysis Dashboard',
        width: 800,
        height: 500
      },
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
        src: "/projects/data/TwitterSentimentAnalyst.png",
        alt: "Twitter Sentiment Analysis Dashboard",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/MRSA-J/Twitter-World-Economy-Sentiment-Analysis",
    date: "2024-01-15",
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
        src: "/projects/sde/Wayfare Wave.png",
        alt: "Wayfare Weave Platform",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/MRSA-J/Wayfare-Weave",
    liveUrl: "https://wayfare-weave.vercel.app/",
    date: "2023-12-10",
    featured: true
  },
  "greenplatter": {
    id: "greenplatter",
    title: "GreenPlatter",
    description: "An AI-powered meal planning platform designed specifically for diabetic patients to manage nutrition and improve health outcomes.",
    content: [
      {
        type: 'image',
        content: '/projects/sde/GreenPlatter/Promotion.jpg',
        alt: 'GreenPlatter Promotion',
        width: 800,
        height: 500
      },
      "Food isn't just fuel—it's a daily decision that impacts our health, energy, and well-being. But for those managing diabetes, every meal can feel like a challenge.",
      "When we started GreenPlatter, our goal wasn't just to build another meal-planning app. We wanted to empower people with the right tools—leveraging AI to personalize nutrition, simplify grocery shopping, and make meal choices effortless. Because healthy eating shouldn't be complicated.",
      "🌟 What GreenPlatter Offers:\n✅ AI-powered recipe recommendations based on your health profile\n✅ Smart ingredient swaps for better blood sugar control\n✅ Effortless meal planning tailored to your preferences",
      "Spearheaded the development of AI-driven personalized meal recommendation engine that dynamically adjusts based on users' blood glucose readings and dietary preferences.",
      "Architected and implemented a robust PostgreSQL database schema to efficiently manage user profiles, health metrics, recipe catalogs, and ingredient nutritional data.",
      "Engineered a sophisticated algorithm for smart ingredient substitutions that maintains recipe integrity while optimizing for healthier alternatives based on glycemic index.",
      "Developed an intuitive shopping list feature that automatically generates grocery lists from meal plans and integrates with nearby store locations to streamline the shopping experience.",
      "Designed and implemented a responsive, accessibility-focused UI with Next.js and Tailwind CSS, creating a seamless experience across mobile and desktop platforms."
    ],
    category: "software-development",
    tags: ["React", "Node.js", "PostgreSQL", "Next.js", "Tailwind CSS", "AI", "Healthcare", "Mobile"],
    images: [
      {
        src: "/projects/sde/GreenPlatter/icon.jpeg",
        alt: "GreenPlatter Interface",
        width: 800,
        height: 600
      }
    ],
    liveUrl: "https://greenplatter.net/",
    appStoreUrl: "https://apps.apple.com/ca/app/greenplatter/id6737013848",
    date: "2024-08-15",
    featured: true
  },
  "foodie": {
    id: "foodie",
    title: "Foodie",
    description: "A mobile application for food lovers to discover, review, and share their dining experiences.",
    content: [
      {
        type: 'image',
        content: '/projects/sde/Foodie.png',
        alt: 'Foodie Mobile App Interface',
        width: 800,
        height: 500
      },
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
        src: "/projects/sde/Foodie.png",
        alt: "Foodie Mobile App",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/MRSA-J/Foodie-MobileAppVersion",
    date: "2020-06-20",
    featured: true
  },
  "chatbot-rag": {
    id: "chatbot-rag",
    title: "ChatBot RAG",
    description: "A full-stack chatbot web application that integrates GPT API and RAG technology for enhanced conversational experiences.",
    content: [
      "Developed a comprehensive full-stack chatbot web application that combines GPT-3.5 API with RAG (Retrieval Augmented Generation) technology for contextually rich responses.",
      "Built a responsive frontend using Next.js and TypeScript, featuring a clean and intuitive user interface for seamless conversation interactions.",
      "Implemented a Node.js backend with API endpoints for processing user queries and generating intelligent responses.",
      "Leveraged LlamaIndex for efficient document retrieval and context augmentation, enhancing the chatbot's ability to provide accurate and relevant information.",
      "Integrated Retrieval Augmented Generation techniques to enhance the conversational abilities of the chatbot by providing relevant contextual information from various sources.",
      "Created a scalable architecture that can accommodate growing user bases and increasing query volumes without performance degradation.",
      "Deployed both frontend and backend with comprehensive environment configuration and easy setup options using npm scripts."
    ],
    category: "machine-learning",
    tags: ["TypeScript", "Next.js", "Node.js", "GPT-3.5", "RAG", "LlamaIndex", "Full-Stack", "AI"],
    images: [
      {
        src: "/projects/mldl/RAG.png",
        alt: "ChatBot RAG Interface",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/MRSA-J/ChatBot",
    date: "2024-03-15",
    featured: true
  },
  "recommendation-system": {
    id: "recommendation-system",
    title: "SmartPicks Recommendation System",
    description: "A collaborative filtering recommendation system that delivers personalized product suggestions with high precision and low latency.",
    content: [
      "Built a collaborative filtering recommendation system using matrix factorization and item-based similarity for personalized product suggestions.",
      "Processed click/view/purchase logs with ETL pipelines in Pandas to construct user-item interaction matrices for more accurate recommendation generation.",
      "Trained a PyTorch-based Neural Collaborative Filtering (NCF) model and evaluated system performance using Hit@K, NDCG, and Mean Average Precision (MAP) metrics.",
      "Deployed a FastAPI microservice for real-time inference with dynamic user updates and implemented cold-start fallback using popularity-based priors.",
      "Implemented Redis caching to reduce latency by 40% and integrated TF-IDF and BERT embeddings for content-based fallback recommendations.",
      "Containerized the entire application with Docker for easy deployment and scalability, ensuring consistent performance across different environments."
    ],
    category: "machine-learning",
    tags: ["Python", "PyTorch", "FastAPI", "Redis", "PostgreSQL", "Docker", "Scikit-learn", "Neural Networks", "Collaborative Filtering"],
    images: [
      {
        src: "/projects/mldl/Smart-Picks.png",
        alt: "SmartPicks Recommendation System Architecture",
        width: 800,
        height: 600
      }
    ],
    date: "2024-11-10",
    featured: true
  },
  "harry-potter-ner": {
    id: "harry-potter-ner",
    title: "Harry Potter Named Entity Recognition",
    description: "A custom NER system designed to extract and classify entity mentions in Harry Potter novels.",
    content: [
      {
        type: 'image',
        content: '/projects/mldl/Harry Potter Named Entity Recognition.webp',
        alt: 'Harry Potter Named Entity Recognition System',
        width: 800,
        height: 500
      },
      "Developed a specialized Named Entity Recognition (NER) system focused on identifying and classifying entities within the Harry Potter literary universe.",
      "Created a comprehensive annotation schema tailored to fantasy literature, covering character names, locations, spells, magical artifacts, and other domain-specific entity types.",
      "Conducted extensive manual annotation of text samples from the novels, building a high-quality labeled dataset that captures the unique linguistic patterns in J.K. Rowling's writing.",
      "Implemented and trained Conditional Random Field (CRF) models using sklearn-crfsuite, which excel at sequence labeling tasks by considering relationships between adjacent tokens.",
      "Engineered a rich feature set for the CRF model, including word-level features (capitalization, prefixes, suffixes), contextual features (surrounding words), and dictionary-based features (gazetteer lookups).",
      "Performed systematic hyperparameter optimization through grid search, fine-tuning parameters such as c1, c2 regularization coefficients, and algorithm options to maximize model performance.",
      "Conducted thorough evaluation using cross-validation and metrics like precision, recall, and F1-score, achieving over 85% F1-score on character name recognition and 78% on magical term identification.",
      "Analyzed error patterns to identify challenging cases, such as ambiguous names and context-dependent entity types, providing insights for further model improvements."
    ],
    category: "machine-learning",
    tags: ["Python", "NLP", "CRF", "Named Entity Recognition", "Machine Learning", "Data Annotation", "Sequence Labeling"],
    images: [
      {
        src: "/projects/mldl/Harry Potter Named Entity Recognition.webp",
        alt: "Harry Potter NER System",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/ChamiLamelas/COSI217B_Final_Project",
    date: "2023-05-20",
    featured: true
  },
  "stock-prediction": {
    id: "stock-prediction",
    title: "Stock Market Prediction System",
    description: "An end-to-end stock price forecasting system that scrapes historical market data and applies deep learning models to predict future stock movements.",
    content: [
      {
        type: 'image',
        content: '/projects/mldl/Stock-Price-Prediction.png',
        alt: 'Stock Market Prediction System',
        width: 800,
        height: 500
      },
      "Developed a comprehensive stock market prediction system that integrates data collection, preprocessing, modeling, and visualization in a unified pipeline.",
      "Engineered a robust web scraping framework using BeautifulSoup and Selenium to automatically collect historical stock data from Yahoo Finance, Google Finance, and SEC filings, including price movements, trading volumes, and key financial indicators.",
      "Implemented advanced data preprocessing techniques for financial time series, including handling of missing values, outlier detection, normalization, and feature engineering of technical indicators (RSI, MACD, Bollinger Bands).",
      "Constructed a multi-step time series forecasting architecture using stacked LSTM networks with attention mechanisms to capture both short-term patterns and long-term dependencies in stock price movements.",
      "Integrated external data sources including economic indicators, market sentiment from news and social media analysis, and sector performance metrics to enhance prediction accuracy.",
      "Developed an ensemble approach combining predictions from multiple models (LSTM, GRU, CNN-LSTM hybrid, Prophet) to improve robustness and reduce prediction variance.",
      "Created a backtesting framework to evaluate model performance against historical data, using metrics like RMSE, MAPE, directional accuracy, and risk-adjusted returns.",
      "Built an interactive visualization dashboard that displays predicted price trends, confidence intervals, and risk assessments to support investment decision-making."
    ],
    category: "machine-learning",
    tags: ["Python", "TensorFlow", "LSTM", "Time Series Analysis", "Web Scraping", "Data Visualization", "Finance", "Deep Learning"],
    images: [
      {
        src: "/projects/mldl/Stock-Price-Prediction.png",
        alt: "Stock Prediction System Dashboard",
        width: 800,
        height: 600
      }
    ],
    date: "2021-04-15",
    featured: true
  },
  "design-portfolio": {
    id: "design-portfolio",
    title: "Design Portfolio & Visualization",
    description: "A comprehensive collection of UI/UX design projects and data visualizations featuring iterative design processes from low-fidelity to high-fidelity prototypes, A/B testing, and data-driven storytelling.",
    content: [
      {
        type: 'image',
        content: '/projects/data/Design Portfolio.jpg',
        alt: 'Design Portfolio Showcase',
        width: 800,
        height: 500
      },
      "Curated a diverse portfolio of design and visualization projects showcasing expertise in UI/UX design, interactive data dashboards, and information visualization with a focus on creating compelling visual narratives that communicate complex data effectively.",
      "Implemented a structured iterative design process beginning with sketches and low-fidelity wireframes to rapidly explore multiple design directions, gathering early feedback before committing resources to detailed implementations.",
      "Created high-fidelity interactive prototypes using Figma and Adobe XD that accurately represented the final product experience, allowing stakeholders to evaluate and approve designs before development began.",
      "Conducted rigorous A/B testing experiments to optimize user interfaces, resulting in a 42% increase in conversion rates and 27% improvement in user engagement metrics across multiple projects.",
      "Developed data-driven storytelling techniques that transform complex datasets into compelling visual narratives, enabling stakeholders to gain insights and make informed decisions based on clear data presentation.",
      "Designed and implemented custom dashboards in Tableau that present key performance indicators and business metrics in an intuitive and visually engaging format, focusing on clarity and actionable insights.",
      "Applied a systematic iterative design approach with multiple feedback loops from users and stakeholders, documenting each iteration and the rationale behind design decisions to create a transparent design process.",
      "Collaborated with cross-functional teams to transition designs from concept to implementation, creating detailed design specifications and asset libraries to ensure consistent execution across different platforms."
    ],
    category: "data-analysis",
    tags: ["Figma", "UI/UX", "A/B Testing", "Data Visualization", "Infographics", "Low-Fi Prototyping", "High-Fi Prototyping", "Iterative Design", "Storytelling"],
    images: [
      {
        src: "/projects/data/Design Portfolio.jpg",
        alt: "Design Portfolio Showcase",
        width: 800,
        height: 600
      }
    ],
    githubUrl: "https://github.com/happydoggie666/portfolio/tree/main",
    liveUrl: "https://happydoggie666.github.io/portfolio/",
    date: "2023-09-10",
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
            <span>{project.category === "machine-learning" 
              ? "Machine Learning/Deep Learning" 
              : project.category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </span>
          </div>
        </div>
        
        {/* Project Description */}
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
          {project.description}
        </p>
        
        {/* Project Content */}
        <div className="space-y-4 mb-8">
          {project.content.map((item, index) => {
            if (typeof item === 'string') {
              return (
                <p key={index} className="text-zinc-600 dark:text-zinc-400">
                  {item}
                </p>
              );
            } else if (item.type === 'image') {
              return (
                <div key={index} className="my-8 flex justify-center">
                  <div className="relative w-full max-w-3xl h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={item.content}
                      alt={item.alt || 'Project image'}
                      fill
                      style={{ objectFit: "contain" }}
                      className="transition-all duration-300"
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
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
          
          {project.id === "ama-interview" && project.productUrl && (
            <a
              href={project.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white transition-colors"
            >
              <FiExternalLink className="mr-2" />
              <span>Product Page</span>
            </a>
          )}
          
          {project.id === "greenplatter" && project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-black hover:bg-gray-800 rounded-lg text-white transition-colors"
            >
              <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.619.25-1.118.381-1.497.393-.578.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"/>
              </svg>
              <span>Available on App Store</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
} 