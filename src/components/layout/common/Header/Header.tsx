import React, { FC } from 'react';
import styles from './Header.module.scss';
import Nav from './Nav/Nav';
import Logo from '../Logo/Logo';
import Reveal from 'react-reveal/Reveal';

export interface IHeader {
    isBurgerMenuOpen: boolean;
    setIsBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    theme?: 'white' | 'black';
}

const Header: FC<IHeader> = ({ isBurgerMenuOpen, setIsBurgerMenuOpen, theme }) => {

    const headerClasses = [styles.header];
    if (theme === 'white') headerClasses.push(styles.header_white);


    return (
        <Reveal effect="fadeInHeader">
            <header className={headerClasses.join(' ')}>

                <div className="container">

                    <div className={styles.header__wrapper}>
                        <div className={styles.header__logo}>
                            {isBurgerMenuOpen ?
                                <Logo color='white' /> : <Logo />
                            }
                        </div>
                        <nav className={styles.header__nav}>
                            <Nav
                                theme={theme}
                                isBurgerMenuOpen={isBurgerMenuOpen}
                                setIsBurgerMenuOpen={setIsBurgerMenuOpen}
                            />
                        </nav>
                    </div>

                </div>

            </header>
        </Reveal>
    )
}

export default Header