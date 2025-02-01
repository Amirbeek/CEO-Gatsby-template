import React from 'react';
import { CardContent, Typography, Box } from '@mui/material';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';

import * as styles from '../styles/body.module.css'; 

function Cards({ background, title, description, URL, children }) {
    function handleNavigation() {
        // alert(url)
        console.log(URL)
        navigate(URL);
    }
    
    return (
        <Box className={styles.funCard}  sx={{ backgroundImage: `url(./${background})`,}} onClick={handleNavigation}
        >
            <Link to={URL} style={{ textDecoration: 'none' }}>
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
