import styled from 'styled-components';

export const CardContainer = styled.div`
    font-family: 'MontSerrat', sans-serif;
    background: radial-gradient(circle, #3c3758, #211e2e);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    border-radius: 2rem;
    color: white;

    @media (max-width: 650px) {
    }
`;

export const ImageContainer = styled.div`
    img {
        border-radius: 50%;
        border: 1rem solid #201d2bca;
    }
`;
export const TitleContainer = styled.div`
    margin-top: 1rem;
    h1 {
        font-size: 2rem;
    }
`;
export const LineContainer = styled.div`
    margin: 1rem 0;

    img {
    }
`;
export const ParagraphContainer = styled.div`
    margin: 0.1rem 0;

    p {
        text-align: center;
        font-size: 1rem;
    }
`;
export const ButtonContainer = styled.div`
margin-top: 1rem;
    button {
        font-size: 0.8rem;
        font-weight: 800;
    }
`;
