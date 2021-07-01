import React from 'react';
import styles from './OurSkills.module.scss';
import search from '@/assets/images/search.svg';
import briefcase from '@/assets/images/briefcase.svg';
import code from '@/assets/images/code.svg';
import editWhite from '@/assets/images/editWhite.svg';
import Reveal from 'react-reveal/Reveal';

const OurSkills = () => {
    return (
        <section className={styles.skills}>
            <div className="container">
                <Reveal effect="fadeIn">
                    <h2 className={styles.skills__title}>Your crew of the SaaS
                        builders under one roof</h2>
                </Reveal>
                <Reveal effect="fadeIn">
                    <ul className={styles.skills__list}>
                        <li className={styles.skills__item}>
                            <div className={styles.skills__badge}>
                                <img className={styles.skills__img} src={search} alt="search icon" />
                            </div>
                            <h5 className={styles.skills__name}>Research & Discovery</h5>
                            <p className={styles.skills__text}>Uncover target audient & market insights to clarify your product vision</p>
                        </li>
                        <li className={styles.skills__item}>
                            <div className={styles.skills__badge}>
                                <img className={styles.skills__img} src={briefcase} alt="briefcase icon" />
                            </div>
                            <h5 className={styles.skills__name}>Product Management</h5>
                            <p className={styles.skills__text}>Craft a solution that's aligned with your business goals</p>
                        </li>
                        <li className={styles.skills__item}>
                            <div className={styles.skills__badge}>
                                <img className={styles.skills__img} src={editWhite} alt="edit icon" />
                            </div>

                            <h5 className={styles.skills__name}>UX/UI Design</h5>
                            <p className={styles.skills__text}>Design interfaces for your product</p>
                        </li>
                        <li className={styles.skills__item}>
                            <div className={styles.skills__badge}>
                                <img className={styles.skills__img} src={code} alt="code icon" />
                            </div>

                            <h5 className={styles.skills__name}>Web/Mobile Development</h5>
                            <p className={styles.skills__text}>Make your product clicking on Web, iOS & Android</p>
                        </li>
                    </ul>
                </Reveal>
            </div>
        </section>
    )
}

export default OurSkills
