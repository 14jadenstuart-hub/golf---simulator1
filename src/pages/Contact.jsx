import React from 'react';

const Contact = () => {
    return (
        <div className="page container">
            <h1>Contact Us</h1>
            <div className="contact-layout">
                <div className="contact-info">
                    <h3>Location</h3>
                    <p>123 Fairway Drive<br />Golf City, GC 12345</p>

                    <h3>Hours</h3>
                    <p>Mon-Sun: 8am - 10pm</p>

                    <h3>Phone</h3>
                    <p>(555) 123-4567</p>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" className="btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
