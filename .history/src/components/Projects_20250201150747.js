import * as React from "react";
import * as styles from "../styles/body.module.css";
import {Box, Grid, Typography} from "@mui/material";
import IconComponents from "./IconComponents";
import SafeTypography from "./SafeTypography";
import {useCallback, useEffect, useRef, useState} from "react";
import Img from "gatsby-image";

export default function BodyProjects({ projects , imgData}) {
    const divRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);
    const [images, setImages] = useState([]);
    const additionalExists = Array.isArray(projects.additional);
    const identify = additionalExists ? projects.additional.length : 0;
    const updateImages = useCallback(newImages => {
        setImages(prevImages => [...new Set([...prevImages, ...newImages])]); 
    }, []);

    useEffect(() => {


        let newImages = [];

        imgData.forEach(img => {

            if (img.node.childImageSharp.fluid.originalName === projects.path) {
                console.log('IMG: ',img.node.childImageSharp.fluid)
                newImages.push(img.node.childImageSharp.fluid);
            }
        });

        if (projects.additional && Array.isArray(projects.additional)) {
            projects.additional.forEach(additionalItem => {
                imgData.forEach(img => {
                    if (additionalItem === img.node.childImageSharp.fluid.originalName) {
                        newImages.push(img.node.childImageSharp.fluid);
                    }
                });
            });
        }

        updateImages(newImages);

        console.log('PRO Image: ', newImages);

    }, [projects, imgData]);
    useEffect(() => {
        if (!projects) {
            return;
        }
        if (divRef.current) {
            setDivHeight(divRef.current.clientHeight);
        }
    }, [projects]);
    if (!projects) {
        return <div>No projects available</div>;
    }




    const cardClass = identify > 0 ? 'universal-card-right p-5 ' : 'normal-card-right p-5 ';
    const combinedClass = `${cardClass} ${styles.bgWhite} ${styles.bgPadding}`;
    const cardImg = identify > 0 ? 'universal-card-left':'normal-card-left '
    const combinedImageClass = `${cardImg} ${styles.bgWhite} ${styles.imgWrapper}`;

    return (
        <div  className={'mt'}>
            <Grid container spacing={1} >
                <Grid item xs={12} md={6}>
                    <div className={combinedClass} ref={divRef}>
                        <Typography variant="h4" gutterBottom fonw>
                            {projects.title}
                        </Typography>
                        <SafeTypography content={projects.description} />
                        <IconComponents links={projects.links}  />
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
                        <a href={projects.links.Demo} target="_blank" rel="noopener noreferrer"  className={styles.imgMainFull} >
                            <Img fluid={images[0]}   style={{height: `${divHeight}px`}}/>
                        </a>
                    </Box>
                </Grid>

                {identify >0 && (
                    <>
                        {projects.additional.map((image, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <div className={index === 0 ? 'uni_img-left' : 'uni_img-right'} style={{overflow: 'hidden',}}>
                                   <Img fluid={images[index+1]} style={{height: `${divHeight}px` }}/>
                                </div>
                            </Grid>
                        ))}
                    </>
                )}
            </Grid>

        </div>
    );
}
