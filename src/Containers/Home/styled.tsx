import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #000000;
    padding: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
`;

export const ContainerImage = styled.div`
    img {
        border-end-start-radius: 54%;
        border-end-end-radius: 20%;
        border-start-start-radius: 20%;
        border-start-end-radius: 20%;
    }
`;

export const IntroductionSectionHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const IntroductionContactHome = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    background: radial-gradient(circle, #3a3456, #211e2e);
    border-radius: 5rem;
`;

export const BoxIntroductionContactHome = styled.div`
    display: flex;
    flex-direction: row;
`;
