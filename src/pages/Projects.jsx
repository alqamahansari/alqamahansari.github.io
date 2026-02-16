// src/pages/Projects.jsx
import React from "react";
import { Link } from "react-router-dom";

const allProjects = [
  {
    id: "aqi",
    tag: "Research • ML/DL",
    title: "Air Quality Intelligence for India",
    short: "Spatio-temporal AQI forecasting using ML and LSTM models.",
    details:
      "Comparative study of ML (XGBoost, Random Forest) and LSTM-based time-series forecasting for Indian AQI prediction with rolling validation, structured feature engineering, and health risk mapping.",
    tech: ["Python", "LSTM", "XGBoost", "Time-Series", "Pandas"],
    repo: "https://github.com/alqamahansari/aqi-project",
  },
  {
    id: "car-price",
    tag: "MLOps • Production ML",
    title: "Car Price Prediction – Production ML Pipeline",
    short: "Dockerized ML system with CI-driven training workflow.",
    details:
      "End-to-end structured ML pipeline using Random Forest Regression with cross-validation, modular architecture, Streamlit deployment, Docker containerization, and GitHub Actions CI automation.",
    tech: ["Python", "Random Forest", "Streamlit", "Docker", "CI/CD"],
    repo: "https://github.com/alqamahansari/car-price-prediction",
  },
  {
    id: "emotion-detection",
    tag: "Deep Learning • Computer Vision",
    title: "Facial Emotion Detection System",
    short: "Emotion recognition from facial images using CNN-based models.",
    details:
      "Computer vision-based deep learning system for facial emotion classification using image preprocessing, CNN architectures, and structured training and evaluation pipelines.",
    tech: ["Python", "TensorFlow", "OpenCV", "CNN"],
    repo: "https://github.com/alqamahansari/Emotion-Detection-System",
  },
  {
    id: "atmos",
    tag: "Frontend • API Integration",
    title: "Atmos – Weather Intelligence Web App",
    short: "API-driven real-time weather visualization platform.",
    details:
      "Frontend application using OpenWeather API for dynamic weather insights and responsive UI.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    repo: "https://github.com/alqamahansari/atmos",
  }
];

export default function Projects() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-16 max-w-4xl mx-auto px-6 text-center">

      {/* HEADER */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-black">All Projects</h1>
        <p className="text-slate-600 mt-2">
          Research-driven AI systems and production-grade machine learning pipelines.
        </p>
      </header>

      {/* PROJECT CARDS */}
      <div className="flex flex-col gap-8 items-center">
        {allProjects.map((p) => (
          <article
            key={p.id}
            className="border rounded-lg p-6 bg-white shadow hover:shadow-lg transition-shadow text-left w-full"
          >
            {/* TAG */}
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              {p.tag}
            </span>

            {/* TITLE */}
            <h3 className="text-2xl font-bold text-black mb-2 mt-1">
              {p.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-slate-700 mb-2">{p.short}</p>
            <p className="text-slate-700 mb-4">{p.details}</p>

            {/* TECH STACK */}
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

            {/* REPO LINK */}
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

      {/* BACK TO HOME */}
      <div className="text-left mt-10">
        <Link
          to="/#projects"
          className="text-black font-medium hover:underline"
        >
          ← Back to Home
        </Link>
      </div>

    </main>
  );
}
