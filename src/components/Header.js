import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import * as styles from '../styles/header.module.css';

export default function Header() {

    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "sticker.webp" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <div className={styles.MainWrapper}>
            <div
                className={styles.Icon}
            >
                <Img fluid={data.file.childImageSharp.fluid} />
            </div>
            <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            >
                Hi, I'm Amirbek <span className={'short-name'}>(Amir)</span>
                <br />
                I <span className={styles.PrimaryText}>
                    <ReactTyped
                        strings={["design", "develop", "create"]}
                        typeSpeed={100}
                        backSpeed={50}
                        backDelay={1000}
                        startDelay={500}
                        loop
                    />
                </span> user-friendly products.
            </motion.h1>
        </div>
    );
}
