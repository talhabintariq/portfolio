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
  backend: ["Python", "FastAPI", "Node.js", "Express", "RESTful APIs"],
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

// Featured projects
export const projects = [
  {
    id: "1",
    title: "WebChat-AI (LangGraph)",
    description:
      "Multi-agent AI chat with memory and tools. Routes conversations between specialized agents for complex workflows.",
    tags: ["LangGraph", "RAG", "Streaming", "FastAPI", "Tools"],
    image: "/projects/ai-chatbot.jpg", // placeholder
    demoUrl: "#", // Pending deployment
    githubUrl: "#", // Will add after deployment
  },
  {
    id: "2",
    title: "Component Studio",
    description:
      "Design system and component library with live preview. Speeds up development with accessible, tested React components.",
    tags: ["React", "TypeScript", "Storybook", "Tailwind", "WCAG"],
    image: "/projects/component-studio.jpg", // placeholder
    demoUrl: "#", // Pending deployment
    githubUrl: "#", // Will add after deployment
  },
  {
    id: "3",
    title: "Performance Dashboard",
    description:
      "Real-time analytics platform with optimized rendering. Handles 10k+ data points with sub-100ms paint times.",
    tags: ["Next.js", "React Query", "Charts", "WebSockets", "Optimization"],
    image: "/projects/dashboard.jpg", // placeholder
    demoUrl: "#", // Pending deployment
    githubUrl: "#", // Will add after deployment
  },
];
