import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const TitleNumber = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    border: 1rem solid #0000005e;
    font-size: 2.5rem;

    div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #343045;
        background: linear-gradient(to right, #8176af, #c0b7e8);
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
`;
export const SubText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2rem 0;
    gap: 1rem;
    div:nth-child(1) {
        img {
            width: 30px;
        }
    }
    div:nth-child(2) {
        color: white;
        font-size: 1.4rem;
    }
`;
