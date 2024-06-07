import { Container, IntroductionAbout, AboutTitle } from './styled';
import arrowLong from '../../assets/arrow-from-right-long.png';
import vrImg2 from '../../assets/vr-img-2.png';
import Button from '../../Components/Button';
import TitleComponent from '../../Components/TitleComponent';
import CoverImage from '../../Components/CoverImage';
import AboutComponent from '../../Components/AboutComponent';
import { AboutProps, CoverProps, TitleProps } from '../../utils/interfaces';

const titleObj: TitleProps[] = [
    {
        title: 'INTRODUCTION',
        subTitle: 'TO HYDRA VR',
        imgArrow: arrowLong,
        paragraph:
            'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdietmassa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.',
    },
];

const imageObj: CoverProps[] = [
    {
        alt: 'vrImg2',
        url: vrImg2,
    },
];

const aboutObj: AboutProps[] = [
    {
        title: 'ABOUT',
        subTitle: 'HYDRA VR',
        paragraph:
            'Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semperviverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.',
    },
];

export default function Introduction() {
    const title: TitleProps = titleObj[0];
    const image: CoverProps = imageObj[0];
    const about: AboutProps = aboutObj[0];

    return (
        <Container>
            <TitleComponent title={title.title} subTitle={title.subTitle} imgArrow={title.imgArrow} paragraph={title.paragraph} />
            <IntroductionAbout>
                <div>
                    <CoverImage url={image.url} alt={image.alt} />
                </div>
                <AboutTitle>
                    <AboutComponent title={about.title} subTitle={about.subTitle} paragraph={about.paragraph} />
                    <div>
                        <Button primary={false} text="LET'S GET IN TOUCH" />
                    </div>
                </AboutTitle>
            </IntroductionAbout>
        </Container>
    );
}
