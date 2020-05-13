import React from "react";
import "assets/styles/App.scss";
import Nav from "components/Nav";
import Home from "components/pages/Home";
import About from "components/pages/About";
import Contact from "components/pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;