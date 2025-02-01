import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Img from "gatsby-image";

export default function Post({ img, title, type, date }) {
  function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
    });
  }
  
  const formattedDate = formatDate(date); 
  return (
    <Card>
      <CardMedia component="div">
        <Img fluid={img} alt={title} />
      </CardMedia>
      <CardContent textAlign='left'>
        {/* Display title more prominently */}
        <Typography variant="body2" color="textSecondary">
          {type} · <span >{formattedDate}</span>
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
            {title}
        </Typography>
        {/* Display type and date in a smaller, less prominent style */}
        
      </CardContent>
    </Card>
  );
}
