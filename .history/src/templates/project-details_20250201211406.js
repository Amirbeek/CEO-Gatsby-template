import React from "react"
import Img from "gatsby-image"
import {featured, details, html_} from '../styles/project-details.module.css'
import Layout from "../Layout";
import {graphql} from "gatsby";
import {Typography,Box } from '@mui/material';
import { styled } from "@mui/system";

const ProjectDetails = ({data}) => {
    const {html} = data.markdownRemark;
    const {title, stack, featuredImg} = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={details}>
            <Typography variant="h3" gutterBottom fontWeight="bold">{title}</Typography>
            <Typography variant="body3" fontWeight="bold">{stack}</Typography>
                <div className={featured}>
                     <Img fluid={featuredImg.childImageSharp.fluid} />
                </div>
                <Typography
                component="div"
                sx={{
                  "& code": {
                    backgroundColor: "grey.200",
                    padding: "2px 4px",
                    borderRadius: "4px",
                    fontFamily: "monospace",
                  },
                  "& img": {
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    display: "block",
                    my: 2, // Adds some margin for spacing
                  },
                }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
        </Layout>
    )
}

export default ProjectDetails

export const pageQuery = graphql`
    query MyProjectsQuery($slug: String) {
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
`