import React from 'react';
import './app.css';

import Header from '../header';
import Hero from '../hero';
import Cards from '../cards';
import Footer from '../footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Cards />
      </main>
      <Footer />
    </div>
  );
};

export default App;
