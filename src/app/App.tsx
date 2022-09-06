import React from 'react';
import Footer from './Core/Footer';
import Navbar from './Core/Navbar';
import '../index.css';
import WrapContainer from './Shared/WrapContainer';
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
