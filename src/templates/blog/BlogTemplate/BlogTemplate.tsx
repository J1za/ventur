import { getAllPosts } from '../../../utils/prismic'
import styles from './BlogTemplate.module.scss';
import BlogPost from './BlogPost/BlogPost';
import BlogPostLoader from './BlogPost/BlogPostLoader/BlogPostLoader';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';


const BlogTemplate = () => {
    const [posts, setPosts] = useState(null);
    const [isLoad, setLoad] = useState(false);
    useEffect(() => {
        getAllPosts().then((posts) => {
            setPosts(posts.results);
            setLoad(true)
        })
    }, [])

    return (

        <section className={styles.blog}>
            <div className="container">
                <Fade delay={400}>
                    <h1 className={styles.blog__title}>Our blog</h1>
                    <h4 className={styles.blog__subtitle}>We research, plan & design v1 of your SaaS Product to make
                        it ready for the development and launch</h4>
                </Fade>
                <div className={styles.blog__inner}>
                    {isLoad ?
                        posts.map(item => (<BlogPost post={item} />))
                        : Array(4).fill(0).map((_, index) => <BlogPostLoader key={index} />)
                    }
                </div>
            </div>
        </section>

    );
};





export default BlogTemplate


