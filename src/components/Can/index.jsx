import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";

const propTypes = {
  no: PropTypes.func,
};

const defaultProps = {
  no: () => null,
};

const Can = ({ children, no }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return null;
  }
  return isAuthenticated ? children : no();
};

Can.propTypes = propTypes;
Can.defaultProps = defaultProps;

export default Can;
