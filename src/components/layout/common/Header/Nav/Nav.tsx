import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Nav.module.scss';
import Button from '@/components/ui/Button/Button';
import { useWindowWidth } from '@react-hook/window-size';
import Burger from '@/assets/images/Burger.svg';
import CloseBlack from '@/assets/images/closeBlack.svg';
import arrowIcon from '@/assets/images/icons/Arrow-p.svg';
import { IHeader } from '../Header';
import ReactGA from 'react-ga';
import mixpanel from 'mixpanel-browser';

interface INav extends IHeader {

}

const Nav: FC<INav> = ({ isBurgerMenuOpen, setIsBurgerMenuOpen, theme }) => {
    const router = useRouter();
    const windowWidth = useWindowWidth({
        wait: 100
    })


    if (windowWidth > 768 && isBurgerMenuOpen) setIsBurgerMenuOpen(false);

    let burgerIcon = theme === 'white' ? Burger : Burger;
    let contentClasses = [styles.nav__content];

    if (isBurgerMenuOpen) {
        burgerIcon = theme === 'white' ? CloseBlack : CloseBlack;
        contentClasses.push(styles.nav__content_visible)
    }

    // else {
    //     contentClasses.push(styles.nav__content_notVisible);
    // }



    useEffect(() => {
        if (isBurgerMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isBurgerMenuOpen])



    const nav: { label: string, url: string }[] = [
        { label: 'SaaS blueprint', url: '/services' },
        { label: 'Blog', url: '/blog' },
        { label: 'Dispatches', url: '/join' },
    ];

    const navClasses = [styles.nav];
    if (theme === 'white') navClasses.push(styles.nav_white);

    const [showButton, setShowButton] = useState(false);


    const EventsHeader = () => {
        router.push('/contact');
        ReactGA.event({
            category: "Lead",
            action: "ContactUsClick",
            label: "header"
        });
        mixpanel.track('ContactUsClick', {
            place: 'header',
        });
    }


    return (
        <div className={navClasses.join(' ')}>
            <div
                className={styles.nav__burger}
                onClick={() => setIsBurgerMenuOpen((prev) => !prev)}
            >
                <img
                    src={burgerIcon}
                    alt="mobile menu icon"
                />
            </div>

            <div className={contentClasses.join(" ")}>
                <div className={styles.nav__contentContainer}>
                    <ul className={styles.nav__list}>
                        {nav.map((navItem, idx) => {
                            const navClasses = [styles.nav__item];
                            if (router.pathname === navItem.url) navClasses.push(styles.nav__item_active);

                            return (
                                <li className={navClasses.join(" ")} key={idx}>
                                    <Link href={navItem.url}>{navItem.label}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className={styles.nav__cta}>
                        <Button icon={arrowIcon} theme={'grey'} width={206} onClick={EventsHeader}>Contact us</Button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Nav
