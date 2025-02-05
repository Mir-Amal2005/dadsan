import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/Dadsan.svg'; // Импорт лого

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 480);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderNavLinks = () => (
    <ul>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          MAIN
        </NavLink>
      </li>
      {isMobile ? (<li>
        <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>GALLERY</NavLink>
      </li>) : (<li> <a href="#gallery">GALLERY</a></li>)}
      <li>
        <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')}>
          FAQ
        </NavLink>
      </li>
    </ul>
  );

  const renderLanguageSelector = () => (
    <form>
      <select name="languages" id="lang" onChange={(e) => console.log(e.target.value)}>
        <option value="AZ">AZ</option>
        <option value="EN">EN</option>
        <option value="RU">RU</option>
      </select>
    </form>
  );

  return (
    <div className="header">
      <div className="content">
        {isMobile ? (
          <>
            <div className="right">
              <img src={logo} alt="logo" />
            </div>
            <div className="bc">
              <div className="mid">{renderNavLinks()}</div>
              <div className="left">{renderLanguageSelector()}</div>
            </div>
          </>
        ) : (
          <>
            <div className="left">{renderLanguageSelector()}</div>
            <div className="mid">{renderNavLinks()}</div>
            <div className="right">
              <img src={logo} alt="logo" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
