import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SubHeroSection = ({ title, description, backgroundImage }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0F0F0F]">
        {backgroundImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              filter: 'brightness(0.3)'
            }}
          />
        ) : (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, rgba(255, 69, 0, 0.15) 0%, rgba(15, 15, 15, 0) 50%)',
                'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.15) 0%, rgba(15, 15, 15, 0) 50%)',
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF4500] to-[#FFD700]">
            {title}
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#FF4500] to-[#FFD700] mx-auto mt-8"
          variants={itemVariants}
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>

      {/* Background Overlay Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
    </section>
  );
};

SubHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string
};

export default SubHeroSection; 