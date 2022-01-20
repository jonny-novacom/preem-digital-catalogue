import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import SanityBlockContent from "@sanity/block-content-to-react";
import { GoChevronRight } from "react-icons/go";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

export default function SingleProductPage({ data: { produkt } }) {
  return (
    <>
      <div key={produkt.id}>
        <SearchEngineOptimisation
          title={`${produkt.produkt} ${produkt.sae}`}
          image={produkt.mainImage?.asset?.url}
          description={produkt.shortDescription}
        />
        <div className="mt-36">
          <h1 className="font-gothamNarrow font-bold text-center text-3xl mb-2 text-preemGreen block">
            {produkt.produkt} {produkt.sae}
          </h1>
          <h3 className="text-center text-gray-500 text-lg font-gothamNarrow font-medium mt-2 px-6">
            {produkt.shortDescription}
          </h3>
          <GatsbyImage
            image={produkt.mainImage.asset.gatsbyImageData}
            alt={produkt.produkt}
            objectFit="contain"
            className="block mx-auto h-60 w-max max-w-full p-4 mt-4"
          />
        </div>
        <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal mt-3 mb-4 px-6">
          <SanityBlockContent
            blocks={produkt._rawApplikationer}
            projectId="1tbc9cjy"
            dataset="production"
          />
        </div>
        <div className="grid grid-cols-5 gap-2 px-6">
          <div
            className={
              produkt.sae !== null
                ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2`
                : `hidden`
            }
          >
            SAE
          </div>
          <div
            className={
              produkt.sae !== null
                ? `text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3`
                : `hidden`
            }
          >
            {produkt.sae}
          </div>
          <div
            className={
              produkt.farg !== null
                ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2`
                : `hidden`
            }
          >
            Färg
          </div>
          <div
            className={
              produkt.farg !== null
                ? `text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3`
                : `hidden`
            }
          >
            {produkt.farg}
          </div>
          <div
            className={
              produkt.isovg !== null
                ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2`
                : `hidden`
            }
          >
            ISO VG
          </div>
          <div
            className={
              produkt.isovg !== null
                ? `text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3`
                : `hidden`
            }
          >
            {produkt.isovg}
          </div>
          <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
            Viskositet cSt, mm2/s 40°C
          </div>
          <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
            {produkt.viskositet40}
          </div>
          <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
            Viskositet cSt, mm2/s 100°C
          </div>
          <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
            {produkt.viskositet100}
          </div>
          <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
            VI
          </div>
          <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
            {produkt.vi}
          </div>
          <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
            Flampunkt °C
          </div>
          <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
            {produkt.flampunkt}
          </div>
          <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
            Lägstaflyttemp °C
          </div>
          <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
            {produkt.lagstaflyttemp}
          </div>
        </div>
        <div className="grid grid-flow-col auto-cols-min mt-4 px-6 mb-10">
          <div className="mr-4">
            <p className="items-center md:flex-initial md:w-max bg-preemYellow">
              <a
                href={produkt.pds}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center px-3 py-2 text-white transition md:justify-start bg-novaBlue hover:bg-opacity-80 font-gothamNarrow font-bold text-sm"
              >
                See PDS{" "}
                <span className="bg-preemGreen w-4 h-4 rounded-full inline-block ml-3 mt-0.5">
                  <GoChevronRight className="text-white text-base text-center block mx-auto my-auto" />
                </span>
              </a>
            </p>
          </div>
          <div>
            <p className="items-center md:flex-initial md:w-max bg-preemGreen">
              <a
                href={produkt.sds}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center px-3 py-2 text-white transition md:justify-start bg-novaBlue hover:bg-opacity-80 font-gothamNarrow font-bold text-sm"
              >
                See SDS{" "}
                <span className="bg-preemYellow w-4 h-4 rounded-full inline-block ml-3 mt-0.5">
                  <GoChevronRight className="text-white text-base text-center block mx-auto my-auto" />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query produkts($slug: String!) {
    produkt: sanityProduct(slug: { current: { eq: $slug } }) {
      produkt
      shortDescription
      id
      _rawApplikationer
      sae
      farg
      isovg
      viskositet40
      viskositet100
      vi
      flampunkt
      lagstaflyttemp
      pds
      sds
      slug {
        current
      }
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED, width: 600, height: 600)
          url
        }
      }
    }
  }
`;
