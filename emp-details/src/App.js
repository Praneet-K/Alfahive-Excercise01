// import { render } from '@testing-library/react';
import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import './App.css';
import Form from './Form';
import Display from './Display'
import Nav from './Nav'
class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
        msg : "",
    };
  }
  handleCallBack = (x) =>{
    
  }
  render(){
    return (
      <>
      <Router>
        <div className="App">
          <Nav />
          <div className='container'>
          <Routes>
            <Route path = '/' exact element={<Form parentCallBack={this.handleCallBack}/>} />
            <Route path = '/display' element = {<Display/>} />
          </Routes>
          </div>
        </div>
      </Router>
      </>
    )
  }
}

export default App;
