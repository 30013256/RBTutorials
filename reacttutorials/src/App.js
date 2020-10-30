import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

//Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PageNotFound from './components/pages/PageNotFound';
import Home from './components/pages/Home';
import Tutorials from './components/pages/Tutorials';
import DemoWebsites from './components/pages/DemoWebsites';


class App extends React.Component {
  render() {
    return (
      <div className="page">    
        <Header/>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demowebsites" element={<DemoWebsites />} />
          <Route path="/tutorials/*" element={<Tutorials />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>                                                  
        <Footer/>              
      </div>
    );
  }
}

export default App;
