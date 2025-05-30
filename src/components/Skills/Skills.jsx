import Marquee from 'react-fast-marquee'
import SectionHeading from '../SectionHeading/SectionHeading';

export default function Skills() {
	return (
		<>
<section id="skills" className="section-skills-2 mt-5 pt-5 lg-px-3">
				<div className="container">
					<SectionHeading title="Tech Stack & Tools" subTitle="My Skills" />
					<div className="hero-container ">
						<div className="hero-content position-relative z-1 py-3 lg-py-5">
							<div className="position-relative z-1">
								<div className="container mt-5">
									<div className="row my-5">
										<div className="col-lg-5">
										<div className="row py-4 ">
												<div className="col-lg-11 col-md-9 mx-auto overflow-hidden">
													{/* Carausel Scroll */}
													<Marquee className="carouselTicker carouselTicker-right position-relative z-1" direction="right">
														<ul className="carouselTicker__list m-0">
															<li className="carouselTicker__item mt-6 rounded-3  ">
															<div className="brand-logo icon_80 icon-shape rounded-3">
																<img src="/hero-1/icon-4.svg" alt="brand" />
															</div>
															</li>
															<li className="carouselTicker__item mt-6 rounded-3 ">
																<div className="brand-logo icon_80 icon-shape rounded-3">
																	<img className='.icon_80' src="/hero-1/icon-1.svg" alt="brand" />
																</div>
																	
															</li>
															<li className="carouselTicker__item mt-6 rounded-3 ">
															<div className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="/hero-1/icon-2.svg" alt="brand" />
															</div>
															</li>
															<li className="carouselTicker__item mt-6 rounded-3 ">
															    <div className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="/hero-1/icon-3.svg" alt="brand" />
																</div>
															</li>
															<li className="carouselTicker__item mt-6 rounded-3 ">
															<div className="brand-logo icon_80 icon-shape rounded-3">
																<img src="/hero-1/icon-6.svg" alt="brand" />
															</div>
															</li>
														</ul>
													</Marquee>
												</div>
												<div className="col-lg-9 col-md-7 col-10 mx-auto overflow-hidden">
													{/* Carausel Scroll */}
													<Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-5">
														<ul className="carouselTicker__list m-0 ">
															<li className="carouselTicker__item mt-6 rounded-3">
																<div className="brand-logo icon_80 icon-shape ">
																	<img src="/hero-1/icon-7.svg" alt="brand" />
																</div>
															</li>
															<li className="carouselTicker__item px-2 mt-6 rounded-3">
																<div className="brand-logo icon_80 icon-shape ">
																	<img src="/hero-1/php.svg" alt="brand" />
																</div>
															</li>
															<li className="carouselTicker__item mt-6 rounded-3">
															<div className="brand-logo icon_80 icon-shape ">
																<img src="/hero-1/icon-9.svg" alt="brand" />
															</div>
															</li>
															<li className="carouselTicker__item mt-6 rounded-3">
															<div className="brand-logo icon_80 icon-shape ">
																<img src="/hero-1/icon-5.svg" alt="brand" />
															</div>
															</li>
														</ul>
													</Marquee>
												</div>
											</div>
										</div>
										<div className="col-lg-7 border-start-md mt-lg-0 mt-5">
											<div className="row">
												<div className="col-md-10 mx-auto">
													<div className="h-100 position-relative">
														<ul className="ps-3 d-flex flex-column justify-content-between h-100 position-relative">
															<li className="mb-3">
																<div className="">
																	<span className="text-nowrap mb-2 text-secondary fs-5">Front-End : </span>
																	<span className="text-300">JavaScript ,React, Next, Vue, TypeScript , Bootstrap, Tailwind CSS </span>
																</div>
															</li>
															<li className="mb-3">
																<div className="">
																	<span className="text-nowrap mb-2 text-secondary fs-5">Back-End : </span>
																	<span className="text-300">PHP, Laravel ,ExpressJS , NodeJS</span>
																</div>
															</li>
															<li className="mb-3">
																<div className="">
																	<span className="text-nowrap mb-2 text-secondary fs-5">Databases : </span>
																	<span className="text-300">MySQL, SQL Server, MongoDB</span>
																</div>
															</li>
															<li className="mb-3">
																<div className="">
																	<span className="text-nowrap mb-2 text-secondary fs-5">Systèmes &amp; Outils : </span>
																	<span className="text-300">Git, GitHub, Jira, Trello, CI/CD, Docker, GitHub Actions
																	</span>
																</div>
															</li>
															<li className="mb-3">
																<div className="">
																	<span className="text-nowrap mb-2 text-secondary fs-5">Others : </span>
																	<span className="text-300">Wordepess , Elementor</span>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</section>

		</>
	)
}
