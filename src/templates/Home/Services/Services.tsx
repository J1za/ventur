import styles from './Services.module.scss';
import Link from 'next/link';
import repeat from '@/assets/images/repeat.svg';
import fileText from '@/assets/images/fileText.svg';
import monitor from '@/assets/images/monitor.svg';
import Button from '@/components/ui/Button/Button';
import arrowIcon from '@/assets/images/icons/Arrow-p.svg';
import Reveal from 'react-reveal/Reveal';

const Services = () => {
    return (
        <section className={styles.services}>
            <div className="container">

                <div className={styles.services__container}>
                    <Reveal effect="fadeIn">
                        <h1 className={styles.services__title}>We help you get the Product rolling</h1>
                        <h4 className={styles.services__subTitle}>Only 3 fixed price services that help you Plan, Launch, and Grow your SaaS Business</h4>
                    </Reveal>
                </div>
                <Reveal effect="fadeIn">
                    <ul className={styles.services__list}>
                        <li className={styles.services__item}>
                            <div className={styles.services__badge}>
                                <img className={styles.services__img} src={fileText} alt="file icon" />
                            </div>
                            <h5 className={styles.services__name} >SaaS Product Architecture</h5>
                            <p className={styles.services__text}>We help turn your product vision into a step-by-step plan to get your product live. You get a solution that's aligned with your business goals & budget</p>
                            <Link href='/services'>
                                <a>
                                    <Button icon={arrowIcon}
                                        theme="readMore" >
                                        Read more
                                    </Button>
                                </a>
                            </Link>
                        </li>
                        <li className={styles.services__item}>
                            <div className={styles.services__badge}>
                                <img className={styles.services__img} src={monitor} alt="monitor icon" />
                            </div>
                            <h5 className={styles.services__name} >MVP Development</h5>
                            <p className={styles.services__text}>We design & build your MVP to get first users & attract investors without risking a fortune.</p>
                        </li>
                        <li className={styles.services__item}>
                            <div className={styles.services__badge}>
                                <img className={styles.services__img} src={repeat} alt="repeat icon" />
                            </div>
                            <h5 className={styles.services__name} >Product Iteration</h5>
                            <p className={styles.services__text}>We run a sprint to hit a specific business goal of your SaaS Product. It can be improving activation rate, lower churn, or building a feature to solve the user's problem</p>
                        </li>
                    </ul>
                </Reveal>
            </div>
        </section>
    )
}

export default Services
