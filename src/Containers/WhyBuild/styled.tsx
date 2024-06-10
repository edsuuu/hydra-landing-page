import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    padding: 6rem 0;
    margin: auto;
`;

export const Card = styled.div`

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
