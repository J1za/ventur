import { useState } from 'react';
import styles from './Contact.module.scss';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import emailjs from 'emailjs-com';
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';
import PopupMessage from '../../components/layout/common/PopupMessage/PopupMessage';
import Textarea from '../../components/ui/Textarea/Textarea';
import arrowIcon from '@/assets/images/icons/Arrow-w.svg';
import ReactGA from 'react-ga';
import mixpanel from 'mixpanel-browser';
import Fade from 'react-reveal/Fade';

export interface ContactFormData {
    name: string;
    email: string;
    note?: string;
};
//
export const ContactFormSchema = yup.object().shape({
    name: yup.string().required('Please enter your names'),
    email: yup.string().email('Please check your email').required('Please enter your email'),
    note: yup.string().optional(),
})



const ContactTemplate = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSent, setIsSent] = useState(false)


    const { register, handleSubmit, reset, errors } = useForm<ContactFormData>({
        resolver: yupResolver(ContactFormSchema)
    });
    const onSubmit = async (data: ContactFormData) => {
        setIsLoading(true);
        await emailjs.send('gmail', 'template_ib8eo3r', {
            name: data.name,
            email: data.email,
            note: data.note,
            reply_to: data.email,
        }).then(function () {
            setIsSent(true);
            setIsLoading(false);
            reset({
                name: '',
                email: '',
                note: ''
            });
        }, function () {
            setIsLoading(false);
        });

    }
    const EventPageContacts = () => {
        ReactGA.event({
            category: "Lead",
            action: "SendContactForm",
        });
        mixpanel.track('SendContactForm', {
            email: 'some@email.com',
            name: 'some name',
            note: 'some note'
        });
    }

    let contentShow = null;
    if (isSent) contentShow = (
        <PopupMessage PopupSent={isSent} setActive={setIsSent} text="Thank you for contacting us! We will get back to you soon" />
    )

    return (
        <div className={styles.contact}>
            {contentShow}

            <div className="container">
                <div className={styles.contact__content}>
                    <Fade delay={400}>
                        <h1>Let’s get in touch.</h1>
                        <h4>
                            Tell us your product idea, and we will help you figure out how to make it real. Get in touch below or drop a line on <strong><a href="mailto:hi@ventur.digital">hi@ventur.digital →</a></strong>
                        </h4>
                    </Fade>
                    <Fade delay={800}>
                        <div className={styles.contactForm}>
                            <div className={styles.contactForm__row}>
                                <Input
                                    placeholder={"Your name"}
                                    theme={"grey"}
                                    name="name"
                                    register={register}
                                    error={errors.name}
                                    className={`${errors.name ? 'required' : ''} ${styles.contactForm__name}`}
                                />
                                <Input
                                    placeholder={"Your mail"}
                                    theme={"grey"}
                                    name={"email"}
                                    register={register}
                                    error={errors.email}
                                    className={errors.email ? 'required' : ''}
                                />
                            </div>
                            <div>
                                <Textarea
                                    rows={7}
                                    theme={"dark"}
                                    placeholder={"Your comments"}
                                    name="note"
                                    register={register}
                                    error={errors.note}

                                />
                            </div>
                            <Button
                                theme="blue"
                                className={styles.contact__btn}
                                width={270}
                                onClick={handleSubmit(onSubmit, EventPageContacts)}
                                isLoading={isLoading}
                                icon={arrowIcon}
                            >
                                Subscribe
                            </Button>
                        </div>
                    </Fade>
                </div>
            </div>
        </div >
    );
};

export default ContactTemplate;


