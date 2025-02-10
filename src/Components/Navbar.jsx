import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchBlog } from '../Redux/BlogSlice';

const Navbar = () => {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    const { searched } = useSelector(store => store.blog)

    const searchedBlog = (e) => {
        e.preventDefault();
        dispatch(searchBlog(inputText))
        console.log(searched)
    }

    return (
        <div className='Navbar'>
            <div className='navbar-top'>
                <div className='navbar-logo'>
                    <h1>Dream<span>Blog</span></h1>
                </div>
                <div className='navbar-pages'>
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/services')}>Services</li>
                        <li onClick={() => navigate('/about')}>About</li>
                        <li onClick={() => navigate('/blogs')}>Blogs</li>
                        <li onClick={() => navigate('/contact')}>Contact</li>
                    </ul>
                </div>

                <div className='navbar-subs'>
                    <form
                        onSubmit={searchedBlog}
                        className='navbar-form'>
                        <input
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            type="text"
                            placeholder='Search ...' />
                        <FaSearch />
                    </form>
                    <button>
                        Subscribe
                    </button>
                </div>
            </div>
            <div className='navbar-center'>
                <h1>Welocome To Our Blog</h1>
                <p>Discover insightful articles, expert tips, and the latest trends on a variety of topics.
                    Whether you're here for inspiration, knowledge, or just a good read, we've got something for everyone.
                    Stay curious and explore our latest posts! </p>
            </div>
        </div>
    )
}

export default Navbar
