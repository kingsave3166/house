import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";

const Header = props => (
  <header className="row">
    <div className="col-md-5">
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="col-md-7 mt-5 subtitle">{props.subtitle}</div>
  </header>
);

Header.propTypes = {
  subtitle: PropTypes.string.isRequired
};

export default Header;

// import React from "react";
// import logo from "./logo.svg";

// const Header = props => (
//   <header className="row">
//     <div className="col-md-5">
//       <img src={logo} className="logo" alt="logo" />
//     </div>
//     <div className="col-md-7 mt-5 subtitle">{props.subtitle}</div>
//   </header>
// );

// export default Header;
