import React from 'react';
import styles from './PostPage.module.scss'
import PostBody from './PostBody/PostBody'
import PostHeader from './PostHeader/PostHeader';


const PostTemplate = ({ data, date }) => {
  const blogPost = data;


  let cover = blogPost?.cover.url;
  if (blogPost?.cover?.cover) cover = blogPost?.cover?.cover.url;


  return (
    <>


      <div className={styles.postPage}>
       
          <PostHeader
            title={blogPost?.post_header[0].text}
            cover={cover}
          />
       
        <PostBody content={blogPost?.content} />

        {/* <div className={['post-container', styles.subscriberForm].join(' ')}>
          <EmailSubs formId={'1383803'} />
        </div> */}
      </div>
    </>
  );
};

export default PostTemplate;
