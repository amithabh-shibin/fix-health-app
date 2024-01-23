import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import BookingForm from "./components/BookingForm";
import DoctorListing from "./components/DoctorListing";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Header
            darkMode={darkMode}
            handleDarkModeToggle={handleDarkModeToggle}
          />

          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingForm />} />
     
            <Route path="/doctors" element={<DoctorListing />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
