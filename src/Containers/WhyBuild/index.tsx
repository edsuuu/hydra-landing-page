import { Card } from './styled';
import simulation from '../../assets/simulation.png';
import education from '../../assets/education.png';
import selfCare from '../../assets/selfcare.png';
import outdoor from '../../assets/outdoor.png';
import arrowLong from '../../assets/arrow-from-right-long.png';
import TitleComponent from '../../Components/TitleComponent';
// import Button from '../../Components/Button';

interface TitleProps {
    title: string;
    subTitle: string;
    imgArrow: string;
    paragraph: string;
}

const card = [
    {
        id: 1,
        image: simulation,
        imageAlt: 'SIMULATION',
        name: 'SIMULATION',
        paragraph: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        buttonText: 'TRY IT NOW',
    },
    {
        id: 2,
        image: education,
        imageAlt: 'EDUCATION',
        name: 'EDUCATION',
        paragraph: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        buttonText: 'TRY IT NOW',
    },
    {
        id: 3,
        image: selfCare,
        imageAlt: 'SELF-CARE',
        name: 'SELF-CARE',
        paragraph: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        buttonText: 'TRY IT NOW',
    },
    {
        id: 4,
        image: outdoor,
        imageAlt: 'OUTDOOR',
        name: 'OUTDOOR',
        paragraph: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        buttonText: 'TRY IT NOW',
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

    return (
        <div>
            <TitleComponent title={title.title} subTitle={title.subTitle} paragraph={title.paragraph} imgArrow={title.imgArrow} />
            <Card>
                {card.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.imageAlt} />
                        <h3>{item.name}</h3>
                        <p>{item.paragraph}</p>

                        {/* <Button text={item.buttonText}></Button> */}
                    </div>
                ))}
            </Card>
        </div>
    );
}
