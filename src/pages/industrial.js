import * as React from "react";

import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

import IndustrialCarousel from "../components/product-carousels/Industrial";
import IndustrialCategories from "../components/IndustrialCategories";
import AuthorisedDistributor from "../components/AuthorisedDistributor";
import Hr from "../utils/hr";

// markup
export default function IndustrialPage({ data: { industrialPageBanner } }) {
  const seoImage = industrialPageBanner.mainImage.asset.url;
  const image = getImage(industrialPageBanner.mainImage.asset.gatsbyImageData);
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

          <div className="p-8 pt-16">
            <div className="grid grid-cols-7 gap-2">
              <div className="md:col-span-4 col-span-7">
                <h1 className="font-gothamNarrow text-4xl md:text-6xl font-bold text-white text-shadow-md block mb-4 mt-14">
                  Min nis di nusam quaepti ipsam que
                </h1>
              </div>
              <div className="md:col-span-3 col-span-7">
                <StaticImage
                  src="../images/packaging/texaco-barrel.png"
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
            src="../images/icons/industrial.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Services"
            className="block mx-auto w-12 mb-4"
          />
          <h3 className="text-center text-preemGreen text-2xl font-bold font-gothamNarrow">
            Min nis di ditinctate nusam quaepti ipsam que voluptum
          </h3>
          <p className="text-center text-gray-500 text-md font-gothamNarrow font-normal mt-2">
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
        <div className="px-8">
          <Hr />
        </div>
        <div className="mb-8">
          <AuthorisedDistributor />
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
          gatsbyImageData(placeholder: BLURRED, width: 768, height: 600)
          url
        }
      }
    }
  }
`;
