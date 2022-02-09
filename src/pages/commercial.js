import * as React from "react";

import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

import CommercialCarousel from "../components/product-carousels/Commercial";
import CommercialCategories from "../components/CommercialCategories";
import AuthorisedDistributor from "../components/AuthorisedDistributor";

// markup
export default function CommercialPage({ data: { commercialBG } }) {
  const seoImage = commercialBG.publicURL;
  const image = getImage(commercialBG.childImageSharp.gatsbyImageData);
  const bgImage = convertToBgImage(image);

  return (
    <>
      <SearchEngineOptimisation
        title="Preem Digital Catalogue"
        image={seoImage}
        description=""
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-40">
          <BackgroundImage
            Tag="section"
            // Spread bgImage into BackgroundImage:
            {...bgImage}
            preserveStackingContext
            className="mt-6 bg-cover bg-img-height h-3/4"
          >
            <div className="p-8">
              <div className="flex justify-end">
                <StaticImage
                  src="../images/texaco-logo.png"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Texaco"
                  transformOptions={"cover"}
                />
              </div>
            </div>
            <div className="p-8 md:pt-32">
              <div className="grid grid-cols-7 gap-2">
                <div className="col-span-7 md:col-span-4">
                  <h1 className="block mt-24 mb-4 text-4xl font-bold text-white font-gothamNarrow md:text-6xl text-shadow-md">
                    Motoroljor tunga fordon
                  </h1>
                </div>
                <div className="col-span-7 md:col-span-3">
                  <StaticImage
                    src="../images/commercial-packshot.png"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Texaco"
                    className="block object-contain w-56 p-4 mx-auto mt-4"
                  />
                </div>
              </div>
            </div>
          </BackgroundImage>
          <div className="container pt-16 mx-auto">
            <StaticImage
              src="../images/icons/commercial.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Services"
              className="block w-20 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
              Min nis di ditinctate nusam quaepti ipsam que voluptum
            </h3>
            <p className="mt-2 font-normal text-center text-gray-500 text-md font-gothamNarrow">
              Min nis di ditinctate nusam quaepti ipsam que voluptum, quossunt
              volorem perupta audipis explibus
            </p>
          </div>
          <div className="my-8">
            <CommercialCarousel />
          </div>
          <div className="my-8">
            <CommercialCategories />
          </div>
          <div>
            <AuthorisedDistributor />
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query commercialBG {
    commercialBG: file(relativePath: { eq: "bg-images/commercial-bg.jpg" }) {
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
