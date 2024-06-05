import Home from '../../Containers/Home'
import Introduction from '../../Containers/Introduction'
import { Container } from './styled';


export default function HomePage() {
    return (
        <Container>
            <Home />
            <Introduction />
        </Container>
    );
}
