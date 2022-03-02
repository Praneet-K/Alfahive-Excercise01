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
<<<<<<< HEAD
    
=======
    var url = "http://localhost:8080/api/saveemp";
    // headers.append({'Content-Type' : 'application/json'})
    const options = {method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: x.id,firstName : x.FirstName,
      lastName:x.LastName,
      phno:x.Phno,
      address:x.Address,
      city:x.City,
      state:x.State,
      country:x.Country}),
    }
    fetch(url,options)
        .then(response => console.log(response))
    // window.location.reload(false)
>>>>>>> parent of 4834773 (added service layer)
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
