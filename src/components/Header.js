// src/components/Header.js
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = ({ darkMode, handleDarkModeToggle }) => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            edge="start"
            color="inherit"
            aria-label="home"
          >
            {/* Your company icon goes here */}
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Fix Health
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <Switch
            color="default"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
