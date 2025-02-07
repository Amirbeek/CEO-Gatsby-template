/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes, setBodyAttributes }) => {
  setHtmlAttributes({ lang: 'en' });
  if (typeof window !== 'undefined') {
  }
};

