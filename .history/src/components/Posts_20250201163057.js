import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Img from "gatsby-image";
import * as styles from '../styles/blog.module.css'
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
      <CardContent sx={{textAlign:'left'}}>
        <Typography variant="body2" color="textSecondary">
        <span className={styles.Type}>{type}</span> · {formattedDate}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
            {title}
        </Typography>
        
      </CardContent>
    </Card>
  );
}
