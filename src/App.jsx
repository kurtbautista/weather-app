import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Forbidden from "./pages/Forbidden";
import Weather from "./pages/Weather";
import { ProtectedRoutes, Layout } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "home",
    element: <ProtectedRoutes component={<Home />} />,
  },
  {
    path: "weather",
    element: <ProtectedRoutes component={<Weather />} />,
  },
  {
    path: "forbiddenPage",
    element: (
      <Layout>
        <Forbidden />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404</h1>
      </div>
    ),
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
