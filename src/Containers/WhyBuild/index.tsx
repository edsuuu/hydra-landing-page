import { Card, Title, WhyBuildTitle } from './styled';
import simulation from '../../assets/simulation.png';
import education from '../../assets/education.png';
import selfCare from '../../assets/selfcare.png';
import outdoor from '../../assets/outdoor.png';
import arrowLong from '../../assets/arrow-from-right-long.svg';

export default function WhyBuild() {
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

    return (
        <>
            <WhyBuildTitle>
                <Title>
                    <div>
                        <h1>WHY BUILD </h1>
                    </div>
                    <div>
                        <p>WITH HYDRA?</p>
                        <img src={arrowLong} alt="arrowLong" />
                    </div>
                </Title>
                <div>
                    <p>
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet
                        massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </WhyBuildTitle>
            <Card>
                {card.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.imageAlt} />
                        <h3>{item.name}</h3>
                        <p>{item.paragraph}</p>
                        <button>{item.buttonText}</button>
                    </div>
                ))}
            </Card>
        </>
    );
}
