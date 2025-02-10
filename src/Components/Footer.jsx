import React from 'react';
import "../Styles/Footer.css";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-logo'>
                    <h2>Dream<span>Blog</span></h2>
                </div>
                <div className='footer-links'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
                <div className='footer-socials'>
                    <a href='https://github.com/NemanHajiyev' target='_blank' rel='noopener noreferrer'>
                        <FaGithub />
                    </a>
                    <a href='https://www.linkedin.com/in/neman-haciyev' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; 2025 DreamBlog. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
