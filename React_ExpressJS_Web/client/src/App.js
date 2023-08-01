import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import "./App.css";
import Counter from "./pages/Counter";
import Home from "./pages/home";
import Login from "./pages/login";

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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/counter' element={<Counter />}/>
        </Routes>
        {/*     <header className='App-Header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>{this.state.apiResponse}</p> */}
      </Router>
    )
  }
}

export default App;
