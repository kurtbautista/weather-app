import React from "react";
import { Typography } from "@mui/material";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

const Logo = () => (
  <>
    <FilterDramaIcon
      fontSize="large"
      sx={{ marginLeft: "10px", marginTop: "5px" }}
    />
    <Typography
      variant="h6"
      sx={{
        marginLeft: "10px",
        marginTop: "5px",
        display: { xs: "none", md: "flex" },
      }}
    >
      Weather Forecast
    </Typography>
  </>
);

export default Logo;
