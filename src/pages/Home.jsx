import data from "../data.json";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Service from "../components/Service/Service";
import Projects from "../components/Projects/Projects";
import OtherProjects from "../components/OtherProjects/OtherProjects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const { heroData, aboutData, experienceData, serviceData, contactData, footerData,projectData,otherProjectData,otherProjectData2 } = data;
  return (
    <>
      <main className="wrapper">
        <Hero data={heroData} />
        <About data={aboutData} />
        <Experience data={experienceData} />
        <Skills/>
        <Service data={serviceData} />
        <Projects data={projectData}/>
        <OtherProjects data={otherProjectData} data2={otherProjectData2} />
        
        <Footer data={footerData} />
      </main>
    </>
  )
}

export default Home;
