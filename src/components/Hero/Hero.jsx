import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import perser from 'html-react-parser';
import { Link as ScrollLink } from "react-scroll";
import Marquee from "react-fast-marquee";
import style from "./style.css";
// import MobileHeader from '../Header/MobileHeader';

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
      <section id="home" className="home-section bg-dark">
        <div className="container">
          <div className="row custom-min-vh align-items-center">
          <div className="col-lg-7 col-xl-7 col-xxl-6 pl-4">
              <div className="hb-text ">
                <div className="text-secondary-2 d-flex align-items-center mb-3">
                  <span className='balise'>&lt;span&gt;</span> Hello World ! <span className='balise'>&lt;/span&gt;</span>
                </div>

                <h1 className="display-4 my-3" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" style={{lineHeight: '1.1'}}>{perser(title)}</h1>
                <h3 className="fs-4 my-3">A <span className="text-linear-4 special-color">{'{'} Full Stack {'}'}</span> Web developer<span className="flicker">_</span></h3>

                <div className="row">
                  <div className="col-11 col-lg-7 my-2">
                    <Marquee className="position-relative z-1 mt-lg-0 mt-3">
                      <ul className="carouselTicker__list d-flex justify-content-around">
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
            <div className="col-5 d-none d-lg-block" style={{height: '100vh' ,position: 'relative',transform: 'translateY(15%)'}} >
              <div className="hb-me" data-aos="fade-left" data-aos-duration="800" data-aos-delay="800" >
                <img src={ImgLink} alt="hero" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="social-fix">
          <div className="social-links d-none d-lg-flex flex-column align-items-center">
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
