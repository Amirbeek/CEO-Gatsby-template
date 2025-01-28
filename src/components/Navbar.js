import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";

export default function Navbar() {
    const data = useStaticQuery(graphql`
     query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }`)
    const {title} = data.site.siteMetadata
    return (
        <nav>
            <h1>{title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/projects">Portfolio</Link>
            </div>
        </nav>
    )
}
