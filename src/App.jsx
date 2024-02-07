import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import Countries from './pages/Countries';
import CountryDetails from './pages/CountryDetails';
import './index.css';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
};

export default App;