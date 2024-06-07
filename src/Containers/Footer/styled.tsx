import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;

    .lineLong {
        border: 1px solid white;
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

export const SocialFooter = styled.div`
    display: flex;
    flex-direction: column;

    div:nth-child(2) {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
`;
