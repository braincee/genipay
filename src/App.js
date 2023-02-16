import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/Auth/LogIn';
import SignUp from './components/Auth/SignUp';
import Footer from './components/Pages/Footer';
import HomePage from './components/Pages/HomePage';
import SideBar from './components/Pages/SideBar';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
