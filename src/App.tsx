import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/HeaderFooter/Header';
import Footer from './Components/HeaderFooter/Footer';
import AppRoutes from './Routes/AppRoutes';
import { AuthProvider } from './Context/AuthContext';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
