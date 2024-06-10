import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
`;

export const ConteudoMain = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    @media (max-width: 926px) {
        flex-wrap: wrap-reverse;
        justify-content: center;
    }
`;

export const Texts = styled.div`
    margin-top: 2rem;
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;

    div:nth-child(1) {
        h1 {
            width: 100%;
            font-weight: bold;
            font-size: 3rem;
            span {
                font-size: 3.2rem;
            }
        }
        p {
            text-align: start;
            max-width: 450px;
            margin-top: 40px;
            font-size: 1rem;
        }
        button {
            width: 200px;
        }
    }
    div:nth-child(2) {
        button {
            margin-top: 50px;
            width: 220px;
        }
    }

    @media (max-width: 926px) {
        margin-top: 0rem;

        div:nth-child(1) {
            h1 {
                text-align: center;
                font-size: 3rem;
                span {
                    font-size: 3.2rem;
                }
            }
            p {
                margin: auto;
                margin-top: 2rem;
                margin-bottom: 2rem;
                text-align: center;
                font-size: 0.9rem;
            }
        }
        div:nth-child(2) {
            display: flex;
            justify-content: center;
            button {
                margin-top: 20px;
                margin-left: 4rem;
                margin-right: 4rem;
                width: 100%;
            }
        }
    }
    @media (max-width: 768px) {
        div:nth-child(1) {
            h1 {
                text-align: center;
                font-size: 2.5rem;
                span {
                    font-size: 2.8rem;
                }
            }
            p {
                font-size: 0.9rem;
                padding: 0 1rem;
            }
        }
    }
    @media (max-width: 520px) {
        div:nth-child(1) {
            h1 {
                text-align: center;
                font-size: 2rem;
                span {
                    font-size: 2.2rem;
                }
            }
            p {
                display: none;
            }
        }
    }
    @media (max-width: 445px) {
        div:nth-child(1) {
            h1 {
                text-align: center;
                font-size: 1.5rem;
                span {
                    font-size: 2rem;
                }
            }
        }
    }
`;

export const ImageCover = styled.div`
    border-end-start-radius: 54%;
    border-end-end-radius: 20%;
    border-start-start-radius: 20%;
    border-start-end-radius: 20%;
    height: auto;
    padding: 1rem 3rem 3rem 3rem;
    img {
        max-width: 490px;
        width: 100%;
        min-width: 390px;
        border-end-start-radius: 54%;
        border-end-end-radius: 20%;
        border-start-start-radius: 20%;
        border-start-end-radius: 20%;
        /* box-shadow: 3px 2px 20px 16px #00000073; */
        border: 1rem solid #0000002d;
    }
    @media (max-width: 460px) {
        padding: 0.5rem;
        img {
            min-width: 290px;
        }
    }
`;


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

    @media (max-width: 768px) {
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
