import React from "react";
import PropTypes from "prop-types";
import MenuAppBar from "../MenuAppBar";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => {
  return (
    <main className="app">
      <MenuAppBar />
      {children}
    </main>
  );
};

Layout.propTypes = propTypes;

export default Layout;
