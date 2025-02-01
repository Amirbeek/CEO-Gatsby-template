import React from "react";
import Layout from "../../Layout";
import {portfolio, project } from "../../styles/bl.module.css";
import {graphql, Link} from "gatsby";
import Img from "gatsby-image";
import {Grid ,Typography} from '@mui/material';
import * as styles from '../../styles/' 
export default function Projects({data}) {
    console.log(data)
    const projects = data.project.nodes
    const contact = data.contact.siteMetadata.contact
    const Image = data.myImage.childImageSharp.fluid
    console.log(data)
    return (
        <Layout>
            <div className={portfolio}>
                {/* <h2>Portfolio</h2>
                <h3>Projects & Websites  I've Created</h3>
                <span>{contact}</span> */}
                <Grid container spacing={2} justifyContent="center" sx={{textAlign: 'left'}}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom fontWeight={'bold'}>
                          Amirbek Shomurodov | Personal Blog
                        </Typography>
                        <Typography variant="h5" sx={{ fontSize: "1.10rem" }} paragraph>
                             Welcome to my personal blog. Here I share my stories and ideas with the world. I am very passionate about programming and design. Currently, I am a Computer Science student at Brunel University London.
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Img fluid={Image}/>
                    </Grid>
                </Grid>
            </div>
            <div className={project}>
                {projects.map(projects =>(
                    <Link to={'/blog/' + projects.frontmatter.slug} key={projects.id}>
                        <div>
                            <Img fluid={projects.frontmatter.thumb.childImageSharp.fluid}  />
                            <h3> {projects.frontmatter.title} </h3>
                            <p>{ projects.frontmatter.stack}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    )
}
export const query = graphql`
query MyProjectsQuery {
 myImage: file(relativePath: {eq: "hello.jpeg"}) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
  project: allMarkdownRemark(sort: {timeToRead: DESC}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        date
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`