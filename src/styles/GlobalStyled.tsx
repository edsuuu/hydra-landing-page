import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    background-color: #302C42;
    color: #000000;
}

`;

export const Container = styled.div`
    margin: 0px auto 0px auto;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
`;
