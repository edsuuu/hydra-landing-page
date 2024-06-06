import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const FormContainer = styled.div`
    background: radial-gradient(circle, #403a5f, #211e2e);
    display: flex;
    justify-content: center;
    flex-direction: column;
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
