import React from 'react';
import '../Styles/Navbar.css';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='navbar-top'>
                <div className='navbar-logo'>
                    <h1>Dream<span>Blog</span></h1>
                </div>
                <div className='navbar-pages'>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='navbar-subs'>
                    <form className='navbar-form'>
                        <input type="text" placeholder='Search ...' />
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
