import React, {lazy, useEffect, useState} from "react";
import Img from "gatsby-image";
import Layout from "../Layout";
import { graphql } from "gatsby";
import { Typography, Button } from "@mui/material";
const Grid = lazy(() => import("@mui/material/Grid"));

import Markdown from "markdown-to-jsx";
import "prismjs/themes/prism-okaidia.css";
import * as styles from "../styles/project-details.module.css";
import UserInfo from "../components/UserInfo";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { navigate } from "gatsby";
import UnsplashGallery from "../components/UnsplashGallery";

const getTypographyComponent = (variant, marginTop = '0', marginBottom = '0', fontWeight = 'normal') => {
    return ({ children, ...props }) => (
        <Typography variant={variant} gutterBottom sx={{ marginTop, marginBottom, fontSize: props.fontSize, fontWeight }} {...props}>
            {children}
        </Typography>
    );
};

const markdownOverrides = {
    code: ({ children, className }) => (
        <pre style={{ backgroundColor: '#263238', padding: '20px', width: '90%' }} className={className}>
            <code>{children}</code>
        </pre>
    ),
    h1: getTypographyComponent("h2", "var(--space-lg)", "var(--space-md)", "bold"),
    h2: getTypographyComponent("h3", "var(--space-lg)", "var(--space-md)"),
    h3: getTypographyComponent("h4", "var(--space-md)", "var(--space-sm)"),
    h4: getTypographyComponent("h5", "var(--space-md)", "var(--space-sm)"),
    h5: getTypographyComponent("h6", "var(--space-sm)", "var(--space-xs)", "bold"),
    p: getTypographyComponent("body1", "0", "var(--space-sm)"),
    img: ({ src, alt }) => (
        <img src={src} alt={alt} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
    ),
    a: ({ children, href }) => (
        <a href={href} className={'url'} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    ),
    ul: getTypographyComponent("body1"),
    li: getTypographyComponent("body1", "0", "8px"),
    blockquote: getTypographyComponent("blockquote", "20px", "0", "italic")
};

const ProjectDetails = ({ data }) => {
    const { rawMarkdownBody } = data.markdownRemark;
    const { title, stack, featuredImg, date, slug } = data.markdownRemark.frontmatter;
    const Image = data.myImage.childImageSharp.fluid;
    const isAlbum = slug === "myalbum";
    let sanitizedContent = rawMarkdownBody;


    useEffect(() => {
        if (typeof window !== "undefined") {
             sanitizedContent = rawMarkdownBody;
        }
    }, [rawMarkdownBody]);

    function formatDate(isoString) {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
        });
    }
    const fixedDate = formatDate(date);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import("prismjs").then(Prism => {
                Prism.highlightAll();
            });
        }
    }, [data]);

    const handleRedirect = () => {
        navigate('/blog');
    };

    return (
        <Layout>
            <Grid
                container
                spacing={0}
                sx={{
                    mt: {
                        xs: '0',
                        sm: '20px',
                        md: '24px',
                        lg: '32px',
                    }
                }}
                justifyContent="center"
            >
                <Grid
                    item
                    xs={12} sm={2}
                    sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}
                >
                    <div className={styles.back}>
                        <Button sx={{ borderRadius: '100px!important' }}
                                onClick={handleRedirect}
                        >
                            <ArrowBackIcon className={styles.arrow} />
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={10} md={10} lg={10}>
                    <div style={{ width: '100%' }}>
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

                        <UserInfo fixedDate={fixedDate} Image={Image} />

                        <Img fluid={featuredImg.childImageSharp.fluid} alt={title} />

                        <Markdown
                            className={'text-nl'}
                            options={{ overrides: markdownOverrides }}
                        >
                            {sanitizedContent}
                        </Markdown>
                        {isAlbum ? <UnsplashGallery /> : ''}
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
                slug
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