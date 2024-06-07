import React from 'react';
import { Container, SectionOne, SectionTwo } from './styled';

interface TitleProps {
    title: string;
    subTitle: string;
    imgArrow: string;
    paragraph: string;
}

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
