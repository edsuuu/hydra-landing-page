import React from 'react';
import { Container, SectionOne, SectionTwo } from './styled';
import { TitleProps } from '../../utils/interfaces';

const TitleComponent: React.FC<TitleProps> = ({ title, subTitle, imgArrow, paragraph }) => {
    return (
        <Container>
            <SectionOne>
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    <p>{subTitle}</p>
                    <img src={imgArrow} alt={title} />
                </div>
            </SectionOne>
            <SectionTwo>
                <p>{paragraph}</p>
            </SectionTwo>
        </Container>
    );
};

export default TitleComponent;
