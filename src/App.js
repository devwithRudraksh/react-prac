import React, { useState } from 'react';
import './App.css';
import About from './screens/About';
import Contact from './screens/Contact';
import Banner from './components/Banner';
import AgeGateForm from './components/AgeGateFormUI/AgeGateForm';
import CustomBottomFunc from './components/CustomBottomFunc';
import UserDashboard from './components/CardUI/UserDashboard';

function App() {
  return (
    <div className="App">
      <AgeGateForm/>
      <UserDashboard />
      <CustomBottomFunc />

    </div>
  );
}

export default App;
