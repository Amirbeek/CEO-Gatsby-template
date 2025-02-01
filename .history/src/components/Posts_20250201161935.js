import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Img from "gatsby-image"; 

export default function Post({ img, title, type, date }) {
  const handleRedirect = (url) => {
    // Implement redirect logic, possibly using 'navigate' from 'gatsby' or 'window.location'
  };
  function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit', 
        year: 'numeric'
    });
}
const formatedDate = formatDate(date)
  return (
    <Card>
      {/* If 'img' is a Gatsby fluid image object */}
      <CardMedia>
        <Img fluid={img} alt={title} />
      </CardMedia>
      <CardContent>
        <Typography variant="subtitle3" color="textSecondary">
          {type} · {formatedDate}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
            {Title}
        </Typography>
      </CardContent>
    </Card>
  );
}
