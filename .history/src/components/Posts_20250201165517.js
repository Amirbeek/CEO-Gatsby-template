import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Img from "gatsby-image";
import * as styles from '../styles/blog.module.css'; 

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
    <Card className={styles.CardWrapper}> 
      <CardMedia component="div">
        <Img fluid={img} alt={title} className={styles.img}/> 
      </CardMedia>
      <CardContent sx={{ textAlign: 'left' , display:'flex',alignItems:'center', justifyContent:'center'}} >
      </CardContent>
    </Card>
  );
}
