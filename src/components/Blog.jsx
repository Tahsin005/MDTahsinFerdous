import PropTypes from 'prop-types'
const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            <div key={blog.id} className="mb-8">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover mb-4 rounded-xl" />
                <h2 className="sm:text-2xl md:text-3xl font-bold text-gray-200 mb-2">{blog.title}</h2>
                <p className="text-gray-400 mb-2">by <span>{blog.author}</span> on {blog.date}</p>
                <p className="text-gray-300 mb-4">{blog.content.substring(0, 150)}...</p>
                <a href={blog.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;