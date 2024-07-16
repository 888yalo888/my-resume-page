import '../styles/GetInTouch.css';
import { BsPerson } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { TiPhoneOutline } from 'react-icons/ti';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
//import 'react-phone-number-input/style.css';
//import PhoneInput from 'react-phone-number-input';
import axios from 'axios';
import GetInTouchInput from './GetInTouchInput';

function GetInTouch() {
    const [isVerified, setIsVerified] = useState(false);
    //const [value, setValue] = useState();
    const [errors, setErrors] = useState([]);
    const [submitMessage, setSubmitMessage] = useState('');

    const formRef = useRef(null);
    const recaptchaRef = useRef(null);

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const form = event.target;
            const formData = new FormData(form); //object of different methods

            const urlencoded = new URLSearchParams(formData).toString();
            //console.log(urlencoded);

            const response = await axios.post(
                'http://localhost:3000/submit',
                urlencoded,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            //console.log(response);

            setErrors();
            //console.log('request was successful');

            formRef.current.reset();
            recaptchaRef.current.reset(); // Reset the reCAPTCHA

            //alert('Your request has been submitted.');
            setSubmitMessage('Your request has been submitted.');
            setTimeout(() => {
                setSubmitMessage('');
            }, 5000);

            setIsVerified(false); // Reset the verification state
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
                recaptchaRef.current.reset();
                setIsVerified(false);

                //console.log(formRef.current);
            }
        }
    };

    const handleInput = (event) => {
        const input = event.target;
        input.value = input.value.replace(/[^+\d]/g, '');
    };

    const handleRecaptchaChange = (value) => {
        setIsVerified(value ?? false);
    };

    const getErrorMessage = (fieldName) => {
        const error = errors.find((err) => err.path === fieldName);
        //console.log(error);
        return error ? error.msg : '';
    };

    // const submitAlert = () => {
    //     alert(`You're request has been submitted`);
    // };
    return (
        <>
            <form
                ref={formRef}
                className="get-in-touch-form"
                onSubmit={submitHandler}
                // action="http://localhost:3000/submit"
                // method="post"
            >
                <GetInTouchInput
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                    error={getErrorMessage('name')}
                    icon={<BsPerson className="form-icon" />}
                />
                <GetInTouchInput
                    name="email"
                    placeholder="Email"
                    type="text"
                    required
                    error={getErrorMessage('email')}
                    icon={<TfiEmail className="form-icon" />}
                />
                <GetInTouchInput
                    name="phone"
                    placeholder="Phone"
                    type="tel"
                    required
                    error={getErrorMessage('phone')}
                    icon={<TiPhoneOutline className="form-icon" />}
                />
                {/* <PhoneInput
                    className="phone-country-container"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    name="phone"
                /> */}

                <div className="grow-wrap">
                    <textarea
                        className="message"
                        placeholder="Type your message here..."
                        id="message"
                        name="message"
                        required
                    />
                </div>

                <div className="recaptcha">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA}
                        onChange={handleRecaptchaChange}
                    />
                </div>
                <div className="button-message-container">
                    <button
                        type="submit"
                        className="submit-button"
                        disabled={!isVerified}
                        // onClick={submitAlert}
                        //onSubmit={submitHandler}
                    >
                        Submit
                    </button>
                    {submitMessage && (
                        <p className="submit-message">{submitMessage}</p>
                    )}
                </div>
            </form>
        </>
    );
}

export default GetInTouch;
