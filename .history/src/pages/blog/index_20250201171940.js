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
    return (
        <Layout>
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
                    order: { xs: 1, md: 2 } 
                }}>                 
         <      Img fluid={Image} className={styles.imgStyle}/>
              </Grid>
          </Grid>
         
              
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

              
           
              <Grid container  spacing={2}  className="mt">
                <Grid item xs={12} sm={6} md={4}>
                    {projects.map(project => (
                        <Posts 
                            key={project.id}
                            img={project.frontmatter.thumb.childImageSharp.fluid}
                            url={'/blog/' + project.frontmatter.slug}
                            date={project.frontmatter.date}
                            title={project.frontmatter.title}
                            type={project.frontmatter.stack}
                        />
                    ))}
                </Grid>
          </Grid>
              
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