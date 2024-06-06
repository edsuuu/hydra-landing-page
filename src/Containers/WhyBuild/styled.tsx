import styled from 'styled-components';

export const Card = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;

    div {
        background: radial-gradient(circle, #403a5f, #211e2e);
    }

    button {
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        width: auto;
        padding: 1rem 2rem;
        border-radius: 50px;
        cursor: pointer;
        border: none;
        color: #302c42;
        background: linear-gradient(to right, #8176af, #c0b7e8);
        transition: 0.3s ease-in;

        &:hover {
            background: #ffffff;
        }
    }
`;

export const WhyBuildTitle = styled.div`
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
