import React from "react";
import "./home.css";
import "./headersocials.css"
import { HeaderSocials } from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from './Shapes.jsx';

const Home = () => {
    return (
       
        <section className="home container" id="home">
        
            <div className="intro">
                    <h1 className="home_name">Suzette Martinez</h1>
                    <span className="home_education">I'm a Mentor & Educator!</span>

                <HeaderSocials />
                <ScrollDown />

                
            </div>

        <Shapes />
        </section>
        
    )
}

export default Home