import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Bas from './Pages/Bas/Bas';
import Pulses from './Pages/Categories/Pulses';
import Vegetables from './Pages/Categories/Vegetables';
import Contact from './Pages/Contact/Contact';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import About from './Pages/About/About';
import Navbar from './Pages/Main/Navbar';
import Footer from './Pages/Main/Footer';

function App() {
  return (
    <>
    <Router>
    <Footer />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Bas'  component={Bas} />
      <Route path='/Pulses'  component={Pulses} />
      <Route path='/Vegetables'  component={Vegetables} />
      <Route path='/Contact'  component={Contact} />
      <Route path='/Signin'  component={Signin} />
      <Route path='/Signup'  component={Signup} />
      <Route path='/About'  component={About} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
