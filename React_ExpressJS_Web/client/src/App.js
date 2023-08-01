import React, { Component } from 'react';
import logo from "./logo.svg"
import "./App.css";
import Counter from "./pages/Counter";
import Home from "./pages/home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:8080/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className='App'>
        <Home />
    {/*     <header className='App-Header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>{this.state.apiResponse}</p> */}
      </div>
    )
  }
}

export default App;
