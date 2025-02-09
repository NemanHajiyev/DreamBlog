import React from 'react';
import '../Styles/Navbar.css';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='navbar-top'>
                <form className='navbar-form'>
                    <input type="text" placeholder='Search ...' />
                    <FaSearch />
                </form>
                <div className='navbar-logo'>
                    <h1>DreamBlog</h1>
                </div>
                <div className='navbar-subs'>
                    <button>
                        Subscribe
                    </button>
                </div>
            </div>
            <div className='navbar-bottom'>
                <ul>
                    <li>Home</li>
                    <li>Stock Market</li>
                    <li>Technology</li>
                    <li>Politics</li>
                    <li>Automobile</li>
                    <li>Healt</li>
                    <li>Interactive Sessions</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
