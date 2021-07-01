import Prismic from '@prismicio/client'
import Link from 'next/link'
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  hrefResolver
} from './prismic-configuration'

// // Helper function to convert Prismic Rich Text links to Next/Link components
// export const customLink = (type, element, content, children, index) => (
//   <Link key={element.data.id} href={hrefResolver(element.data)} as={linkResolver(element.data)}>
//     <a>{content}</a>
//   </Link>
// )

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

const PrismicClient = Client();

export const getAllPosts = async () => {
  const allPosts = await PrismicClient.query(Prismic.Predicates.at('document.type', 'blog_post'), {
  });
  return allPosts;
  
}

export const getPostByUID = async (uid: string) => {
  const onePost = await PrismicClient.getByUID('blog_post', uid, {});
  return onePost;
  // console.log(allPosts.results);
}



export default Client