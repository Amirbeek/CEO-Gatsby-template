import React from 'react';
import {Grid, Typography} from "@mui/material";
import * as styles from "../styles/body.module.css";
export default function  Body() {
    return <>
            <Grid  container spacing={1}  className={styles.bgColor}>
                <Grid item xs={12} md={6} sx={{display: 'flex',alignItems:'center', justifyContent: 'center'}}>
                    <div>
                        <Typography variant="h3" gutterBottom>
                            About Me
                        </Typography>
                        <Typography variant="h5" sx={{ fontSize: "1.25rem" }} paragraph>
                            My name is Amirbek Shomurodov. I am a student software developer. I believe in design quality and always pay attention to details because that's what makes a great product.
                                <br/><br/>
                            At Brunel University, I led a team to create <a
                                href="https://github.com/Amirbeek/Flight_System"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.url}
                            >
                                Brunel Flight System
                            </a>. This project, realized through the collective effort of talented peers, introduced an innovative flight booking experience. We integrated interactive maps and diverse retail options directly within the system, offering a unified solution that simplifies and enhances both travel and shopping for users.
                            <br/><br/>
                            I am currently pursuing a Bachelor's degree in Computer Science with a specialization in AI and Data Science at Brunel University London.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} sx={{display: 'flex',alignItems:'center', justifyContent: 'center'}}>
                    <img
                        src='./main.png'
                        alt="Amirbek's picture"
                        width="100%"
                        height="100%"
                    />
                </Grid>
            </Grid>
    </>
}


