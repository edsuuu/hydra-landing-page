import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    gap: 10px;
    padding: 1.8rem 2rem;
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
        text-decoration: underline;
    }
    `;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

`;
