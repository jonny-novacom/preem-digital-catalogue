import * as React from "react";

import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

import CommercialCarousel from "../components/product-carousels/Commercial";
import CommercialCategories from "../components/CommercialCategories";
import { GoChevronRight } from "react-icons/go";

// markup
export default function CommercialPage({ data: { commercialPageBanner } }) {
  const seoImage = commercialPageBanner.mainImage.asset.url;
  const image = getImage(commercialPageBanner.mainImage.asset.gatsbyImageData);
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
          className="bg-img-height h-2/3 bg-cover mt-24"
        >
          <div className="w-screen p-8">
            <div className="flex justify-end">
              <StaticImage
                src="../images/texaco-logo.png"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Texaco"
                transformOptions={"cover"}
                className="mt-4"
              />
            </div>
          </div>
          <div className="p-8 pt-16">
            <div className="grid grid-cols-7 gap-2">
              <div className="md:col-span-4 col-span-7">
                <h1 className="font-gothamNarrow text-4xl md:text-6xl font-bold text-white text-shadow-md block mb-4 mt-24">
                  Motoroljor tunga fordon
                </h1>
              </div>
              <div className="md:col-span-3 col-span-7">
                <StaticImage
                  src="../images/commercial-packshot.png"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Texaco"
                  className="object-contain w-56 p-4 mt-4 block mx-auto"
                />
              </div>
            </div>
          </div>
        </BackgroundImage>
        <div className="container mx-auto pt-16">
          <StaticImage
            src="../images/icons/commercial.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Services"
            className="block mx-auto w-20 mb-4"
          />
          <h3 className="text-center text-preemGreen text-2xl font-bold font-gothamNarrow">
            Min nis di ditinctate nusam quaepti ipsam que voluptum
          </h3>
          <p className="text-center text-gray-500 text-md font-gothamNarrow font-medium mt-2">
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
        <div className="bg-preemYellow p-4">
          <div className="block mx-auto text-center">
            <span className="text-white font-gothamNarrow font-medium inline-block align-top">
              View all products
            </span>
            <span className="bg-preemGreen w-5 h-5 rounded-full inline-block ml-4">
              <GoChevronRight
                className="text-white text-lg text-center block mx-auto"
                style={{ paddingTop: "1px", paddingLeft: "1px" }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query commercialPageBanner {
    commercialPageBanner: sanityBannerImages(
      title: { eq: "Commercial Page Banner" }
    ) {
      title
      slug {
        current
      }
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED, width: 768, height: 600)
          url
        }
      }
    }
  }
`;
