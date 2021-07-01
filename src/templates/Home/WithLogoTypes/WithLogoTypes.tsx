import React from 'react';
import styles from './WithLogoTypes.module.scss';
import joinPrivacyLogo from '@/assets/images/logos/joinPrivacyLogo.svg';
import PneumaMediaLogo from '@/assets/images/logos/pneumamedia.svg';
import askPc from '@/assets/images/logos/askPc.svg';
import motilPc from '@/assets/images/logos/motilPc.svg';
import Fade from 'react-reveal/Fade';
const WithLogoTypes = () => {
    return (
        <section className={styles.logo}>
            <div className='container'>
            <Fade bottom cascade delay={700} duration={1000}>
                <ul className={styles.logo__list}>
                    <li className={styles.logo__item}>
                        <img
                            className={styles.logo__img}
                            src={joinPrivacyLogo}
                            alt="Ventur built SaaS Web App for JustAskme"
                        />
                    </li>
                    <li className={styles.logo__item}>
                        <img
                            className={styles.logo__img}
                            src={motilPc}
                            alt="Ventur built SaaS Web App for Motil"
                        />
                    </li>


                    <li className={styles.logo__item}>
                        <img
                            className={styles.logo__img}
                            src={askPc}
                            alt="Ventur built SaaS Web App for JoinPrivacy"
                        />
                    </li>
                    <li className={styles.logo__item}>
                        <img
                            className={styles.logo__img}
                            src={PneumaMediaLogo}
                            alt="Ventur built Web App for Penuma media"
                        />
                    </li>
                </ul>
                </Fade>
            </div>
        </section>

    )
}

export default WithLogoTypes
