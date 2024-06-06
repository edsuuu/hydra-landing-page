import styled from "styled-components";

export const Card = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;

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
