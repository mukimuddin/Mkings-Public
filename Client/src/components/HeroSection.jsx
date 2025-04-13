import { motion, easeOut } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0F0F0F]">
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
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF4500] to-[#FFD700]">
            MKINGS
          </span>
          <br />
          <span className="text-white">DIGITAL</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-4"
          variants={itemVariants}
        >
          Transforming Ideas into Digital Excellence
        </motion.p>

        <motion.p 
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          variants={itemVariants}
        >
          We craft innovative digital solutions that empower businesses to thrive in the modern world.
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <Link to="/services" className="px-8 py-4 bg-gradient-to-r from-[#FF4500] to-[#FFD700] text-black font-bold rounded-full transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-[#FF4500]/20">
            Get Started
          </Link>
          <Link to="/about" className="px-8 py-4 border-2 border-[#FF4500] text-white font-bold rounded-full hover:bg-[#FF4500]/10 transition-colors duration-200">
            Learn More
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              y: [0, 16, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 