import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import perser from 'html-react-parser';
import { Link as ScrollLink } from "react-scroll";
import Marquee from "react-fast-marquee";
import style from "./style.css";
import MobileHeader from '../Header/MobileHeader';

const Hero = ({ data }) => {
  const { title, subTitle, ImgLink, phone, email, socialData } = data;

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector('.hb-me');
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.25}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="d-lg-none">
        <MobileHeader data={{ logoLight: ImgLink }} />
      </div>

      <section id="home" className="home-section bg-dark">
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div className="col-12 col-lg-7 col-xl-7 col-xxl-6">
              <div className="hb-text pe-lg-5">
                <div className="text-secondary-2 d-flex align-items-center mb-3">
                  <span className='balise'>&lt;span&gt;</span> Hello! <span className='balise'>&lt;/span&gt;</span>
                </div>

                <h1 className="display-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">{perser(title)}</h1>
                <h3 className="fs-4 my-3">a <span className="text-linear-4 special-color">{'{'} Full Stack {'}'}</span> Web developer<span className="flicker">_</span></h3>

                <div className="row">
                  <div className="col-12 col-md-7 my-2">
                    <Marquee className="position-relative z-1 mt-lg-0 mt-3">
                      <ul className="carouselTicker__list d-flex justify-content-between">
                        <li><img src="/hero-1/icon-9.svg" alt="brand" /></li>
                        <li><img src="/hero-1/icon-1.svg" alt="brand" /></li>
                        <li><img src="/hero-1/icon-7.svg" alt="brand" /></li>
                        <li><img src="/hero-1/icon-3.svg" alt="brand" /></li>
                        <li><img src="/hero-1/icon-4.svg" alt="brand" /></li>
                      </ul>
                    </Marquee>
                  </div>
                </div>

                <div className="info-bar mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                  <p className="mb-2"><Icon icon="bi-phone" /><span className="ms-2">{phone}</span></p>
                  <p><Icon icon="bi-envelope" /><span className="ms-2">{email}</span></p>
                </div>

                <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                  <ScrollLink to="contact" spy={true} className="btn btn-primary">
                    [ Download my CV ]
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hb-me d-none d-lg-block" style={{ backgroundImage: `url(${ImgLink})` }} data-aos="fade-left" data-aos-duration="800" data-aos-delay="800" />
        <div className="social-fix">
          <div className="social-links d-flex flex-column align-items-center">
            {socialData.map((element, index) => (
              <a href={element.link} key={index} target="_blank" rel="noopener noreferrer" className="mb-2">
                <Icon icon={`fa6-brands:${element.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

Hero.propTypes = {
  data: PropTypes.object
}

export default Hero;
