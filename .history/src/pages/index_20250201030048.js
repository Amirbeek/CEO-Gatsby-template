import * as React from "react"
import Layout from "../Layout";
import {graphql} from "gatsby";
import Header from "../components/Header";
import Body from "../components/Body";
import Projects from "../components/Projects";
import {Typography} from "@mui/material";
import More from "../components/More";

export default function Home({ data }) {
    const projects = data.site.siteMetadata.bld
    const icon =data.file.childImageSharp.fluid
    const imgData = data.allFile.edges

    return (
        <Layout>
            <Header Icon={icon} />
            <div className="mt "></div>
            <Body/>
            <Typography variant="h3" className='mt' gutterBottom >
                Projects
            </Typography>
            {projects.map(project =>(
                <Projects projects={project} imgData={imgData} key={project.title} />
            ))}
            <Typography variant="h3" className='mt text-nl' gutterBottom >
                More
            </Typography>
            <More/>
        </Layout>
    );
}

export const query = graphql`
    query Banner {
        file(relativePath: {eq: "sticker.webp"}) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
         site {
    siteMetadata {
      bld {
        additional
        description
        highlight
        links {
          Behance
          Demo
          GitHub
          PagePath
          Video
        }
        path
        title
      }
    }
  }
   allFile(
    filter: {sourceInstanceName: {eq: "images"}, relativePath: {glob: "main/*"}}
  ) {
    edges {
      node {
        childImageSharp {
         
         fluid {
                  ...GatsbyImageSharpFluid_withWebp
                  originalName
              }
        }
      }
    }
  }
 }
`;
