import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Customer from "./Components/Customer";
import Employees from "./Components/Employees";
import Home from "./Components/Home";
import Users from "./Components/Users";

export default class App extends Component {

  state = {
    loggedIn: false
  }

  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  render() {
    return (
      <div className="container">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Employee Management</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/home'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/about'} className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/users'} className="nav-link">Users</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/employees'} className="nav-link">Employees</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/contact'} className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </nav> <br />

          {/* <div>
            <NavLink to='/home' activeStyle={{ color: 'green' }}>Home</NavLink> |
            <NavLink to='/about' activeStyle={{ color: 'green' }}>About</NavLink> |
            <NavLink to='/customer/Bhawna' activeStyle={{ color: 'green' }}>Customer</NavLink> |
            <NavLink to='/users' activeStyle={{ color: 'green' }}>Users</NavLink> |
            <NavLink to='/contact' activeStyle={{ color: 'green' }}>Contact</NavLink> |
            <input type="button" className="btn btn-secondary" onClick={this.loginHandle.bind(this)} value={this.state.loggedIn ? "Logout" : "Login"} />
          </div> */}
          <div>
            <Route path='/' exact render={Home} />
            <Route path='/home' render={Home} />
            <Route path='/about' render={About} />
            <Route path='/contact' render={Contact} />
            {/* <Route path='/customer/:name' render={Customer} /> */}
            <Route path='/customer/:name' render={({ match }) => (
              this.state.loggedIn ? (<Customer name={match.params.name} />)
                : (<Redirect to='/' />)
            )} />
            <Route path='/users' component={Users} />
            <Route path='/employees' component={Employees} />
          </div>
        </Router>
      </div>
    );
  }

}

