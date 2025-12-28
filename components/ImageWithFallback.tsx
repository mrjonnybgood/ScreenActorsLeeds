import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallbackSrc, alt, ...props }) => {
  const getAssetPath = (path: string) => {
    if (path.startsWith('http')) return path;
    
    // Remove leading slash if user provided one
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // Use a more reliable way to detect if we are in a subfolder environment
    const isGithubPages = window.location.hostname.includes('github.io');
    const repoName = 'ScreenActorsLeeds';
    
    // If we are on GitHub Pages and not already including the repo name, prepend it
    if (isGithubPages && !window.location.pathname.includes(repoName)) {
      return `/${repoName}/${cleanPath}`;
    }

    // Default: just return the path relative to root
    return `/${cleanPath}`;
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