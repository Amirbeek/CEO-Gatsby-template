import * as React from "react"
import Layout from "../Layout";
import { header, btn } from "../styles/home.module.css";
import {graphql, Link} from "gatsby";
import Img from 'gatsby-image';

export default function Home({ data }) {
    return (
        <Layout>
            <section className={header}>
                <div>
                    <h2> Design </h2>
                    <h3>Develop & Deploy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem blanditiis distinctio
                        eligendi ipsum itaque iusto minus perspiciatis? A consequuntur cumque dolor ex fugiat in, nisi
                        porro similique voluptatem voluptatum.</p>
                    <Link to='/src/pages/blog' className={btn}>My Portfolio</Link>
                </div>
                {/* Ensure the image data exists and has the expected structure */}
                {data.file.childImageSharp && (
                    <Img fluid={data.file.childImageSharp.fluid} />
                )}
            </section>
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
    }
`;
