// import Head from 'next/head';
import BlogLayout from '../../components/layout/BlogLayout/BlogLayout'
import BlogTemplate from '../../templates/blog/BlogTemplate/BlogTemplate'
import Head from 'next/head';
const Blog = () => {
  return (

    <BlogLayout notSub>
      <Head>
      </Head>
      <BlogTemplate />
    </BlogLayout>
  );
}



export default Blog