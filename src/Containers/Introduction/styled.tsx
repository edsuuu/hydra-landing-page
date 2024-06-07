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
    font-family: 'Montserrat', sans-serif;
    color: white;
    width: 50%;
    div:nth-child(1) {
        h1 {
            font-size: 3rem;
        }
        .subTitle {
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
    }
`;

export const Buttons = styled.div`
    button {
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        width: auto;

        padding: 1rem 2rem;
        border-radius: 50px;
        cursor: pointer;
    }

    button:nth-child(1) {
        border: none;
        color: #302c42;
        background: linear-gradient(to right, #8176af, #c0b7e8);
        transition: 0.3s ease-in;

        &:hover {
            background: #ffffff;
        }
    }
`;
