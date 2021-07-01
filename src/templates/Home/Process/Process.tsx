
import styles from './Process.module.scss';
import eye from '@/assets/images/eye.svg';
import target from '@/assets/images/crosshair.svg';
import monitor from '@/assets/images/monitor.svg';
import edit from '@/assets/images/edit.svg';
import reit from '@/assets/images/reit.svg';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

const Process = () => {
    return (
        <section className={styles.process}>
            <div className="container">
                <Fade bottom cascade>
                    <Reveal effect="fadeIn">
                        <h1 className={styles.process__title}>Proccess fine-tuned to get your SaaS Product to the market</h1>
                    </Reveal>

                    <ul className={styles.process__list}>
                        <li className={styles.process__item}>
                            <div className={styles.process__content}>
                                <div className={styles.process__top}>
                                    <div className={styles.process__img}>
                                        <img src={eye} alt="eye icon" />
                                    </div>
                                    <h2 className={styles.process__number}>01</h2>
                                </div>
                                <div>
                                    <h5 className={styles.process__name}>Understand your product vision</h5>
                                    <p className={styles.process__text}>We will work with you to clarifying product vision, determining business goals and research you target audience </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process__item}>
                            <div className={styles.process__content}>
                                <div className={styles.process__top}>
                                    <div className={styles.process__img}>
                                        <img src={target} alt="eye icon" />
                                    </div>
                                    <h2 className={styles.process__number}>02</h2>
                                </div>
                                <div>
                                    <h5 className={styles.process__name}>Plan product strategy</h5>
                                    <p className={styles.process__text}>
                                        We will strategize how to get your product live and hit your business objectives
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process__item}>
                            <div className={styles.process__content}>
                                <div className={styles.process__top}>
                                    <div className={styles.process__img}>
                                        <img src={monitor} alt="eye icon" />
                                    </div>
                                    <h2 className={styles.process__number}>03</h2>
                                </div>
                                <div>
                                    <h5 className={styles.process__name}>
                                        Product Architecture
                                    </h5>
                                    <p className={styles.process__text}>
                                        We use data gained during research to ideate & prototype a solution that solves customer's problems and aligns with your goals & resources
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process__item}>
                            <div className={styles.process__content}>
                                <div className={styles.process__top}>
                                    <div className={styles.process__img}>
                                        <img src={edit} alt="eye icon" />
                                    </div>
                                    <h2 className={styles.process__number}>04</h2>
                                </div>
                                <div>
                                    <h5 className={styles.process__name}>
                                        Design and develop solution
                                    </h5>
                                    <p className={styles.process__text}>
                                        Once the solution prototype is ready, we turn into real interfaces and application
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process__item}>
                            <div className={styles.process__content}>
                                <div className={styles.process__top}>
                                    <div className={styles.process__img}>
                                        <img src={reit} alt="eye icon" />
                                    </div>
                                    <h2 className={styles.process__number}>05</h2>
                                </div>
                                <div>
                                    <h5 className={styles.process__name}>
                                        Iterate
                                    </h5>
                                    <p className={styles.process__text}>
                                        After your product is live, we listen to the users' feedback and rapidly iterate to improve the product
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Fade>
            </div>
        </section>
    )
}

export default Process
