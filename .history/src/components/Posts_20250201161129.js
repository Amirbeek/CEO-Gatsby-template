import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Img from "gatsby-image"; // Assuming you're using gatsby-image for fluid images

export default function Post({ img, title, type, date }) {
  // Function to handle redirect could be used if you have an action on the card
  const handleRedirect = (url) => {
    // Implement redirect logic, possibly using 'navigate' from 'gatsby' or 'window.location'
  };

  return (
    <Card>
      {/* If 'img' is a Gatsby fluid image object */}
      <CardMedia>
        <Img fluid={img} alt={title} />
      </CardMedia>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          {type} · {date}
        </Typography>
      </CardContent>
    </Card>
  );
}
