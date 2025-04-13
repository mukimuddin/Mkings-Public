import React, { useState, useEffect } from 'react';

// Image cache to store preloaded images
const imageCache = new Map();

// Preload image function
const preloadImage = (src) => {
  if (!src || imageCache.has(src)) return;
  
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageCache.set(src, true);
      resolve(src);
    };
    img.onerror = reject;
  });
};

export const optimizeImageUrl = (url) => {
  if (!url) return null;
  return url;
};

export const ImageWithFallback = ({ src, alt = '', className = '', style = {}, aspectRatio = '16/9', priority = false }) => {
  const [imgError, setImgError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(imageCache.has(src));
  const optimizedSrc = optimizeImageUrl(src);

  useEffect(() => {
    if (!optimizedSrc || imgError) return;

    if (priority) {
      preloadImage(optimizedSrc)
        .then(() => setIsLoaded(true))
        .catch(() => setImgError(true));
    } else {
      const img = new Image();
      img.src = optimizedSrc;
      img.onload = () => {
        imageCache.set(optimizedSrc, true);
        setIsLoaded(true);
      };
      img.onerror = () => setImgError(true);
    }
  }, [optimizedSrc, priority, imgError]);

  if (!optimizedSrc || imgError) {
    return (
      <div
        className={`bg-[#1A1A1A] relative overflow-hidden ${className}`}
        style={{ aspectRatio }}
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ aspectRatio }}>
      <img
        src={optimizedSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={style}
        onError={() => setImgError(true)}
      />
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]" />
      )}
    </div>
  );
}; 