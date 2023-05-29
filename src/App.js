import React from 'react';
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import LanguageManifesto from "./components/languagemanifesto/Language";
import Resume from "./components/resume/Resume";
import LessonPlans from "./components/lessonplans/Lessonplans";
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/Scrollup';

const App = () => {
  return (
    <>
    
      <Sidebar />
      <main className='main'>
        <Home />
        <ScrollUp />
        <About />
        <Resume />
        <LessonPlans />
        <LanguageManifesto />
        <Footer />
      </main>
    </>
  )
}

export default App