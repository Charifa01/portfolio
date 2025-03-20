import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import perser from 'html-react-parser';
import { Icon } from '@iconify/react';
import Education from '../Education/Education';

const About = ({ data }) => {


  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading title="WELCOME TO..." subTitle="Nice to meet you!" />
        <div className="row">
						<div className="col-lg-6 pt-3">
							<div className="rounded-3 border-class position-relative h-100 overflow-hidden">
								<div className="box-linear-animation p-md-6 p-3 ">
                <div className="d-flex align-items-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={28} viewBox="0 0 24 28" fill="none">
											<path className="fill-primary-2" d="M0 22.667V4.66699C0 2.45786 1.79087 0.666992 4 0.666992H22.6667C23.4031 0.666992 24 1.26395 24 2.00033V26.0003C24 26.7367 23.4031 27.3337 22.6667 27.3337H4.66667C2.08933 27.3337 0 25.2443 0 22.667ZM21.3333 24.667V20.667H4.66667C3.56209 20.667 2.66667 21.5625 2.66667 22.667C2.66667 23.7715 3.56209 24.667 4.66667 24.667H21.3333ZM9.33333 3.33366H4C3.26363 3.33366 2.66667 3.93062 2.66667 4.66699V18.4494C3.27284 18.1614 3.95093 18.0003 4.66667 18.0003H21.3333V3.33366H18.6667V14.0003L14 11.3337L9.33333 14.0003V3.33366Z" fill="#62A92B" />
										</svg>
										<h2 className="mb-0 ms-2">About Me</h2>
									</div>
                  <p>
                  I am a passionate Full-Stack Developer who thrives on turning ideas into powerful web applications. With expertise in React, Next.js, Node.js, Laravel, and the MERN stack, I build scalable and high-performance solutions that blend functionality with modern design.

From crafting dynamic front-end interfaces to developing robust back-end architectures, I focus on writing clean, efficient, and optimized code. Always eager to learn and improve, I enjoy taking on new challenges and pushing the boundaries of web development.

Whether it’s a complex web application or a sleek, responsive dashboard, I’m committed to delivering seamless digital experiences.
                  </p>
									<div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
								</div>
							</div>
						</div>
						<Education />
					</div>
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.object,
};

export default About;
