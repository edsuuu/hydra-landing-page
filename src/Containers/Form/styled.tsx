import styled from 'styled-components';

export const FormMainContact = styled.div`
    margin: 3rem auto;
    /* max-width: 1200px; */
    width: 100%;
    background: radial-gradient(circle, #3c3758, #211e2e);
    padding: 4rem 5rem;
    border-radius: 40px;

    @media (max-width: 768px) {
        padding: 4rem 2rem;

    }
`;
export const TitleFormContact = styled.div`
    padding: 10px;
    margin-bottom: 20px;
    color: white;

    h1 {
        font-size: 2.2rem;
    }

    p {
        font-size: 1.1rem;
    }
`;

export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputGroup = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 20px;

    @media (max-width: 540px) {
        flex-wrap: wrap;
        gap: 0px;
    }
`;

export const FormsContactGroup = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 20px;

    input {
        font-size: 1.1rem;
        display: flex;
        flex: 1 1 100%;
        width: 100%;
        height: 50px;
        padding: 15px 20px;
        background: transparent;
        color: white;
        border: 3px solid #ffffff;
        border-radius: 2rem;
        box-sizing: border-box;

        &:focus {
            outline: none;
            ~ label {
                top: -10px;
                font-size: 13px;
                background: #211e2e;
            }
        }

        &:not(:placeholder-shown) ~ label {
            top: -8px;
            font-size: 13px;
            background-color: #211e2e;

        }
    }

    label {
        color: #ffffff;
        font-size: 1rem;
        position: absolute;
        pointer-events: none;
        left: 25px;
        top: 15px;
        padding: 0 5px;
        border-radius: 5px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    textarea {
        font-size: 1.05rem;
        width: 100%;
        display: flex;
        flex: 1 1 100%;
        height: 270px;
        padding: 20px;
        background: transparent;
        border: 4px solid #ffffff;
        border-radius: 2rem;
        box-sizing: border-box;
        resize: none;
        color: white;

        &:focus {
            outline: none;
            ~ label {
                top: -8px;
                font-size: 13px;
                background-color: #211e2e;
            }
        }

        &:not(:placeholder-shown) ~ label {
            top: -8px;
            font-size: 13px;
            background-color: #211e2e;
        }
    }
`;

export const MensageAndButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
