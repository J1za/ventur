import React from 'react';
import styles from './Motil.module.scss';

import Button from '@/components/ui/Button/Button';
import Slider from '@/components/ui/Slider/Slider';

import img1 from '@/assets/images/work/motil/img1.png';
import img2 from '@/assets/images/work/motil/img2.png';
import img3 from '@/assets/images/work/motil/img3.png';
import img4 from '@/assets/images/work/motil/img4.png';

import imgMobile from '@/assets/images/worksBanner/motilMobile.webp';
import Reveal from 'react-reveal/Reveal';



const images = [
    { id: 1, item: img1 },
    { id: 2, item: img2 },
    { id: 3, item: img3 },
    { id: 4, item: img4 },
]



const Motil = () => {
    return (
        <div className={styles.motil}>
            <div className={styles.motil__inner}>
                <div className={styles.motil__container}>
                    <h3 className={styles.motil__name}>Motil</h3>
                    <h2 className={styles.motil__title}>Uber for home services</h2>
                    <p className={styles.motil__subTitle}>We planned, architected and developed MVP of on-demand services platform for Miami based start up</p>
                </div>
                <div className={styles.motil__slider}>
                    <Slider color='yellow' arrayOfImages={images} />
                </div>
                <div className={styles.motil__mobilePreview}>
                    <img
                        src={imgMobile}
                        className={styles.motil__mobImg}
                        alt="screenshot from project justaskme"
                    />
                </div>

                <ul className={styles.motil__badgeList}>
                    <li className={styles.motil__badgeItem}>
                        <h6 className={styles.motil__badgeTitle}>SaaS Product Architecture</h6>
                    </li>
                    <li className={styles.motil__badgeItem}>
                        <h6 className={styles.motil__badgeTitle}>MVP Development</h6>
                    </li>
                    <li className={styles.motil__badgeItem}>
                        <h6 className={styles.motil__badgeTitle}>Web App Development</h6>
                    </li>
                    <li className={styles.motil__badgeItem}>
                        <h6 className={styles.motil__badgeTitle}>Product Iteration</h6>
                    </li>
                    <li className={styles.motil__badgeItem}>
                        <h6 className={styles.motil__badgeTitle}>UI/UX Design</h6>
                    </li>
                </ul>
            </div>
            {/* <Button
                theme="underlinedYellow"
            >Read case study</Button> */}
            <div className={styles.motil__blockquote}>
                <Reveal effect="fadeIn">
                    <h3 className={styles.motil__blockquote_text}>
                        Ventur helped us set clear objectives for our development and met them in a timely manner. We were happy to have them work on a project for us and would use them again for future development projects
                    </h3>
                    <p className={styles.motil__blockquote_subText}>Mark Scalice, CEO of Motil, Miami</p>
                </Reveal>
            </div>
        </div >
    )
}

export default Motil
