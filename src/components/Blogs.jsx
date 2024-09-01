import Blog from "./Blog";

const blogs = [
    {
        id: 1,
        title: "DSA before Development or Development before DSA?",
        author: "MD. Tahsin Ferdous",
        date: "09-07-2024",
        content: "I was speaking to one of my developer friends the other day. Suddenly, a topic came up: The question that we discussed for a while was 'Should we learn Data Structures and Algorithms (DSA) first before jumping to development or the other way around?' I attempted to persuade him out of it explaining the importance of mastering DSA.....",
        image: "https://i.ibb.co/m89Hq2f/Blue-Red-Comic-Creative-Versus-You-Tube-thumbnail.png",
        url: "https://medium.com/@tahsin.ferdous3546/dsa-before-development-or-development-before-dsa-c2e7ec08fcc8",
    },
    {
        id: 2,
        title: "Big O Notation and the Climb Over Constants.",
        author: "MD. Tahsin Ferdous",
        date: "01-09-2024",
        content: "I was recently going through the implementations and complexities of common sorting algorithms such as Quicksort and Mergesort. I noticed that many programmers, including myself, often ignore the constant factors when calculating time complexity. This is typically acceptable for a high-level analysis, but there are situations where this oversight can lead to .....",
        image: "https://i.postimg.cc/85J9KGd8/does-it-really-matter.png",
        url: "https://medium.com/@tahsin.ferdous3546/big-o-notation-and-the-climb-over-constants-7b2b84272d07",
    },
]
const Blogs = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10" id="blogs">
            <div>
                <h1 className="text-3xl font-bold text-gray-200 mb-16 text-center">Blogs</h1>
            </div>
            <div>
            {blogs.map(blog => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;