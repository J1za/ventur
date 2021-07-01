import React from 'react';
import { RichText } from 'prismic-reactjs'
import styles from './PostBody.module.scss';
import { htmlSerializer } from './htmlSerializer';
import Author from '../../../../components/ui/AuthorPost/Author';
import authorIcon from '../../../../assets/images/icons/author-grey.svg';
import twitterIcon from '../../../../assets/images/icons/jam_twitter-square.svg';
import instagramIcon from '../../../../assets/images/icons/ion_logo-instagram.svg';
import facebookIcon from '../../../../assets/images/icons/la_facebook-square.svg';
import Fade from 'react-reveal/Fade';


const PostBody = ({ content }) => {
    // console.log('Body Content:', content);
    return (
        <div className={styles.postBody}>
            <div className="container-md">

                <div className={styles.postBody__inner}>
                    {content ? <RichText render={content} htmlSerializer={htmlSerializer} /> : null}
                </div>

                <div className={styles.postBody__link}>
                    <Fade delay={400}>
                        <Author color="black" icon={authorIcon} />
                        <div className={styles.postBody__followUs}>
                            <p>Follow us:</p>
                            <a href="#">
                                <img src={twitterIcon} alt="" />
                            </a>
                            <a href="#">
                                <img src={instagramIcon} alt="" />
                            </a>
                            <a href="#">
                                <img src={facebookIcon} alt="" />
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default PostBody;