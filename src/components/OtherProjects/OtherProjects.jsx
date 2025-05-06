import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from '@iconify/react';

export default function OtherProjects(){
    return(
        <section className="section testimonials-section bg-g mx-3">
            <div className="container">
                <SectionHeading title="OTHER PROJECTS" subTitle="My Work" />
                <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card p-2 h-100 d-flex flex-column justify-content-between">
                            <img src="/wordpress-projects/firstHope.webp" className="card-img-top" alt="project-img" />
                            
                                <div className="btn-bar d-flex justify-content-end p-2">
                                    <a href="#"  className="gallery-link" >
                                        View Project <Icon icon="bi:arrow-up-right" />
                                    </a>
                                </div>
                           
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card p-2 h-100 d-flex flex-column justify-content-between">
                            <img src="/wordpress-projects/boston airport.webp" className="card-img-top" alt="project-img" />
                            
                                <div className="btn-bar d-flex justify-content-end p-2">
                                    <a href="#"  className="gallery-link" >
                                        View Project <Icon icon="bi:arrow-up-right" />
                                    </a>
                                </div>
                           
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card p-2 h-100 d-flex flex-column justify-content-between ">
                            <img src="/wordpress-projects/seattle limousine.webp" className="card-img-top rounded" alt="project-img" />
                            
                                <div className="btn-bar d-flex justify-content-end p-2">
                                    <a href="#"  className="gallery-link" >
                                        View Project <Icon icon="bi:arrow-up-right" />
                                    </a>
                                </div>
                           
                        </div>
                    </div>
                    
                    {/* Repeat similar blocks for other projects */}
              </div>  
            </div>
        </section>
    )
}