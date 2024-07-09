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