import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Pierwsza from './components/Pierwsza';
import Druga from './components/Druga';
import Trzecia from './components/Trzecia';
import logo from './logo.svg';

function PageNotFound() {
  return <h1>Error 404 !</h1>;
}

class Site extends React.Component{
  render(){
    return(
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <Link className="navbar-brand ms-3" to="/">Strony</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/1">Pierwsza</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/2">Druga</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/3">Trzecia</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}

function App() {
  return (
      <Router>
          <body>
          <Switch>
            <Route path="/" exact={true}>
              <Site/>
            </Route>
            <Route path="/1">
              <Pierwsza />
            </Route>
            <Route path="/2">
              <Druga />
            </Route>
            <Route path="/3">
              <Trzecia />
            </Route>
            <Route >
              <PageNotFound />
            </Route>
          </Switch>
          </body>

      </Router>
  );
}

export default App;
