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
        <div className="max-w-screen-md mx-auto">
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
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              SAE
            </div>
            <div
              className={
                produkt.sae !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.sae}
            </div>
            <div
              className={
                produkt.farg !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Färg
            </div>
            <div
              className={
                produkt.farg !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.farg}
            </div>

            <div
              className={
                produkt.aromathalt !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Aromathalt %
            </div>
            <div
              className={
                produkt.aromathalt !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.aromathalt}
            </div>

            <div
              className={
                produkt.kokpunkt !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Kokpunkt (koncentrat)
            </div>
            <div
              className={
                produkt.kokpunkt !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.kokpunkt}
            </div>

            <div
              className={
                produkt.isovg !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              ISO VG
            </div>
            <div
              className={
                produkt.isovg !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.isovg}
            </div>

            <div
              className={
                produkt.densitet !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Densitet kg/m³
            </div>
            <div
              className={
                produkt.densitet !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.densitet}
            </div>
            <div
              className={
                produkt.viskositet40 !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Viskositet cSt, mm2/s 40°C
            </div>
            <div
              className={
                produkt.viskositet40 !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.viskositet40}
            </div>

            <div
              className={
                produkt.viskositet100 !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Viskositet cSt, mm2/s 100°C
            </div>
            <div
              className={
                produkt.viskositet100 !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.viskositet100}
            </div>

            <div
              className={
                produkt.vi !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              VI
            </div>
            <div
              className={
                produkt.vi !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.vi}
            </div>

            <div
              className={
                produkt.tbnbastal !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              TBN Bastal
            </div>
            <div
              className={
                produkt.tbnbastal !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.tbnbastal}
            </div>

            <div
              className={
                produkt.flampunkt !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Flampunkt °C
            </div>
            <div
              className={
                produkt.flampunkt !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.flampunkt}
            </div>

            <div
              className={
                produkt.brytningsindex !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Brytningsindex
            </div>
            <div
              className={
                produkt.brytningsindex !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.brytningsindex}
            </div>

            <div
              className={
                produkt.lagstaflyttemp !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Lägstaflyttemp °C
            </div>
            <div
              className={
                produkt.lagstaflyttemp !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.lagstaflyttemp}
            </div>

            <div
              className={
                produkt.nlgi !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              NLGI
            </div>
            <div
              className={
                produkt.nlgi !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.nlgi}
            </div>

            <div
              className={
                produkt.tval !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Tvål
            </div>
            <div
              className={
                produkt.tval !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.tval}
            </div>

            <div
              className={
                produkt.basolja40 !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Basolja cSt 40°C
            </div>
            <div
              className={
                produkt.basolja40 !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.basolja40}
            </div>

            <div
              className={
                produkt.tempomrade !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Tempområde °C
            </div>
            <div
              className={
                produkt.tempomrade !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.tempomrade}
            </div>
          </div>
          <div className="grid grid-flow-col auto-cols-max mt-4 px-6 mb-10 print:hidden">
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
      </div>
    </>
  );
}

export const query = graphql`
  query produkts($slug: String!) {
    produkt: sanityProduct(slug: { current: { eq: $slug } }) {
      id
      produkt
      _rawApplikationer
      sae
      farg
      isovg
      densitet
      kokpunkt
      brytningsindex
      viskositet40
      viskositet100
      vi
      flampunkt
      lagstaflyttemp
      pds
      sds
      newProduct
      nlgi
      tval
      basolja40
      tempomrade
      tbnbastal
      aromathalt
      shortDescription
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
