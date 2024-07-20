import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import WorkingProcess from './components/pages/WorkingProcess';
import ContactUs from './components/pages/ContactUs';
import Gallery from './components/pages/Gallery';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Projects from './components/pages/Projects';
import ProjectDetail from './components/pages/ProjectDetail';

function App() {
  return (
    <Router basename='/aviranPro'>
      <Header />

      <main className='mt-[62px] md:mt-[85px]'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/working-process' element={<WorkingProcess />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:projectId' element={<ProjectDetail />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
