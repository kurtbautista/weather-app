import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

import { Preloader } from "../";

const ProtectedRoutes = ({ component }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Preloader isLoading={isLoading} />;
  }

  if (!isAuthenticated) {
    navigate("/forbiddenPage");
    return;
  }
  return <Layout>{component}</Layout>;
};

ProtectedRoutes.propTypes = {};

export default ProtectedRoutes;
