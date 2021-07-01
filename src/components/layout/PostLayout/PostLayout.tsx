import React, { useState } from 'react';
import Footer from '../common/Footer/Footer';
import Header from '../common/Header/Header';
import styles from './PostLayout.module.scss';
import SubscribeForm from '../../../components/SubscribeForm/SubscribeForm';



const PostLayout = (props) => {
    
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
            <SubscribeForm BlueForm text="Subscribe to us to keep abreast of all interesting events" />
            <Footer />
        </div>
    )
}

export default PostLayout
