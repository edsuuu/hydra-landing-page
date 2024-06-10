import { Container } from './styled';
import simulation from '../../assets/simulation.png';
import education from '../../assets/education.png';
import selfCare from '../../assets/selfcare.png';
import outdoor from '../../assets/outdoor.png';
import arrowLong from '../../assets/arrow-from-right-long.png';
import TitleComponent from '../../Components/TitleComponent';
import { TitleProps, LineObjProps } from '../../utils/interfaces';
import CardBuildComponent from '../../Components/CardBuildComponent';
// import Button from '../../Components/Button';
import lineHorizont from '../../assets/line-horizont-card.png';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const lineObj: LineObjProps[] = [
    {
        url: lineHorizont,
        alt: 'lineHorizont',
    },
];

const card = [
    {
        image: simulation,
        imageAlt: 'SIMULATION',
        name: 'SIMULATION',
        paragraph: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
        image: education,
        imageAlt: 'EDUCATION',
        name: 'EDUCATION',
        paragraph: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
        image: selfCare,
        imageAlt: 'SELF-CARE',
        name: 'SELF-CARE',
        paragraph: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
        image: outdoor,
        imageAlt: 'OUTDOOR',
        name: 'OUTDOOR',
        paragraph: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
];

const titleObj: TitleProps[] = [
    {
        title: 'WHY BUILD',
        subTitle: 'WITH HYDRA?',
        paragraph:
            'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.',
        imgArrow: arrowLong,
    },
];

export default function WhyBuild() {
    const title: TitleProps = titleObj[0];
    const line: LineObjProps = lineObj[0];

    const [slidesPerView, setslidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1120) {
                setslidesPerView(4);
            } else if (window.innerWidth >= 860) {
                setslidesPerView(3);
            } else if (window.innerWidth >= 730) {
                setslidesPerView(2);
            } else {
                setslidesPerView(1);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container>
            <TitleComponent title={title.title} subTitle={title.subTitle} paragraph={title.paragraph} imgArrow={title.imgArrow} />
            <>
                <Swiper slidesPerView={slidesPerView}  navigation>
                    {card.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardBuildComponent title={item.name} image={item.image} imageAlt={item.imageAlt} url2={line.url} alt2={line.alt} paragraph={item.paragraph} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </Container>
    );
}
