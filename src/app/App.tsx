import React from 'react';
import Footer from './Core/Footer';
import Navbar from './Core/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Feature/Home/Home';
import NotFound from './Feature/NotFound/NotFound';
import '../index.css';
import WrapContainer from './Shared/WrapContainer';

function App() {
  return (
    <div className="flex min-h-screen flex-col w-screen justify-center">
      <Navbar />
      <WrapContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </WrapContainer>
      <Footer />
    </div>
  );
}

export default App;
