import React from 'react';
import styles from './Hero.module.scss';
import Reveal from 'react-reveal/Reveal';

const Hero = (props) => {
    return (

        <section className={styles.hero}>
            <div className="container">
                <Reveal effect="fadeUp">
                    <div className={styles.hero__container}>
                        <div className={styles.hero__content}>
                            {props.children}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>

    )
}

export default Hero
