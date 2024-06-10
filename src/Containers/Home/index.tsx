import { Container, ConteudoMain, Texts, ImageCover, IntroductionContactHome } from './styled';
import { BoxIntroductionContactHomeProps, CoverProps, HomeProps } from '../../utils/interfaces';
import CoverImage from '../../Components/CoverImage';
import TitleHome from '../../Components/TitleHome';
import Button from '../../Components/Button';
import imgHomePage from '../../assets/vr-img-1.png';
import location from '../../assets/location.svg';
import phoneCall from '../../assets/phone.svg';
import emailImg from '../../assets/mail.svg';
import lineVertical from '../../assets/line-vertical.png';
import BoxIntroductionContactHome from '../../Components/BoxIntroductionContactHome';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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

const contactObj: BoxIntroductionContactHomeProps[] = [
    {
        icon: location,
        altIcon: 'location',
        title: 'Pay Us a Visit',
        text: 'Union St, Seattle, WA 98101, United States',
    },
    {
        icon: phoneCall,
        altIcon: 'phoneCall',
        title: 'Give Us a Call',
        text: '(110) 1111-1010',
    },
    {
        icon: emailImg,
        altIcon: 'emailImg',
        title: 'Send Us a Message',
        text: 'Contact@HydraTech.com',
    },
];

const Home: React.FC = () => {
    const firstImage: CoverProps = images[0];
    const title: HomeProps = titleObj[0];

    const [contactSlice, setContactSlice] = useState(3);
    const [contactPerView, setContactPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 996) {
                setContactSlice(3);
            } else if (window.innerWidth >= 768 && window.innerWidth <= 995) {
                setContactSlice(2);
            } else {
                setContactSlice(1);
            }
        };

        const handleResizePerView = () => {
            if (window.innerWidth < 768) {
                setContactPerView(1);
            }
        };

        handleResizePerView();

        handleResize();

        window.addEventListener('resize', handleResize);
        window.addEventListener('resize', handleResizePerView);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('resize', handleResizePerView);
        };
    }, []);

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

            <IntroductionContactHome>
                {contactObj.slice(0, contactSlice).map((contact, index) => (
                    <>
                        {contactSlice === 3 ? (
                            <>
                                <BoxIntroductionContactHome icon={contact.icon} altIcon={contact.altIcon} title={contact.title} text={contact.text} />
                                {index < contactSlice - 1 && <img src={lineVertical} alt="lineVertical" />}
                            </>
                        ) : contactSlice === 2 ? (
                            <>
                                <BoxIntroductionContactHome icon={contact.icon} altIcon={contact.altIcon} title={contact.title} text={contact.text} />
                                {index < contactSlice - 1 && <img src={lineVertical} alt="lineVertical" />}
                            </>
                        ) : (
                            <Swiper slidesPerView={contactPerView} navigation>
                                {contactObj.map((contact, index) => (
                                    <SwiperSlide key={index}>
                                        <BoxIntroductionContactHome icon={contact.icon} altIcon={contact.altIcon} title={contact.title} text={contact.text} />
                                        {index < contactSlice - 1 && <img src={lineVertical} alt="lineVertical" />}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </>
                ))}
            </IntroductionContactHome>
        </Container>
    );
};

export default Home;
