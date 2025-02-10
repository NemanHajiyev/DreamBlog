import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/Services.css';

const ServicesPage = () => {
    const servicesData = [
        { icon: "🚀", title: "Startup Consultancy", desc: "Explore the latest entrepreneurship trends, investment tips, and success stories of startups!" },
        { icon: "🔒", title: "Cyber Security Solutions", desc: "Stay updated on cybersecurity developments, threats, and best practices for protection." },
        { icon: "🤖", title: "AI Integration", desc: "Discover how artificial intelligence impacts our daily lives and explore the latest AI solutions." },
        { icon: "📱", title: "Mobile App Development", desc: "Reviews, tips, and recommendations on mobile and web applications." },
        { icon: "🌐", title: "Web Development", desc: "Get insights into the latest technological advancements, innovations, and trends." },
        { icon: "💳", title: "Fintech Solutions", desc: "Secure and efficient financial technologies." }
    ];
    const { searched } = useSelector(store => store.blog)

    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <p>We provide innovative solutions to help you grow and succeed in the digital world.</p>
            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <span className="service-icon">{service.icon}</span>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesPage
