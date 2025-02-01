import React from "react";
import Img from "gatsby-image";
import { featured, details } from "../styles/project-details.module.css";
import Layout from "../Layout";
import { graphql } from "gatsby";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Styled code block for a professional look
const CodeBlock = styled("code")(({ theme }) => ({
  backgroundColor: "#1e1e1e", // Dark background like VS Code
  color: "#f8f8f2", // Light text
  padding: "8px 12px",
  borderRadius: "6px",
  fontFamily: "monospace",
  fontSize: "0.95rem",
  display: "inline-block",
  border: `1px solid ${theme.palette.grey[700]}`,
  boxShadow: `0px 4px 6px rgba(0, 0, 0, 0.1)`,
}));

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <Box className={details} sx={{ maxWidth: 900, mx: "auto", p: 3 }}>
        {/* Project Title */}
        <Typography variant="h3" gutterBottom fontWeight="bold">
          {title}
        </Typography>

        {/* Stack Info */}
        <Typography variant="body1" fontWeight="bold" color="primary">
          {stack}
        </Typography>

        {/* Featured Image */}
        <Box className={featured} sx={{ my: 3 }}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </Box>

        {/* Markdown Content with MUI Styling */}
        <Typography
          component="div"
          sx={{
            "& code": {
              backgroundColor: "#1e1e1e",
              color: "#f8f8f2",
              padding: "6px 10px",
              borderRadius: "6px",
              fontFamily: "monospace",
              fontSize: "0.9rem",
              border: "1px solid #555",
              display: "inline-block",
            },
            "& pre": {
              backgroundColor: "#1e1e1e",
              padding: "12px",
              borderRadius: "8px",
              overflowX: "auto",
              border: "1px solid #444",
            },
            "& img": {
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px",
              display: "block",
              my: 2,
            },
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Box>
    </Layout>
  );
};

export default ProjectDetails;

// GraphQL Query
export const pageQuery = graphql`
  query MyProjectsQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
