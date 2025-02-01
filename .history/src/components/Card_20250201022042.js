import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'gatsby';
import * as styles from '../styles/body.module.css'; 

function Cards({ image, title, date, ProjectType, Url }) {
    return (
        <Card className={styles.funCard}>
            <Link to={Url} style={{ textDecoration: 'none' }}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    className={styles.funCardImg}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" className={styles.cardText}>
                        <span className={styles.cardSpan}>{ProjectType}</span> · {date}
                    </Typography>
                    <Typography variant="body2" color="#d9d9d9">
                               {description}

                           </Typography>
                           <Typography variant="body1" color="#d9d9d9" sx={{marginTop:2}}>
                               {children}
                           </Typography>
                </CardContent>
            </Link>
        </Card>
    );
}

export default Cards;
