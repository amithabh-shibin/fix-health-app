import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import db from "../assets/db.json"
// import axios from "axios";

console.log(db)

const BookingForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: "",
  });

  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    // Mock API call using Axios and the submitted form data
    // const apiUrl = "http://localhost:3001/doctors";

    // axios
    //   .get(apiUrl)
    //   .then((response) => {
    //     setDoctorList(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching doctors:", error);
    //   });
    setDoctorList(db.doctors)
  }, [location.state]);

  // Update form data when location state changes
  useEffect(() => {
    if (location.state?.formData) {
      setFormData(location.state.formData);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to DoctorListing with the submitted form data
    const { city, ...restFormData } = formData;

    navigate(`/doctors?city=${city}`, { state: { formData: restFormData } });
  };

  return (
    <Container>
      <Typography variant="h4" color="primary" align="center">
        Book a Consultation
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Step 1 - Name and Phone Number */}
        <TextField
          label="Name"
          fullWidth
          margin="dense"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone Number"
          fullWidth
          margin="dense"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        {/* Step 2 - Age, City, Company */}
        <TextField
          label="Age"
          fullWidth
          margin="dense"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <TextField
          label="City"
          fullWidth
          margin="dense"
          name="city"
          select
          value={formData.city}
          onChange={handleChange}
          required
        >
          {doctorList.map((doctor) => (
            <MenuItem key={doctor.city} value={doctor.city}>
              {doctor.city}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Company"
          fullWidth
          margin="dense"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />

        {/* Step 3 - Chief Complaints */}
        <TextField
          label="Chief Complaints"
          fullWidth
          multiline
          rows={4}
          margin="dense"
          name="chiefComplaints"
          value={formData.chiefComplaints}
          onChange={handleChange}
          required
        />

        {/* Step 4 - Previous Experience with Physiotherapy */}
        {parseInt(formData.age, 10) >= 40 && (
          <TextField
            label="Previous Experience with Physiotherapy"
            fullWidth
            multiline
            rows={4}
            margin="dense"
            name="previousExperience"
            value={formData.previousExperience}
            onChange={handleChange}
          />
        )}

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Find Doctors
        </Button>
      </form>
    </Container>
  );
};

export default BookingForm;
