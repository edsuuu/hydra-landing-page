import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    margin-top: 2rem;
    width: 100vw;
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    border: 1px solid white;
`;
export const LogoImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
    }
`;

export const LogoText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;
    img {
        height: 76px;
    }
`;
export const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 3rem;
`;

export const ParamsLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    &:hover {
        cursor: pointer;
    }
    `;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    button {
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        width: 160px;
        padding: 1rem;
        border-radius: 50px;
        cursor: pointer;

    }

    button:nth-child(1) {
        border: 0.2rem solid white;
        color: white;
        background-color: transparent;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: white;
            color: #302C42;
        }
    }
    button:nth-child(2){
        border: none;
        color: #302C42;
        background: linear-gradient(to right, #8176AF, #C0B7E8);
        transition: 0.3s ease-in;

        &:hover {
            background: #ffffff;
        }
    }
`;
