import { getAllPosts, getPostByUID } from '../../utils/prismic';
import Head from 'next/head';
import PostLayout from '@/components/layout/PostLayout/PostLayout';
import PostTemplate from '../../templates/blog/PostTemplate/PostTemplate';

// import resolver from '../sm-resolver.js'

const BlogPost = ({ post }) => {
    const blogPost = post?.data;
    return (
        <PostLayout>
            <Head>
                <title>{blogPost?.post_header[0].text} | The Ventur</title>
                <meta name="title" content={`${blogPost?.post_header[0].text} | The Ventur`} />
                <meta name="description" content={blogPost?.sub_header[0].text} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://ventur.digital/blog/${post?.uid}`} />
                <meta property="og:title" content={`${blogPost?.post_header[0].text} | The Ventur`} />
                <meta property="og:description" content={blogPost?.sub_header[0].text} />
                <meta property="og:image" content={blogPost?.cover?.cover?.url} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://ventur.digital/blog/${post?.uid}`} />
                <meta property="twitter:title" content={`${blogPost?.post_header[0].text} | The Ventur`} />
                <meta property="twitter:description" content={blogPost?.sub_header[0].text} />
                <meta property="twitter:image" content={blogPost?.cover?.cover?.url} />
            </Head>
            <PostTemplate 
                data={post?.data} date={post?.last_publication_date}
            />
        </PostLayout>
        // <div></div>
    );
};


export async function getStaticProps({ params, preview = false, previewData }) {
    const data = await getPostByUID(params.uid)
    return {
        props: {
            post: data
        },
    }
}

export async function getStaticPaths() {
    const allPosts = await getAllPosts()
    return {
        paths: allPosts?.results.map(({ uid }) => `/blog/${uid}`) || [],
        fallback: true,
    }
}

export default BlogPost