import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Employees from "./Components/Employees";
import Home from "./Components/Home";
import EmployeeAdd from "./Components/EmployeeAdd";
import EmployeeDetail from "./Components/EmployeeDetail";
import EmployeeUpdate from "./Components/EmployeeUpdate";
import Login from "./Components/Login";
import { isAuthenticated } from "./repository";

export default class App extends Component {

  state = {
    loggedIn: false
  }

  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  logout() {
    localStorage.removeItem('username');
  }


  render() {
    const auth = isAuthenticated();
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
                  {auth ?
                    <Link to={'/employees'} className="nav-link">Employees</Link> : null}
                </li>
                <li className="nav-item">
                  <Link to={'/contact'} className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                  {auth ?
                    <a onClick={this.logout} className="btn btn-secondary">Logout</a> :
                    <Link to={'/login'} className="btn btn-secondary">Login</Link>}
                </li>
              </ul>
            </div>
          </nav> <br />

          <div>
            <Route path='/' exact render={Home} />
            <Route path='/home' render={Home} />
            <Route path='/about' render={About} />
            <Route path='/contact' render={Contact} />
            <Route path='/employees' component={Employees} />
            <Route path='/employee-add' component={EmployeeAdd} />
            <Route path='/employee-detail/:id' component={EmployeeDetail} />
            <Route path='/employee-update/:id' component={EmployeeUpdate} />
            <Route path='/login' component={Login} />
          </div>
        </Router>
      </div>
    );
  }

}

