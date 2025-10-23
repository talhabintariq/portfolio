// Personal & Social Information
export const personalInfo = {
  name: "Talha B. Tariq",
  tagline: "caffeine. curiosity. code.",
  description:
    "From sketch to deploy, I build fast, fun, and thoughtful digital stuff.",
  email: "talhabintariq@gmail.com",
  location: "Detroit, MI",
  avatar: "/talha.jpg",
};

export const socialLinks = {
  github: "https://github.com/talhabintariq",
  linkedin: "https://www.linkedin.com/in/talhabtariq/",
  medium: "https://medium.com/@talhabintariq",
  email: "mailto:talhabintariq@gmail.com",
};

// Skills organized by category
export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Design Systems & Component Libraries",
    "Tailwind CSS",
    "Material-UI",
    "Responsive Design",
    "Accessibility (WCAG)",
    "Framer Motion",
    "Performance Optimization",
  ],
  backend: ["Python", "FastAPI", "Node.js", "Express", "RESTful APIs", "GraphQL"],
  aiml: [
    "LangChain",
    "LangGraph",
    "RAG (Retrieval-Augmented Generation)",
    "OpenAI API",
    "Vector Databases",
    "AI Chatbots & Agents",
  ],
  devops: [
    "Git",
    "GitHub",
    "Vercel",
    "AWS",
    "Jest",
    "React Testing Library",
    "Contentful CMS",
  ],
};

// Featured projects (3 flagship projects)
export const projects = [
  {
    id: "1",
    title: "CareGo Platform",
    description:
      "HIPAA-compliant healthcare platform connecting patients with care providers. Built with Next.js + FastAPI, featuring real-time booking, EMR integration, and BAA-compliant architecture. [Case study - sanitized for public viewing]",
    tags: ["Next.js", "TypeScript", "FastAPI", "AWS", "HIPAA", "Healthcare"],
    image: "/projects/carego.jpg", // placeholder
    demoUrl: null, // Private/NDA
    githubUrl: null, // Private
  },
  {
    id: "2",
    title: "WebChat-AI (LangGraph)",
    description:
      "Production-ready AI chatbot using LangGraph for stateful multi-agent conversations. Implements RAG with vector databases, streaming responses, and custom tool integration. [Demo deployment pending]",
    tags: ["Python", "LangChain", "LangGraph", "OpenAI", "RAG", "FastAPI"],
    image: "/projects/ai-chatbot.jpg", // placeholder
    demoUrl: "#", // Pending deployment
    githubUrl: "#", // Will add after deployment
  },
  {
    id: "3",
    title: "Hope For Your Garden",
    description:
      "Modern gardening services platform with Next.js 15, featuring ISR for dynamic content, optimized Core Web Vitals (LCP <2.5s), and mobile-first responsive design. [Deployment in progress]",
    tags: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Performance"],
    image: "/projects/hope-garden.jpg", // placeholder
    demoUrl: "#", // Pending deployment
    githubUrl: "#", // Will add after deployment
  },
];
