import React from 'react';

interface CoverProps {
    alt: string;
    url: string;
}

const CoverImage: React.FC<CoverProps> = ({ alt, url }) => {
    return <img src={url} alt={alt} />;
};

export default CoverImage;
