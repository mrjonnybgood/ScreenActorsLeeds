import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallbackSrc, alt, ...props }) => {
  // Helper to ensure path includes the base URL if it's a local asset
  const getAssetPath = (path: string) => {
    // If it's an external URL (http), return as is
    if (path.startsWith('http')) return path;
    
    // Clean up the path: remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // Safe access to BASE_URL with fallback to the repo name
    // The "?." prevents the "Cannot read properties of undefined" error
    const baseUrl = import.meta.env?.BASE_URL ?? '/ScreenActorsLeeds/';
    
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