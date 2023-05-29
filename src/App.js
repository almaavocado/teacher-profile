import React from 'react';
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import LanguageManifesto from "./components/languagemanifesto/Language";
import Resume from "./components/resume/Resume";
import LessonPlans from "./components/lessonplans/Lessonplans";
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
    
      <Sidebar />
      <main className='main'>
        <Home />
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