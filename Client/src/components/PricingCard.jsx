import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animations } from '../styles/theme';

const PricingCard = ({ plan, isPopular = false }) => {
  return (
    <motion.div
      variants={animations.fadeInUp}
      className={`relative bg-[#1A1A1A] rounded-lg p-6 ${
        isPopular ? 'border-2 border-primary' : 'border border-gray-800'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2 gradient-text">{plan.name}</h3>
        <p className="text-gray-400 mb-4">{plan.description}</p>
        <div className="flex items-center justify-center">
          <span className="text-3xl font-bold">${plan.price}</span>
          <span className="text-gray-400 ml-2">/{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <svg
              className="w-5 h-5 text-primary mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`block w-full text-center py-3 rounded-lg transition-colors ${
          isPopular
            ? 'bg-primary hover:bg-primary/90'
            : 'bg-primary/10 hover:bg-primary/20 text-primary'
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
};

export default PricingCard; 