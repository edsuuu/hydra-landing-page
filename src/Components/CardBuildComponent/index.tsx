import { WhyBuildProps, WhyBuildImageProps } from '../../utils/interfaces';
import Button from '../Button';
import CoverImage from '../CoverImage';
import { ButtonContainer, CardContainer, ImageContainer, LineContainer, ParagraphContainer, TitleContainer } from './styled';

type CombinedProps = WhyBuildProps & WhyBuildImageProps;

const CardBuildComponent: React.FC<CombinedProps> = ({ title, paragraph, image, imageAlt, url2, alt2 }) => {
    return (
        <CardContainer>
            <ImageContainer>
                <CoverImage url={image} alt={imageAlt} />
            </ImageContainer>
            <TitleContainer>
                <h1>{title}</h1>
            </TitleContainer>
            <LineContainer>
                <CoverImage url={url2} alt={alt2}></CoverImage>
            </LineContainer>
            <ParagraphContainer>
                <p>{paragraph}</p>
            </ParagraphContainer>
            <ButtonContainer>
                <Button primary={false} text="TRY IT NOW" />
            </ButtonContainer>
        </CardContainer>
    );
};

export default CardBuildComponent;

CardBuildComponent.propTypes;
