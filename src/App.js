import React from 'react';
import Pageroutes  from './componets/PageRoutes';
import NavBar from './componets/NavBar';
import Footer from './componets/Footer';
import About from './componets/pages/About';
import Contact from './componets/pages/Contact';
import Projects from './componets/pages/Projects';
import Resume from './componets/pages/Resume';
import './App.js';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
