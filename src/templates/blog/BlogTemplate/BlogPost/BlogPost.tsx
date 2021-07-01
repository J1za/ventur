import styles from './BlogPost.module.scss';
import Link from 'next/link'

const BlogPost = (props) => {
    return (
        <Link href={`/blog/${props.post.uid}`}>
            <a className={styles.blog_post__box}>
                <div className={styles.blog_post__img}>
                    <img src={props.post.data.cover.url} alt="" />
                </div>
                <h3 className={styles.blog_post__title}>
                    {props.post.data.post_header[0].text}
                </h3>
                <h5 className={styles.blog_post__text}>
                    {props.post.data.sub_header[0].text}
                </h5>
                <div className={styles.blog_post__data}>
                    <p>1 min. reading</p>
                    <p>May 29, 20201</p>
                </div>
            </a>
        </Link>
    );
};





export default BlogPost


