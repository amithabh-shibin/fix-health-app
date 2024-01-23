// src/components/Home.js
import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import doctorImage from "../assets/doctor-image.jpeg";
import ConsultationForm from "./ConsultationForm";
import Testimonials from "./Testimonials";


const testimonialData = [
  {
    name: "John Doe",
    review: "Excellent service! I highly recommend Fix Health.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "Professional and caring staff. My experience was fantastic!",
    rating: 4,
  },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Container>
      {/* Welcome to Fix Health */}
      <Typography
        variant="h2"
        color="primary"
        align="center"
        backgroundSize="cover"
        style={{ marginTop: "0px", marginBottom: "0px",marginLeft:"0px",marginRight:"0px"}}
        
      ></Typography>

      {/* Attractive doctor image background */}
      <Box
        component="div"
        sx={{
          backgroundImage: `url(${doctorImage})`,
          backgroundSize: "cover",
          height: "500px",
          width:"100%",
          position: "relative",
          marginTop: "0px",
          marginLeft:"0px",
          marginRight:"0px",
          marginBottom:"0px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h3"
          color="#330000"
          align="center"
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          Welcome to Fix Health
        </Typography>
      </Box>

      {/* Consultation booking form */}
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={6}>
          <ConsultationForm />
        </Grid>
      </Grid>

      {/* Testimonials */}
      <Typography variant="h4" color="primary" mt={4} mb={3} align="center">
        Patient Testimonials
      </Typography>

      {/* Carousel of testimonials */}
      <Slider {...settings} sx={{ mb: 4 }}>
        {testimonialData.map((testimonial, index) => (
          <Testimonials key={index} {...testimonial} />
        ))}
      </Slider>
    </Container>
  );
};

export default Home;
