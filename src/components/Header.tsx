import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header-left">
        <img 
          src="/src/assets/images/logo.png" 
          alt="SyriaZone Logo" 
          className="logo-img"
        />
        <div className="logo-text">SyriaZone</div>
      </div>

      <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
        🌙
      </button>
    </header>
  );
};

export default Header;
