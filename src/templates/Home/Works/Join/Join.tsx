import React from 'react';
import styles from './Join.module.scss';
import Slider from '@/components/ui/Slider/Slider';
import img1 from '@/assets/images/work/joinprivacy/img1.png';
import img2 from '@/assets/images/work/joinprivacy/img2.png';
import img3 from '@/assets/images/work/joinprivacy/img3.png';
import imgMobile from '@/assets/images/worksBanner/JoinPrivacyMob.jpg';
// import blockquote from '@/assets/images/blockquote/coral.svg';
import Reveal from 'react-reveal/Reveal';
const images = [
    { id: 1, item: img1 },
    { id: 2, item: img2 },
    { id: 3, item: img3 },
]


const Join = () => {
    return (
        <div className={styles.join}>
            <div className={styles.join__inner}>

                <div className={styles.join__container}>
                    <h5 className={styles.join__name}>JoinPrivacy</h5>
                    <h2 className={styles.join__title}>Take back control over your digital privacy</h2>
                    <p className={styles.join__subTitle}>We built Proof of Concept for privacy management tool to identify technical limitations and find possible solution </p>
                </div>
                <div className={styles.join__slider} >
                    <Slider color='coral' arrayOfImages={images} />
                </div>
                <div className={styles.join__mobilePreview}>
                    <img
                        src={imgMobile}
                        className={styles.join__mobImg}
                        alt="screenshot from project justaskme"
                    />
                </div>
                <ul className={styles.join__badgeList}>
                    <li className={styles.join__badgeItem}>
                        <h6 className={styles.join__badgeTitle}>SaaS Product Architecture</h6>
                    </li>
                    <li className={styles.join__badgeItem}>
                        <h6 className={styles.join__badgeTitle}>MVP Development</h6>
                    </li>
                    <li className={styles.join__badgeItem}>
                        <h6 className={styles.join__badgeTitle}>Web App Development</h6>
                    </li>
                </ul>
            </div>
            {/* <Button
                theme="underlinedCoral"
            >Read case study</Button> */}

            <div className={styles.join__blockquote}>
                <Reveal effect="fadeIn">
                    <h3 className={styles.join__blockquote_text}>
                        It was great working with Ventur. They did extremely high quality work and went above and beyond on our project. They will take your idea and make it happen. Very professional. Will hire again for sure
                    </h3>
                    <p className={styles.join__blockquote_subText}>CEO of JoinPrivacy, New York</p>
                </Reveal>
            </div>

        </div >
    )
}

export default Join
