import styles from './PricingCard.module.scss';
import React, { FC } from 'react';
import Button from '../../../../components/ui/Button/Button';
import ReactGA from 'react-ga';
import mixpanel from 'mixpanel-browser';

interface PricingCardProps {
    icon?: string;
    weeks?: string;
    price?: string;
    btnMoneyBack?: boolean;
}

const PricingCard: FC<PricingCardProps> = (props) => {
    const EventGetStarted = () => {
        ReactGA.event({
            category: "Lead",
            action: "ContactUsClick",
            label: "pricing",
        });
        mixpanel.track('ContactUsClick', {
            place: 'pricing',
        });
    }
    return (
        <div className={styles.pricingCard}>
            <div className={styles.pricingCard__inner}>
                <div className={styles.pricingCard__icon}>
                    <img src={props.icon} alt="" />
                </div>
                <div className={styles.pricingCard__text}>
                    {props.children}
                </div>
            </div>
            <div className={styles.pricingCard__duration}>
                <div className={styles.pricingCard__duration_inner}>
                    <p>Duration:</p>
                    <h5>{props.weeks}</h5>
                </div>
                <h2>
                    {props.price}
                </h2>
            </div>
            {props.btnMoneyBack &&
                <div className={styles.pricingCard__moneyBack}>
                    <div className={styles.pricingCard__moneyBack_title}>
                        Money back guarantee
                    </div>
                    <Button
                        theme={'blue'}
                        width={`100%`}
                        onClick={EventGetStarted}
                    >
                        Get started
                    </Button>
                </div>
            }

        </div>
    )
}

export default PricingCard
