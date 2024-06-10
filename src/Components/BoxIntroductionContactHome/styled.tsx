import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 4rem;
    gap: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
    h1 {
        margin: 10px;
        font-size: 1.4rem;
    }
    p {
        margin: 10px;
        font-size: 1rem;
    }
    img {
        width: 50px;
        height: 54px;
    }

    @media (max-width: 500px) {
    }
`;
