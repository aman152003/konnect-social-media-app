import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";

import { Copyright } from "./helperFunctions";

const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "2rem",
      }}
    >
      <Copyright />
    </BottomNavigation>
  );
};

export default Footer;
