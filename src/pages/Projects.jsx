// src/pages/Projects.jsx
import React from "react";
import { Link } from "react-router-dom";

const allProjects = [
  {
    id: "house-price",
    title: "House Price Prediction App",
    short: "Regression + web UI to predict house prices.",
    details:
      "End-to-end regression pipeline with feature engineering, XGBoost model, evaluation notebooks and Flask deployment.",
    tech: ["Python", "XGBoost", "Flask", "Pandas"],
    repo: "https://github.com/alqamahansari/house-price-prediction",
    caseStudy: "#",
  },
  {
    id: "emotion-detection",
    title: "Emotion Detection System",
    short: "Emotion detection from speech and facial expressions.",
    details:
      "Multimodal ML system combining audio and vision pipelines to classify emotional state; includes preprocessing, model training and evaluation scripts.",
    tech: ["Python", "TensorFlow", "OpenCV", "Librosa"],
    repo: "https://github.com/alqamahansari/Emotion-Detection-System",
    caseStudy: "#",
  },
  {
    id: "atmos",
    title: "Atmos",
    short: "Real-time weather forecasting web app.",
    details:
      "Front-end app using OpenWeather API for dynamic visualizations, location-based insights and responsive UI.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    repo: "https://github.com/alqamahansari/atmos",
    caseStudy: "#",
  }
];

export default function Projects() {
  // ✅ Scroll to top when page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-16 max-w-4xl mx-auto px-6 text-center">
      
      {/* HEADER */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-black">All Projects</h1>
      </header>

      {/* STACKED PROJECT CARDS */}
      <div className="flex flex-col gap-8 items-center">
        {allProjects.map((p) => (
          <article
            key={p.id}
            className="border rounded-lg p-6 bg-white shadow hover:shadow-lg transition-shadow text-left w-full"
          >
            <h3 className="text-2xl font-bold text-black mb-2">{p.title}</h3>

            <p className="text-slate-700 mb-2">{p.short}</p>
            <p className="text-slate-700 mb-4">{p.details}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="bg-blue-100 text-black px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View Code
            </a>
          </article>
        ))}
      </div>

    </main>
  );
}
