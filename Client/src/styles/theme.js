export const theme = {
  colors: {
    primary: '#FF4500',
    secondary: '#FFD700',
    background: '#0F0F0F',
    text: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    gradient: 'linear-gradient(to right, #FF4500, #FFD700)',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '4rem',
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.5s ease',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  shadows: {
    card: '0 4px 6px rgba(0, 0, 0, 0.1)',
    hover: '0 8px 12px rgba(0, 0, 0, 0.2)',
  }
};

export const animations = {
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  },
  staggerChildren: {
    animate: { transition: { staggerChildren: 0.1 } }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  }
}; 