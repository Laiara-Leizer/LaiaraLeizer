import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Behavior from './pages/Behavior/Behavior';
import Knowledge from './pages/Knowledge/Knowledge';
import Projects from './pages/Projects/Projects';
import Design from './pages/Design/Design';
import Curriculo from './pages/Curriculo/Curriculo';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/behavior" element={<Behavior />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/design" element={<Design />} />
            <Route path="/curriculo" element={<Curriculo />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

