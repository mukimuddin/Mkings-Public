import React from 'react';
import { motion } from 'framer-motion';
import { theme, animations } from '../styles/theme';

const StandardHeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage = null,
  height = 'h-[60vh]',
  overlayOpacity = 0.7,
  children = null
}) => {
  return (
    <section className={`relative ${height} overflow-hidden`}>
      {/* Background Image or Gradient */}
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              background: `linear-gradient(to bottom, rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,0.9))` 
            }}
          />
        </div>
      ) : (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]" />
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(255,69,0,0.2) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            variants={animations.fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[#FF4500] via-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>
          <motion.p
            variants={animations.fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            {subtitle}
          </motion.p>
          {children && (
            <motion.div
              variants={animations.fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StandardHeroSection; 