import React from "react";
import Img from "gatsby-image";
import { featured, details, html_ } from '../styles/project-details.module.css';
import Layout from "../Layout";
import { graphql } from "gatsby";
import { Grid, Typography, Box } from '@mui/material';

const ProjectDetails = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { title, stack, featuredImg } = frontmatter;

  return (
    <Layout>
      <Box className={details} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" gutterBottom component="h1" fontWeight="bold">
              {title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              {stack}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: html }} className={`${html_} text-nl`} />
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={featured}>
              <Img fluid={featuredImg.childImageSharp.fluid} alt={title} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default ProjectDetails;

export const pageQuery = graphql`
  query ProjectDetailsQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        stack
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
