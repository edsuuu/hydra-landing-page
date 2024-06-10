import { Container, CardContainer } from './styled';
import arrowLong from '../../assets/arrow-from-right-long.png';
import arrow from '../../assets/arrow-little.png';
import TitleComponent from '../../Components/TitleComponent';
import { CardProps, CoverProps, TitleProps } from '../../utils/interfaces';
import HowWeCircleComponent from '../../Components/HowWeCircleComponent';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const imageObj: CoverProps[] = [
    {
        url: arrow,
        alt: 'arrow',
    },
];

const cardBuild: CardProps[] = [
    { title: '01', textOne: '3D Conception', textTwo: '& Design' },
    { title: '02', textOne: 'Interaction', textTwo: 'Design' },
    { title: '03', textOne: 'VR World', textTwo: 'User Testing' },
    { title: '04', textOne: 'Hydra VR', textTwo: 'Deploy' },
];

const titleObj: TitleProps[] = [
    {
        title: 'HOW WE BUILD',
        subTitle: 'WITH HYDRA VR?',
        imgArrow: arrowLong,
        paragraph:
            'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdietmassa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.',
    },
];

export default function HowWeBuild(): JSX.Element {
    const title: TitleProps = titleObj[0];
    const arrow: CoverProps = imageObj[0];

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
            <CardContainer>
                {/* {cardBuild.map((item, index) => (
                    <HowWeCircleComponent key={index} title={item.title} textOne={item.textOne} textTwo={item.textTwo} url={arrow.url} alt={arrow.alt} />
                ))} */}

                <Swiper slidesPerView={slidesPerView} navigation>
                    {cardBuild.map((item, index) => (
                        <SwiperSlide key={index}>
                            <HowWeCircleComponent key={index} title={item.title} textOne={item.textOne} textTwo={item.textTwo} url={arrow.url} alt={arrow.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CardContainer>
        </Container>
    );
}
