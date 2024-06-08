import React from 'react';
import { AboutProps } from '../../utils/interfaces';

const AboutComponent: React.FC<AboutProps> = ({ title, subTitle, paragraph }) => {
    return (
        <div>
            <h1 className='AboutTitle'>{title}</h1>
            <p className="AboutsubTitle">{subTitle}</p>
            <p>{paragraph}</p>
        </div>
    );
};

export default AboutComponent;
