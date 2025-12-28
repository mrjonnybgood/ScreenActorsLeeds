import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallbackSrc, alt, ...props }) => {
  const getAssetPath = (path: string) => {
    // If it's an external URL, use it as is
    if (path.startsWith('http')) return path;
    
    // Clean the path: remove leading slash or dot-slash to standardize
    // e.g. "/images/logo.png" -> "images/logo.png"
    // e.g. "./images/logo.png" -> "images/logo.png"
    let cleanPath = path;
    if (cleanPath.startsWith('/')) cleanPath = cleanPath.slice(1);
    if (cleanPath.startsWith('./')) cleanPath = cleanPath.slice(2);
    
    // Return with ./ prefix to ensure it is treated as relative to the index.html
    // This works best with HashRouter and "base: './'" in vite.config.js
    return `./${cleanPath}`;
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