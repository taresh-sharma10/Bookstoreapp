import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Home } from './components/Home';
import { About } from './components/About';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';






import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="Apps">
          <Header />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/products' component={Products} />
            <Route path='/services' component={Services} />
            <Redirect path="/dashboard" to="/about" />

            <Route path='*' component={NotFound} />

          </Switch>
          <Footer />
        </div>
      </Router>



    );
  }
}

export default App;
