import React, { useState } from 'react';
import Footer from '../common/Footer/Footer';
import Header from '../common/Header/Header';
import styles from './MainLandingLayout.module.scss';



const MainLandingLayout = (props) => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    return (
        <div className={styles.main}>
            <Header
                isBurgerMenuOpen={isBurgerMenuOpen}
                setIsBurgerMenuOpen={setIsBurgerMenuOpen}
            />

            <main className={styles.main__body}>
                {props.children}
            </main>
            {props.isMinimal && <Footer theme="minimal" />  || props.notSub && <Footer theme="notSub" /> ||  <Footer  />}
            
        </div>
    )
}

export default MainLandingLayout
