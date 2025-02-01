import React from "react";
import Layout from "../../Layout";
import {portfolio, project } from "../../styles/projects.module.css";
import {graphql, Link} from "gatsby";
import Img from "gatsby-image";
import {Grid ,Typography} from '@mui/material';

export default function Projects({data}) {
    console.log(data)
    const projects = data.project.nodes
    const contact = data.contact.siteMetadata.contact
    console.log(data)
    return (
        <Layout>
            <div className={portfolio}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6} sx >
                        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
                          Amirbek Shomurodov | Personal Blog
                        </Typography>
                        <Typography variant="h5" sx={{ fontSize: "1.10rem" }} paragraph>
                             Welcome to my personal blog. Here I share my stories and ideas with the world. I am very passionate about programming and design. Currently, I am a Computer Science student at Brunel University London.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <h2>
                          Hello world
                        </h2>
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