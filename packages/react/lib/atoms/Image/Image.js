import React from 'react';

const Image = ({ width = '100%', height = 'auto', src, alt }) => {
    return (React.createElement("img", { src: src, alt: alt, style: {
            width,
            height,
        } }));
};

export { Image as default };
//# sourceMappingURL=Image.js.map
