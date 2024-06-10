import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
    width: 100%;
    font-family: 'MontSerrat', sans-serif;
    color: white;
    //gambiarra do background
    background-color: #5c5c5c4e;
    background-image: url('../../assets/pexels.png');
    background-position: center center;
    background-repeat: repeat-x;
    background-size: auto;
    object-fit: cover;
    /* padding: 6rem 8rem; */
    height: 100%;
    min-height: 300px;
    border-radius: 10rem;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        border-radius: 3rem;

        min-height: 200px;

        font-size: 70%;
    }
`;

export const Card = styled.div`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 10px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div:nth-child(1) {
    }
`;
