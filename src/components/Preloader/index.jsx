import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const propTypes = {
  isLoading: PropTypes.bool,
};

const defaultProps = {
  isLoading: false,
};

const Preloader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        background: "#ffffffd4",
        zIndex: 99,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={50} />
    </Box>
  );
};

Preloader.propTypes = propTypes;
Preloader.defaultProps = defaultProps;

export default Preloader;
