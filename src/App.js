import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUpEmail from './components/Auth/SignUp/SignUpEmail';
import SignUpEmailVerification from './components/Auth/SignUp/SignUpEmailVerification';
import SignUpNationality from './components/Auth/SignUp/SignUpNationality';
import SignUpPhoneNumber from './components/Auth/SignUp/SignUpPhoneNumber';
import SignUpPhoneVerification from './components/Auth/SignUp/SignUpPhoneVerification'
import SignUpPasscode from './components/Auth/SignUp/SignUpPasscode';
import Footer from './components/Pages/Footer';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signupEmail" element={<SignUpEmail />} />
          <Route path="/emailVerification" element={<SignUpEmailVerification />} />
          <Route path="/signupNationality" element={<SignUpNationality />} />
          <Route path="/signupPhoneNumber" element={<SignUpPhoneNumber />} />
          <Route path="/signupPhoneVerification" element={<SignUpPhoneVerification />} />
          <Route path="/signupPasscode" element={<SignUpPasscode />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
