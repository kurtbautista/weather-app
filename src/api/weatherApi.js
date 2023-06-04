export const getWeatherByCity = async (data) =>
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );
