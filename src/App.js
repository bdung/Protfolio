import React, {Fragment} from 'react';
import "./App.css";
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skill';
import Contact from './components/contact/contact';


const App = () => {
  return (
    <Fragment>
     
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
    </Fragment>
    // <Header />
    
  );
}

export default App;
