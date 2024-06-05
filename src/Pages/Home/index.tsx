import { styled } from 'styled-components';

const Container = styled.div`
    border: 1px solid #000000;
    padding: 2rem;
`;

export default function Home() {
    return (
        <>
            <Container>
                <h1>home page</h1>
            </Container>
        </>
    );
}
