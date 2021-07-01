import React from 'react';
import styles from './Works.module.scss';
import Motil from './Motil/Motil';
import Join from './Join/Join';
import Reveal from 'react-reveal/Reveal';

const Works = () => {
    return (
        <section className={styles.works}>
            <div className="container">
                <Reveal effect="fadeIn">
                    <h1 className={styles.works__title}>Our projects</h1>
                </Reveal>
                {/* <Ask /> */}
                <Reveal effect="fadeIn">
                    <Join />
                </Reveal>
                <Reveal effect="fadeIn">
                    <Motil />
                </Reveal>
            </div>
        </section>
    )
}

export default Works
