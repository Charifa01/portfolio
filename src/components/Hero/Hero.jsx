import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import perser from 'html-react-parser';
import { Link as ScrollLink } from "react-scroll";
import Marquee from "react-fast-marquee";
import style from "./style.css"

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
    <section id="home" className="home-section bg-dark">
      <div className="container">
        <div className="row  min-vh-100 align-items-center">
          <div className="col-lg-7 col-xl-7 col-xxl-6 pl-4">
            <div className="hb-text pe-5">
              <div className="text-secondary-2 d-flex align-items-center">
                        <span className='balise'>&lt;span&gt;</span> Hello! <span className='balise'>&lt;/span&gt;</span> 
              </div>

              <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">{perser(title)}</h1>
              <h3 className="fs-50 my-3">a <span className="text-linear-4 special-color">{'{'} Full Stack {'}'}</span> Web developer<span className="flicker">_</span></h3>
							
										 

              <div className="row">
              <div className="col-7 my-2">
												{/* Carausel Scroll */}
												<Marquee className=" position-relative z-1 mt-lg-0 mt-8">
													<ul className="carouselTicker__list ">
                          <li className="">
                              <img src="/hero-1/icon-9.svg" alt="brand" />
														</li>
														<li className="">
                              <img src="/hero-1/icon-1.svg" alt="brand" />
														</li>
														<li className="">
                              <img src="/hero-1/icon-7.svg" alt="brand" />
														</li>
														<li className="">
                              <img src="/hero-1/icon-3.svg" alt="brand" />
														</li>
														<li className="">
                              <img src="/hero-1/icon-4.svg" alt="brand" />
														</li>
								
													</ul>
												</Marquee>
							</div>		
						</div>
                
            <div className="info-bar mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                        <p><Icon icon="bi-phone" /><span>{phone}</span></p>
                        <p><Icon icon="bi-envelope" /><span>{email}</span></p>
                      </div>
              <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                <ScrollLink to="contact" spy={true} className="px-btn">
                [ Download my CV ]
                </ScrollLink>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <div className="justify-content-center d-flex align-items-center">
          <div className="hb-me" style={{ backgroundImage: `url(${ImgLink})` }} data-aos="fade-left" data-aos-duration="800" data-aos-delay="800"/>
      </div>
      <div className="social-fix">
        <div className="social-links" >
          {
            socialData.map((element, index) => (
              <a href={element.link} key={index} target="_blank" rel="noopener noreferrer">
                <Icon icon={`fa6-brands:${element.icon}`} />
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  data: PropTypes.object
}

export default Hero;
