import { IntroductionContactHome, BoxIntroductionContactHome } from './styled';
import location from '../../assets/location.svg';
import phoneCall from '../../assets/phone.svg';
import emailImg from '../../assets/mail.svg';
import lineVertical from '../../assets/line-vertical.png';

// interface ContactHomeProps {
//     id: number;
//     title: string;
//     description: string;
//     url: string;
//     line?: string;
// }

export default function ContactPageHome() {
    return (
        <IntroductionContactHome>
            <BoxIntroductionContactHome className='location'>
                <div>
                    <img src={location} alt={'location'} />
                </div>
                <div>
                    <h1>Pay Us a Visit</h1>
                    <p>Union St, Seattle, WA 98101, United States</p>
                </div>
            </BoxIntroductionContactHome>
            <img className='line' src={lineVertical} alt="lineVertical" />
            <BoxIntroductionContactHome className='phoneCall'>
                <div>
                    <img src={phoneCall} alt={'phoneCall'} />
                </div>
                <div>
                    <h1>Give Us a Call</h1>
                    <p>{'(110) 1111-1010'}</p>
                </div>
            </BoxIntroductionContactHome>
            <img className='line' src={lineVertical} alt="lineVertical" />
            <BoxIntroductionContactHome className='emailImg'>
                <div>
                    <img src={emailImg} alt={'emailImg'} />
                </div>
                <div>
                    <h1>Send Us a Message</h1>
                    <p>Contact@HydraTech.com</p>
                </div>
            </BoxIntroductionContactHome>
        </IntroductionContactHome>
    );
}
