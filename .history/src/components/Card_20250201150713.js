import React from 'react';
import { CardContent, Typography, Box } from '@mui/material';


import * as styles from '../styles/body.module.css'; 

function Cards({ background, title, description, URL, children }) {
    function handleNavigation() {
        window.open(URL, '_blank', 'noopener,noreferrer');
    }
    
    return (
        <Box className={styles.funCard}  sx={{ backgroundImage: `url(./${background})`,}} onClick={handleNavigation}
        >
                <CardContent className={styles.CardWrapper}>
                <Typography variant="h5" component="h1">
                               {title}
                           </Typography>
                           <Typography variant="body2" color="#d9d9d9">
                               {description}
                           </Typography>
                           <Typography variant="body1" color="#d9d9d9" sx={{marginTop:2}}>
                               {children}
                           </Typography>
                </CardContent>
        </Box>
    );
}

export default Cards;
