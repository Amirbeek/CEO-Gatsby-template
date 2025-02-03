import React, {useEffect} from "react";
import Img from "gatsby-image";
import Layout from "../Layout";
import { graphql } from "gatsby";
import {Typography, Box, Grid, Button} from "@mui/material";
import Markdown from "markdown-to-jsx";
import "prismjs/themes/prism-okaidia.css";
import Prism from "prismjs";
import * as styles from "../styles/project-details.module.css";
import UserInfo from "../components/UserInfo";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { navigate } from "gatsby"

const ProjectDetails = ({ data }) => {
    const { rawMarkdownBody } = data.markdownRemark;
    const { title, stack, featuredImg ,date} = data.markdownRemark.frontmatter;
    const Image = data.myImage.childImageSharp.fluid

    function formatDate(isoString) {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
        });
    }
    const fixedDate = formatDate(date)

    useEffect(() => {
        Prism.highlightAll();
    }, [data]);
    const handleRedirect = () => {
        navigate('/blog');
    };
    return (
        <Layout>

                <Grid
                    container
                    spacing={0}
                    className="mt"
                    justifyContent="center"
                >
                    <Grid
                        item
                        xs={12} sm={2}
                        sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}
                    >
                        <div className={styles.back}>
                            <Button  sx={{borderRadius:'100px!important'}}
                                     onClick={handleRedirect}
                            >
                                <ArrowBackIcon className={styles.arrow}/>
                            </Button>
                        </div>
                    </Grid>

                    {/* Main Content */}
                    <Grid item xs={12} sm={10} md={10} lg={10}>
                        <div style={{ width: '100vh' }}>
                            <Typography
                                variant="h3"
                                gutterBottom
                                fontWeight="bold"
                                className="text-nl"
                                sx={{
                                    fontSize: {
                                        lg: '3rem',
                                        md: '1.5rem',
                                        sm: '1rem',
                                    }
                                }}
                            >
                                {title}
                            </Typography>

                            <Typography
                                variant="body1"
                                gutterBottom
                                className={styles.type}
                            >
                                {stack}
                            </Typography>

                            {/* User Info */}
                            <UserInfo fixedDate={fixedDate} Image={Image}/>

                            {/* Project Image */}
                            <Img fluid={featuredImg.childImageSharp.fluid} alt={title} />

                            {/* Markdown Content */}
                            <Markdown className={'text-nl'}
                                      options={{
                                          overrides: {
                                              code: {
                                                  component: ({ children, className }) => (
                                                      <pre style={{ backgroundColor: '#263238', padding: '20px', width:'100%' }} className={className}>
                                          <code>{children}</code>
                                        </pre>
                                                  ),
                                              },
                                              h1: {
                                                  component: ({ children, ...props }) => (
                                                      <Typography
                                                          variant="h2"
                                                          gutterBottom
                                                          sx={{
                                                              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
                                                              marginTop: "var(--space-lg)",
                                                              marginBottom: "var(--space-md)"
                                                          }}
                                                          {...props}
                                                      >
                                                          {children}
                                                      </Typography>
                                                  ),
                                              },
                                              h2: {
                                                  component: ({ children, ...props }) => (
                                                      <Typography
                                                          variant="h3"
                                                          gutterBottom
                                                          sx={{
                                                              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                                                              marginTop: "var(--space-lg)",
                                                              marginBottom: "var(--space-md)"
                                                          }}
                                                          {...props}
                                                      >
                                                          {children}
                                                      </Typography>
                                                  ),
                                              },
                                              h3: {
                                                  component: ({ children, ...props }) => (
                                                      <Typography
                                                          variant="h4"
                                                          gutterBottom
                                                          sx={{
                                                              fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2.25rem" },
                                                              marginTop: "var(--space-md)",
                                                              marginBottom: "var(--space-sm)"
                                                          }}
                                                          {...props}
                                                      >
                                                          {children}
                                                      </Typography>
                                                  ),
                                              },
                                              h4: {
                                                  component: ({ children, ...props }) => (
                                                      <Typography
                                                          variant="h5"
                                                          gutterBottom
                                                          sx={{
                                                              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                                                              marginTop: "var(--space-md)",
                                                              marginBottom: "var(--space-sm)"
                                                          }}
                                                          {...props}
                                                      >
                                                          {children}
                                                      </Typography>
                                                  ),
                                              },
                                              h5: {
                                                  component: ({ children, ...props }) => (
                                                      <Typography
                                                          variant="h6"
                                                          gutterBottom
                                                          fontWeight="bold"
                                                          sx={{
                                                              fontSize: { xs: "0.875rem", sm: "1.25rem", md: "1.5rem" },
                                                              marginTop: "var(--space-sm)",
                                                              marginBottom: "var(--space-xs)"
                                                          }}
                                                          {...props}
                                                      >
                                                          {children}
                                                      </Typography>
                                                  ),
                                              },
                                              p: {
                                                  component: ({ children }) => (
                                                      <Typography
                                                          variant="body1"
                                                          gutterBottom
                                                          sx={{
                                                              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
                                                              marginBottom: "var(--space-sm)"
                                                          }}
                                                      >
                                                          {children}
                                                      </Typography>
                                                  ),
                                              },
                                              img: {
                                                  component: ({ src, alt }) => (
                                                      <img src={src} alt={alt} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                                                  ),
                                              },
                                              a: {
                                                  component: ({ children, href }) => (
                                                      <a href={href} className={'url'} target="_blank" rel="noopener noreferrer">
                                                          {children}
                                                      </a>
                                                  )
                                              }
                                          },
                                      }}
                            >
                                {rawMarkdownBody}
                            </Markdown>
                        </div>
                    </Grid>
                </Grid>
        </Layout>

    );
};

export default ProjectDetails;

export const pageQuery = graphql`
  query MyProjectsQuery($slug: String) {
  myImage: file(relativePath: {eq: "hello.jpeg"}) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        title
        stack
        date
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;



