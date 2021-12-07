//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage'
import GaleriaPage from './pages/GaleriaPage'
import RecomendadosPage from './pages/RecomendadosPage'
import ContactoPage from './pages/ContactoPage'

import React, {useState, useEffect} from 'react';

function App() {

  useEffect(() => {
    document.title = "Tux juegos"
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/galeria" exact component={GaleriaPage} />
          <Route path="/recomendados" exact component={RecomendadosPage} />
          <Route path="/contacto" exact component={ContactoPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
