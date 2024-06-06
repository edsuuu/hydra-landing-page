import { ContainerImage, IntroductionSectionHome, IntroductionContactHome, BoxIntroductionContactHome } from './styled';
import vrImage from '../../assets/vr-img-1.png';
import location from '../../assets/location.svg';
import phoneCall from '../../assets/phone.svg';
import emailImg from '../../assets/mail.svg';
import arrowImg from '../../assets/arrow-from-right.svg';

export default function Home() {
    return (
        <>
            <IntroductionSectionHome>
                <div>
                    <div>
                        <h1>
                            <span>Dive</span> Into The Depths
                        </h1>
                        <h1>
                            Of <span>Virtual Reality</span>
                        </h1>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                    </div>
                    <div>
                        <button>Get Started</button>
                        <div>
                            <img src={arrowImg} alt="arrowImg" />
                        </div>
                    </div>
                </div>
                <ContainerImage>
                    <img src={vrImage} alt="vrImage" />
                </ContainerImage>
            </IntroductionSectionHome>

            <IntroductionContactHome>
                <BoxIntroductionContactHome>
                    <div>
                         <img src={phoneCall} alt="phoneCall" />
                    </div>
                    <div>
                        <h1>Pay Us a Visit</h1>
                        <p>Union St, Seattle, WA 98101, United States</p>
                    </div>
                </BoxIntroductionContactHome>
                <BoxIntroductionContactHome>
                    <div>
                        <img src={location} alt="location" />
                    </div>
                    <div>
                        <h1>Pay Us a Visit</h1>
                        <p>(110) 1111-1010</p>
                    </div>
                </BoxIntroductionContactHome>
                <BoxIntroductionContactHome>
                    <div>
                        <img src={emailImg} alt="emailImg" />
                    </div>
                    <div>
                        <h1>Pay Us a Visit</h1>
                        <p>Union St, Seattle, WA 98101, United States</p>
                    </div>
                </BoxIntroductionContactHome>
            </IntroductionContactHome>

        </>
    );
}
