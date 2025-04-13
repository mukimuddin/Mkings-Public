import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animations } from '../styles/theme';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={animations.fadeInUp}
      className="bg-[#1A1A1A] rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-3 gradient-text">{service.title}</h3>
      <p className="text-gray-400 mb-4">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <span className="text-primary mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
        className="inline-block px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
      >
        Learn More
      </Link>
    </motion.div>
  );
};

export default ServiceCard; 