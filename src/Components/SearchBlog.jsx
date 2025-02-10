import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogDetail } from '../Redux/BlogSlice';
import { FaUser } from 'react-icons/fa';
import '../Styles/SearchBlog.css';
import { useNavigate } from 'react-router-dom';


const SearchBlog = () => {
    const dispatch = useDispatch();
    const { searched } = useSelector(store => store.blog);
    const navigate = useNavigate();

    const getBlogDetail = (id) => {
        dispatch(blogDetail(id));
        navigate('/blog-detail');
    }
    return (
        <div className='search-container'>
            <div className='search-blog' >
                {searched?.map((item) => (
                    <div key={item.id} onClick={() => getBlogDetail(item.id)} className='home-items'>
                        <img src={item.image} alt="" />
                        <p>{item.title}</p>
                        <div className='blog-user'>
                            <div className='blog-user-title'>
                                <FaUser />
                                <p>{item.author}</p>
                            </div>
                            <p>Published: {item.published_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchBlog
