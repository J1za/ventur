import styles from './Goals.module.scss';
import analyticsIcon from '../../../assets/images/icons/goals/analytics.svg';
import connectionIcon from '../../../assets/images/icons/goals/connection.svg';
import folderIcon from '../../../assets/images/icons/goals/folder.svg';
import targetIcon from '../../../assets/images/icons/goals/target.svg';
import emergencyIcon from '../../../assets/images/icons/goals/emergency.svg';
import scheduleIcon from '../../../assets/images/icons/goals/schedule.svg';
import timeMoneyIcon from '../../../assets/images/icons/goals/time-is-money.svg';
import timelineIcon from '../../../assets/images/icons/goals/timeline.svg';
import Reveal from 'react-reveal/Reveal';

const Goals = () => {
    return (
        <section className={styles.goals}>
            <div className="container">
                <Reveal effect="fadeIn">
                    <h2 className={styles.goals__title}>
                        SaaS blueprint goals
                    </h2>
                </Reveal>
                <div className={styles.goals__inner}>
                <Reveal effect="fadeIn">
                        <div className={styles.goals__list}>
                            <div className={styles.goals__list_big}>
                                <div className={styles.goals__list_big_box}>
                                    <div className={styles.goals__list_big_icon}>
                                        <img src={analyticsIcon} alt="" />
                                    </div>
                                    <h2>Design product aligned
                                        with business goals</h2>
                                </div>
                            </div>
                            <div className={styles.goals__list_min}>
                                <div className={styles.goals__list_box}>
                                    <div className={styles.goals__list_icon}>
                                        <img src={targetIcon} alt="" />
                                    </div>
                                    <h5>Design product that solves user's problem</h5>
                                </div>
                                <div className={styles.goals__list_box}>
                                    <div className={styles.goals__list_icon}>
                                        <img src={folderIcon} alt="" />
                                    </div>
                                    <h5>Design how the product gonna work</h5>
                                </div>
                                <div className={styles.goals__list_box}>
                                    <div className={styles.goals__list_icon}>
                                        <img src={connectionIcon} alt="" />
                                    </div>
                                    <h5>Check technical feasibility</h5>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal effect="fadeIn">
                        <div className={styles.goals__list}>
                            <div className={styles.goals__list_big}>
                                <div className={styles.goals__list_big_box}>
                                    <div className={styles.goals__list_big_icon}>
                                        <img src={emergencyIcon} alt="" />
                                    </div>
                                    <h2>Mitigate business
                                        & product risks</h2>
                                </div>
                            </div>
                            <div className={styles.goals__list_min}>
                                <div className={styles.goals__list_box}>
                                    <div className={styles.goals__list_icon}>
                                        <img src={timeMoneyIcon} alt="" />
                                    </div>
                                    <h5>Prevent running over budget</h5>
                                </div>
                                <div className={styles.goals__list_box}>
                                    <div className={styles.goals__list_icon}>
                                        <img src={timelineIcon} alt="" />
                                    </div>
                                    <h5>Get an accurate timeline estimate</h5>
                                </div>
                                <div className={styles.goals__list_box}>
                                    <div className={styles.goals__list_icon}>
                                        <img src={scheduleIcon} alt="" />
                                    </div>
                                    <h5>Get a fixed price offer to build an MVP</h5>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default Goals
