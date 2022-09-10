import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailUser from './features/DetailUser/DetailUser';
import Home from './features/Home/Home';
import NotFound from './features/NotFound/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userDetails/:id" element={<DetailUser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
