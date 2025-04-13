import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../utils/imageOptimization.jsx';
import { animations } from '../styles/theme';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      variants={animations.fadeInUp}
      className="bg-[#1A1A1A] rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-square">
        <ImageWithFallback
          src={product.image || `https://via.placeholder.com/400x400.png?text=${encodeURIComponent(product.title)}`}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.title}</h3>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          <button
            className={`px-4 py-2 rounded-lg transition-colors ${
              product.inStock
                ? 'bg-primary hover:bg-primary/90'
                : 'bg-gray-600 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 