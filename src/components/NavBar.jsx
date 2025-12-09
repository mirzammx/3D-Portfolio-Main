import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Check if user is logged in (token exists)
    // Note: Token handshake is now handled in App.jsx
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Redirect to Auth App login page with logout param to clear Auth session
    window.location.replace('http://localhost:8081/auth?logout=true');
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Mirza
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 items-center">
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
          
          {isLoggedIn && (
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
