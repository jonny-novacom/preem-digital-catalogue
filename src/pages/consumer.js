import * as React from "react";

import { graphql, Link } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

import { AiOutlineRight } from "react-icons/ai";
import ConsumerCarousel from "../components/product-carousels/Consumer";

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
          className="flex items-center justify-center bg-img-height h-2/3 bg-cover mt-24"
        >
          <div className="grid grid-cols-1 gap-4 w-screen p-8">
            <div className="flex justify-end">
              <StaticImage
                src="../images/texaco-logo.png"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Texaco"
                className="object-contain w-12 h-16 p-4 mt-4 block mx-auto"
              />
            </div>

            <div className="justify-start">
              <h1 className="font-gothamNarrow text-4xl md:text-6xl font-bold text-white text-shadow-md block mb-4 mt-32">
                Motoroljor personbilar och lätta transportfordon
              </h1>
            </div>
          </div>
        </BackgroundImage>
        <div className="container mx-auto pt-16">
          <StaticImage
            src="../images/icons/consumer.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Services"
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
                <AiOutlineRight className="text-white inline-block -mt-2" />
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