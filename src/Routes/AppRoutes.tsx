import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home/Home';
import GoogleCallback from '../Components/GoogleAuth/GoogleCallback';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/google/callback" element={<GoogleCallback />} />
    </Routes>
  );
};

export default AppRoutes;
