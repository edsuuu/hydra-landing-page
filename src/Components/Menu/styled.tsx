import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 1rem 2rem;
    @media (max-width: 1000px) {
        flex-wrap: wrap;
    }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;
export const LogoImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
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
    @media (max-width: 1100px) {
        display: none;
    }
`;

export const ParamsLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    `;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1100px) {
        display: none;
    }
`;
