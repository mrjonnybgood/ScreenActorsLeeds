import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallbackSrc, alt, ...props }) => {
  const getAssetPath = (path: string) => {
    if (path.startsWith('http')) return path;
    
    // Remove leading slash if present to prevent double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // import.meta.env.BASE_URL is provided by Vite and matches your vite.config.js 'base'
    // It will be '/ScreenActorsLeeds/' on GitHub and '/' locally.
    const baseUrl = import.meta.env.BASE_URL || '/';
    return `${baseUrl}${cleanPath}`;
  };

  const [imgSrc, setImgSrc] = useState(getAssetPath(src));
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(getAssetPath(src));
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image at: ${imgSrc}. Using fallback.`);
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;