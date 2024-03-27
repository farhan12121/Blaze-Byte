import { useEffect, useState } from "react";
import { getBlogs } from "../utils";
import Blog from "../components/Blog";
import { deleteBlogs } from "../utils";
import Empty from "../components/Empty";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    }, []);

    const handleDelete = id => {
        deleteBlogs(id)
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    }
    if (blogs.length < 1)return(
        <Empty message='No Bookmarks Available' address={'/blogs'} level={'Go To Blogs'}></Empty>
    )
        return (
            <div className="grid px-12 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                {blogs.map(blog => <Blog handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></Blog>)}

            </div>
        );
};

export default Bookmarks;