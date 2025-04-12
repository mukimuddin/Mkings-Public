import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "relative px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: `bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 
              hover:shadow-[0_0_20px_rgba(255,61,0,0.5)] ${baseStyles} ${className}`,
    outline: `border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 
              hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] ${baseStyles} ${className}`,
    dark: `bg-black border border-yellow-500/30 text-white hover:border-yellow-500 
           hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] ${baseStyles} ${className}`
  };

  return (
    <motion.button
      className={variants[variant]}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-0"
        initial={false}
        whileHover={{ opacity: variant === 'primary' ? 0 : 0.1 }}
      />
    </motion.button>
  );
};

export default Button; 