import { Container, ConteudoMain, Texts, ImageCover } from './styled';
import CoverImage from '../../Components/CoverImage';
import imgHomePage from '../../assets/vr-img-1.png';
import TitleHome from '../../Components/TitleHome';
import Button from '../../Components/Button';
import ContactPageHome from '../../Components/ContactHome';

interface ImageProps {
    id: number;
    imageName: string;
    url: string;
}

interface TitleProps {
    primaryTitleText: string;
    primaryColorText: string;
    secondaryTitleText: string;
    secondaryColorText: string;
    paragraphText: string;
}

const images: ImageProps[] = [
    {
        id: 1,
        imageName: 'vrImage',
        url: imgHomePage,
    },
];

const titleObj: TitleProps[] = [
    {
        primaryColorText: 'Dive',
        primaryTitleText: 'Into The Depths',
        secondaryTitleText: 'Of',
        secondaryColorText: 'Virtual Reality',
        paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae',
    },
];

const Home: React.FC = () => {
    const firstImage: ImageProps = images[0];
    const title: TitleProps = titleObj[0];

    return (
        <Container>
            <ConteudoMain>
                <Texts>
                    <div>
                        <TitleHome
                            primaryTitleText={title.primaryTitleText}
                            primaryColorText={title.primaryColorText}
                            secondaryTitleText={title.secondaryTitleText}
                            secondaryColorText={title.secondaryColorText}
                            paragraphText={title.paragraphText}
                        />
                    </div>
                    <div>
                        <Button primary={false} text="BUILD YOUR WORLD"></Button>
                    </div>
                </Texts>
                <ImageCover>
                    <CoverImage url={firstImage.url} alt={firstImage.imageName} />
                </ImageCover>
            </ConteudoMain>

            <ContactPageHome />
        </Container>
    );
};

export default Home;
