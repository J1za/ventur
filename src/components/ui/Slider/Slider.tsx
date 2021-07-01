import React, { useState } from 'react';
import styles from './Slider.module.scss';
import LazyLoad from 'react-lazyload';

interface ISlider {
    arrayOfImages: {
        id: number;
        item: string;
    }[]

    color: 'blue' | 'yellow' | 'coral'
}


const Slider = ({ arrayOfImages, color }: ISlider) => {

    const [activeSlide, setActiveSlide] = useState(0);

    const numberOfSlides = arrayOfImages.length;
    const previous = () => {
        if (activeSlide !== 0) {
            setActiveSlide(index => index - 1);
        } else {
            setActiveSlide(numberOfSlides - 1)
        }
    }
    const next = () => {
        if (activeSlide !== numberOfSlides - 1) {
            setActiveSlide(index => index + 1);
        } else {
            setActiveSlide(0)
        }
    }
    return (
        <div
            style={{ position: 'relative' }}
        >
            <ul
                className={styles.slider}
            >
                {arrayOfImages.map((img, idx) => {
                    return (
                        <LazyLoad offset={100} key={img.id}>
                            <li
                                className={idx === activeSlide ? [styles.slider__item, styles.slider__item_active].join(' ') : styles.slider__item}
                            >

                                <img className={styles.slider__img} src={img.item} alt="Slider" />

                            </li>
                        </LazyLoad>
                    )
                })}
            </ul>
            <div className={styles.slider__dots}>
                <button className={styles.slider__prev} onClick={previous}>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989592 0.403806 0.696699 0.6967C0.403805 0.989593 0.403805 1.46447 0.696699 1.75736L4.93934 6L0.6967 10.2426C0.403806 10.5355 0.403806 11.0104 0.6967 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75L6 6.75L6 5.25L5 5.25L5 6.75Z" />
                    </svg>
                </button>
                <ul
                    className={styles.slider__dots_list}
                >
                    {arrayOfImages.map((img, idx) => {
                        return (
                            <li
                                className={idx == activeSlide && styles.slider__dot_active}
                                key={img.id}
                                onClick={() => setActiveSlide(idx)}
                            >

                            </li>

                        )
                    })}
                </ul>
                <button className={styles.slider__next} onClick={next}>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989592 0.403806 0.696699 0.6967C0.403805 0.989593 0.403805 1.46447 0.696699 1.75736L4.93934 6L0.6967 10.2426C0.403806 10.5355 0.403806 11.0104 0.6967 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75L6 6.75L6 5.25L5 5.25L5 6.75Z" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default Slider
