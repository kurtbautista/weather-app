import { Button } from "@mui/base";
import React from "react";
import { useNavigate } from "react-router-dom";

const Forbidden = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>403</h1>
      <Button onClick={() => navigate("/")}>Home</Button>
    </div>
  );
};

Forbidden.propTypes = {};

export default Forbidden;
