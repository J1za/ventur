import styles from './Process.module.scss';
import shieldIcon from '@/assets/images/icons/noun_Shield_368388.svg';
import infoIcon from '@/assets/images/icons/info-g.svg';
import infopIcon from '@/assets/images/icons/info-p.svg';
import Tooltip from 'react-tooltip';
import Reveal from 'react-reveal/Reveal';

const Process = () => {
    return (
        <section className={styles.process}>
            <div className="container">
                <Reveal effect="fadeIn">
                    <h1>The process to turn an idea into a concrete solution</h1>
                </Reveal>
                <Reveal effect="fadeIn">
                    <div className={styles.process__inner}>
                        <div className={styles.process__stage}>
                            <div className={styles.process__stage_info}>
                                <h5>1st stage</h5>
                                <div className={styles.process__stage_img}>
                                    <Tooltip id="stage1" className="tooltip" place="bottom" effect="solid">
                                        <p>
                                            Satisfaction Guarantee. If you don't find valuble results of the 1st stage, we'll refund you 100% of the price.
                                        </p>
                                    </Tooltip>
                                    <img
                                        data-tip
                                        data-for="stage1"
                                        src={shieldIcon}
                                        alt=""
                                    />
                                    <div className={styles.process__stage_img_info}>
                                        <img
                                            src={infoIcon}
                                            alt=""
                                        />
                                        <p>Info</p>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.process_list}>
                                <div className={styles.process_list__item}>
                                    <div className={styles.process_list__title}>
                                        Strategy
                                    </div>
                                    <div className={styles.process_list__box}>
                                        <li>Discovery</li>
                                        <li>Research</li>
                                        <li>Planning</li>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={`${styles.process__stage} ${styles.process__stage_two}`}>
                            <div className={styles.process__stage_info}>
                                <h5>2nd stage</h5>
                                <div className={styles.process__stage_img}>
                                    <Tooltip id="stage2" className="tooltip w420" place="bottom" effect="solid">
                                        <p>
                                            - After your SaaS MVP Bluepirint is ready we can help you with development of it.
                                        </p>
                                        <p>
                                            - If you want to build it yourself we are you free to do it, no strings attached.
                                        </p>
                                    </Tooltip>
                                    <div className={`${styles.process__stage_img_info} ${styles.process__stage_img_info_two}`}>
                                        <img
                                            data-tip
                                            data-for="stage2"
                                            src={infopIcon}
                                            alt=""
                                        />
                                        <p>Info</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.process_list}>
                                <div className={styles.process_list__item}>
                                    <div className={styles.process_list__title}>
                                        Solution
                                    </div>
                                    <div className={styles.process_list__box}>
                                        <li>User flows</li>
                                        <li>Technical Architecture</li>
                                        <li>Wireframing</li>
                                    </div>
                                </div>
                                <div className={styles.process_list__item}>
                                    <div className={styles.process_list__title}>
                                        Testing (optional)
                                    </div>
                                    <div className={styles.process_list__box}>
                                        <li>Interactive prototype</li>
                                        <li>2 x User testing round</li>
                                    </div>
                                </div>
                                <div className={styles.process_list__item}>
                                    <div className={styles.process_list__title}>
                                        Planning
                                    </div>
                                    <div className={styles.process_list__box}>
                                        <li>Backlog creation</li>
                                        <li>Roadmap creation</li>
                                        <li>Time & cost estimation</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Process
