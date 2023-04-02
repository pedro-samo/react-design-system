import React from 'react';
interface ImageProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
}
declare const Image: React.FC<ImageProps>;
export default Image;
