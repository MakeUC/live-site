import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';

const FooterImg: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "footer_retro.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <></>;
  // return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default FooterImg;
