// src/components/ConsultationForm.js
import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to BookingForm with the provided data
    navigate("/booking", { state: { formData } });
  };

  return (
    <Card elevation={3} sx={{ borderRadius: "12px",}}>
      <CardContent>
        <Typography variant="h4" color="primary" mb={2} >
          Book a Consultation
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Phone Number"
            fullWidth
            margin="normal"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultationForm;
