import React from "react";
import Themetoggle from "../Components/Themetoggle";
import { useNavigate } from "react-router-dom";
import { FileDown } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    // Replace with your resume file path (public folder)
    const resumeUrl = "/Sabarisan_S_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "SabarisanS_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]
                 flex flex-col items-center justify-center text-center px-4 sm:px-6
                 transition-colors duration-500 ease-in-out"
    >
      {/* Theme Toggle Button */}
      <Themetoggle />

      {/* Hero Content */}
      <div className="max-w-3xl animate-slide-up space-y-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-2 tracking-tight">
          Hi, I'm{" "}
          <span className="text-[hsl(var(--primary))] drop-shadow-sm">
            Sabarisan S
          </span>
        </h1>

        {/* Subheading */}
        <h2
          className="mt-3 sm:mt-5 md:mt-5 text-xl sm:text-2xl md:text-3xl font-semibold mb-4 
             text-[hsl(var(--foreground))]/80 tracking-wide"
        >
          Front-End React Developer
        </h2>

        {/* Description */}
        <p
          className="text-sm sm:text-base md:text-lg lg:text-[17px] mb-8 sm:mb-10 
                     text-[hsl(var(--foreground))]/80 leading-relaxed 
                     max-w-175 mx-auto px-2"
        >
          I design and develop modern, responsive web applications using React,
          Material UI, and Tailwind CSS. I’m learning the MERN stack to grow
          into a full-stack developer. I enjoy building clean designs and smooth
          user experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => navigate("/projects")}
            className="px-6 sm:px-8 py-2 sm:py-3 rounded-xl bg-[hsl(var(--primary))]
                       text-[hsl(var(--primary-foreground))] font-semibold shadow-md 
                       hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out
                       text-sm sm:text-base"
          >
            View My Projects
          </button>

          <div className="relative group">
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 rounded-xl bg-[hsl(var(--primary))]
                       text-[hsl(var(--primary-foreground))] font-semibold shadow-md 
                       hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out
                       text-sm sm:text-base"
            >
              <FileDown className="w-5 h-5" />
              Download Resume
            </button>

            {/* Tooltip */}
            <span
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                         bg-[hsl(var(--foreground))] text-[hsl(var(--background))]
                         text-xs rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100
                         transform group-hover:-translate-y-1 transition-all duration-300
                         pointer-events-none shadow-md"
            >
              Click to download resume
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
