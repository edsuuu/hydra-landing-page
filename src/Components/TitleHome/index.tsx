import React from 'react';
import styled from 'styled-components';

interface TitleProps {
    primaryTitleText: string;
    primaryColorText: string;
    secondaryTitleText: string;
    secondaryColorText: string;
    paragraphText: string;
}

const SpanText = styled.span<{ $primary: boolean }>`
    background: ${(props) => (props.$primary ? 'linear-gradient(to bottom, #C0B7E8, #8176AF)' : 'linear-gradient(to bottom, #C0B7E8, #8176AF)')};
    color: ${(props) => (props.$primary ? 'transparent' : '#transparent')};
    background-clip: text;
`;

const TitleHome: React.FC<TitleProps> = ({ primaryTitleText, primaryColorText, secondaryTitleText, secondaryColorText, paragraphText }) => {
    return (
        <>
            <h1>
                <SpanText $primary={true}>{primaryColorText}</SpanText> {primaryTitleText}
            </h1>
            <h1>
                {secondaryTitleText} <SpanText $primary={true}>{secondaryColorText}</SpanText>
            </h1>
            <p>{paragraphText}</p>
        </>
    );
};

export default TitleHome;
