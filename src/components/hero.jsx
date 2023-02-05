import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero-box">
      <Box>
        <Typography variant="h2" component="h1" className="hero-title">
          Find what you are looking for{" "}
          <span className="in-mins">in seconds</span>
        </Typography>
      </Box>
      <Box>
        <Typography className="subTitle">
          Find a book in your library with no time to waste
        </Typography>
      </Box>
    </div>
  );
};
export default Hero;
