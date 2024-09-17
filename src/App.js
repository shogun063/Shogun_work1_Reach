import './App.css';
import SignIn from './components/login';
import SignUp from './components/SignUp';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<SignIn/>} />
        <Route exact path='/login' element={<SignIn/>} />
        <Route exact path='/add' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
