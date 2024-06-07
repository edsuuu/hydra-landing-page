import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Left = styled.div`
`;

export const SectionOne = styled.div`
    color: white;
    width: 80%;

    div:nth-child(1) {
        h1 {
            padding: 10px 0px;

            font-size: 2.6rem;
        }
    }
    div:nth-child(2) {
        border: 1px solid white;
        padding: 10px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
        p {
            font-size: 1.5rem;
        }
        img {
            width: 200px;
        }
    }
`;
export const SectionTwo = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
    font-size: 1rem;
    p {
        line-height: 1.7rem;
    }
`;
