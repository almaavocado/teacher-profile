import React from 'react';
import "./language.css";
import info from "./Info";
import { FiLink } from 'react-icons/fi';

const Language = () => {
  return (
    <section className="services_container section" id="languagemanifesto">
    <h2 className="section_title">Language Manifesto</h2>
    
    <div className="services_grid">
        {info.map(({ id, link, title, description }) => {
          return (
            <div className="services_card" key={id}>
              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>
              <div className="button">
							  <a href={link} className="services_button"> 
                  <FiLink/> View File 
                </a>
							</div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Language;