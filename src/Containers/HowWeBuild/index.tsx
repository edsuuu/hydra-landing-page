import { Container, CardContainer } from './styled';
import arrowLong from '../../assets/arrow-from-right-long.png';
import arrow from '../../assets/arrow-from-right.svg';
import TitleComponent from '../../Components/TitleComponent';
import { CardProps, TitleProps } from '../../utils/interfaces';

const cardBuild: CardProps[] = [
    { id: 1, title: '01', textOne: '3D Conception', textTwo: '& Design' },
    { id: 2, title: '02', textOne: 'Interaction', textTwo: 'Design' },
    { id: 3, title: '03', textOne: 'VR World', textTwo: 'User Testing' },
    { id: 4, title: '04', textOne: 'Hydra VR', textTwo: 'Deploy' },
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

export default function HowWeBuild() {
    const title: TitleProps = titleObj[0];

    return (
        <Container>
            <TitleComponent title={title.title} subTitle={title.subTitle} paragraph={title.paragraph} imgArrow={title.imgArrow} />
            <CardContainer>
                {cardBuild.map((item) => (
                    <div key={item.id}>
                        <div className="circle">
                            <h1>{item.title}</h1>
                        </div>
                        <div>
                            <div>
                                <img src={arrow} alt="arrow" />
                            </div>
                            <div>
                                <p>{item.textOne}</p>
                                <p>{item.textTwo}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContainer>
        </Container>
    );
}
