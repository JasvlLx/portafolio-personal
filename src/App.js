import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
