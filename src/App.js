import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Knowledge from './pages/Knowledge/Knowledge';
import './App.css';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/behavior" element={<div>Behavior Page</div>} />
            <Route path="/Knowledge" element={<Knowledge />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

