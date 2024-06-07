import React from 'react';
import styled from 'styled-components';

import { ButtonProps } from '../../utils/interfaces';

const ButtonComponent = styled.button<{ $primary: boolean }>`
    background: ${(props) => (props.$primary ? 'transparent' : 'linear-gradient(to right, #8176AF, #C0B7E8)')};
    color: ${(props) => (props.$primary ? 'white' : '#302C42')};
    border: ${(props) => (props.$primary ? '0.2rem solid white' : 'none')};
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    width: 160px;
    padding: 1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: ${(props) => (props.$primary ? 'white' : '#ffffff')};
        color: ${(props) => (props.$primary ? '#302C42' : '#302C42')};
    }
`;

const Button: React.FC<ButtonProps> = ({ text, primary, onClick }) => {
    return (
        <ButtonComponent $primary={primary} onClick={onClick}>
            {text}
        </ButtonComponent>
    );
};

export default Button;
