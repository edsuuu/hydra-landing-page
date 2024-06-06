import Button from '../../Components/Button';
import { Buttons, FormContainer } from './styled';

export default function Form() {
    return (
        <FormContainer>
            <div className="title">
                <div>
                    <h1>JOIN HYDRA</h1>
                </div>
                <div>line</div>
                <div>
                    <p>Let’s Build Your VR Experience</p>
                </div>
            </div>
            <div>
                <form action="">
                    <div>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" />
                        <input type="number" placeholder="Phone Number" />
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div>
                        <textarea name="mensage" id="mensage">
                            Tell Us Something...
                        </textarea>
                    </div>
                    <Buttons>
                        <Button text="SEND TO HYDRA " />
                    </Buttons>
                </form>
            </div>
        </FormContainer>
    );
}
