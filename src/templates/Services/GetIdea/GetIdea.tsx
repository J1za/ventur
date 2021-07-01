import styles from './GetIdea.module.scss';
import researchIcon from '../../../assets/images/icons/list/research.svg';
import teamIcon from '../../../assets/images/icons/list/team-m.svg';
import scketchIcon from '../../../assets/images/icons/list/sketch.svg';
import Reveal from 'react-reveal/Reveal';

const GetIdea = () => {
    return (
        <section className={styles.gidea}>
            <div className="container">
                <div className={styles.gidea__inner}>
                    <Reveal effect="fadeIn">
                        <h1>
                            Get from idea <br />
                            to  <span>MVP prototype</span>
                        </h1>
                        <h4>The goal of the service is to get from abstract vision to concrete product prototypes. We help you figure out what to build, how to build it, and how much it is going to cost.
                        </h4>
                        <h4>We check whether the product concept is viable and design how it is gonna work.
                        </h4>
                        <h4>You get a blueprint for a SaaS Product that solves user problems, aligned with your business objectives, strategy, and budget.</h4>
                    </Reveal>
                </div>
                <Reveal effect="fadeIn">
                    <ul className={styles.gidea__list}>
                        <li>
                            <div className={styles.gidea__list_icon}>
                                <img src={researchIcon} alt="" />
                            </div>
                            <h5>Research & Discovery</h5>
                        </li>
                        <li>
                            <div className={styles.gidea__list_icon}>
                                <img src={teamIcon} alt="" />
                            </div>
                            <h5>Product management</h5>
                        </li>
                        <li>
                            <div className={styles.gidea__list_icon}>
                                <img src={scketchIcon} alt="" />
                            </div>
                            <h5>UI/UX Design</h5>
                        </li>
                    </ul>
                </Reveal>
            </div>
        </section>
    )
}

export default GetIdea
