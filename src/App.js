import './App.css';

import React from "react"

import NavBar from './NavBar';
import Footer from "./Footer";
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetails from './projects/ProjectDetails';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className='page-container'>
        <header>        
          <NavBar />
        </header>
        <div className='content'>
          <Routes>
            <Route path = "/" element = {<AboutMe />}/>
            <Route path = "/projects" element = {<Projects />}/>
            <Route path = "/contact" element = {<Contact />}/>
            <Route path = "/projects/:id" element = {<ProjectDetails />}/>
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

export default App;
