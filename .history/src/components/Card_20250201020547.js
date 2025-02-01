import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'gatsby';
import styles from '../styles'; 

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
                    <Typography gutterBottom variant="h5" component="h2" className={styles.cardTitle}>
                        {title}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    );
}

export default Cards;
