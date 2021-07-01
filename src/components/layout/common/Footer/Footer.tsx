import React, { FC } from 'react';
import styles from './Footer.module.scss';
import Logo from '../Logo/Logo';
import Nav from '../../common/Footer/Nav/Nav';
import Reveal from 'react-reveal/Reveal';


const Footer = (props) => {
    const buttonClasses = [];
    if (props.theme === 'minimal') buttonClasses.push(styles.footer__minimal);
    if (props.theme === 'notSub') buttonClasses.push(styles.footer__menu);


    return (
        <footer className={`${styles.footer} ${buttonClasses.join(' ')}`}>
            <div className={styles.footer__top}>
                <Reveal effect="fadeIn">
                    <div className='container'>
                        {props.theme === 'minimal' &&
                            <div className={styles.footer__container}>
                                <div className={styles.footer__logo}>
                                    <Logo />
                                </div>
                                <p className={styles.footer__text}>We are a SaaS Product studio that helps entrepreneurs research, design, and build their product ideas.</p>
                            </div>
                        }

                        {props.theme !== 'minimal' &&
                            <div className={styles.footer__container}>
                                <div className={styles.footer__inner}>
                                    <div className={styles.footer__logo}>
                                        <Logo />
                                    </div>
                                    <Nav />
                                </div>
                            </div>
                        }

                    </div>
                </Reveal>
            </div>

            {props.theme !== 'notSub' &&
                <div className={styles.footer__bottom}>
                    <Reveal effect="fadeIn">
                        <div className='container'>
                            <p className={styles.footer__subTitle}>
                                SaaS Agency theVentur © 2019-2021
                            </p>
                        </div>
                    </Reveal>
                </div>
            }

        </footer>
    )
}

export default Footer
