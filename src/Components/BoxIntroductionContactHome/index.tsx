import { BoxIntroductionContactHomeProps } from '../../utils/interfaces';
import { Container } from './styled';

const BoxIntroductionContactHome: React.FC<BoxIntroductionContactHomeProps> = ({ icon, altIcon, title, text }) => {
    return (
        <Container>
            <div>
                <img src={icon} alt={altIcon} />
            </div>
            <div>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </Container>
    );
};

export default BoxIntroductionContactHome;

BoxIntroductionContactHome.propTypes;
