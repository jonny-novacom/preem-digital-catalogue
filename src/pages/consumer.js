import * as React from "react";

import { graphql, Link } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

import ConsumerCarousel from "../components/product-carousels/Consumer";
import { GoChevronRight } from "react-icons/go";

// markup
export default function ConsumerPage({ data: { consumerPageBanner } }) {
  const seoImage = consumerPageBanner.mainImage.asset.url;
  const image = getImage(consumerPageBanner.mainImage.asset.gatsbyImageData);
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
                className="mt-8 mr-8"
              />
            </div>
          </div>
          <div className="p-8 md:pt-16">
            <div className="grid grid-cols-8 gap-1 mt-12">
              <div className="md:col-span-6 col-span-8">
                <h1 className="font-gothamNarrow text-4xl md:text-55xl font-bold text-white text-shadow-md block mb-4 md:mt-24 mt:8 leading-none">
                  Motoroljor
                  <br />
                  personbilar och
                  <br />
                  lätta transportfordon
                </h1>
              </div>
              <div className="md:col-span-2 col-span-8">
                <StaticImage
                  src="../images/havoline-prods-mg-sae-0w-20.png"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Havoline ProDS MG SAE 0W-20"
                  className="object-contain w-56 p-4 md:mt-12 block mx-auto"
                />
              </div>
            </div>
          </div>
        </BackgroundImage>
        <div className="container mx-auto pt-16">
          <StaticImage
            src="../images/icons/consumer.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Consumer"
            transformOptions={"cover"}
            className="block mx-auto w-20 mb-4"
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
          <ConsumerCarousel />
        </div>
        <div className="bg-preemYellow p-4">
          <div className="block mx-auto text-center">
            <Link to="/product-category/engine-oils-passenger-cars-and-light-transport-vehicles">
              <span className="text-white font-gothamNarrow font-medium inline-block align-top">
                View all products
              </span>
              <span className="bg-preemGreen w-5 h-5 rounded-full inline-block ml-4">
                <GoChevronRight
                  className="text-white text-lg text-center block mx-auto"
                  style={{ paddingTop: "1px", paddingLeft: "1px" }}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query consumerPageBanner {
    consumerPageBanner: sanityBannerImages(
      title: { eq: "Consumer Page Banner" }
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
