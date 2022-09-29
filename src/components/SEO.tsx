import { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`;

const SEO: FC = () => {
  const { site } = useStaticQuery(query);

  const { title, description } = site.siteMetadata;

  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
        <html lang="en" />
    </Helmet>
  );
};
export default SEO;
