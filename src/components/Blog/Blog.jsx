import React, { useState } from 'react';
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMarkCount, handleReadingTime }) => {
    const [btn, setBtn] = useState(false);
    const handleBookMarkBtn = (data) => {
        setBtn(true);
        handleBookMarkCount(data);
    }

    const handleUnbookMarkBtn = () => {
        setBtn(false);
    }

    return (
        <div className='flex justify-center mb-5'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        className='w-full h-[200px] object-cover'
                        src={blog.cover}
                        alt="Blog" />
                </figure>
                <div className='flex items-center py-2 px-4 justify-between'>
                    <div className='flex items-center gap-2'>
                        <img className='w-14 h-14 rounded-full object-cover' src={blog.author_img} alt="" />
                        <h5>{blog.author}</h5>
                    </div>
                    {
                        !btn ? <button><FaRegBookmark onClick={() => handleBookMarkBtn(blog)} size={25} /></button> : <button onClick={handleUnbookMarkBtn}><FaBookmark color='#422ad5' size={25} /></button>
                    }
                </div>
                <div className="card-body p-4">
                    <h2 className="card-title">{blog.title}</h2>
                    <div className='flex'>
                        {
                            blog.hashtags.map(hashtag => <p key={hashtag}><small>{hashtag}</small></p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => { handleReadingTime(blog.reading_time, blog.id), setBtn(false) }} className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;