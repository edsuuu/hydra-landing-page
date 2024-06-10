import unreal from '../../assets/unreal.svg';
import unity from '../../assets/unity.svg';
import oculus from '../../assets/oculus.svg';
import vive from '../../assets/vive.svg';
import { Card, Container, Title } from './styled';
import { CoverProps } from '../../utils/interfaces';
import CoverImage from '../../Components/CoverImage';

const empress: CoverProps[] = [
    {
        url: unreal,
        alt: 'UNREAL',
    },
    {
        url: unity,
        alt: 'UNITY',
    },
    {
        url: oculus,
        alt: 'OCULUS',
    },
    {
        url: vive,
        alt: 'VIVE',
    },
];

export default function Technologies() {
    return (
        <Container>
            <Title>
                <h1>TECHNOLOGIES & HARDWARE</h1>
                <p>USED BY HYDRA VR</p>
            </Title>
            <Card>
                {empress.map((item, index) => (
                    <div key={index}>
                        <CoverImage url={item.url} alt={item.alt} />
                    </div>
                ))}
            </Card>
        </Container>
    );
}
