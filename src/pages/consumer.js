import * as React from "react";

import { graphql, Link } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

import ConsumerCarousel from "../components/product-carousels/Consumer";

// markup
export default function ConsumerPage({ data: { consumerPageBanner } }) {
  const image = getImage(
    consumerPageBanner.mainImage.asset.localFile.childImageSharp
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
            <div className="p-8 md:pt-16">
              <div className="grid grid-cols-8 gap-1 mt-12">
                <div className="col-span-8 md:col-span-6">
                  <h1 className="block mb-4 text-5xl font-bold leading-none text-white lg:text-7xl font-gothamNarrow md:text-55xl text-shadow-md md:mt-24 lg:mt-20 mt:8 ">
                    Motoroljor
                    <br />
                    personbilar och
                    <br />
                    lätta transportfordon
                  </h1>
                </div>
                <div className="hidden col-span-8 md:col-span-2 md:block">
                  <StaticImage
                    src="../images/havoline-prods-mg-sae-0w-20.png"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Havoline ProDS MG SAE 0W-20"
                    className="block object-contain w-56 p-4 mx-auto lg:w-72 md:mt-12 lg:mt-2"
                  />
                </div>
              </div>
            </div>
          </BackgroundImage>
          <div className="container pt-16 mx-auto">
            <StaticImage
              src="../images/icons/consumer.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Consumer"
              transformOptions={"cover"}
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
            <ConsumerCarousel />
          </div>
          <div className="block mx-auto mb-8 text-center">
            <Link to="/product-category/engine-oils-passenger-cars-and-light-transport-vehicles">
              <span className="inline-block px-16 py-2 font-medium align-top rounded-full text-preemGreen hover:brightness-95 font-gothamNarrow bg-preemYellow">
                Visa alla produkter
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
