import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-pnpm`,
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'http://localhost:3000/graphql',
      },
    },
  ],
  jsxRuntime: `automatic`,
};

export default config;
