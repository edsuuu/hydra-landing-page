import Footer from '../../Containers/Footer';
import Form from '../../Containers/Form';
import Home from '../../Containers/Home';
import HowWeBuild from '../../Containers/HowWeBuild';
import Introduction from '../../Containers/Introduction';
import Technologies from '../../Containers/Technologies';
import WhyBuild from '../../Containers/WhyBuild';
import { Container } from './styled';

export default function HomePage() {
    return (
        <Container>
            <Home />
            <Introduction />
            {/* <WhyBuild /> */}
            {/* <Technologies /> */}
            {/* <HowWeBuild /> */}
            {/* <Form /> */}
            {/* <Footer /> */}
        </Container>
    );
}
