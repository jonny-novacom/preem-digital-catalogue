import { graphql, Link } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import AuthorisedDistributor from "../components/AuthorisedDistributor";
import MarineCarousel from "../components/product-carousels/Marine";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import MarineBanner from "../components/banners/MarineBanner";

export default function MarinePage({ data: { marineBG } }) {
  const image = getImage(marineBG.childImageSharp.gatsbyImageData);
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
            <div className="p-8 md:pt-48">
              <h1 className="block mb-4 text-4xl font-bold leading-none text-white font-gothamNarrow md:text-55xl text-shadow-md md:mt-24 mt:8">
                Min nis di nusam quaepti ipsam que
              </h1>
            </div>
          </BackgroundImage>
          <div className="container pt-16 mx-auto">
            <StaticImage
              src="../images/icons/marine.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Marine"
              transformOptions={"cover"}
              className="block w-20 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
              Min nis di ditinctate nusam quaepti ipsam que voluptum
            </h3>
            <p className="mt-2 mb-12 font-normal text-center text-gray-500 text-md font-gothamNarrow">
              Min nis di ditinctate nusam quaepti ipsam que voluptum, quossunt
              volorem perupta audipis explibus
            </p>
          </div>
          <div className="my-8">
            <MarineCarousel />
          </div>
          <div className="block mx-auto mb-8 text-center">
            <Link to="/category/marine-engine-oils">
              <span className="inline-block px-16 py-2 font-medium align-top rounded-full text-preemGreen hover:brightness-95 font-gothamNarrow bg-preemYellow">
                View all products
              </span>
            </Link>
          </div>
        </div>
        <div className="mb-8">
          <AuthorisedDistributor />
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query marineBG {
    marineBG: file(relativePath: { eq: "bg-images/marine-bg.jpg" }) {
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
