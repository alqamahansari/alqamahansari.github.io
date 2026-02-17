// src/pages/Home.jsx
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const skills = {
  "Core AI & Modeling": [
    "Machine Learning",
    "Deep Learning",
    "Time-Series Modeling",
    "Computer Vision",
    "Large Language Models"
  ],
  "Tools & Frameworks": [
    "PyTorch",
    "Scikit-learn",
    "XGBoost",
    "NumPy",
    "Pandas",
    "Matplotlib"
  ],
  "Engineering & Deployment": [
    "MLOps",
    "Docker",
    "CI/CD Pipelines",
    "Git & GitHub",
    "Python",
    "JavaScript",
    "SQL"
  ]
};

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className="mt-0 max-w-7xl mx-auto px-4 space-y-12">

      {/* ----------------------------------
          HOME (Hero Section)
      ---------------------------------- */}
      <section
  id="home"
  className="min-h-screen flex flex-col justify-center items-center text-center -mt-16"
>
  <h1 className="text-5xl font-bold mb-2 text-black">
    Mohammad Alquamah Ansari
  </h1>

  <p className="text-lg text-gray-700 mb-1">
    AI Engineer Focused on Intelligent Systems & Scalable ML Infrastructure
  </p>
  
  <p className="text-sm text-gray-600 max-w-2xl">
    Machine Learning • Deep Learning • Time-Series Modeling • MLOps • Large Language Models
  </p>

  <div className="mt-6">
    <a
      href="/Mohammad-Alquamah-Ansari-Resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="px-6 py-3 bg-black text-white rounded-lg text-sm font-medium
                 hover:bg-gray-900 transition duration-150"
    >
      View Resume
    </a>
  </div>
</section>


      {/* ------------------------------
          ABOUT SECTION
      ------------------------------- */}
    <section
  id="about"
  className="min-h-screen flex flex-col justify-center items-center text-center px-6"
>
  <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-700 inline-block">
    About Me
  </h2>
  <p className="max-w-2xl leading-relaxed text-gray-800">
    Hi, I'm <span className="font-semibold">Mohammad Alquamah Ansari</span>, an AI Engineer focused on building intelligent systems that are both technically rigorous and production-ready.
    <br /><br />
    I hold a <span className="font-semibold">B.Sc. in Artificial Intelligence</span> and work across Machine Learning, Deep Learning, time-series modeling, and modern MLOps workflows. My work combines model development with structured experimentation, reproducible pipelines, and scalable deployment practices.
    <br /><br />
    I am particularly interested in research-driven AI systems, including forecasting models, deep learning architectures, and large language models. My long-term goal is to contribute to responsible, efficient, and impactful AI systems aligned with real-world needs.
  </p>
</section>


      {/* ------------------------------
          PROJECTS SECTION (Preview)
      ------------------------------- */}
<section
  id="projects"
  className="min-h-screen flex flex-col justify-center items-center text-center px-6"
>
  <h2 className="text-3xl font-semibold mb-8 border-b-2 border-blue-700 inline-block">
    Projects
  </h2>

  <div className="w-full max-w-3xl flex flex-col gap-8">

    {/* AQI Project */}
    <div className="border rounded-lg p-6 bg-white shadow hover:shadow-lg transition-shadow text-left">
      
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
        Research • ML/DL
      </span>

      <h3 className="text-xl font-bold mb-2 mt-1">
        Air Quality Intelligence for India
      </h3>

      <p className="mb-2">
        Spatio-temporal AQI forecasting using ML and LSTM models with structured evaluation and health risk mapping.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">Python</span>
        <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">LSTM</span>
        <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">XGBoost</span>
        <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">Time-Series</span>
      </div>

      <a
        href="https://github.com/alqamahansari/air-quality-intelligence"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline"
      >
        View Code
      </a>
    </div>

    {/* Car Price MLOps */}
    <div className="border rounded-lg p-6 bg-white shadow hover:shadow-lg transition-shadow text-left">

      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
        MLOps • Production ML
      </span>

      <h3 className="text-xl font-bold mb-2 mt-1">
        Car Price Prediction – Production ML Pipeline
      </h3>

      <p className="mb-2">
        End-to-end machine learning pipeline with Docker containerization, CI automation, and structured training workflow.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">Random Forest</span>
        <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">Streamlit</span>
        <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">Docker</span>
        <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">CI/CD</span>
      </div>

      <a
        href="https://github.com/alqamahansari/car-price-prediction"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline"
      >
        View Code
      </a>
    </div>

    <div className="text-left mt-2">
      <Link to="/projects" className="text-black font-medium hover:underline">
        View All →
      </Link>
    </div>

  </div>
</section>


      {/* ------------------------------
          SKILLS SECTION
      ------------------------------- */}
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-blue-700 inline-block">
          Skills
        </h2>

        <div className="mt-8 w-full max-w-4xl space-y-8 text-left">
          {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-3 text-black">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-black px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
              ))}
            </div>
          </div>
          ))}
        </div>
      </section>

      {/* ------------------------------
          CONTACT SECTION
      ------------------------------- */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-blue-700 inline-block">
          Contact
        </h2>

        <div className="flex flex-row items-center gap-6">
          <a href="mailto:alquamahansari@gmail.com"
             className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100
                        hover:shadow-md hover:scale-105 transition-transform duration-150">
            <FiMail className="text-3xl text-black" />
          </a>

          <a href="https://github.com/alqamahansari" target="_blank" rel="noreferrer"
             className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100
                        hover:shadow-md hover:scale-105 transition-transform duration-150">
            <FiGithub className="text-3xl text-black" />
          </a>

          <a href="https://linkedin.com/in/alqamahansari" target="_blank" rel="noreferrer"
             className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100
                        hover:shadow-md hover:scale-105 transition-transform duration-150">
            <FiLinkedin className="text-3xl text-black" />
          </a>

          <a href="https://x.com/AlqamahAnsari" target="_blank" rel="noreferrer"
             className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100
                        hover:shadow-md hover:scale-105 transition-transform duration-150">
            <FiTwitter className="text-3xl text-black" />
          </a>
        </div>
      </section>

    </main>
  );
}
