import React from 'react';
import { AboutProps } from '../../utils/interfaces';

const AboutComponent: React.FC<AboutProps> = ({ title, subTitle, paragraph }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p className="subTitle">{subTitle}</p>
            <p>{paragraph}</p>
        </div>
    );
};

export default AboutComponent;
