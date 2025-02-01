import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'gatsby';
import * as styles from '../styles/body.module.css'; 

function Cards({ background, title, date, description, Url, children }) {
    return (
        <Box className={styles.funCard}  sx={{ backgroundImage: `url(./${background})`,}} o
        >
            <Link to={Url} style={{ textDecoration: 'none' }}>
                <CardContent className={styles.CardWrapper}>
                <Typography variant="h5" component="h1" sx={{color:'#fff'}}>
                               {title}
                           </Typography>
                           <Typography variant="body2" color="#d9d9d9">
                               {description}

                           </Typography>
                           <Typography variant="body1" color="#d9d9d9" sx={{marginTop:2}}>
                               {children}
                           </Typography>
                </CardContent>
            </Link>
        </Box>
    );
}

export default Cards;
