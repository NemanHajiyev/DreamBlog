import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchBlog } from '../Redux/BlogSlice';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [inputText, setInputText] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        p: 5,
    };

    const searchedBlog = (e) => {
        e.preventDefault();
        dispatch(searchBlog(inputText));
        navigate('/search-blog');
    };

    return (
        <div className="Navbar">
            <div className="navbar-top">
                <div className="navbar-logo">
                    <h1>Dream<span>Blog</span></h1>
                </div>
                <div className="navbar-pages">
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/services')}>Services</li>
                        <li onClick={() => navigate('/about')}>About</li>
                        <li onClick={() => navigate('/contact')}>Contact</li>
                    </ul>
                </div>
                <div className="navbar-subs">
                    <form onSubmit={searchedBlog} className="navbar-form">
                        <input
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            type="text"
                            placeholder="Search ..."
                            className="search-input"
                        />
                        <FaSearch type='sumbit' className="search-icon" onClick={searchedBlog} style={{ cursor: "pointer" }} />
                    </form>
                    <button onClick={handleOpen} className="subscribe-btn">
                        Subscribe
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <form className="contact-form">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Enter your name" required />
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Enter your email" required />
                                <button type="submit">Subscribe</button>
                            </form>
                        </Box>
                    </Modal>
                </div>
            </div>
            <div className="navbar-center">
                <h1>Welcome to Our Blog</h1>
                <p>
                    Discover insightful articles, expert tips, and the latest trends on a variety of topics.
                    Whether you're here for inspiration, knowledge, or just a good read, we've got something for everyone.
                    Stay curious and explore our latest posts!
                </p>
            </div>
        </div>
    );
};

export default Navbar;
