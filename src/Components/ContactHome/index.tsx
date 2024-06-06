import { Container, IntroductionContactHome, BoxIntroductionContactHome } from './styled';
import location from '../../assets/location.svg';
import phoneCall from '../../assets/phone.svg';
import emailImg from '../../assets/mail.svg';
import lineVertical from '../../assets/line-vertical.png';

interface ContactHomeProps {
    id: number;
    title: string;
    description: string;
    url: string;
    line?: string;
}

const contacts: ContactHomeProps[] = [
    {
        id: 1,
        title: 'Pay Us a Visit',
        description: 'Union St, Seattle, WA 98101, United States',
        url: phoneCall,
        line: lineVertical,
    },
    {
        id: 2,
        title: 'Give Us a Call',
        description: '(110) 1111-1010',
        url: location,
        line: lineVertical,
    },
    {
        id: 3,
        title: 'Send Us a Message',
        description: 'Union St, Seattle, WA 98101, United States',
        url: emailImg,
    },
];

export default function ContactPageHome() {
    return (
        <Container>
            <IntroductionContactHome>
                {contacts.map((socialLink) => (
                    <BoxIntroductionContactHome key={socialLink.id}>
                        <div>
                            <img src={socialLink.url} alt={socialLink.title} />
                        </div>
                        <div>
                            <h1>{socialLink.title}</h1>
                            <p>{socialLink.description}</p>
                        </div>
                        <div>
                            <img src={socialLink.line} alt={socialLink.line ? socialLink.title : ''}/>
                        </div>
                    </BoxIntroductionContactHome>
                ))}
            </IntroductionContactHome>
        </Container>
    );
}
