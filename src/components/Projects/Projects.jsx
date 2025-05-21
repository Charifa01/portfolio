import SectionHeading from '../SectionHeading/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Changed import
import 'swiper/css/bundle'; // Added bundle import
import { Icon } from '@iconify/react';

const styles = {
  swiper: {
    width: '100%',
    height: '100%',
    margin: '20px 0'
  }
};

export default function Projects ({ data }){
  return (
   <section>
      <div id="projects" className="section work-section ">
        <div className="container mx-1 px-2">
          <SectionHeading title="RECENT PROJECT" subTitle="My Work" />
           <div className="position-relative hero-container" style={styles.swiper}>
                <Swiper className='hero-content'
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  }}
                  loop= {true}
                  autoplay={{
                      delay: 5000, 
                      disableOnInteraction: false, 
                      pauseOnMouseEnter: true 
                    }}
              
                  grabCursor={true}
                >
                 {data.map((project, index) => (
                                     <SwiperSlide key={index}>
                                       <div className="py-lg-5 px-lg-4 m-3 m-lg-5 p-3 rounded-4 border-class bg-3">
                                         <div className="row ">
                                           <div className="col-lg-6">
                                             <img className="w-100 rounded-4" src={project.image} alt="project-img" />
                                           </div>
                                           <div className="col-lg-6 ps-lg-3 mt-5 mt-lg-0">
                                             <h4 className="text-linear-4 my-3 ">{project.title}</h4>
                                             <p>{project.description}</p>
                                             <ul className="mt-4 list-unstyled">
                                               <li className="text-light mb-3 pb-3 d-flex gap-2">
                                                 <p className="mb-0">Technologies:</p>
                                                 <p className="mb-0 text-300">{project.tech}</p>
                                               </li>
                                             </ul>
                                             <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                                               <a href={project.liveDemo} className="text-300  px-2 pb-2 link-hover" style={{ color: '#6333ff' }}>Live Demo <Icon icon="bi:arrow-up-right" /></a>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                       </SwiperSlide>
                                   ))}
                  
                </Swiper>
                <div className="position-absolute bottom-0 end-0 gap-2 pb-5 pe-5 d-none d-md-flex">
                <div className="swiper-button-prev end-2 shadow position-relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
                  </svg>
                </div>
                <div className="swiper-button-next end-2 shadow position-relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
                  </svg>
                </div>
            </div>
              </div>
        </div>
      </div>
    </section>
  );
};

