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
                {/* <h2>Portfolio</h2>
                <h3>Projects & Websites  I've Created</h3>
                <span>{contact}</span> */}
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" gutterBottom>
                        Amirbek Shomurodov | Personal Blog
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