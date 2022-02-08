import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const PlaceholderImage = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "barrel.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);

  // Use like this:
  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
      className="bg-center bg-no-repeat bg-auto"
    >
      <div className="h-60"></div>
    </BackgroundImage>
  );
};
export default PlaceholderImage;
