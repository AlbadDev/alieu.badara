

import { NextResponse } from 'next/server';

// Sample project data
const projects = [
  {
    id:  1,
    title: "CONNEKT",
    href: "https://conn-ekt.com",
    dates: "Sep 2024 - Oct 2024",
    active: true,
    description:
    "CONNEKT is a comprehensive web-based solution designed to simplify the management of virtual work assistance tasks and services. Built with a modern, intuitive user interface, the platform enables businesses and professionals to seamlessly assign, track, and manage tasks in real-time, fostering greater efficiency in handling remote assistance operations.",
    technologies: [
      "Next.js",
      "MySQL",
      "Sass",
      "Material UI",
      "Express / Node.js",
      "EKS",
      "Docker",
      "Kubernetes",
    ],
    colors:[
      "#084e53",
      "#f6ba2a",
      "#5d5f61",
      "#f9fcfd",
      "#fffefe",
     
    ],
    mvp: [
      "Ability to create, assign, and manage tasks with priority levels, deadlines, and required deliverables.",
      "A simple, intuitive form for clients to request virtual assistant services, detailing task requirements and deadlines.",
      "A dedicated section showcasing the various categories of tasks that virtual assistants can manage. Each category comes with an icon or image for easy recognition.",
      "Automated email notifications to confirm task requests and updates.",
      "Visual representation of key performance indicators (KPIs) such as task completion rates, average turnaround times, and client satisfaction.",
      "In-app messaging system for real-time communication between users and virtual assistants.",
      "Automated email notifications to confirm task requests and updates.",
      "Analytics dashboard providing insights into virtual assistant performance, task efficiency, and project timelines.",
      "A sleek, responsive UI built with modern design principles (using a UI library like Material-UI or Base UI).",
    ],
    inDeep: [
      "The foundation of the application, Leveraging the latest Next.js server-side features for efficient data fetching, rendering, and SEO optimization ",
      "React Hook Form: Efficient, lightweight form handling, integrated with Zod for streamlined validation ",
      "Sass: Modular, maintainable styling using variables, mixins, and nesting for a clean codebase",
      "Socket.io enables real-time, bidirectional communication between users and virtual assistants included Instant notifications for task. ",
      "Express.js: Node.js-based server framework, providing a lightweight and robust API layer. ",
      "MySQL: SQL database for managing task data, user profiles, service records, and real-time updates.",
      "Middleware is implemented for request validation, authentication, and enhanced security.",
      "Docker: Each service and component of the platform is containerized for easy deployment and scalability. ",
      "Kubernetes: Used for orchestrating containers, ensuring high availability, and autoscaling as the platform grows. ",
      "AWS-based Elastic Load Balancer (ELB) is used to manage incoming traffic efficiently, ensuring the platform can handle high volumes of users without bottlenecks or downtime. ",
      "The platform is deployed in AWS EKS, ensuring flexibility, scalability, and security with managed Kubernetes clusters. ",
    ],
    links: [
      {
        type: "Website",
        href: "https://conn-ekt.com",
      },
    ],
    image: {
      "firstMobile":"https://i.imgur.com/GlyniaZ.png",
      "secondMobile":"https://i.imgur.com/boltv1l.png",
      "tablet":"https://i.imgur.com/LuvzMX9.png",
      "laptop":"https://i.imgur.com/sfqRxQJ.png",
    },
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  },
  {
    id:  2,
    title: "GitHub-Viewer",
    href: "#",
    dates: "June 2023 - Present",
    active: true,
    description:
      "The GitHub Viewer web app provides developers and recruiters with an intuitive interface for accessing comprehensive GitHub profile information. It offers visually appealing displays of essential details, including profile images, work positions, and public repository statistics. Interactive charts showcase programming language usage and repository performance, enhancing data visualization. This empowers users to assess potential collaborators or candidates more effectively than GitHub's standard page.",
    technologies: [
      "React",
      "Sass",
      "GitHub API",
      "Chart.js",
    ],
    colors:[
      "#1a1e22",
      "#24292e",
      "#1d77e6",
      "#fff",
      "#f6f8fa"
    ],
    mvp: [
      "Enter a GitHub username to fetch and display a beautiful profile card with a high-quality profile image, name, work title, location, and join date",
      "Show the number of public repos, followers, and following in animated, responsive cards that update instantly after the API call",
      "Use quick API calls for fast loading, making the experience feel instant and snappy. Display a loading spinner or skeleton UI while data loads for seamless feedback",
      "3 Custom-designed charts: 2 pie charts and 1 spider charts displaying: Top programming languages with distinct colors, Most-starred repositories, spider chart showing repo star distribution across languages . ",
      "Charts are interactive, with tooltips and hover effects to reveal more information. Use libraries like Chart.js or Recharts for smooth, real-time charting",
      "Engaging Repositories Cards: Each repo is displayed in a card with clean typography, showcasing name, description, language (color-coded), stars, forks, and size",
      "Each repo card has a clickable overlay that gently highlights when hovered over, and clicking the card opens the repo on GitHub in a new tab",
      "Smart Repository Filters : Filter the list of repos by size, stars, forks, and language using a responsive, sleek filter bar position in the top of the repo list component.",
    ],
    inDeep: [
      "The foundation of the application, React.js enables the development of a dynamic, easy to maintain and responsive user interface. ",
      "Chart.js: This powerful charting library is integrated to create dynamic and interactive visualizations.",
      "GitHub Polyglot API: Leveraging the GitHub API, the app fetches detailed user and repository information.",
      "Sass for Styling: To maintain clean and organized styles, Sass is used as a preprocessor for CSS. ",
      "Error Handling: The app is equipped with robust error handling to enhance user experience. It provides informative error pages for scenarios such as 'User Not Found,' 'No Internet Connection,' and 'Rate Limit Exceeded'.",
      "Axios for API Calls: Axios is utilized for making HTTP requests to the GitHub API. ",
      "Responsive Design: The application is designed to be fully responsive, ensuring that it functions smoothly across a variety of devices, from desktops to mobile phones.",
      "Deployment on Firebase: The app is deployed on Firebase, allowing for easy hosting and scalability. "
    ],
    links: [
      {
        type: "Website",
        href: "#",
      },
      {
        type: "Source",
        href: "#",
      },
    ],
    image: {
      "firstMobile":"https://i.imgur.com/kGUlUsN.png",
      "secondMobile":"https://i.imgur.com/Hi4x1ER.png",
      "tablet":"https://i.imgur.com/K3zus4n.png",
      "laptop":"https://i.imgur.com/RLUcCMO.png",
    },
    video: "https://cdn.magicui.design/bento-grid.mp4",
  },
  {
    id:  3,
    title: "Mankoo",
    href: "#",
    dates: "April 2023 - September 2023",
    active: true,
    description:
      "Introducing a dynamic platform designed specifically for Gambian entrepreneurs and stakeholders, this app facilitates networking and collaboration within the entrepreneurial community.",
    technologies: [
      "Next.js",
      "Typescript",
      "MYSQL",
      "Sass",
      "Docker",
      "Kubernetes",
      "AWS EKS",
      "AWS ELB",
    ],
    colors:[
      "#f3f2f0",
      "#f6cb65",
      "#2bb78d",
      "#fff"
    ],
    mvp: [
      "Entrepreneurs can register with business information and login details (email and password). Email verification is implemented using an OTP code to confirm the email address",
      "Each entrepreneur has a visually appealing profile showcasing their business information",
      "Users can follow other entrepreneurs to stay updated on their products and events",
      "Users can create posts that include a description, images, and attachments (like PDF files for pitch decks or business plans).",
      "Posts can be liked and commented on by other users to encourage engagement.",
      "Entrepreneurs can showcase their products or upcoming events through dedicated sections on their profiles",
      "Implement a reporting feature that enables users to report violations or inappropriate behavior from other members. ",
      "A secure password recovery feature allows users to reset their passwords. Additionally, users have the option to close their accounts permanently if desired",
    ],
    inDeep: [
      "Nextjs: Its server-side rendering capabilities ensure quick loading times and an enhanced user experience, making it perfect for our platform.",
      "Sass: Leveraging Sass for styling allows for modular, maintainable, and reusable CSS. ",
      "MySQL: Our app uses MySQL as the relational database management system to store and manage user data securely. With its robust performance and scalability.",
      "Express.js: The backend API is built with Express.js, a minimalist Node.js framework that simplifies the process of building robust web applications and APIs. ",
      "We utilize Docker for containerization, ensuring that our application runs consistently across different environments.",
      "Kubernetes orchestrates our containerized applications, managing scaling, load balancing, and service discovery.",
      "By deploying our application on AWS EKS, we leverage a fully managed Kubernetes service that simplifies the complexities of cluster management while providing scalability, security, and performance.",
      "AWS ELB distributes incoming application traffic across multiple targets, such as EC2 instances, ensuring high availability and reliability. ",
      "For real-time communication features, we integrate Socket.io, allowing for instant messaging and notifications.",
    ],
    links: [
      {
        type: "Website",
        href: "https://llm.report",
      },
      {
        type: "Source",
        href: "https://github.com/dillionverma/llm.report",
      },
    ],
    image: {
      "firstMobile":"https://i.imgur.com/tx77li6.png",
      "secondMobile":"https://i.imgur.com/jMXxxus.png",
      // "tablet":"https://i.imgur.com/LuvzMX9.png",
      "laptop":"https://i.imgur.com/joMC5q8.png",
    },
    video: "https://cdn.llm.report/openai-demo.mp4",
  },
  {
    id:  4,
    title: "Peckish-Restaurant",
    href: "#",
    dates: "April 2023 - March 2024",
    active: true,
    description:
      "Peckish restaurant's website is designed to offer a seamless dining experience with easy online reservations and showcase our locally crafted, flavorful dishes.",
    technologies: [
      "React.js",
      "Sass",
      "Imgur",
    ],
    colors:[
      "#19161b",
      "#b8b8b8",
      "#965b2b",
      "#fffefe",
    ],
    mvp: [
      "A visually appealing hero section that introduces the restaurant, showcases signature dishes, and includes a clear 'View Menu' button following the opening days, location and contact.",
      "A section that clearly displays the restaurant's menu with categories (e.g., Appetizers, Entrees, Drinks, Desserts) with appealing images and descriptions",
      "Simple and intuitive integration for users to either reserve a table or order online (either via direct form or third-party service links like 1bena delivery service",
      "A small section highlighting reviews or testimonials from customers to build credibility and entice new visitors to dine at the restaurant."
    ],
    inDeep: [
      "The foundation of the application, Next.js enables the development of fast, dynamic, easy to maintain and responsive user interface. ",
      "Sass for Styling: To maintain clean and organized styles, Sass is used as a preprocessor for CSS. ",
      "Deployment on Vercel:  allows for continuous deployment with GitHub Actions, providing free, easy hosting and scalability.",
      "Imgur for Free Image Hosting: Imgur is a popular platform for hosting and sharing images. "
    ],
    links: [
      {
        type: "Website",
        href: "#",
      },
    ],
    image: {
      "firstMobile":"https://i.imgur.com/qeXgnUY.png",
      "secondMobile":"https://i.imgur.com/rkvnIey.png",
      "tablet":"https://i.imgur.com/g4cGRvq.png",
      "laptop":"https://i.imgur.com/Ih1CDpv.png",
    },
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
  },
];

// Handle GET requests for a specific project
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const projectId = parseInt(params.id, 10);

  // Find the project by ID
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json(project); // Return the project info
}
