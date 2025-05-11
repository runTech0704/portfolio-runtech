import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import QA from './components/QA';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // シミュレートされたロード時間
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className="font-sans bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <QA />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </Router>
  );
}

export default App;