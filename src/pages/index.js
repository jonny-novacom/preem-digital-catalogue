import * as React from "react";

import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

// markup
export default function IndexPage({ data: { homePageBanner } }) {
  const seoImage = homePageBanner.mainImage.asset.url;
  const image = getImage(homePageBanner.mainImage.asset.gatsbyImageData);
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
          className="bg-img-height h-screen"
        >
          <div className="grid grid-cols-1 gap-4 w-screen md:p-12 p-4 max-w-screen-lg">
            <div className="flex justify-end">
              <StaticImage
                src="../images/texaco-logo.png"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Texaco"
                className="object-contain w-12 h-16 p-4 mt-32"
              />
            </div>

            <div className="justify-start mt-4">
              <h1 className="font-gothamNarrow text-6xl font-bold text-white text-shadow-md block mb-4 mt-4">
                Smörjmedel
              </h1>
              <h2 className="font-gothamNarrow text-3xl font-bold text-white text-shadow-md block w-11/12">
                Texaco smörjmedel säljs i Sverige av Preem, på Preems stationer
                och av Preems återförsäljare
              </h2>
            </div>
            <div className="border-t-2 border-white md:mt-56 mt-24 font-gothamNarrow">
              <span className="text-white text-xl font-medium block mt-4">
                Kem drivemedel bränsle – {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </>
  );
}

export const query = graphql`
  query homePageBanner {
    homePageBanner: sanityBannerImages(title: { eq: "Home Page Banner" }) {
      title
      slug {
        current
      }
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED, width: 768, height: 1024)
          url
        }
      }
    }
  }
`;
