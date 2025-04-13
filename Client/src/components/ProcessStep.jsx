import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../styles/theme';

const ProcessStep = ({ step, isLast = false }) => {
  return (
    <motion.div
      variants={animations.fadeInUp}
      className="relative flex items-start group"
    >
      {/* Step Number */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg shrink-0">
        {step.step}
      </div>

      {/* Content */}
      <div className="ml-4 flex-grow">
        <h3 className="text-xl font-bold mb-2 gradient-text">{step.title}</h3>
        <p className="text-gray-400">{step.description}</p>
      </div>

      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      )}
    </motion.div>
  );
};

export default ProcessStep; 