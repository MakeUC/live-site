import React from 'react';
import { IconContext } from 'react-icons';
import { FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <>
    <footer className="container mx-auto py-6 px-3 mb-0 text-gray-800 flex">
      <IconContext.Provider value={{ size: '2em', className: 'mx-auto' }}>
        <a
          target="_blank"
          aria-label = "Email"
          rel="noopener noreferrer"
          href="mailto:info@makeuc.io"
          className="flex-1 social-icon"
        >
          <FaEnvelope />
        </a>
        <a
          target="_blank"
          aria-label = "LinkedIn"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/makeuc"
          className="flex-1 social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          aria-label = "Instagram"
          rel="noopener noreferrer"
          href="https://www.instagram.com/uc_ieee"
          className="flex-1 social-icon"
        >
          <FaInstagram />
        </a>
        <a
          target="_blank"
          aria-label = "Twitter"
          rel="noopener noreferrer"
          href="https://twitter.com/uc_ieee"
          className="flex-1 social-icon"
        >
          <FaTwitter />
        </a>
        <a
          target="_blank"
          aria-label = "GitHub"
          rel="noopener noreferrer"
          href="https://github.com/makeuc"
          className="flex-1 social-icon"
        >
          <FaGithub />
        </a>
      </IconContext.Provider>
    </footer>
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        marginBottom: '35px',
      }}
    >
      <a
        target="_blank"
        aria-label = "Code of Conduct"
        rel="noopener noreferrer"
        href="https://mlh.io/code-of-conduct"
      ><b>
        CODE OF CONDUCT
        </b>
      </a>
    </div>
  </>
);

export default Footer;
