import React from 'react';
import Footer from './Core/Footer';
import Navbar from './Core/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Feature/Home/Home';
import NotFound from './Feature/NotFound/NotFound';
import '../index.css';

function App() {
  return (
    <div className="flex h-screen flex-col w-screen justify-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
