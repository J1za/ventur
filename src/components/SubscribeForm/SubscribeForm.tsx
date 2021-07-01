import { useState } from 'react';
import styles from './SubscribeForm.module.scss';
import * as yup from 'yup';
import { addSubscriber } from '../../api';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';
import arrowIcon from '@/assets/images/icons/Arrow-p.svg';
import formIcon from '@/assets/images/icons/noun_done-w.svg';
import PopupMessage from '../../components/layout/common/PopupMessage/PopupMessage';
import ReactGA from 'react-ga';
import mixpanel from 'mixpanel-browser';
import Reveal from 'react-reveal/Reveal';

export interface ContactFormData {
    email: string;
    text: string;
};
//
export const ContactFormSchema = yup.object().shape({
    email: yup.string().email('Please check your email').required('Please enter your email'),
})

const SubscribeForm = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false)

    const { register, handleSubmit, reset, errors } = useForm<ContactFormData>({
        resolver: yupResolver(ContactFormSchema)
    });
    const onSubmit = async (data: ContactFormData) => {
        setIsLoading(true);
        await addSubscriber('2387519', data.email, document.referrer);
        setIsSent(true);
        setIsLoading(false);
        reset({email:''});
    }
    const EventsMainSaas = () => {
        ReactGA.event({
            category: "EmailSubscibtion",
            action: "Subscribe",
            label: "footer_subscribtion",

        });
        mixpanel.track('EmailSubscribe', {
            place: 'footer_subscribtion',
        });
    }
    const EventsBlogPost = () => {
        ReactGA.event({
            category: "EmailSubscibtion",
            action: "Subscribe",
            label: "blog_footer_subscribtion",
        });
        mixpanel.track('EmailSubscribe', {
            place: 'blog_footer_subscribtion',
        });
    }

    let contentForm = null;


    if (!isSent) contentForm = (
        <Reveal effect="fadeIn">
            <div className={styles.subForm__inner}>

                <h2 className={styles.subForm__title}>
                    Join to get lessons on how to build SaaS Products faster
                    & with fewer risks
                </h2>
                <div className={styles.contactForm}>
                    <div className={styles.contactForm__email}>
                        <Input
                            placeholder={"What's your email?"}
                            name={'email'}
                            theme={props.BlueForm && 'white'}
                            register={register}
                            error={errors.email}
                            className={errors.email ? 'required' : ''}

                        />
                    </div>
                    <Button
                        theme={props.BlueForm ? 'white' : 'blue'}
                        className={styles.contactForm__btn}
                        width={270}
                        onClick={handleSubmit(onSubmit)}
                        isLoading={isLoading}
                        icon={arrowIcon}
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
        </Reveal>
    );

    if (isSent && !props.BlueForm || !isSent) contentForm = (
        <Reveal effect="fadeIn">
            <div className={styles.subForm__inner}>
                <PopupMessage PopupSent={isSent} setActive={setIsSent} text="Please check your mail to confirm subscribtion" />
                <h2 className={styles.subForm__title}>
                    {props.text ? props.text : "Join to get lessons on how to build SaaS Products faster & with fewer risks"}
                </h2>
                <div className={styles.contactForm}>
                    <div className={styles.contactForm__email}>
                        <Input
                            placeholder={"What's your email?"}
                            name={'email'}
                            theme={props.BlueForm && 'white'}
                            register={register}
                            error={errors.email}
                            className={errors.email ? 'required' : ''}
                        />
                    </div>
                    <Button
                        theme={props.BlueForm ? 'white' : 'blue'}
                        className={styles.contactForm__btn}
                        width={270}
                        onClick={!props.BlueForm ? handleSubmit(onSubmit, EventsMainSaas) : handleSubmit(onSubmit, EventsBlogPost)}
                        isLoading={isLoading}
                        icon={arrowIcon}
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
        </Reveal>

    );


    if (isSent && props.BlueForm) contentForm = (
        <div className={styles.subForm__inner}>
            <div className={styles.subForm_popup}>
                <h2>Thank you! Please check your email to confirm subscription</h2>
                <div className={styles.subForm_popup__icon}>
                    <img src={formIcon} alt="" />
                </div>
            </div>
        </div>
    );

    return (
        <section className={`${styles.subForm} ${props.BlueForm && styles.subForm_blue}`}>

            <div className="container">
                {contentForm}
            </div>
        </section>
    )
}

export default SubscribeForm
