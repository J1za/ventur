import styles from './Quote.module.scss';
import faceIcon from '../../../assets/images/MaskFace.svg';
import Reveal from 'react-reveal/Reveal';


const Quote = () => {
    return (
        <section className={styles.quote}>
            <Reveal effect="fadeIn">
                <div className="container">
                    <div className={styles.quote__icon}>
                        <img src={faceIcon} alt="" />
                    </div>
                    <h2 className={styles.quote__title}>
                        IF YOU FAIL TO PLAN, YOU ARE PLANNING TO FAIL
                    </h2>
                    <h5 className={styles.quote__fname}>
                        Benjamin Franklin
                    </h5>
                </div>
            </Reveal>
        </section>
    )
}

export default Quote
