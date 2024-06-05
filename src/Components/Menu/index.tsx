import { Navbar, Logo, Buttons, Links, ParamsLink, LogoText, LogoImg } from './styled';
import Button from '../Button';
import hydraLogo from '../../assets/hydra-logo.svg';
import lettersR from '../../assets/lettersR.svg';
import lettersA from '../../assets/lettersA.svg';
import lettersH from '../../assets/lettersH.svg';
import lettersY from '../../assets/lettersY.svg';
import lettersD from '../../assets/lettersD.svg';


const Menu = () => {
    return (
        <Navbar>
            <Logo>
                <LogoImg>
                    <img src={hydraLogo} alt="Hydra Logo" />
                </LogoImg>
                <LogoText>
                    <img src={lettersH} alt="lettersH" />
                    <img src={lettersY} alt="lettersY" />
                    <img src={lettersD} alt="lettersD" />
                    <img src={lettersR} alt="lettersR" />
                    <img src={lettersA} alt="lettersA" />
                </LogoText>
            </Logo>
            <Links>
                <ParamsLink to="/">Home</ParamsLink>
                <ParamsLink to="#">About</ParamsLink>
                <ParamsLink to="#">Technologies</ParamsLink>
                <ParamsLink to="#">How To</ParamsLink>
            </Links>
            <Buttons>
                <Button text="Contact"></Button>
                <Button text="Join Hydra"></Button>
            </Buttons>
        </Navbar>
    );
};

export default Menu;
