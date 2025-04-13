import React, { Suspense, memo } from 'react';
import { motion } from 'framer-motion';
import { theme, animations } from '../styles/theme';

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const OptimizedWrapper = memo(({ children, className = '', withAnimation = true }) => {
  const content = (
    <Suspense fallback={<LoadingFallback />}>
      {children}
    </Suspense>
  );

  if (!withAnimation) return content;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animations.pageTransition}
      className={className}
      style={{
        background: theme.colors.background,
        minHeight: '100vh',
      }}
    >
      {content}
    </motion.div>
  );
});

OptimizedWrapper.displayName = 'OptimizedWrapper';

export default OptimizedWrapper; 