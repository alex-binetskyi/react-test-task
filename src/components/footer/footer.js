import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__social">
        <li>
          <a className="footer__social-link footer__social-link--slack" href="#">
            Be part of the journey
          </a>
        </li>
        <li>
          <a className="footer__social-link footer__social-link--twitter" href="#">
            Stay up to date
          </a>
        </li>
      </ul>
      <ul className="footer__info">
        <li>
          <a href="#">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#">
            Terms of Service
          </a>
        </li>
      </ul>
      <p className="footer__copyright">
        © 2020 Aghhh
      </p>
    </footer>
  );
};

export default Footer;
