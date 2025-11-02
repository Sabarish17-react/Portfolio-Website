import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Themetoggle from "./Themetoggle";
import { Github, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projectsList = [
  {
    title: "IoT Installation & Revenue Dashboard",
    duration: "June 2022 – December 2022",
    description:
      "Built an IoT analytics dashboard to track monthly and yearly installations of IoT devices across Schwing and Xcmg machines. The system provided insights into device renewals, non-renewals, and overall revenue performance with detailed visual reports and employee activity tracking.",
    tools: [
      "React.js",
      "Material UI",
      "Axios",
      "React-ECharts",
      "xlsx-downloader",
    ],
    challenges:
      "As a beginner, I initially faced challenges with code reusability, CSS styling consistency, and performance optimization. Collaborating with senior developers helped me refine these areas and improve efficiency.",
    performance:
      "Enabled the company to monitor IoT device profits and renewal status effectively. Performance improved by 25% after optimizing data loading and rendering, supporting over 30 active users within the organization.",
    github: "https://github.com/Sabarish17-react/automation",
  },
  {
    title: "IoT Live Data & Customer Dashboard",
    duration: "February 2023 – October 2023",
    description:
      "Developed a real-time IoT dashboard for XCMG and Schwing machines to monitor key performance metrics such as machine status (ON/OFF), run hours, temperature, engine pressure, and live GPS location. The platform provided customers with insights to improve production efficiency, plan maintenance schedules, and reduce operational costs through service alerts based on run-hour thresholds.",
    tools: [
      "React.js",
      "Material UI",
      "Redux Toolkit",
      "Axios",
      "Leaflet",
      "xlsx-downloader",
      "React-ECharts",
      "PDF Viewer",
    ],
    challenges:
      "Faced challenges in managing complex component state and frequent API updates. Solved these issues by implementing Redux Toolkit for centralized state management and improving API data handling efficiency.",
    performance:
      "Optimized data rendering and reduced re-renders, achieving smoother live updates. Enhanced usability for OEMs, dealers, and customers with role-based login and integrated analytics visualization.",
    github: "https://github.com/Sabarish17-react/IIot_Customer-Dashboard",
  },
  {
    title: "ISO Internal Audit Management System",
    duration: "November 2023 – March 2024",
    description:
      "Developed a comprehensive web platform to manage internal ISO audits across multiple company departments. The system enables scheduling, document management, role-based authentication, and performance tracking of audits conducted twice a year. Each department’s audit includes assigning auditors and auditees, reviewing compliance documents, uploading evidence, and generating grading-based evaluation reports.",
    tools: [
      "React.js",
      "Material UI",
      "Axios",
      "xlsx-downloader",
      "PDF Viewer",
      "Date-Picker",
      "JWT Authentication",
      "React-ECharts",
    ],
    challenges:
      "Faced challenges in implementing PDF upload/download functionality with consistent formatting and integrating secure role-based access control between frontend and backend.",
    performance:
      "Automated the entire audit workflow, improving audit consistency and reducing manual coordination by 60%, while enabling real-time compliance tracking and historical report comparison.",
    github:
      "https://github.com/Sabarish17-react/ISO-Internal-Audit-Managing-System",
  },
  {
    title: "Concrete Production & Management System",
    duration: "June 2024 – September 2024",
    description:
      "Developed  Concrete Management System to streamline the production and delivery workflow of concrete batching plants. The platform connects plant operators, site managers, and administrators, enabling efficient order handling, production monitoring, and maintenance scheduling. Site managers can assign site names, members, and order details such as aggregate, water, and cement mix ratios, while admins can review, approve, or reject production requests to ensure smooth operational flow.",
    tools: [
      "React.js",
      "Material UI",
      "React-ECharts",
      "Axios",
      "Redux Toolkit",
      "PDF Downloader",
    ],
    challenges:
      "Faced challenges in managing complex approval workflows and synchronizing real-time order and production data between multiple user roles. Implemented optimized API integration and state synchronization using Redux Toolkit for improved performance and data consistency.",
    performance:
      "Automated the concrete ordering and approval process, reducing manual coordination and downtime in production. Implemented interactive dashboards and detailed reports (daily, monthly, yearly) using React-ECharts and PDF export for analytics. Enhanced transparency for customers and management by providing real-time insights into production volume, order status, and maintenance scheduling.",
    github: "https://github.com/Sabarish17-react/Concrete_management_tool",
  },
  {
    title: "Full-Stack MERN Development Journey",
    duration: "October 2025 – Present",
    description:
      "Currently expanding my skills beyond frontend development by learning full-stack web technologies. I’m building hands-on projects using the MERN stack — integrating React for dynamic interfaces, Express.js and Node.js for backend APIs, and MongoDB for efficient data management. Alongside, I’m mastering TailwindCSS for rapid UI design and modern responsive layouts.",
    tools: [
      "React.js",
      "TailwindCSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "RESTful APIs",
      "JWT Authentication",
    ],
    challenges:
      "Learning to structure scalable backend APIs, manage authentication securely, and connect frontend components seamlessly with databases using asynchronous operations.",
    performance:
      "Progressively building mini-projects like authentication systems, CRUD dashboards, and portfolio apps — laying the foundation for full-stack proficiency and efficient deployment workflows.",
    github:
      "https://github.com/Sabarish17-react/ISO-Internal-Audit-Managing-System",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const detailsRef = useRef(null);
  const gridRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selected && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 250);
    }
  }, [selected]);

  const handleSelect = (proj) => {
    if (selected?.title === proj.title) {
      setSelected(null);
      setTimeout(() => {
        gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    } else {
      setSelected(proj);
    }
  };

  return (
    <div
      className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] 
                 transition-colors duration-500 ease-in-out pb-24 px-4 sm:px-6 md:px-8"
    >
      {/* Top Controls */}
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto mt-6 mb-8 px-2">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-[hsl(var(--primary))]/10 
               text-[hsl(var(--primary))] px-4 py-2 rounded-lg font-medium 
               hover:bg-[hsl(var(--primary))]/20 transition text-sm sm:text-base"
        >
          <Home size={18} /> Home
        </button>
        <Themetoggle />
      </div>

      {/* Header */}
      <header className="text-center py-5sm:py-14 px-4">
        <h1
          className="text-3xl sm:text-4xl md:text-4xl font-extrabold mb-3 sm:mb-4 
                     font-[Poppins] tracking-tight text-[hsl(var(--foreground))]"
        >
          My Projects
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl font-[Inter] text-gray-500 dark:text-gray-400 
                     max-w-2xl mx-auto leading-relaxed tracking-wide"
        >
          A collection of my projects and learnings.
        </p>
      </header>

      {/* Project Grid */}
      <div
        ref={gridRef}
        className="mt-2 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {projectsList.map((proj, index) => (
          <motion.div
            key={index}
            onClick={() => handleSelect(proj)}
            whileHover={{ scale: 1.03 }}
            className={`bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl 
                       shadow-md hover:shadow-xl p-5 sm:p-6 transition-all cursor-pointer 
                       ${
                         selected?.title === proj.title
                           ? "ring-2 ring-[hsl(var(--primary))]"
                           : ""
                       }`}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[hsl(var(--primary))] mb-2">
              {proj.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-3">
              {proj.duration}
            </p>
            <p className="text-[hsl(var(--foreground))]/80 text-sm leading-relaxed">
              {proj.description.slice(0, 90)}...
            </p>
            <div className="mt-4 text-sm text-[hsl(var(--primary))] font-medium">
              {selected?.title === proj.title
                ? "Click again to collapse ↑"
                : "Click to view details →"}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Project Details */}
      <AnimatePresence>
        {selected && (
          <motion.div
            ref={detailsRef}
            key="details"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-4xl mx-auto mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl 
                       bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[hsl(var(--primary))] mb-2">
              {selected.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              {selected.duration}
            </p>
            <p className="text-[hsl(var(--foreground))]/80 mb-6 leading-relaxed text-sm sm:text-base">
              {selected.description}
            </p>

            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-lg">🧰 Tools Used:</h4>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {selected.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] 
                               px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-1 text-lg">⚙️ Challenges:</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {selected.challenges}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-1 text-lg">🚀 Performance:</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {selected.performance}
              </p>
            </div>

            <a
              href={selected.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 
                         bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] 
                         px-4 sm:px-5 py-2 rounded-lg font-medium hover:opacity-90 transition text-sm sm:text-base"
            >
              <Github size={18} /> View on GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
