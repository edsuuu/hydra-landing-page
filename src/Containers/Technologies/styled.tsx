import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
    color: white;
    background-image: url('/src/assets/vr-img-3.png');
    background-position: cover;
    padding: 4rem 6rem;
    border-radius: 8rem;
    text-align: center;
`;

export const Card = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div:nth-child(1) {
    }
`;
