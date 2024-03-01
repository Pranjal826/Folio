import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faInstagram, faLinkedinIn, faGithub,faHackerrank  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
     <div className="cursor-1"></div>
      <div className="cursor-2"></div>
      <div className={`menu-bar ${isActive ? 'active' : ''}`} id="menu-bars" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isActive ? faTimes : faBars} />
      </div>
      <header className={isActive ? 'active' : ''}>
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <a href="#home" className='a'>home</a>
          <a href="#about" className='a'>about</a>
          <a href="#training" className='a'>training</a>

          <a href="#experience" className='a'>experience</a>
          <a href="#projects" className='a'>projects</a>

          <a href="#contact" className='a'>contact</a>
        </nav>

        <div className={`follow ${isActive ? 'active' : ''}`}>
          <Link to='https://twitter.com/Pranjal13365048'><FontAwesomeIcon icon={faXTwitter} className='a' /></Link>
          <Link to='https://www.instagram.com/_pranjal_shukla_/'> <FontAwesomeIcon icon={faInstagram} className='a' /> </Link>
          <Link to='https://www.linkedin.com/in/pranjal-shukla-897967221/'><FontAwesomeIcon icon={faLinkedinIn} className='a'/> </Link>
          <Link to='https://github.com/Pranjal826/'><FontAwesomeIcon icon={faGithub} className='a'/> </Link>
          <Link to='https://www.hackerrank.com/profile/pranjalshukla245'><FontAwesomeIcon icon={faHackerrank} className='a'/> </Link>

        </div>
      </header>
    </>
  );
};

export default Navbar;
