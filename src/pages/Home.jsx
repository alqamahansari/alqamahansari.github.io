// src/pages/Home.jsx
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const skills = [
  "Artificial Intelligence", "Machine Learning", "Deep Learning",
  "Large Language Models", "Natural Language Processing", "Computer Vision",
  "Reinforcement Learning", "Python", "NumPy", "Pandas", "Matplotlib",
  "Seaborn", "Scikit-learn", "Pytorch", "SQL / SQLite", "DevOps",
  "MLOps", "Git & GitHub", "Docker", "CI/CD Pipelines", "Version Control",
  "Deployment & Monitoring", "Data Analysis", "Ethical AI",
];

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
          Exploring the Intersection of AI and DevOps
        </p>

        <p className="text-sm text-gray-600 max-w-2xl">
          AI Student & Developer | Passionate about Machine Learning, Deep Learning,
          LLMs, and Modern DevOps Practices.
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
          Hi, I'm <span className="font-semibold">Mohammad Alquamah Ansari</span> — an AI and DevOps
          enthusiast who enjoys building practical, efficient, and clean technology solutions.
          <br /><br />
          I'm currently pursuing my <span className="font-semibold">B.Sc. in Artificial Intelligence</span>,
          working with Machine Learning, Deep Learning, LLMs, and DevOps tools like Docker and CI/CD.
          I enjoy combining AI development with automation to create systems that are reliable,
          scalable, and easy to deploy.
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

          {/* Emotion Detection */}
          <div className="border rounded-lg p-6 bg-white shadow hover:shadow-lg transition-shadow text-left">
            <h3 className="text-xl font-bold mb-2">Emotion Detection</h3>
            <p className="mb-2">
              Deep learning-based emotion recognition model built using CNNs and image preprocessing techniques.
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">TensorFlow</span>
              <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">Keras</span>
              <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">OpenCV</span>
            </div>

            <a
              href="https://github.com/alqamahansari/Emotion-Detection-System"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              View Code
            </a>
          </div>

          {/* House Price Prediction */}
          <div className="border rounded-lg p-6 bg-white shadow hover:shadow-lg transition-shadow text-left">
            <h3 className="text-xl font-bold mb-2">House Price Prediction App</h3>
            <p className="mb-2">
              Machine Learning model predicting house prices using regression algorithms and feature engineering.
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">Python</span>
              <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">XGBoost</span>
              <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">Flask</span>
            </div>

            <a
              href="https://github.com/alqamahansari/Emotion-Detection-System"
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

        <div className="flex flex-wrap justify-center gap-4 mt-4 max-w-4xl">
          {skills.map((s, i) => (
            <span
              key={i}
              className="bg-blue-100 text-black px-4 py-2 rounded-full text-sm"
            >
              {s}
            </span>
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
