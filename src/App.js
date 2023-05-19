// import './App.css';

import React, { Component } from 'react'
import Navbar1 from './myComponents/Navbar';
import News from './myComponents/News';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';



export default class App extends Component {
  pageSize=6;
  render() {
      
    return (
      
      <Router>
      <div className='bg-secondary'>
      <Navbar1/>
      
       <Routes>
        
        <Route exact path="/" element={<News key="general" pageSize={this.pageSize} category="general"  />}/>
        <Route exact path="/Business" element={<News key="Business" pageSize={this.pageSize} category="business"  />}/>
        <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={this.pageSize} category="Entertainment"  />}/>
        <Route exact path="/Health" element={<News key="Health" pageSize={this.pageSize} category="Health"  />}/>
        <Route exact path="/Science" element={<News key="Science" pageSize={this.pageSize} category="Science"  />}/>
        <Route exact path="/Sports" element={<News key="Sports" pageSize={this.pageSize} category="Sports"  />}/>
        <Route exact path="/Technology" element={<News key="Technology" pageSize={this.pageSize} category="Technology"  />}/>
       </Routes>
 
      </div>
      </Router>
    )
  }
}

