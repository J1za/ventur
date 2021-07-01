import { useState, useEffect } from 'react';
import styles from './DevItem.module.scss';
import eyeIcon from '@/assets/images/icons/mvpDevelopment/eye.svg';
import analyticsIcon from '@/assets/images/icons/mvpDevelopment/analytics.svg';
import workflowIcon from '@/assets/images/icons/mvpDevelopment/workflow.svg';
import taskListIcon from '@/assets/images/icons/mvpDevelopment/task-list.svg';

const DevItem = (props) => {

    const [active, setActive] = useState(false);
    const openQuestions = () => setActive(!active);




    return (
        <div className={styles.item}>
            {props.children}
            {props.deliverables &&
                <>
                    <div className={styles.item__subtitle}>
                        Deliverables:
                    </div>
                    <div className={styles.item__result}>
                        {
                            props.deliverables && props.deliverables.map((item, index) =>
                                <div className={styles.item__result_box}>
                                    {item.number &&
                                        <div
                                            data-tip
                                            data-for={`n${index + 1}`}
                                            className={styles.item__result_number}>
                                            {item.number}
                                        </div>
                                    }
                                    <div className={styles.item__result_icon}>
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <div className={styles.item__result_title}>
                                        {item.title}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </>
            }
            {props.questions &&
                <div className={styles.item_questions}>
                    <div className={styles.item_questions__title}>
                        <p>Questions answered</p>
                        <div onClick={openQuestions} className={active ? styles.item_questions__show_active : styles.item_questions__show}>
                            {active ? 'Hide' : 'Show'}
                        </div>
                    </div>
                    {active &&
                        <div className={styles.item_questions__item}>
                            {props.questions}
                        </div>
                    }
                </div>
            }

        </div>

    )
}

export default DevItem
