const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const words = [
  { text: "AI/ML", imgPath: "images/ideas.svg" },
  { text: "Full Stack", imgPath: "images/concepts.svg" },
  { text: "Cloud", imgPath: "images/designs.svg" },
  { text: "DevOps", imgPath: "images/code.svg" },
  { text: "AI/ML", imgPath: "images/ideas.svg" },
  { text: "Full Stack", imgPath: "images/concepts.svg" },
  { text: "Cloud", imgPath: "images/designs.svg" },
  { text: "DevOps", imgPath: "images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Learning" },
  { value: 8, suffix: "", label: "CGPA" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 2000, suffix: "+", label: "Images Processed" },
];

const logoIconsList = [
  { imgPath: "images/logos/company-logo-1.png" },
  { imgPath: "images/logos/company-logo-2.png" },
  { imgPath: "images/logos/company-logo-3.png" },
  { imgPath: "images/logos/company-logo-4.png" },
  { imgPath: "images/logos/company-logo-5.png" },
  { imgPath: "images/logos/company-logo-6.png" },
  { imgPath: "images/logos/company-logo-7.png" },
  { imgPath: "images/logos/company-logo-8.png" },
  { imgPath: "images/logos/company-logo-9.png" },
  { imgPath: "images/logos/company-logo-10.png" },
  { imgPath: "images/logos/company-logo-11.png" },
];

const abilities = [
  { imgPath: "images/seo.png", title: "AI/ML Expertise", desc: "Building medical imaging systems with TensorFlow and developing enterprise automation solutions." },
  { imgPath: "images/chat.png", title: "Full-Stack Development", desc: "Creating scalable applications with React, Node.js, and Spring Boot from front to back." },
  { imgPath: "images/time.png", title: "Cloud & DevOps", desc: "Deploying and containerizing applications on AWS, Azure, and GCP with Docker and CI/CD." },
];

const techStackImgs = [
  { name: "AI/ML Engineer", imgPath: "images/logos/python.svg" },
  { name: "Full Stack Developer", imgPath: "images/logos/react.png" },
  { name: "Backend Engineer", imgPath: "images/logos/node.png" },
  { name: "Cloud Developer", imgPath: "images/logos/git.svg" },
  { name: "DevOps Engineer", imgPath: "images/logos/three.png" },
];

const techStackIcons = [
  { name: "React Developer", modelPath: "models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "Python Developer", modelPath: "models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
  { name: "Backend Developer", modelPath: "models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
  { name: "Interactive Developer", modelPath: "models/three.js-transformed.glb", scale: 0.05, rotation: [0, 0, 0] },
  { name: "Project Manager", modelPath: "models/git-svg-transformed.glb", scale: 0.05, rotation: [0, -Math.PI / 4, 0] },
];

const expCards = [
  {
    review: "Mohammed demonstrated exceptional skill in developing our AI-powered medical imaging system, bringing both technical expertise and collaborative spirit to the team.",
    imgPath: "images/exp1.png",
    logoPath: "images/logo1.png",
    title: "AI/ML Intern",
    company: "Rug-Rel, Bangalore",
    date: "August 2025 - Present",
    responsibilities: [
      "Developing an AI-powered kidney stone detection system using TensorFlow and OpenCV on medical X-ray datasets.",
      "Preprocessed and augmented 2,000+ medical images, improving model accuracy and robustness.",
      "Built Python-based data pipeline with pandas and NumPy for efficient medical image preprocessing.",
      "Deployed model inference APIs on AWS EC2 and S3 for scalable storage and retrieval.",
      "Containerized ML inference service using Docker, reducing setup time by 60%.",
      "Automated deployment workflows using GitHub Actions + Docker.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "images/logo1.png" },
  { name: "logo2", imgPath: "images/logo2.png" },
  { name: "logo3", imgPath: "images/logo3.png" },
];

const achievements = [
  { title: "Smart India Hackathon 2023", description: "Finalist", icon: "🏆", imgPath: "images/client1.png" },
  { title: "Pitch Perfect, E-Summit 2023", description: "Winner", icon: "🥇", imgPath: "images/client2.png" },
  { title: "AWS Cloud Practitioner", description: "Certified 2025", icon: "☁️", imgPath: "images/client3.png" },
  { title: "Docker Kubernetes Essentials", description: "Certified 2024", icon: "🐳", imgPath: "images/client4.png" },
  { title: "Full Stack Web Development", description: "Coursera 2023", icon: "💻", imgPath: "images/client5.png" },
  { title: "CGPA 8.0", description: "Dayananda Sagar College", icon: "🎓", imgPath: "images/client6.png" },
];

const socialImgs = [
  { name: "insta", imgPath: "images/insta.png" },
  { name: "fb", imgPath: "images/fb.png" },
  { name: "x", imgPath: "images/x.png" },
  { name: "linkedin", imgPath: "images/linkedin.png" },
];

const projects = [
  {
    title: "SaaS AI Agent Platform",
    description: "Built platform for AI-powered video calls using custom agents with summaries, transcripts, and post-call playback/search.",
    tech: ["Next.js", "React", "Better Auth"],
    link: "https://github.com/mirzammx",
    imgPath: "images/project1.png",
  },
  {
    title: "Enterprise FAQ Automation System",
    description: "RAG-based Q&A system automating customer support with FAISS semantic search, reducing query response time from hours to under 3 seconds.",
    tech: ["Python", "LangChain", "FAISS", "Streamlit"],
    link: "https://github.com/mirzammx",
    imgPath: "images/project2.png",
  },
  {
    title: "DineDash",
    description: "Full-stack restaurant management system with secure authentication, role-based access control, and CRUD features for inventory and orders.",
    tech: ["Spring Boot", "Thymeleaf", "MySQL"],
    link: "https://github.com/mirzammx",
    imgPath: "images/project3.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  achievements,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};