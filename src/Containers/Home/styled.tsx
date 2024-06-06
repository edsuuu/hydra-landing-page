import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Montserrat', sans-serif;

    display: flex;
    flex-direction: column;
    border: 1px solid #00e73a;
`;

export const ConteudoMain = styled.div`
    border: 1px solid #00f3f3;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const Texts = styled.div`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: white;

    div:nth-child(1) {
        h1 {
            font-weight: bold;
            font-size: 2.7rem;
        }
        p {
            max-width: 450px;
            margin-top: 30px;
            font-size: 1rem;
        }
    }
    div:nth-child(2) {
        button {
            margin-left: 4rem;
            width: 200px;
        }
    }
`;

export const ImageCover = styled.div`
    border: 1px solid #00f3f3;
    img {
        min-width: 300px;
        width: 100%;
    }
`;
