import React from 'react';
import "../Styles/About.css";


const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>Discover the Future of Tech & Innovation 🚀</h1>
                <p>Your go-to destination for insights on startups, AI, security, and more.</p>
            </div>

            <div className="about-content">
                <h2>Who We Are?</h2>
                <p>
                    Welcome to <strong>DreamBlog</strong>, your trusted source for everything
                    related to <strong>technology, artificial intelligence, startups, cybersecurity, and digital transformation</strong>.
                    Our goal is to provide valuable insights, expert analysis, and the latest trends
                    shaping the future.
                </p>
            </div>

            <div className="about-section">
                <h2>What We Cover?</h2>
                <ul>
                    <li>🚀 <strong>Startups</strong> – Success stories, funding tips, and growth strategies.</li>
                    <li>🤖 <strong>AI & Innovation</strong> – The latest advancements in artificial intelligence.</li>
                    <li>🔒 <strong>Cybersecurity</strong> – Stay ahead of threats and protect your digital world.</li>
                    <li>📱 <strong>Apps & Gadgets</strong> – Reviews and deep dives into the newest tech.</li>
                    <li>💳 <strong>Fintech</strong> – Blockchain, digital payments, and financial innovation.</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>Why Follow Us?</h2>
                <p><strong>Up-to-date insights</strong> – We deliver fresh and well-researched content.</p>
                <p><strong>Expert opinions</strong> – In-depth analysis from tech professionals.</p>
                <p><strong>Community-driven</strong> – A platform where ideas and knowledge are shared.</p>
            </div>
        </div>
    )
}

export default AboutPage;
