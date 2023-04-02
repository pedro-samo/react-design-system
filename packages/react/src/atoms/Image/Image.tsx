import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Image: React.FC<ImageProps> = ({ width = '100%', height = 'auto', src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width,
        height,
      }}
    />
  );
};

export default Image;
