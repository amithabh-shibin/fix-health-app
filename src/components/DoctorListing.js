// src/components/DoctorListing.js
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useLocation } from "react-router-dom";

import axios from "axios";

const DoctorListing = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");

  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    // Mock API call using Axios and the submitted form data
    const apiUrl = "http://localhost:3001/doctors";

    axios
      .get(apiUrl)
      .then((response) => {
        const doctors = response.data;
        // Filter doctors by city
        const filteredDoctors = doctors.filter(
          (doctor) => doctor.city === city
        );
        setDoctorList(filteredDoctors);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, [city, location.state]);

  return (
    <Container>
      <Typography variant="h4" color="primary" align="center">
        {city ? `Available Doctors in ${city}` : "All Doctors"}
      </Typography>
      {/* Display the list of doctors */}
      <List>
        {doctorList.map((doctor) => (
          <ListItem key={doctor.id} divider>
            <ListItemText
              primary={doctor.name}
              secondary={`${doctor.expertise} - ${doctor.city}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default DoctorListing;
