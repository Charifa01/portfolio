import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Link as ScrollLink } from 'react-scroll';
import { socialData } from '../../data.json';

const MobileHeader = ({ data }) => {
  const { logoLight } = data;

  const [mobileToggle, setMobileToggle] = useState(false);
  const menuRef = useRef(null);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMobileToggle(false);
    }
  };

  useEffect(() => {
    if (mobileToggle) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileToggle]);

  return (
    <header className="mob-header d-lg-none">
      <div className="brand ">
        <img src={logoLight} alt="Logo" className="logo img-fluid" />
        <button
          className="btn btn-outline-light"
          onClick={handleMobileToggle}
        >
          <Icon icon="fa6-solid:bars" />
        </button>
      </div>

      {mobileToggle && (
        <div className="mobile-menu" ref={menuRef}>
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

          <ul className="nav social-link d-flex justify-content-center mt-3">
            {socialData.map((element, index) => (
              <li key={index} className="mx-2">
                <a href={element.link} target="_blank" rel="noopener noreferrer">
                  <Icon icon={`fa6-brands:${element.icon}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

MobileHeader.propTypes = {
  data: PropTypes.object,
};

export default MobileHeader;