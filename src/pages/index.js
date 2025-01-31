import * as React from "react"
import Layout from "../Layout";
import {graphql} from "gatsby";
import Header from "../components/Header";
import Body from "../components/Body";
import Projects from "../components/Projects";
import {Typography} from "@mui/material";

export default function Home({ data }) {
    const projects = data.site.siteMetadata.bld
    const icon =data.file.childImageSharp.fluid
    return (
        <Layout>
            <Header Icon={icon} />
            <div className="mt"></div>
            <Body/>
            <Typography variant="h3" className='mt' gutterBottom >
                Projects
            </Typography>
            {projects.map(project =>(
                <Projects projects={project} />
            ))}
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
 }
`;
