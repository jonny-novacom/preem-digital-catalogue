import { graphql, Link } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import TransmissionOilsCarousel from "../components/product-carousels/TransmissionOils";

export default function TransmissionOilsPage({
  data: { transmissionOilsPageBanner },
}) {
  const image = getImage(
    transmissionOilsPageBanner.mainImage.asset.localFile.childImageSharp
      .gatsbyImageData
  );
  const bgImage = convertToBgImage(image);
  const seoImage = transmissionOilsPageBanner.mainImage.asset.url;

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
                  className="w-12 h-16"
                />
              </div>
            </div>
            <div className="p-8 md:pt-48">
              <h1 className="block mb-4 text-5xl font-bold leading-none text-white lg:text-7xl font-gothamNarrow md:text-6xl text-shadow-md mt:8 lg:w-3/4 md:w-10/12">
                Min nis di nusam quaepti ipsam que
              </h1>
            </div>
          </BackgroundImage>
          <div className="container pt-16 mx-auto">
            <StaticImage
              src="../images/icons/power-gen.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Chemicals"
              transformOptions={"cover"}
              className="block w-20 mx-auto mb-4"
            />
          </div>
          <div className="my-8">
            <TransmissionOilsCarousel />
          </div>
          <div className="block mx-auto mb-8 text-center">
            <Link to="/category/transmission-oils">
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
  query transmissionOilsPageBanner {
    transmissionOilsPageBanner: sanityBannerImages(
      title: { eq: "Transmission Oils Page Banner" }
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
          url
        }
      }
    }
  }
`;
