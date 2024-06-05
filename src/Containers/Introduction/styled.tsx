import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid white;
    width:100%;
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
        background-color: #07bcc9;
        p {
            width: 100%;
            display: flex;
        }
    }
`;

export const IntroductionAbout = styled.div`
    display: flex;
    flex-direction: row;
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


    button:nth-child(1){
        border: none;
        color: #302C42;
        background: linear-gradient(to right, #8176AF, #C0B7E8);
        transition: 0.3s ease-in;

        &:hover {
            background: #ffffff;
        }
    }
`;
