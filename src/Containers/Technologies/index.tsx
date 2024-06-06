import unreal from '../../assets/unreal.svg';
import unity from '../../assets/unity.svg';
import oculus from '../../assets/oculus.svg';
import vive from '../../assets/vive.svg';
import { Card, Container, Title } from './styled';

export default function Technologies() {
    const empress = [
        {
            id: 1,
            image: unreal,
            imageAlt: 'UNREAL',
        },
        {
            id: 2,
            image: unity,
            imageAlt: 'UNITY',
        },
        {
            id: 3,
            image: oculus,
            imageAlt: 'OCULUS',
        },
        {
            id: 4,
            image: vive,
            imageAlt: 'VIVE',
        },
    ];

    return (
        <Container>
            <Title>
                <h1>TECHNOLOGIES & HARDWARE</h1>
                <p>USED BY HYDRA VR</p>
            </Title>
            <Card>
                {empress.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.imageAlt} />
                    </div>
                ))}
            </Card>
        </Container>
    );
}
