import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../styles/theme';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category}
          variants={animations.fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full transition-colors ${
            selectedCategory === category
              ? 'bg-primary text-white'
              : 'bg-[#1A1A1A] text-gray-300 hover:bg-[#2A2A2A]'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter; 