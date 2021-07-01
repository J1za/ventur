import ContentLoader from "react-content-loader";

const BlogPostLoader = () => {

    return (
        <ContentLoader
            speed={1}
            width={'100%'}
            height={'100%'}
            viewBox="0 0 570 660"
            backgroundColor="#f0f0f0"
            foregroundColor="#dedede"
        >
            <rect x="0" y="0" rx="5" ry="5" width="570" height="450" />
            <rect x="7" y="491" rx="0" ry="0" width="570" height="45" />
            <rect x="7" y="546" rx="0" ry="0" width="570" height="60" />
            <rect x="8" y="615" rx="0" ry="0" width="613" height="2" />
            <rect x="8" y="640" rx="0" ry="0" width="115" height="10" />
            <rect x="453" y="640" rx="0" ry="0" width="115" height="10" />
        </ContentLoader>
    );
};





export default BlogPostLoader


