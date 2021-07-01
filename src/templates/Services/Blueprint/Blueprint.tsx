import styles from './Blueprint.module.scss';
import visionIcon from '../../../assets/images/icons/blueprint/vision.svg';
import questionIcon from '../../../assets/images/icons/blueprint/question.svg';
import planningIcon from '../../../assets/images/icons/blueprint/planning.svg';
import budgetingIcon from '../../../assets/images/icons/blueprint/budgeting.svg';
import Reveal from 'react-reveal/Reveal';

const Blueprint = () => {
    return (
        <section className={styles.blueprint}>
            <div className="container">
                <Reveal effect="fadeIn">
                    <h1 className={styles.blueprint__title}>
                        Avoid product building traps with the blueprint
                    </h1>
                </Reveal>
                <Reveal effect="fadeIn">
                    <div className={styles.blueprint__inner}>
                        <div className={styles.blueprint__item}>
                            <div className={styles.blueprint__item_icon}>
                                <img src={budgetingIcon} alt="" />
                            </div>
                            <h5 className={styles.blueprint__item_title}>
                                Product running over budget
                            </h5>
                            <div className={styles.blueprint__item_text}>
                                <p>To build the project on budget we start from the end. For us budget is what sets boundaries for solution design rather than something that you estimate after the solution is ready</p>
                            </div>

                        </div>
                        <div className={styles.blueprint__item}>
                            <div className={styles.blueprint__item_icon}>
                                <img src={questionIcon} alt="" />
                            </div>
                            <h5 className={styles.blueprint__item_title}>
                                Product not solving user problem
                            </h5>
                            <div className={styles.blueprint__item_text}>
                                <p>Through research and problem first approach we find a "why" behind a product. And with "why" in mind build the product that is valuable for the user</p>
                            </div>

                        </div>
                        <div className={styles.blueprint__item}>
                            <div className={styles.blueprint__item_icon}>
                                <img src={visionIcon} alt="" />
                            </div>
                            <h5 className={styles.blueprint__item_title}>
                                Product doesn't meet product vision
                            </h5>
                            <div className={styles.blueprint__item_text}>
                                <p>With a blueprint, you get an accurate model of how your product gonna work before you commit to the development of it</p>
                            </div>

                        </div>
                        <div className={styles.blueprint__item}>
                            <div className={styles.blueprint__item_icon}>
                                <img src={planningIcon} alt="" />
                            </div>
                            <h5 className={styles.blueprint__item_title}>
                                Product development not aligned with strategy
                            </h5>
                            <div className={styles.blueprint__item_text}>
                                <p>Before the design of the solution, we do research and a series of interviews with you to clearly define a strategy. Then this strategy serves as a north star in the design</p>
                            </div>

                        </div>

                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Blueprint
