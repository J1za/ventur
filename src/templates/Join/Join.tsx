import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import { addSubscriber } from '../../api';
import styles from './Join.module.scss';
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';
import arrowIcon from '@/assets/images/icons/Arrow-w.svg';
import PopupMessage from '../../components/layout/common/PopupMessage/PopupMessage';
import ReactGA from 'react-ga';
import mixpanel from 'mixpanel-browser';
import Fade from 'react-reveal/Fade';

interface SignUpData {
    email: string;
};

const SingUpSchema = yup.object().shape({
    email: yup.string().email('Please check your email').required('Please enter your email'),
})
const HomeTemplate = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const { register, handleSubmit,reset, errors } = useForm<SignUpData>({
        resolver: yupResolver(SingUpSchema)
    });
    const onSubmit = async (data: SignUpData) => {
        setIsLoading(true);
        await addSubscriber('2389394', data.email, document.referrer);
        setIsSent(true);
        setIsLoading(false);
        reset({email:''});
    }
    const EventPageSub = () => {
        ReactGA.event({
            category: "EmailSubscibtion",
            action: "Subscribe",
            label: "optin_page",
        });
        mixpanel.track('EmailSubscribe', {
            place: 'optin_page',
        });
    }

    let formContent = null;
    return (
        <div className={styles.join}>
            {isSent &&
                <PopupMessage PopupSent={isSent} setActive={setIsSent} text="Please check your mail to confirm subscribtion" />
            }
            <div className="container">
                {formContent}
                <div className={styles.join__content}>
                    <Fade delay={400}>
                        <p className={styles.join__uptitle}>SaaS product building tips for founders without a tech background</p>
                        <h1>Launch your SaaS Business</h1>
                        <h4>
                            Every day someone has a great idea, someone abandons that idea because they have no clue where to start. Join to be ready when the opportunity comes
                        </h4>
                    </Fade>
                    <Fade delay={800}>
                        <div className={`${styles.join__form}`}>
                            <Input
                                placeholder={"What's your email?"}
                                theme={"grey"}
                                name={"email"}
                                register={register}
                                className={errors.email ? 'required' : ''}
                            />
                            <p className={styles.join__form_error}>
                                {errors.email?.message}
                            </p>
                            <Button
                                theme="blue"
                                className={styles.join__btn}
                                onClick={handleSubmit(onSubmit, EventPageSub)}
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

export default HomeTemplate;


