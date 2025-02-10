import React from 'react'
import { useSelector } from 'react-redux';

const BlogDetails = () => {
    const { detail } = useSelector(store => store.blog);
    console.log(detail);
    return (
        <div>
            {detail?.map((item) => (
                <div
                    key={item.id}
                    className='home-items'>
                    <img src={item.image} alt="" />
                    <p>{item.title}</p>
                    <div className='blog-user'>
                        <div className='blog-user-title'>
                            <p>{item.author}</p>
                        </div>
                        <p>Published : {item.published_date}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogDetails
