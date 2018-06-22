import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.png';
import './App.css';
import Address from './components/Address';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      adresses: ['Гороховая 45', 'Московская 2', 'Кузнечная 43', 'Кузнечный 14', 'Невский 56', 'Счастливая 56', 'Невский 45', 'Жуковского 86']
    } 
  }
  render() {
    return (
      <Router>
      <div className="container">
        <header className="row">
          <div className="logo col-2 offset-1">
            <img src={logo} alt="hair studio logotype" />
          </div>
          <nav className="col-8 header-nav">
              <ul className="header-nav__container">
                <li className="header-nav__item"><Link to="/">Home</Link></li>
              </ul>
          </nav>
        </header>
        <main>          
          <Route exact path="/" component={Address} />
        </main>
        <footer className="row page-footer mt-1">
          <div className="col-10 offset-1">
            <small>&copy; Hair Studio 2018</small>
          </div>
        </footer>
      </div>
      </Router>
    );
  }
}

export default App;
