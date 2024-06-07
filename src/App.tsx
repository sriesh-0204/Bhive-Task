import React from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './pages/Home';
import './stylesheet/common.scss'

function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <Footer />
    </div>
  );
}

export default App;
