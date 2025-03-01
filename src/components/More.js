import * as React from "react"
import Card from '../components/Card'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {lazy} from "react";
const Grid = lazy(() => import("@mui/material/Grid"));
export default function More(){

    return (<>
         <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        URL={'https://unsplash.com/@amirbeek'}
                        title="Shot On iPhone Series"
                        description="My gallery of photos shot and edited on iPhone 14 Pro Max."
                        background={'./more.jpg'}
                    >
                           Unsplash.com <ArrowForwardIcon style={{ color:'#fff', verticalAlign: 'middle', width: 18 }} />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        title="ELBE MENSWEAR"
                        URL={'https://elbe.uk/'}
                        description="Collaborating as a Frontend Developer and Web designer on an E-Commerce Platform for Emerging Designers and Artists"
                        background={'./elbe.jpg'}
                    >
                            Elbe.co.uk <ArrowForwardIcon style={{ color:'#fff', verticalAlign: 'middle', width: 18 }} />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        title="Three.js Projects"
                        URL={'https://www.behance.net/amirbekshomuro'}
                        description="Explore interactive 3D experiences! Dive into my ThreePage.js projects, showcasing cutting-edge graphics and animations. Click to discover the art of code"
                        background={'./Blog.png'}
                    >
                            Behance.net <ArrowForwardIcon style={{ color:'#fff', verticalAlign: 'middle', width: 18 }} />
                    </Card>
                </Grid>
            </Grid>
    </>)
}