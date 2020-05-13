import React from "react";
import { NavLink } from "react-router-dom";
import Img from "components/Img";
import "assets/styles/Nav.scss";
import logo from "assets/images/logo.png";

class Nav extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      fixed: window.scrollY > 0
    });
  }

  render() {
    return (
      <nav className={"nav" + (this.state && this.state.fixed ? ' nav--fixed' : '')}>
        <NavLink exact to="/">
          <Img src={logo} alt="" className="nav__logo" />
        </NavLink>
        <div className="nav__anchors">
          <NavLink
            exact
            to="/"
            className="nav__anchor"
            activeClassName="nav__anchor--active"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="nav__anchor"
            activeClassName="nav__anchor--active"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="nav__anchor"
            activeClassName="nav__anchor--active"
          >
            Contact
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
