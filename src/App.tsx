import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle, Container } from './styles/GlobalStyled';
import AppRoutes from './Router';
import Navigation from './Components/Menu/index.tsx';

export default function App(): JSX.Element {
    return (
        <Container>
            <Router>
                <Navigation />
                <AppRoutes />
                <GlobalStyle />
                {/* <Footer /> */}
            </Router>
        </Container>
    );
}
