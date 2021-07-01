import React from 'react';
import styles from './Ask.module.scss';

import img1 from '@/assets/images/work/justaskme/img1.png';
import img2 from '@/assets/images/work/justaskme/img2.png';
import img3 from '@/assets/images/work/justaskme/img3.png';
import img4 from '@/assets/images/work/justaskme/img4.png';

import imgMobile from '@/assets/images/worksBanner/mob1.jpg';

import Button from '@/components/ui/Button/Button';
import blockquoteBlue from '@/assets/images/blockquote/blue.svg';
import Slider from '@/components/ui/Slider/Slider';



const images = [
    { id: 1, item: img1 },
    { id: 2, item: img2 },
    { id: 3, item: img3 },
    { id: 4, item: img4 },
]


const Ask = () => {


    return (
        <div className={styles.ask}>
            <div className={styles.ask__container}>
                <h3 className={styles.ask__name}>JustAskme</h3>
                <h4 className={styles.ask__title}>New way to monetize your social media without selling ads</h4>
                <p className={styles.ask__subTitle}>We helped plan & launch MVP of social media monetization platform for New York based SaaS startup</p>
            </div>
            <div className={styles.ask__slider}>
                <Slider color='blue' arrayOfImages={images} />
            </div>
            <div className={styles.ask__mobilePreview}>
                <img
                    src={imgMobile}
                    className={styles.ask__mobImg}
                    alt="screenshot from project justaskme"
                />
            </div>

            <h5 className={styles.ask__badgeName}> We provided </h5>
            <ul className={styles.ask__badgeList}>
                <li className={styles.ask__badgeItem}>
                    <h6 className={styles.ask__badgeTitle}>SaaS Product Architecture</h6>
                </li>
                <li className={styles.ask__badgeItem}>
                    <h6 className={styles.ask__badgeTitle}>MVP Development</h6>
                </li>
                <li className={styles.ask__badgeItem}>
                    <h6 className={styles.ask__badgeTitle}>Web App Development</h6>
                </li>
                <li className={styles.ask__badgeItem}>
                    <h6 className={styles.ask__badgeTitle}>Product Iteration</h6>
                </li>
            </ul>
            {/* <Button
                theme="underlinedBlue"
            >Read case study</Button> */}
            <div className={styles.ask__blockquote}>
                <p className={styles.ask__blockquote_text}>
                    <img src={blockquoteBlue} alt="icon of blockquote" />
                    <span>We just gave them an idea, and they brought it to life</span>
                </p>
                <p className={styles.ask__blockquote_subText}>CEO of JustAskme, New York</p>
            </div>

        </div >
    )
}

export default Ask
