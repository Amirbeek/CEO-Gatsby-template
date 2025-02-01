import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import styles from '../styles/'; // Import your CSS module here

function Cards({ image, title, date, ProjectType, Url }) {
    const navigate = useNavigate();

    const handleRedirect = (url) => {
        navigate(url);
    };

    return (
        <Card
            className={styles.funCard}
            onClick={() => handleRedirect(Url)}
        >
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
        </Card>
    );
}

export default Cards;
