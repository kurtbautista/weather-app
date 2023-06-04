import React, { useState } from "react";
import { Alert, Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import { Profile } from "../../components";

const WeatherSearch = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = ({ target }) => {
    setSearch(target?.value);
    setError(null);
  };

  const handleSearch = () => {
    if (!search) {
      setError("Please enter city.");
      return;
    }
    navigate(`/weather?city=${search}`);
  };

  return (
    <Grid container>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12}>
          <Profile />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="City"
            id="cityField"
            fullWidth
            onChange={handleChange}
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            sx={{ marginBottom: "20px" }}
          />
          {error && (
            <Alert severity="error" sx={{ marginBottom: "20px" }}>
              {error}
            </Alert>
          )}
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Display Weather
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

WeatherSearch.propTypes = {};

export default WeatherSearch;
