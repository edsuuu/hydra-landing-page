import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const IntroductionTitle = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Title = styled.div`
    div:nth-child(1) {
        background-color: white;
    }
    div:nth-child(2) {
        width: 500px;
        display: flex;
        flex-direction: row;
        align-items: center;
        p {
            width: 100%;
            display: flex;
        }
    }
`;

export const AboutTitle = styled.div`
    padding-top: 40px;
    padding-left: 20px;
    font-family: 'Montserrat', sans-serif;
    color: white;
    width: 50%;
    div:nth-child(1) {
        h1 {
            font-size: 3rem;
        }
        .AboutsubTitle {
            font-weight: 200;
            margin-top: 0.5rem;
            font-size: 1.6rem;
        }
        p {
            margin-top: 2rem;
            font-size: 0.95rem;
            line-height: 1.5rem;
        }
    }
    div:nth-child(2) {
        margin-top: 2rem;
        button {
            width: 200px;
        }
    }

    @media (max-width: 768px) {
        padding-left: 0px;
        width: 100%;

        div:nth-child(1) {
            .AboutTitle,
            .AboutsubTitle {
                display: none;
            }
            p {
                margin-top: 0.5rem;
            }
        }
        div:nth-child(2) {
            display: flex;
            justify-content: center;
            button {
                width: 80%;
            }
        }
    }
`;

export const IntroductionAbout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div:nth-child(1) {
        img {
            max-width: 480px;
            width: 100%;
            border-radius: 45% 15%;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
