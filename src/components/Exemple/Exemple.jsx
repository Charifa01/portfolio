import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Changed import
import 'swiper/css/bundle'; // Added bundle import

// Add custom styles
const styles = {
  swiper: {
    width: '100%',
    height: '100%',
    margin: '20px 0'
  }
};
const projectData = [
    {
      title: "Integrate AI into the ecommerce system",
      description: "Developed an online learning platform with course management, quizzes, and progress tracking.",
      client: "Conceptual JSC",
      time: "6 months",
      tech: "Node.js, React, MongoDB, Stripe",
      image: "/hero-1/img-1.png",
      liveDemo: "#",
      github: "#",
    },
    {
      title: "AI chat integration",
      description: "Built an AI chatbot system that helps customers with FAQs and product search.",
      client: "Digital Minds",
      time: "3 months",
      tech: "Next.js, TypeScript, OpenAI API",
      image: "/hero-1/img-1.png",
      liveDemo: "#",
      github: "#",
    },
  ];

export default function Exemple() {
  return (
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
            delay: 3000, 
            disableOnInteraction: false, 
            pauseOnMouseEnter: true 
          }}
		
        grabCursor={true}
      >
       {projectData.map((project, index) => (
                           <SwiperSlide key={index}>
                             <div className="p-lg-5 p-md-4 p-3 rounded-3 border-class mt-5 bg-3">
                               <div className="row">
                                 <div className="col-lg-5">
                                   <img className="w-100" src={project.image} alt="project-img" />
                                 </div>
                                 <div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
                                   <h4 className="text-linear-4">{project.title}</h4>
                                   <p>{project.description}</p>
                                   <ul className="mt-4 list-unstyled">
                                     <li className="text-light mb-3 border-bottom pb-3">Project Info</li>
                                     <li className="text-light mb-3 border-bottom pb-3 d-flex justify-content-between">
                                       <p className="mb-0">Client</p>
                                       <p className="mb-0 text-300">{project.client}</p>
                                     </li>
                                     <li className="text-light mb-3 border-bottom pb-3 d-flex justify-content-between">
                                       <p className="mb-0">Completion Time</p>
                                       <p className="mb-0 text-300">{project.time}</p>
                                     </li>
                                     <li className="text-light mb-3 border-bottom pb-3 d-flex justify-content-between">
                                       <p className="mb-0">Technologies</p>
                                       <p className="mb-0 text-300">{project.tech}</p>
                                     </li>
                                   </ul>
                                   <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                                     <a href={project.liveDemo} className="text-300 border-bottom border-1 px-2 pb-2 link-hover">Live Demo</a>
                                     <a href={project.github} className="text-300 border-bottom border-1 px-2 pb-2 link-hover">View on Github</a>
                                   </div>
                                 </div>
                               </div>
                             </div>
                             </SwiperSlide>
                         ))}
        
      </Swiper>
      <div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
			<div className="swiper-button-prev end-0 shadow position-relative">
				<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
					<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
				</svg>
			</div>
			<div className="swiper-button-next end-0 shadow position-relative">
				<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
					<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
				</svg>
			</div>
	</div>
    </div>
  );
}