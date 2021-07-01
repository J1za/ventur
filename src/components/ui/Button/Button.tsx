import React, { FC, CSSProperties } from 'react';
import styles from './Button.module.scss';
// import LoadingImg from '../../../assets/img/loading.svg';


interface ButtonProps {
    icon?: string;
    iconHover?: string;
    height?: number;
    width?: string | number;
    centred?: boolean;
    stretch?: boolean;
    onClick?: () => void;
    className?: string;
    bold?: boolean;
    isLoading?: boolean;
    theme?: 'white-stroke' | 'yellow' | 'underlined' | 'black' | 'underlinedBlue' | 'underlinedYellow' | 'underlinedCoral' | 'white' | 'blue' | 'readMore' | 'grey';
}


const Button: FC<ButtonProps> = (props) => {
    const buttonClasses = [styles.button];
    if (props.centred) buttonClasses.push(styles.button_centred);
    if (props.stretch) buttonClasses.push(styles.button_stretch);
    if (props.isLoading) buttonClasses.push(styles.button_loading);
    if (props.theme === 'white-stroke') buttonClasses.push(styles.button_whiteStroke);
    if (props.theme === 'yellow') buttonClasses.push(styles.button_yellow);
    if (props.theme === 'underlined') buttonClasses.push(styles.button_underlined);
    if (props.theme === 'black') buttonClasses.push(styles.button_black);
    if (props.theme === 'underlinedBlue') buttonClasses.push(styles.underlinedBlue);
    if (props.theme === 'underlinedYellow') buttonClasses.push(styles.underlinedYellow);
    if (props.theme === 'underlinedCoral') buttonClasses.push(styles.underlinedCoral);
    if (props.theme === 'white') buttonClasses.push(styles.button_white);
    if (props.theme === 'blue') buttonClasses.push(styles.button_blue);
    if (props.theme === 'readMore') buttonClasses.push(styles.button_readMore);
    if (props.theme === 'grey') buttonClasses.push(styles.button_grey);

    buttonClasses.push(props.className);

    const buttonStyles: CSSProperties = {
        width: props.width,
        height: props.height,
    };

    let icon = props.icon ? <img src={props.icon} alt="Button" className={styles.icon} /> : null;
    // if (props.isLoading) icon = <img src={LoadingImg} alt="Loading" className={styles.icon} />;
    return (
        <button style={buttonStyles} className={buttonClasses.join(' ')} onClick={props.onClick}>

            <span>
                {props.children}
            </span>
            {icon}
            {props.isLoading &&
                <div className={styles.circle__loading}>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            }

        </button>
    );
};

export default Button;