// import React from 'react';
// import './Header.css'; // Make sure to create this CSS file

// import Skywaylogo from "../image_placeholder/skywayimg.jpeg"
// import ntechlogo from "../image_placeholder/ntechlogo.png"

// const Header = () => {
//     return (
//         <header className="header">
//             <div className="logo-container">
//                 <img src={ntechlogo} alt="Your Logo" className="logo" />
               
//             </div>
//             <nav className="nav">
//                 <ul>
//                     <li><a href="/a">Home</a></li>
//                     <li><a href="/list">Applicants</a></li>
//                     <li><a href="/signup">signup</a></li>
//                     <li><a href="/login">Login</a></li>
//                     <li><a href="/setting">Setting</a></li>
//                 </ul>
//             </nav>


//                 <div>
//                 <img src={Skywaylogo} alt="Client Logo" className="client-logo" />
//                 </div>
            
//         </header>
//     );
// };

// export default Header;





//////////////////////////////

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Header.css'; // Ensure this CSS file exists

import Skywaylogo from "../image_placeholder/skywayimg.jpeg";
import ntechlogo from "../image_placeholder/ntechlogo.png";

const Header = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        navigate('/login'); // Redirect to login page
    };

    // Function to check if the user is an admin
    const isAdmin = () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
                return payload.isAdmin || false; // Check if user is admin
            } catch (error) {
                console.error("Failed to decode token:", error);
                return false; // Default to not admin if decoding fails
            }
        }
        return false; // No token means not admin
    };

    // Function to check if the user is logged in
    const isLoggedIn = () => {
        return localStorage.getItem('token') !== null; // Check if token exists
    };

    return (
        <header className="header">
            <div className="logo-container">
                {/* <img src={ntechlogo} alt="Your Logo" className="logo" /> */}
                <img src={Skywaylogo} alt="Client Logo" className="client-logo" />
            </div>
            <nav className="nav">
                <ul>
                    {isAdmin() && <li><a href="/">Home</a></li>}
                    {isAdmin() && <li><a href="/list">Applicants</a></li>}
                    {isAdmin() && <li><a href="/signup">Add user</a></li>}
                    {!isLoggedIn() && <li><a href="/login">Login</a></li>} {/* Only show Login if not logged in */}
                    {isAdmin() && <li><a href="/setting">Setting</a></li>}
                </ul>
            </nav>
            <div style={{marginRight: "30px"}}>
                {isLoggedIn() && ( // Show Logout button only if logged in
                    <button onClick={handleLogout} className="logout-button">
                        Logout
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;