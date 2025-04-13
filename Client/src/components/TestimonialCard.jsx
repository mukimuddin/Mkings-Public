import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../utils/imageOptimization.jsx';
import { animations } from '../styles/theme';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      variants={animations.fadeInUp}
      className="bg-[#1A1A1A] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <ImageWithFallback
            src={testimonial.image || `https://via.placeholder.com/100x100.png?text=${encodeURIComponent(testimonial.name.charAt(0))}`}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold">{testimonial.name}</h3>
          <p className="text-primary text-sm">{testimonial.role}</p>
        </div>
      </div>
      <div className="relative">
        <svg
          className="absolute -top-2 -left-2 w-8 h-8 text-primary/20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-400 pl-6">{testimonial.text}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 