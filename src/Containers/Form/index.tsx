import Button from '../../Components/Button';
import { FormContact, InputGroup, FormsContactGroup, MensageAndButton, FormMainContact, TitleFormContact, ButtonContainer } from './styled';

export default function Form() {
    return (
        <FormMainContact>
            <TitleFormContact>
                <h1>JOIN HYDRA</h1>
                <p>Let’s Build Your VR Experience</p>
            </TitleFormContact>
            <FormContact action="">
                <InputGroup>
                    <FormsContactGroup>
                        <input type="text" placeholder=" " />
                        <label>First Name</label>
                    </FormsContactGroup>
                    <FormsContactGroup>
                        <input type="email" placeholder=" " />
                        <label>Last Name</label>
                    </FormsContactGroup>
                </InputGroup>
                <InputGroup>
                    <FormsContactGroup>
                        <input type="email" placeholder=" " />
                        <label>E-Mail</label>
                    </FormsContactGroup>
                    <FormsContactGroup>
                        <input type="text" placeholder=" " />
                        <label>Phone Number</label>
                    </FormsContactGroup>
                </InputGroup>
                <InputGroup>
                    <FormsContactGroup>
                        <input type="text" placeholder=" " />
                        <label>Subject</label>
                    </FormsContactGroup>
                </InputGroup>
                <MensageAndButton>
                    <FormsContactGroup>
                        <textarea placeholder=" "></textarea>
                        <label>Tell Us Something...</label>
                    </FormsContactGroup>
                    <ButtonContainer>
                        <Button primary={false} text="enviar" />
                    </ButtonContainer>
                </MensageAndButton>
            </FormContact>
        </FormMainContact>
    );
}
