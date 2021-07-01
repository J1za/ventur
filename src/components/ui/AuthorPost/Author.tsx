import React, { FC } from 'react';
import styles from './Author.module.scss';

interface AuthorProps {
    color: 'black';
    icon?: string;
}

const Author: FC<AuthorProps> = (props) => {
    const authorClasses = [styles.author];
    if (props.color === 'black') authorClasses.push(styles.author_black);
    if (props.color === 'black') authorClasses.push(styles.author_black);
    return (
        <div className={authorClasses.join(' ')}>
               <div className={styles.author__icon}>
               <img src={props.icon} alt="" />
               </div>
            
            <a href="/">Ivan Yakovlev</a>
        </div>
    );
};

export default Author;