import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Typography, Button } from "@mui/material";

import { Can, WeatherSearch } from "../../components";

const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Can
      no={() => (
        <>
          <div>
            <Typography variant="h1" gutterBottom>
              Hello World!
            </Typography>
            <Button variant="contained" onClick={loginWithRedirect}>
              Login
            </Button>
          </div>
        </>
      )}
    >
      <WeatherSearch />
    </Can>
  );
};

Home.propTypes = {};

export default Home;
