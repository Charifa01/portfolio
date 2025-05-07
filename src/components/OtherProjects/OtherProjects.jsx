import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Changed import
import 'swiper/css/bundle'; // Added bundle import


const styles = {
    swiper: {
      width: '100%',
      height: '100%',
      margin: '20px 0'
    }
  };

export default function OtherProjects({data}){
    return(
        <section style={{padding: '55px 0 70px'}} className="bg-g px-2 mx-2 rounded-4">
            <div className="container">
                <SectionHeading title="OTHER PROJECTS" subTitle="My Work" />
                <div className="position-relative" style={styles.swiper}>
                                <Swiper
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
                                 {data.map((el, index) => (
                                                     <SwiperSlide key={index}>
                                                    <div className="row" >
                                                      {el.map((project, i) => (
                                                        
                                                        <div className="col-lg-4 col-md-6 mb-4" key={i}>
                                                                <div className="card p-2 h-100 d-flex flex-column justify-content-evenly">
                                                                    <img src={project.image} className="card-img-top" alt="project-img" />
                                                                    
                                                                        <div className="btn-bar d-flex justify-content-end p-2">
                                                                            <a href={project.link}  className="gallery-link" >
                                                                                View Project <Icon icon="bi:arrow-up-right" />
                                                                            </a>
                                                                        </div>
                                                                
                                                                </div>
                                                        </div>
                                                  
                                                      ))}
                                                    </div> 
                                                       </SwiperSlide>
                                                   ))}
                                  
                                </Swiper>
                                <div className="position-absolute gap-2 d-none d-md-flex" style={{ bottom: '-90px', right: '0' }}>
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
        </section>
    )
}