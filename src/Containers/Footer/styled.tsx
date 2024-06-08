import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    .linelong {
        img {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
    }
`;

export const Content = styled.div`
    margin-bottom: 2rem;

    width: 100%;
    /* display: grid;
    grid-template-columns: repeat(4, 300px 6px); */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    .lineLong {
        border: 1px solid white;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .line-vetor {
            display: none;
        }
        .links-array {
            display: none;
        }

        div:nth-child(1) {
            img {
                margin-bottom: 3rem;
            }
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        button {
            width: 100%;
        }
    }
`;

export const SocialFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    div:nth-child(2) {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
`;

export const LinkArrays = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    gap: 2px;
    a {
        color: white;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
`;

export const Credits = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 32px 20px 0px 20px;
`;
