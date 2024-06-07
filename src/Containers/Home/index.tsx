import { Container, ConteudoMain, Texts, ImageCover } from './styled';
import CoverImage from '../../Components/CoverImage';
import imgHomePage from '../../assets/vr-img-1.png';
import TitleHome from '../../Components/TitleHome';
import Button from '../../Components/Button';
import ContactPageHome from '../../Components/ContactHome';
import { CoverProps, HomeProps } from '../../utils/interfaces';

const images: CoverProps[] = [
    {
        alt: 'vrImage',
        url: imgHomePage,
    },
];

const titleObj: HomeProps[] = [
    {
        primaryColorText: 'Dive',
        primaryTitleText: 'Into The Depths',
        secondaryTitleText: 'Of',
        secondaryColorText: 'Virtual Reality',
        paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae',
    },
];

const Home: React.FC = () => {
    const firstImage: CoverProps = images[0];
    const title: HomeProps = titleObj[0];

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
                    <CoverImage url={firstImage.url} alt={firstImage.alt} />
                </ImageCover>
            </ConteudoMain>

            <ContactPageHome />
        </Container>
    );
};

export default Home;
