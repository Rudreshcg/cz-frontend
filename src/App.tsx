import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import GoogleCallback from './Components/GoogleCallback';
import { AuthProvider } from './Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/google/callback" element={<GoogleCallback />} />
      </Routes>
      <Footer />
    </Router>
    </AuthProvider>

  );
}

export default App;
