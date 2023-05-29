import React from 'react';
import "./about.css";
import Image from "../../assets/Suzy-PP.png";
import Resume from "../../assets/files/SuzetteMartinezResume.pdf";



const About = () => {
  return (
    <section className="about_container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            
            <p className='about_description'>
            Welcome! I'm Suzette Martinez, an experienced educator passionate about making a positive impact on the lives of young learners. 
            Over the past decade, I have dedicated myself to working closely with students in an underserved community, helping them grow academically and gain new perspectives. 
            Through volunteer work and various interactions, I have learned the transformative power of interpersonal communication, adaptability, and the profound impact a single moment can have on someone's life. As a future teacher, my mission is to mold the future and development of students by providing them with the right attitude, values, and knowledge to unlock their full potential. 
            Thank you for taking the time to visit my page and learn more about me.</p>

            
            <a href={Resume} className="btn" download="Suzette Martinez">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;