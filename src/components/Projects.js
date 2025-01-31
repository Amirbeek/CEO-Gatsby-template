import * as React from "react";
import * as styles from "../styles/body.module.css";
import {Box, Grid, Typography} from "@mui/material";
import Icon_url from "./Icon_url";
import SafeTypography from "./SafeTypography";
import { useEffect, useRef, useState } from "react";

export default function BodyProjects({ projects }) {
    const divRef = useRef(null);  // Hook used unconditionally
    const [divHeight, setDivHeight] = useState(0);  // Hook used unconditionally

    useEffect(() => {
        if (!projects) {
            console.error('Projects prop is undefined');
            return; // Just log error, remove the return here to comply with hooks rules
        }
        if (divRef.current) {
            setDivHeight(divRef.current.clientHeight); // Get the height of the div
        }
    }, [projects]); // Dependency on projects to re-run when projects change
    console.log(divHeight)
    if (!projects) {
        return <div>No projects available</div>;
    }

    const additionalExists = Array.isArray(projects.additional);
    const identify = additionalExists ? projects.additional.length : 0;

    console.log('projects:', projects);
    console.log('Number of additional projects:', identify);
    console.log('Div height:', divHeight);

    const cardClass = identify > 0 ? 'universal-card-right p-5 ' : 'normal-card-right p-5 ';
    const combinedClass = `${cardClass} ${styles.bgWhite} ${styles.bgPadding}`;
    const cardImg = identify > 0 ? 'universal-card-left':'normal-card-left '
    const combinedImageClass = `${cardImg} ${styles.bgWhite} ${styles.imgWrapper}`;

    return (
        <div  className={'mt'}>
            <Grid container spacing={1} >
                <Grid item xs={12} md={6}>
                    <div className={combinedClass} ref={divRef}>
                        <Typography variant="h4" gutterBottom>
                            {projects.title}
                        </Typography>
                        <SafeTypography content={projects.description} />
                        <Icon_url links={projects.links}  />
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box sx={{
                        overflow: 'hidden',
                        width: '100%',
                        height: `${divHeight}px`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} className={combinedImageClass}>
                        <a href={projects.links.Demo} target="_blank" rel="noopener noreferrer" >
                            <img src={`./${projects.path}`} alt={`${projects.title} preview`}  className={styles.imgMainFull}/>
                        </a>
                    </Box>
                </Grid>

                {identify >0 && (
                    <>
                        {projects.additional.map((image, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <div className={index === 0 ? 'uni_img-left' : 'uni_img-right'}>
                                    <img src={`${image}`} alt={`${projects.title} preview`}  className={styles.imgFull} style={{height: `${divHeight}px`}}/>
                                </div>
                            </Grid>
                        ))}
                    </>
                )}
            </Grid>

        </div>
    );
}
