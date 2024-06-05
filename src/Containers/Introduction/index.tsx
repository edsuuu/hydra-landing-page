import { Container, IntroductionAbout, IntroductionTitle, Title, Buttons } from './styled';
import arrowLong from '../../assets/arrow-from-right-long.svg';
import vrImg2 from '../../assets/vr-img-2.svg';
import Button from '../../Components/Button';

export default function Introduction() {
    return (
        <Container>
            <IntroductionTitle>
                <Title>
                    <div>
                        <h1>INTRODUCTION </h1>
                    </div>
                    <div>
                        <p>TO HYDRA VR</p>
                            <img src={arrowLong} alt="arrowLong" />

                    </div>
                </Title>
                <div>
                    <p>
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet
                        massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </IntroductionTitle>
            <IntroductionAbout>
                <div>
                    <img src={vrImg2} alt="vrImg2" />
                </div>
                <div>
                    <div>
                        <h1>ABOUT</h1>
                        <p>HYDRA VR</p>
                    </div>
                    <div>
                        <p>
                            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut
                            placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper
                            viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
                            orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.
                        </p>
                    </div>
                    <Buttons>
                        <Button text="LET'S GET IN TOUCH" />
                    </Buttons>
                </div>
            </IntroductionAbout>
        </Container>
    );
}
