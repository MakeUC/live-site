import { FC } from 'react';
import { IconContext } from 'react-icons';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FooterContainer } from './StyledComponents';

const Footer: FC = () => (
  <FooterContainer>
    <footer className="container mx-auto py-6 px-3 mb-0 flex">
      <IconContext.Provider value={{ size: '2em', className: 'mx-auto' }}>
        <a
          target="_blank"
          aria-label="Email"
          rel="noopener noreferrer"
          href="mailto:info@makeuc.io"
          className="flex-1 social-icon"
        >
          <FaEnvelope />
        </a>
        <a
          target="_blank"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/makeuc/"
          className="flex-1 social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          aria-label="Instagram"
          rel="noopener noreferrer"
          href="https://www.instagram.com/makeuc.io/"
          className="flex-1 social-icon"
        >
          <FaInstagram />
        </a>
        <a
          target="_blank"
          aria-label="Twitter"
          rel="noopener noreferrer"
          href="https://twitter.com/makeuc_io"
          className="flex-1 social-icon"
        >
          <FaTwitter />
        </a>
        <a
          target="_blank"
          aria-label="GitHub"
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
        aria-label="Code of Conduct"
        rel="noopener noreferrer"
        href="https://mlh.io/code-of-conduct"
      >
        <b>CODE OF CONDUCT</b>
      </a>
      <br />
      <br />
      <a
        target="_blank"
        aria-label="Organizers"
        rel="noopener noreferrer"
        href="https://ieee.uc.edu/"
      >
        ORGANIZED BY IEEE@UC{' '}
        {/* <img src="ieee.png" style={{height:"50px", whitespace:"nowrap", display:"inline"}}></img> */}
      </a>
    </div>
  </FooterContainer>
);

export default Footer;
