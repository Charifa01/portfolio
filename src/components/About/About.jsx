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
        <div className="row px-3">
			<div className="col-lg-6  ">
				<div className="hero-container  border-class  h-100 ">
				  <div className="hero-content h-100 py-5 px-4 ">
                    <div className="d-flex align-items-center mb-5">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={30} height={30}>
							<path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" fill="#6333ff"/>
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
