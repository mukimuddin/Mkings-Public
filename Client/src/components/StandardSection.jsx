import React from 'react';
import { motion } from 'framer-motion';
import { theme, animations } from '../styles/theme';

const StandardSection = ({
  title,
  subtitle,
  children,
  className = '',
  background = 'transparent',
  padding = 'py-16',
  containerClass = 'max-w-7xl',
  titleClass = '',
  subtitleClass = '',
  childrenClass = '',
  withGradient = false,
  gradientDirection = 'to right',
  gradientColors = ['#FF4500', '#FFD700'],
  id = '',
}) => {
  return (
    <section 
      id={id}
      className={`relative ${padding} ${className}`}
      style={{ background }}
    >
      {withGradient && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(${gradientDirection}, ${gradientColors.join(', ')})`
          }}
        />
      )}
      
      <div className={`mx-auto px-4 ${containerClass}`}>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <motion.h2
                variants={animations.fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className={`text-3xl md:text-4xl font-bold mb-4 ${titleClass}`}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={animations.fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`text-lg text-gray-400 max-w-3xl mx-auto ${subtitleClass}`}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        
        <motion.div
          variants={animations.staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={childrenClass}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default StandardSection; 