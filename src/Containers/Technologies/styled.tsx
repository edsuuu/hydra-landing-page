import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid white;
`;

export const Title = styled.div`
    width: 100%;

    font-family: 'MontSerrat', sans-serif;
    color: white;
    background-image: url('/src/assets/pexels.png');
    background-position: center center;
    background-repeat: repeat-x;
    background-size: auto;
    padding: 6rem 8rem;
    border-radius: 8rem;
    text-align: center;
    border: 1px solid white;

    @media (max-width: 768px) {
        padding: 4rem 2rem;
        font-size: 70%;
    }
`;

export const Card = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 30px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div:nth-child(1) {
    }
`;
