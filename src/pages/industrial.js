import * as React from "react";

import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

import IndustrialCarousel from "../components/product-carousels/Industrial";
import IndustrialCategories from "../components/IndustrialCategories";

// markup
export default function IndustrialPage({ data: { industrialPageBanner } }) {
  const image = getImage(
    industrialPageBanner.mainImage.asset.localFile.childImageSharp
      .gatsbyImageData
  );
  const bgImage = convertToBgImage(image);

  return (
    <>
      <SearchEngineOptimisation
        title="Preem Digital Catalogue"
        image=""
        description=""
      />

      <div className="max-w-screen-lg mx-auto">
        <BackgroundImage
          Tag="section"
          // Spread bgImage into BackgroundImage:
          {...bgImage}
          preserveStackingContext
          className="mt-24 bg-cover bg-img-height h-2/3"
        >
          <div className="p-8">
            <div className="flex justify-end">
              <StaticImage
                src="../images/texaco-logo.png"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Texaco"
                transformOptions={"cover"}
                className="mt-12 mr-6"
              />
            </div>
          </div>

          <div className="p-8 md:pt-32">
            <div className="grid grid-cols-8 gap-1 mt-12">
              <div className="col-span-8 md:col-span-6">
                <h1 className="block mb-4 text-5xl font-bold leading-none text-white lg:text-7xl font-gothamNarrow md:text-6xl text-shadow-md md:mt-24 lg:mt-20 mt:8 ">
                  Min nis di nusam quaepti ipsam que
                </h1>
              </div>
              <div className="hidden col-span-8 md:col-span-2 md:block">
                <StaticImage
                  src="../images/packaging/texaco-barrel.png"
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
            src="../images/icons/industrial.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Services"
            className="block w-12 mx-auto mb-4"
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
          <IndustrialCarousel />
        </div>
        <div className="mt-8">
          <IndustrialCategories />
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query industrialPageBanner {
    industrialPageBanner: sanityBannerImages(
      title: { eq: "Industrial Page Banner" }
    ) {
      title
      slug {
        current
      }
      mainImage {
        asset {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
