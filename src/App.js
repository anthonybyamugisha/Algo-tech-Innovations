import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyWebsite from './components/WhyWebsite';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyWebsite />
      <WhyChooseUs />
      <Contact />
    </div>
  );
}

export default App;