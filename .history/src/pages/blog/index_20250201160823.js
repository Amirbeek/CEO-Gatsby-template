import React from "react";
import Layout from "../../Layout";
 import {graphql, Link} from "gatsby";
import Img from "gatsby-image";
import {Grid ,Typography} from '@mui/material';
import * as styles from '../../styles/blog.module.css' 
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Posts from '../../components/Posts'
export default function Projects({data}) {
    console.log(data)
    const projects = data.project.nodes
    const contact = data.contact.siteMetadata.contact
    const Image = data.myImage.childImageSharp.fluid
    console.log(data)
    return (
        <Layout>
          <div className={styles.portfolio}>
          <Grid container spacing={2} justifyContent="center" className="mt">
                    <Grid item xs={12} md={6} sx={{
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      textAlign:{xs:'center', md:'left'},
                      order: { xs: 2, md: 1 } 
                  }}>                 
                  <div className="text-nl">
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                          Amirbek Shomurodov | Personal Blog
                      </Typography>
                      <Typography variant="h5" sx={{ fontSize: "1.10rem" }} paragraph>
                          Welcome to my personal blog. Here I share my stories and ideas with the world. I am very passionate about programming and design. Currently, I am a Computer Science student at Brunel University London.
                      </Typography>
                      <div className="mt-md">
                      <Link to="/contact" className={styles.Button}>  
                        Get in touch <ArrowForwardIcon className={styles.icon}/>
                      </Link>
                      </div>
                  </div>
              </Grid>
              <Grid item xs={12} md={6} sx={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    order: { xs: 1, md: 2 }  // Image first on xs, second on md and up
                }}>                 
         <Img fluid={Image} className={styles.imgStyle}/>
              </Grid>
          </Grid>
         
      </div>
              <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                mt: 2,
                display: 'flex', 
                alignItems: 'center'
              }}
              className="text-nl"
            >
              Blog Posts <ArrowDownwardIcon sx={{ fontSize: '2.1rem' ,marginLeft:'.5rem'}} />
            </Typography>

            <div className={styles.project}>
                {projects.map(projects =>(
                  <Posts 
                   key={projects.id}
                    img={projects.frontmatter.thumb.childImageSharp.fluid}
                    url={'/blog/' + projects.frontmatter.slug}
                  />
                ))}
            </div>
            <Link to={} >
                        <div>
                            <Img fluid={projects.frontmatter.thumb.childImageSharp.fluid}  />
                            <h3> {projects.frontmatter.title} </h3>
                            <span>
                            {projects.frontmatter.date}
                            </span>
                        </div>
                    </Link>
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