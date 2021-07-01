export const apiEndpoint = 'https://theventur.cdn.prismic.io/api/v2';

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
    if (doc.type === 'blog_post') {
        return `/blog/${doc.uid}`
    }
    return '/'
}

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
    if (doc.type === 'blog_post') {
        return '/blog/[uid]'
    }
    return '/'
}