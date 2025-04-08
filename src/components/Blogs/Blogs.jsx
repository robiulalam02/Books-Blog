import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookMarkCount, handleReadingTime }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h1 className='text-3xl mb-4'>Total Blogs: {blogs.length}</h1>
            <div className='grid grid-cols-2'>
                {
                    blogs.map(blog => <Blog handleReadingTime={handleReadingTime} key={blog.id} handleBookMarkCount={handleBookMarkCount} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;