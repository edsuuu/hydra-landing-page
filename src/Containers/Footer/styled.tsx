import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid white;
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
        .linelong {
            display: none;
        }
    }
`;

export const Content = styled.div`
    border: 1px solid green;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;

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
        .linelong {
            display: none;
        }
    }
`;

export const Buttons = styled.div`
   display: flex;
   justify-content: center;
`;

export const SocialFooter = styled.div`
    display: flex;
    flex-direction: column;

    div:nth-child(2) {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
`;
