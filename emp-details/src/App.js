// import { render } from '@testing-library/react';
import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import './App.css';
import Form from './Form';
import Display from './Display'
import Nav from './Nav'
class App extends Component{
  Emp = []
  constructor(props) {
    super(props)
    this.state = {
        count : 0,
    };
  }
  handleCallBack = (x) =>{
    var url = "http://localhost:8080/api/saveemp";
    // headers.append({'Content-Type' : 'application/json'})
    const options = {method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: x.id,firstName : x.firstName,
      lastName:x.lastName,
      phno:x.phoneNumber,
      emailId:x.emailId,
      address:x.address,
      city:x.city,
      state:x.state,
      country:x.country}),
    }
    fetch(url,options)
        .then(response => console.log(response))
    // window.location.reload(false)
  }
  render(){
    return (
      <>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path = '/' exact element={<Form parentCallBack={this.handleCallBack}/>} />
            <Route path = '/display' element = {<Display items = {this.Emp} />} />
          </Routes>
        </div>
      </Router>
      </>
    )
  }
}

export default App;
