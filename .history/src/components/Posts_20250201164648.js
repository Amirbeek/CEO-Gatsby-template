import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Img from "gatsby-image";
import * as styles from '../styles/blog.module.css'; // Ensure your CSS module is properly imported

export default function Post({ img, title, type, date }) {
  // Helper function to format dates
  function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
    });
  }
  
  const formattedDate = formatDate(date); // Format date once and use it in the render

  return (
    <Card className={styles.CardWrapper}>  // Use className from styles object correctly
      <CardMedia component="div">
        <Img fluid={img} alt={title} className={styles.img}/> 
      </CardMedia>
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography variant="body2" color="textSecondary">
          <span className={styles.Type}>{type}</span> · {formattedDate}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom className={styles.title}>
          {title} // Ensure the title uses the CSS module style if intended
        </Typography>
      </CardContent>
    </Card>
  );
}
