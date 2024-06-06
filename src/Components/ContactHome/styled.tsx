import styled from 'styled-components';

export const IntroductionContactHome = styled.div`
    margin-top: 3rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    /* gap: 1rem; */
    padding: 1rem 0rem;
    background: radial-gradient(circle, #3a3456, #211e2e);
    border-radius: 5rem;

    @media (max-width: 1100px) {
        margin-left: auto;
        margin-right: auto;
        width: 95%;

        .line {
            display: none;
        }
        .emailImg {
            display: none;
        }
        .phoneCall {
            display: none;
        }
        .location {
            /* display: none; */
        }
    }
`;

export const BoxIntroductionContactHome = styled.div`
    display: flex;
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
