import React from 'react';
import styles from './PostHeader.module.scss';
import Author from '../../../../components/ui/AuthorPost/Author';
import authorIcon from '../../../../assets/images/icons/author.svg';
import Fade from 'react-reveal/Fade';

const PostHeader = (props) => {

    return (
        <>
            <div className={styles.postHeader}>

                <div className="container-md">
                    {/* <h2 className={styles.postHeader__category}>
                        OUTREACH & CONTENT PROMOTION
                    </h2> */}
                    <Fade delay={200}>
                        <Author icon={authorIcon} />
                    </Fade>
                    <Fade delay={400}>
                        <h1 className={styles.postHeader__title}>{props.title}</h1>
                    </Fade>
                    <Fade delay={600}>
                        <div className={styles.postHeader__data}>
                            <p>1 min. reading</p>
                            <p>March 20, 2021</p>
                        </div>
                    </Fade>

                </div>

            </div>
            <div className="container-md">
                <Fade delay={700}>
                    <div className={styles.preview}>
                        <img src={props.cover} alt={props.title} />
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default PostHeader;