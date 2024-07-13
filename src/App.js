import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contacts';
import Projects from './Pages/projects/Projects';
import Footer from './Component/Footer/Footer';
import Experience from './Pages/Experience/Experience';

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <div className='pt-16 bg-gray-900'>
        <Routes>
          <Route path='/'  element={<About />}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/skills'  element={<Skills />}/>
          <Route path='/experience'  element={<Experience />}/>
          <Route path='/contact'  element={<Contact />}/>
          <Route path='/projects'  element={<Projects />}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
