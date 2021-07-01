import styles from './Support.module.scss';
import Reveal from 'react-reveal/Reveal';


const Services = () => {
    return (
        <section className={styles.support}>
            <div className="container">
                <Reveal effect="fadeIn">
                    <h2 className={styles.support__title}>
                        Support you on the journey from idea to product/market fit and profit
                    </h2>
                </Reveal>
                <div className={styles.support__inner}>
                    <Reveal effect="fadeIn">
                        <div className={styles.support__scroll}>
                            <ul className={styles.support__line}>
                                <li>
                                    <h5>SaaS idea</h5>
                                </li>
                                <li>
                                    <h5>MVP</h5>
                                </li>
                                <li>
                                    <h5>Payng users</h5>
                                </li>
                                <li>
                                    <p>Thriving Saas business</p>
                                </li>
                            </ul>
                            <ul className={styles.support__list}>
                                <li>Product Blueprint</li>
                                <li>MVP Development</li>
                                <li>Product Itteration</li>
                            </ul>
                        </div>
                    </Reveal>

                    <div className={styles.support__blockquote}>
                        <Reveal effect="fadeIn">
                            <h3>We now have a live product, something that we can take to the market to grow the client's business!</h3>
                            <p>David W. Riggs, CEO of Pneuma Media, Chicago</p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
