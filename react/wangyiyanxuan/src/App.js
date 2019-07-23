import React from 'react';
import Home from './pages/home/Home';
import Header from './pages/header/Header';
import Footer from './pages/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="home">
        <Home />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
