import React, { FC } from 'react';
import styles from './Input.module.scss';
import { FieldError } from 'react-hook-form';

interface Input {
    title?: string;
    type?: string;
    inputSign?: string;
    placeholder?: string;
    register?: any;
    name?: string;
    error?: FieldError | undefined;
    theme?: 'grey' | 'white' | "";
    onChange?: () => void;
    icon?: string;
    className?: string;
}

const Input: FC<Input> = (props) => {

    const { inputSign, title, placeholder, register, ...restProps } = props;
    const id = 'faltInputtrr-' + Math.random().toString();
    const sign = inputSign ? <div className={styles.input__sign}>{inputSign}</div> : null;

    let icon = null;
    if (props.icon) icon = <div className={styles.input__icon}><img src={props.icon} alt="input icon" /></div>

    let label = null;
    if (props.title) label = <label htmlFor={id}>{props.title}</label>;
    const error = props.error ? <div className={styles.input__error}>{props.error ? props.error.message : null}</div> : null;

    const inputClasses = [styles.input];
    if (props.theme === 'grey') inputClasses.push(styles.input_grey);
    if (props.theme === 'white') inputClasses.push(styles.input_white);

    //Custom class adding
    inputClasses.push(props.className);

    return (
        <div className={inputClasses.join(' ')}>
            {label}
            <div className={styles.input__container}>
                {sign}
                {icon}
                <input name={props.name} type={props.type ? props.type : 'text'} ref={props.register} id={id} placeholder={placeholder} onChange={props.onChange} />
            </div>
            {error}
        </div>
    );
}

export default Input;