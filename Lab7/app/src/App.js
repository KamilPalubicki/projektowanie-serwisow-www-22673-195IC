import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Pierwsza from './components/Pierwsza';
import Druga from './components/Druga';
import Trzecia from './components/Trzecia';

function PageNotFound() {
  return <h1>Error 404 !</h1>;
}

function App() {
  return (
      <Router>
          <body>
          <Switch>
            <Route path="/" exact={true}>
                <Navbar />
                <Pierwsza />
            </Route>
            <Route path="/1">
                <Navbar />
                <Pierwsza />
            </Route>
            <Route path="/2">
                <Navbar />
                <Druga />
            </Route>
            <Route path="/3">
                <Navbar />
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
