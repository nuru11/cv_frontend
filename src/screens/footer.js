import React from 'react';
import './Footer.css'; // Optional, for styling
import ntechlogo from "../image_placeholder/ntechlogo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                
                </div>
            <p style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>&copy; {new Date().getFullYear()} N-Tech Agent. All rights reserved.</p>
            <div>
            <img src={ntechlogo} alt="Your Logo" className="logo" />
            </div>
            </div>
        </footer>
    );
};

export default Footer;