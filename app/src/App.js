import React, { Component } from 'react';
import Naviagtion from './components/navigation';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Naviagtion/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
