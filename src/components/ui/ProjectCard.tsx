import React, { memo } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const ProjectCard = memo(
  ({
    title,
    description,
    image,
    category,
    technologies,
    githubUrl,
    demoUrl,
    featured = false,
  }: ProjectCardProps) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              priority={false}
            />
          ) : (
            <div className="text-white text-4xl font-bold">CE</div>
          )}

          {featured && (
            <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star size={12} />
              Destacado
            </div>
          )}

          {/* Overlay with links */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:text-blue-600 transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {category}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
);
