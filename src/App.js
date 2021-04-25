import './App.css';
import "./components/icons/index";
import {BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';

import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import AddUser from './components/users/adduser';

function App() {
  return (
    <div className="App">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavLink className="navbar-brand" to="!#">User</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">   
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="my-2">
                  <Link className="btn btn-outline-light" to='/user/add'>Add User</Link>
                </div>
            </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path='/user/add'>
            <AddUser/>
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
