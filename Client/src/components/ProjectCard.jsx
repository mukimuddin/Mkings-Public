import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../utils/imageOptimization.jsx';
import { animations } from '../styles/theme';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={animations.fadeInUp}
      className="bg-[#1A1A1A] rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-video">
        <ImageWithFallback
          src={project.image || `https://via.placeholder.com/800x450.png?text=${encodeURIComponent(project.title)}`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <a
          href={project.link}
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          View Project
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 