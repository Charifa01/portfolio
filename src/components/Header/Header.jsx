import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { socialData } from '../../data.json';

const Header = ({ data }) => {
  const { logoDark, logoLight } = data;

  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <header>
     
      <div
        className={`header-left-fixed one-page-nav ${
          mobileToggle ? 'menu-open' : ''
        }`}
      >
        {/* Brand */}
        
        {/* / */}
        <ul className="main-menu">
          <li>
            <ScrollLink
              to="home"
              spy={true}
              
              onClick={() => setMobileToggle(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              
              onClick={() => setMobileToggle(false)}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="experience"
              spy={true}
              
              onClick={() => setMobileToggle(false)}
            >
              Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              spy={true}
              
              onClick={() => setMobileToggle(false)}
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              spy={true}
              
              onClick={() => setMobileToggle(false)}
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              spy={true}
              
              onClick={() => setMobileToggle(false)}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              
              onClick={() => setMobileToggle(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <ul className="nav social-link">
          {socialData.map((element, index) => (
            <li key={index}>
              <a href={element.link} target="_blank" rel="noopener noreferrer">
                <Icon icon={`fa6-brands:${element.icon}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End Header Top */}
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
