import styles from './Pricing.module.scss';
import Button from '../../../components/ui/Button/Button';
import arrowIcon from '@/assets/images/icons/Arrow-p.svg';
import PricingCard from './PricingCard/PricingCard';
import FrameIcon from '../../../assets/images/icons/PriceCard/Frame1.svg';
import FrameIcon2 from '../../../assets/images/icons/PriceCard/Frame2.svg';
import FrameIcon3 from '../../../assets/images/icons/PriceCard/Frame3.svg';
import ReactGA from 'react-ga';
import mixpanel from 'mixpanel-browser';
import Reveal from 'react-reveal/Reveal';

const Pricing = () => {
    const EventChatUs = () => {
        ReactGA.event({
            category: "Lead",
            action: "ContactUsClick",
            label: "pricing_custom",
        });
        mixpanel.track('ContactUsClick', {
            place: 'pricing_custom',
        });
    }
    return (
        <section className={styles.pricing}>
            <div className="container">
                <Reveal effect="fadeIn">
                    <h1 className={styles.pricing__title}> Our pricing </h1>
                </Reveal>
                <Reveal effect="fadeIn">
                    <div className={styles.pricing__inner}>
                        <PricingCard btnMoneyBack={true} price='$ 999' weeks="1 week" icon={FrameIcon}>
                            <h5>First stage</h5>
                            <h2>Strategy</h2>
                            <p>- Product Vision Documentaion</p>
                            <p>- User Personas</p>
                            <p>- Stakeholder Interview & analysis</p>
                            <p>- Competitors & Secondary Reserach</p>
                            <p>- User Interviews (If potential users availible)</p>
                            <p>- Got To Market Strategy</p>
                        </PricingCard>

                        <PricingCard price='$ 9 999' weeks="5 weeks" icon={FrameIcon2}>
                            <h5>Second stage</h5>
                            <h2>Solution
                                + Planing</h2>
                            <p>- User flows & Wireframes</p>
                            <p>- Technical Architecture Documentaion</p>
                            <p>- Exact roadmap (timeline)</p>
                            <p>- Fixed price offer</p>
                            <p>- Product Development Specification</p>
                        </PricingCard>
                        <PricingCard price='$ 999' weeks="2 weeks" icon={FrameIcon3}>
                            <h5>Optional add-on</h5>
                            <h2>Solution validation</h2>
                            <p>- Interactive Prototype</p>
                            <p>- 2 Rounds of Usability Testing</p>
                            <p>- 2 Product Wrieframes Itterations</p>
                        </PricingCard>
                    </div>
                </Reveal>
                <Reveal effect="fadeIn">
                    <div className={styles.pricing_banner}>
                        <h2>
                            Need something <strong>Different?</strong>
                        </h2>
                        <h5>We love unusual startup ideas. Let's find
                            a custom tailored solution for your start up</h5>
                        <Button
                            theme={'blue'}
                            width={260}
                            icon={arrowIcon}
                            onClick={EventChatUs}
                        >
                            Chat with us
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Pricing
