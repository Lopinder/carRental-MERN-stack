import React from "react";
import './Footer.css'; // Make sure to create this CSS file

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h2>Zoomo</h2>
                    <p>Empowering mobility for a cleaner future.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/cars">Cars</a></li>
                        {/* <li><a href="/"></a></li> */}
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: support@zoomo.com</p>
                    <p>Phone: +91 8627069119</p>
                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {currentYear} Zoomo. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
