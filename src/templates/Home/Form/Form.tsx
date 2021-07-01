import Button from '@/components/ui/Button/Button';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './Form.module.scss';
import ReactGA from 'react-ga';
import mixpanel from 'mixpanel-browser';
import Reveal from 'react-reveal/Reveal';

const Form = () => {
    const router = useRouter();

    const EventNextStep = () => {
        router.push('/contact')
        ReactGA.event({
            category: "Lead",
            action: "ContactUsClick",
            label: "next_step",
        });
        mixpanel.track('ContactUsClick', {
            place: 'next_step',
        });
    }
    return (
        <section className={styles.form}>
            <div className="container">
                <div className={styles.form__container}>
                    <Reveal effect="fadeIn">
                        <h1 className={styles.form__title}>Are you ready to take
                            the next step?</h1>
                        <h4 className={styles.form__subTitle}>Just write to us and we will turn your ideas into real business</h4>
                        <div className={styles.form__btn}>
                            <Button width={270} theme='blue' onClick={EventNextStep}>Contact us</Button>
                        </div>
                    </Reveal>
                </div>
            </div>

        </section>
    )
}

export default Form
