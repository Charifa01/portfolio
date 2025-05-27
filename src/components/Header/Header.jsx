import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link as ScrollLink } from 'react-scroll';
import { socialData } from '../../data.json';
import MobileHeader from './MobileHeader';

const Header = ({ data }) => {
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <>
      {/* Show MobileHeader only on mobile screens */}
      <div className="d-lg-none ">
        <MobileHeader data={data} />
      </div>
      {/* Existing Header for larger screens */}
      <div
        className={`header-left-fixed one-page-nav d-none d-lg-flex ${
          mobileToggle ? 'menu-open' : ''
        }`}
      >
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
    </>
  );
};

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
