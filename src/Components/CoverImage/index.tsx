import React from 'react';
import { CoverProps } from '../../utils/interfaces';

const CoverImage: React.FC<CoverProps> = ({ alt, url }) => {
    return <img src={url} alt={alt} />;
};

export default CoverImage;
