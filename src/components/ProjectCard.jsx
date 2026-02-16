// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({
  tag,
  title,
  description,
  tech = [],
  repo,
  image,
  imageAlt
}) {
  return (
    <article className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition text-left">

      {/* Optional Image */}
      {image && (
        <div className="mb-4 overflow-hidden rounded-md">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-44 object-cover"
          />
        </div>
      )}

      {/* Optional Tag */}
      {tag && (
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
          {tag}
        </span>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 mt-1 text-black">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-blue-100 text-black px-3 py-1 rounded-full text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Repository Link */}
      <div className="flex items-center gap-4">
        {repo ? (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline text-sm"
          >
            View Code
          </a>
        ) : (
          <span className="text-sm text-slate-400">
            No repository available
          </span>
        )}
      </div>

    </article>
  );
}
