import { CardProps, CoverProps } from '../../utils/interfaces';
import CoverImage from '../CoverImage';
import { Container, TitleNumber, SubText } from './styled';

type CombineProps = CoverProps & CardProps;

const HowWeCircleComponent: React.FC<CombineProps> = ({ title, textOne, textTwo, url, alt }) => {
    return (
        <Container>
            <TitleNumber>
                <div>
                    <h1>{title}</h1>
                </div>
            </TitleNumber>
            <SubText>
                <div>
                    <CoverImage url={url} alt={alt} />
                </div>
                <div>
                    <h3>{textOne}</h3>
                    <h3>{textTwo}</h3>
                </div>
            </SubText>
        </Container>
    );
};

export default HowWeCircleComponent;

HowWeCircleComponent.propTypes;
