import React, { useMemo, useEffect, useState } from "react";
import { format } from "date-fns";
import { Button } from "@mui/base";
import { Alert, Grid } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getWeatherByCity } from "../../api/weatherApi";
import { Preloader, SimpleTable } from "../../components";

const Weather = (props) => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get("city");

  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) {
      setError("Please enter city.");
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      const weatherData = await getWeatherByCity(city);
      const result = await weatherData.json();
      if (result?.cod === "404") {
        setError(`City not found!`);
        setLoading(false);
        return;
      }
      setWeather(result);
      setLoading(false);
    };

    fetchWeather();
  }, [city]);

  const transformWeatherData = (data) => [
    {
      date: format(new Date(), "MM/dd/yyyy"),
      temp: data?.main?.temp,
      description: data?.weather?.[0]?.description,
      main: data?.weather?.[0]?.main,
      pressure: data?.main?.pressure,
      humidity: data?.main?.humidity,
    },
  ];

  const header = useMemo(
    () => [
      { name: "date", label: "Date" },
      { name: "temp", label: "Temp (F)" },
      {
        name: "description",
        label: "Description",
        style: { display: { xs: "none" } },
      },
      {
        name: "main",
        label: "Main",
        dataProps: { sx: { display: { xs: "none" } } },
      },
      {
        name: "pressure",
        label: "Pressure",
        dataProps: { sx: { display: { xs: "none" } } },
      },
      {
        name: "humidity",
        label: "Humidity",
        dataProps: { sx: { display: { xs: "none" } } },
      },
    ],
    []
  );

  const data = useMemo(() => transformWeatherData(weather), [weather]);

  const handleBack = () => navigate("/");

  return (
    <Grid container spacing={2}>
      <Preloader isLoading={isLoading} />
      <Grid item md={12}>
        {error ? (
          <Alert severity="error" sx={{ marginBottom: "20px" }}>
            {error}
          </Alert>
        ) : (
          <SimpleTable header={header} data={data} />
        )}
      </Grid>
      <Grid container justifyContent={"flex-end"} item md={12}>
        <Button variant="outlined" color="primary" onClick={handleBack}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

Weather.propTypes = {};

export default Weather;
