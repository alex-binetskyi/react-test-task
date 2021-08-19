import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__logo logo">
          <a href="#">
            <picture>
              <source type="image/svg+xml" srcSet="/static/img/logo.svg"/>
              <img src="/static/img/logo.png" width="105" height="20" alt="Logo" loading="lazy" decoding="async"/>
            </picture>
          </a>
        </div>
        <ul className="header__contact-list">
          <li>
            <a className="header__contact-link" href="#">Contact Us</a>
          </li>
          <li>
            <button className="header__join-waitlist" type="button">Join Waitlist</button> 
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
