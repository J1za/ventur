import styles from './Development.module.scss';
import DevItem from './DevItem/DevItem';
import Tooltip from 'react-tooltip';
import eyeIcon from '@/assets/images/icons/mvpDevelopment/eye.svg';
import analyticsIcon from '@/assets/images/icons/mvpDevelopment/analytics.svg';
import workflowIcon from '@/assets/images/icons/mvpDevelopment/workflow.svg';
import taskListIcon from '@/assets/images/icons/mvpDevelopment/task-list.svg';
import nounUserIcon from '@/assets/images/icons/mvpDevelopment/noun_user.svg';
import wireframeIcon from '@/assets/images/icons/mvpDevelopment/wireframe.svg';
import prototypeIcon from '@/assets/images/icons/mvpDevelopment/prototype.svg';
import strategyIcon from '@/assets/images/icons/mvpDevelopment/strategy.svg';
import roadmapIcon from '@/assets/images/icons/mvpDevelopment/roadmap.svg';
import discountIcon from '@/assets/images/icons/mvpDevelopment/discount.svg';
import developerIcon from '@/assets/images/icons/mvpDevelopment/developer.svg';
import Reveal from 'react-reveal/Reveal';


const Development = () => {
    const questionsDoc = (
        <>
            <p>- Who is our target audience? </p>
            <p>- What is the problem we are trying to solve?</p>
            <p>- What is the product about? </p>
            <p>- Where do we stand compared to the competition? </p>
            <p>- What are the business goals we are trying to reach? </p>
            <p>- How we are going to get the first users?</p>
            <p>- What opportunities product has on the market?</p>
        </>
    )
    const questionsDoc2 = (
        <>
            <p>- How are we going to solve a problem? </p>
            <p>- How is the app gonna work?</p>
            <p>- What features product gonna have?</p>
            <p>- What features product gonna have?</p>
            <p>- Is it technically feasible?</p>
            <p>- What technologies are we going to use to build it?</p>
            <p>- Does the product design in the right way?</p>
        </>
    )
    const questionsDoc3 = (
        <>
            <p>- How much does it cost to build?</p>
            <p>- How much time is it going to take?</p>
            <p>- In what order are we going to build it?</p>
            <p>- How to explain the development team what to build?</p>
        </>
    )
    const DelivDoc = [
        { icon: eyeIcon, title: 'Product vision', number: '+4' },
        { icon: analyticsIcon, title: 'Research', number: '+4' },
        { icon: workflowIcon, title: 'Go to market strategy' },
        { icon: taskListIcon, title: 'Business requirements' },
    ]
    const DelivSulution = [
        { icon: nounUserIcon, title: 'Breadboarding / User flows' },
        { icon: wireframeIcon, title: 'Wireframes of the app' },
        { icon: prototypeIcon, title: 'Interactive Prototype' },
        { icon: strategyIcon, title: 'Technical architecture' },
    ]
    const DelivPlanning = [
        { icon: roadmapIcon, title: 'Roadmap (timeline)' },
        { icon: discountIcon, title: 'Fixed-price offer for MVP' },
        { icon: developerIcon, title: 'Development Specification' },
    ]



    return (

        <section className={styles.development}>
            <Tooltip id="n1" className="tooltip wauto" place="bottom">
                <p>- Target Audience</p>
                <p>- Problem Definition</p>
                <p>- Solution Definition</p>
                <p>- User Personalsn</p>
            </Tooltip>
            <Tooltip id="n2" className="tooltip wauto" place="bottom">
                <p>- Competitors Analysis</p>
                <p>- Secondary Research</p>
                <p>- Stakeholder Interview Analysis</p>
                <p>(Optional) User Interview Analysis</p>
            </Tooltip>
            <div className="container">
                <Reveal effect="fadeIn">
                    <h1>You get all assets for starting <span>MVP Development</span>
                    </h1>
                </Reveal>
                <Reveal effect="fadeIn">
                    <div className={styles.development__inner}>
                        <DevItem questions={questionsDoc} deliverables={DelivDoc}>
                            <h2>Product Documentaion</h2>
                            <p>A north start to keep product development aligned with what problem you solve, for whom, and how</p>
                        </DevItem>
                        <DevItem questions={questionsDoc2} deliverables={DelivSulution}>
                            <h2>Product
                                solution</h2>
                            <p>The goal is to define how the product solves user problems and create an exact model of how the product gonna work</p>
                        </DevItem>
                        <DevItem questions={questionsDoc3} deliverables={DelivPlanning}>
                            <h2>Product planning</h2>
                            <p>Gives you information about time, cost and timeline for getting product live so you could make an informed decion</p>
                        </DevItem>

                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Development
