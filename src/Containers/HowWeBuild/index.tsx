import { Container, Title, CardContainer } from './styled';
import arrowLong from '../../assets/arrow-from-right-long.svg';
import arrow from '../../assets/arrow-from-right.svg';

export default function HowWeBuild() {
    const cardBuild = [
        { id: 1, title: '01', textOne: '3D Conception', textTwo: '& Design' },
        { id: 2, title: '02', textOne: 'Interaction', textTwo: 'Design' },
        { id: 3, title: '03', textOne: 'VR World', textTwo: 'User Testing' },
        { id: 4, title: '04', textOne: 'Hydra VR', textTwo: 'Deploy' },
    ];

    return (
        <Container>
            <Title>
                <div>
                    <div>
                        <h1>INTRODUCTION </h1>
                    </div>
                    <div>
                        <p>TO HYDRA VR</p>
                        <img src={arrowLong} alt="arrowLong" />
                    </div>
                </div>
                <div>
                    <p>
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet
                        massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </Title>
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
                    // <CardBuild key={item.id} title={item.title} text={item.text} />
                ))}
            </CardContainer>
        </Container>
    );
}
