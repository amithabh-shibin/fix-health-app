// src/components/Testimonials.js
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Testimonials = ({ name, review, rating }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="primary">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {review}
        </Typography>
        <div>
          {/* Star rating */}
          {Array.from({ length: rating }).map((_, index) => (
            <StarIcon key={index} color="primary" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
