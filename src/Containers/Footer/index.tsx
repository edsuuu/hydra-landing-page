import { Buttons, Container, Content, SocialFooter } from './styled';
import Button from '../../Components/Button';
import logoVetor from '../../assets/logo-vetor.png';
import lineVetor from '../../assets/line-vetor.png';
import lineLong from '../../assets/line-long.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png';
import pinterest from '../../assets/pinterest.png';

const links = [
    { id: 1, name: 'About', to: '#' },
    { id: 2, name: 'Services', to: '#' },
    { id: 3, name: 'Technologies', to: '#' },
    { id: 4, name: 'How To', to: '#' },
    { id: 5, name: 'Join Hydra', to: '#' },
    { id: 6, name: 'F.A.Q', to: '#' },
    { id: 7, name: 'Sitemap', to: '#' },
    { id: 8, name: 'Conditions', to: '#' },
    { id: 9, name: 'Licenses', to: '#' },
];

const socialLinks = [
    { id: 1, image: facebook, imageAlt: 'facebook', to: '#' },
    { id: 2, image: twitter, imageAlt: 'twitter', to: '#' },
    { id: 3, image: linkedin, imageAlt: 'linkedin', to: '#' },
    { id: 4, image: youtube, imageAlt: 'youtube', to: '#' },
    { id: 5, image: instagram, imageAlt: 'instagram', to: '#' },
    { id: 6, image: pinterest, imageAlt: 'pinterest', to: '#' },
];

export default function Footer() {
    return (
        <Container>
            <Content>
                <div>
                    <img src={logoVetor} alt="logoVetor" />
                </div>
                <div className="line-vetor">
                    <img src={lineVetor} alt="lineVetor" />
                </div>
                <div className="links-array">
                    {links.slice(0, 5).map((link) => (
                        <p key={link.id}> {link.name}</p>
                    ))}
                </div>
                <div className="line-vetor">
                    <img src={lineVetor} alt="lineVetor" />
                </div>
                <div className="links-array">
                    {links.slice(5).map((link) => (
                        <p key={link.id}> {link.name}</p>
                    ))}
                </div>
                <div className="line-vetor">
                    <img src={lineVetor} alt="lineVetor" />
                </div>
                <SocialFooter>
                    <div className="title-footer">
                        <h3>SOCIALIZE WITH HYDRA</h3>
                    </div>
                    <div>
                        {socialLinks.map((socialLink) => (
                            <a key={socialLink.id} href={socialLink.to} target="_blank" rel="noreferrer">
                                <img src={socialLink.image} alt={socialLink.imageAlt} />
                            </a>
                        ))}
                    </div>
                    <Buttons>
                        <Button primary={false} text="BUILD YOU WORLD"></Button>
                    </Buttons>
                </SocialFooter>
            </Content>
            <div className="linelong">
                <img className="lineLong" src={lineLong} alt="" />
            </div>
            <div className="credits">
                <h2>2024 © HYDRA LANDING PAGE - DEVELOPED BY EDSON - ALL RIGHTS RESERVED </h2>
            </div>
        </Container>
    );
}
