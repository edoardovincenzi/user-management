import React from 'react';
import Footer from './core/Footer';
import Navbar from './core/Navbar';
import '../index.css';
import WrapContainer from './shared/WrapContainer';
import Router from './Router';

function App() {
  return (
    <div className="box-border flex min-h-screen flex-col justify-center">
      <Navbar />
      <WrapContainer>
        <Router />
      </WrapContainer>
      <Footer />
    </div>
  );
}

export default App;
