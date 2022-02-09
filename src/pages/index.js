import * as React from "react";

import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

// markup
export default function IndexPage({ data: { homeBG } }) {
  const seoImage = homeBG.publicURL;
  const image = getImage(homeBG.childImageSharp.gatsbyImageData);
  const bgImage = convertToBgImage(image);

  return (
    <>
      <SearchEngineOptimisation
        title="Preem Digital Catalogue"
        image={seoImage}
        description=""
      />
      <div className="max-w-screen-lg mx-auto">
        <BackgroundImage
          Tag="section"
          // Spread bgImage into BackgroundImage:
          {...bgImage}
          preserveStackingContext
          className="h-screen bg-img-height"
        >
          <div className="grid content-between w-screen h-screen max-w-screen-lg grid-cols-1 gap-4 p-4 md:p-12">
            <div className="flex justify-end">
              <StaticImage
                src="../images/texaco-logo.png"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Texaco"
                className="mr-6 mt-36"
              />
            </div>
            <div className="md:-mt-48">
              <h1 className="block mb-4 text-6xl font-bold text-white font-gothamNarrow text-shadow-md">
                Smörjmedel
              </h1>
              <h2 className="block w-11/12 text-3xl font-bold text-white font-gothamNarrow text-shadow-md">
                Texaco smörjmedel säljs i Sverige av Preem, på Preems stationer
                och av Preems återförsäljare
              </h2>
            </div>
            <div>
              <span className="block border-t-2 border-white font-gothamNarrow">
                <span className="block mt-4 text-xl font-medium text-white">
                  Kem drivemedel bränsle – {new Date().getFullYear()}
                </span>
              </span>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </>
  );
}

export const query = graphql`
  query homeBG {
    homeBG: file(relativePath: { eq: "bg-images/home-bg.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
