import React from "react";
import "../Styles/Contact.css";

const ContactPage = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Have any questions or suggestions? Feel free to reach out to us.</p>

            <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Write your message" required></textarea>

                <button type="submit">Send Message</button>
            </form>

            <div className="contact-info">
                <p>📧 Email: test@dreamblog.com</p>
                <p>📍 Location: Azerbaijan</p>
            </div>
        </div>
    );
};

export default ContactPage;
