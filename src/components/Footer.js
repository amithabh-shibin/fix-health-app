// src/components/Footer.js
import React from "react";
import { Typography, Link, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box mt={4} py={3} textAlign="center">
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Fix Health
      </Typography>
      <Typography variant="body2" color="textSecondary" mt={1}>
        <Link color="inherit" href="#" style={{ marginRight: "10px" }}>
          Privacy Policy
        </Link>{" "}
        |
        <Link color="inherit" href="#" style={{ marginLeft: "10px" }}>
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
