import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'gatsby';
import * as styles from '../styles/body.module.css'; 

function Cards({ image, title, date, description, , Url }) {
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
                    <Typography gutterBottom variant="h5" component="h2" className={styles.cardTitle}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="#d9d9d9">
                        {description}
                         </Typography>
                </CardContent>
            </Link>
        </Card>
    );
}

export default Cards;
