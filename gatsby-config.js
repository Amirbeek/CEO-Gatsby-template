/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-highlight-code`,
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    // other plugins
  ],
  siteMetadata: {
    contact: "amirbek.shomurodov01@gmail.com",
    bld: [
      {
        title: "MiniDesk",
        description:
            "MiniDesk is a web application that lets users manage bookmarks and boost their productivity. Users can also use it as a browser extension with handy widgets.<br/><br/>This project was supervised by Alex Kuhn (ex-Apple Engineer), and I contributed as a Full Stack Developer and Designer.<br/><br/>This project was presented at Brunel University, and I created and presented the project’s pitch deck to an audience of 100+ people.<br/><br/>It was built with <span>Express.js</span> & <span>React.js (Material UI)</span> and deployed to Heroku.",
        links: {
          GitHub: "https://github.com/Amirbeek/MiniDesk",
          Demo: "https://minidesk.me",
          Behance: "https://www.behance.net/gallery/216938563/Minidesk-Project-Overview",
        },
        highlight: "Feature Highlight",
        path: "diagram.png",
        additional: ["minidesk.png", "minidesk1.png"],
      },
      {
        title: "COVID-19 Detector Web Application",
        description:
            "Developed under the supervision of <a href='https://www.brunel.ac.uk/people/weibo-liu1'>Dr. Weibo Liu</a>, this web application harnesses the power of a deep learning Convolutional Neural Network (CNN) to detect COVID-19 from medical images.<br/><br/>The application is engineered using <span>Flask</span>, styled with <span>Tailwind CSS</span> for a clean and modern user interface, and deployed on <span>Heroku</span> for widespread accessibility. The robust model is securely stored and managed on <span>Amazon S3</span>, ensuring high performance and scalability.",
        links: {
          GitHub: "https://github.com/Amirbeek/COVID-19-Detector-Web-Application",
          PagePath: "/covid",
          Demo: "https://www.behance.net/amirbekshomuro",
        },
        highlight: "Feature Highlight",
        path: "covid-detector.png",
        additional: [],
      },
      {
        title: "GitHub Globe",
        description:
            "If you ever visited <a href='https://github.com/home'>GitHub's homepage</a>, you will notice a 3D globe that visualizes platform's current activity.<br/><br/>I decided to recreate it with <span>Three.js</span> and make the project open-source. I built the Globe using Vasco Asturiano's <a href='https://github.com/vasturiano/three-globe?tab=readme-ov-file'>three-globe</a> as base, shaded the 3D scene to resemble a dreamy space environment, and bundled everything with Webpack.<br/><br/>Additionally, the Globe visualizes my flight history across the world from 2022 to 2023. Deployed to <a href='https://vercel.com'>Vercel</a>.",
        links: {
          GitHub: "https://github.com/Amirbeek/github-globe-visualization",
          PagePath: "/gitglobe",
          Demo: "https://github-globe-visualization.vercel.app",
        },
        highlight: "Feature Highlight",
        path: "GitHub_Globe1.png",
        additional: [],
      },
      {
        title: "Flight Booking System",
        description:
            "This system, developed using <span>Java Swing</span>, transforms the flight booking process by incorporating interactive maps that simplify user navigation.<br/><br/>Additionally, it allows users to purchase food and products directly from the interface, integrating travel with retail options seamlessly.<br/><br/>Supervised by <a href='https://www.brunel.ac.uk/people/zear-ibrahim'>Dr. Zear Ibrahim</a> from Brunel University, I led the project's design and development, functioning as both the Java developer and system designer. The project, created for <span>Java GUI</span>, demonstrates innovative potential for comprehensive travel and retail solutions within a single platform.",
        links: {
          GitHub: "https://github.com/Amirbeek/Flight_System",
          Behance: "https://www.behance.net/gallery/216384021/Flight-Booking-System",
          Video: "https://www.youtube.com/watch?v=UzrsrJYfmdY",
        },
        highlight: "Feature Highlight",
        path: "Flight.jpg",
        additional: [],
      },
    ],
  },
};
