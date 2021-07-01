import React, { FC } from 'react';
import styles from './Textarea.module.scss';
import { FieldError } from 'react-hook-form';

interface Input {
    title?: string;
    type?: string;
    inputSign?: string;
    placeholder?: string;
    register?: any;
    name?: string;
    error?: FieldError | undefined;
    theme?: 'dark';
    onChange?: () => void;
    icon?: string;
    className?: string;
    rows?: number;
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
    if (props.theme === 'dark') inputClasses.push(styles.input_dark);

    //Custom class adding
    inputClasses.push(props.className);

    return (
        <div className={inputClasses.join(' ')}>
            {label}
            <div className={styles.input__container}>
                {sign}
                {icon}
                <textarea name={props.name} id={id} rows={props.rows} ref={props.register} placeholder={placeholder} onChange={props.onChange}>

                </textarea>
            </div>
            {error}
        </div>
    );
}

export default Input;