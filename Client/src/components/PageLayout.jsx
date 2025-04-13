import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme, animations } from '../styles/theme';
import { ImageWithFallback } from '../utils/imageOptimization.jsx';

const PageLayout = memo(({
  title,
  subtitle,
  backgroundImage,
  children,
  className = '',
  withGradient = false,
  gradientDirection = 'to bottom right',
  gradientColors = ['#FF4500', '#FFD700']
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className={`min-h-screen bg-[#0F0F0F] ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            {backgroundImage ? (
              <>
                <ImageWithFallback
                  src={backgroundImage}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover"
                  priority={true}
                />
                <div className="absolute inset-0 bg-black/50" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]" />
            )}
          </div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={animations.fadeInUp}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-300">{subtitle}</p>
            )}
          </motion.div>
        </section>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

PageLayout.displayName = 'PageLayout';

export default PageLayout; 