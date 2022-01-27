import { graphql } from "gatsby";
import React from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import { Accordion } from "react-bootstrap";
import { GoChevronRight } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";

export default function SingleProductPage({ data: { categories } }) {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-36 mb-20">
          <h1 className="font-gothamNarrow font-bold text-center text-3xl mb-4 text-preemGreen block">
            {categories.titleSwedish}
          </h1>

          {categories.product.map((product) => (
            <Accordion className="inner">
              <Accordion.Item eventKey={product.id}>
                <Accordion.Header>
                  <span
                    className={
                      product.featured === true
                        ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2`
                        : `hidden`
                    }
                  >
                    <AiFillStar />
                  </span>
                  {product.produkt}
                  <span
                    className={
                      product.sae !== null
                        ? `font-gothamNarrow font-normal text-left text-md text-gray-700 ml-1`
                        : `hidden`
                    }
                  >
                    {" "}
                    SAE
                  </span>
                  <span
                    className={
                      product.sae !== null
                        ? `text-left text-gray-700 text-md font-gothamNarrow font-normal inline-block ml-1`
                        : `hidden`
                    }
                  >
                    {product.sae}
                  </span>
                  <span
                    className={
                      product.newProduct === true
                        ? `text-left text-red-700 text-sm font-gothamNarrow font-bold italic ml-1.5`
                        : `hidden`
                    }
                  >
                    {" "}
                    NY!
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="pr-4 pt-1 pb-4 pl-10">
                    <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal mt-2 mb-4">
                      <SanityBlockContent
                        blocks={product._rawApplikationer}
                        projectId="1tbc9cjy"
                        dataset="production"
                      />
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      <div
                        className={
                          product.sae !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        SAE
                      </div>
                      <div
                        className={
                          product.sae !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.sae}
                      </div>

                      <div
                        className={
                          product.farg !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Färg
                      </div>
                      <div
                        className={
                          product.farg !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.farg}
                      </div>

                      <div
                        className={
                          product.kokpunkt !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Kokpunkt (koncentrat)
                      </div>
                      <div
                        className={
                          product.kokpunkt !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.kokpunkt}
                      </div>

                      <div
                        className={
                          product.isovg !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        ISO VG
                      </div>
                      <div
                        className={
                          product.isovg !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.isovg}
                      </div>

                      <div
                        className={
                          product.densitet !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Densitet kg/m³
                      </div>
                      <div
                        className={
                          product.densitet !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.densitet}
                      </div>

                      <div
                        className={
                          product.viskositet40 !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Viskositet cSt, mm2/s 40°C
                      </div>
                      <div
                        className={
                          product.viskositet40 !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.viskositet40}
                      </div>

                      <div
                        className={
                          product.viskositet100 !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Viskositet cSt, mm2/s 100°C
                      </div>
                      <div
                        className={
                          product.viskositet100 !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.viskositet100}
                      </div>

                      <div
                        className={
                          product.vi !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        VI
                      </div>
                      <div
                        className={
                          product.vi !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.vi}
                      </div>

                      <div
                        className={
                          product.tbnbastal !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        TBN Bastal
                      </div>
                      <div
                        className={
                          product.tbnbastal !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.tbnbastal}
                      </div>

                      <div
                        className={
                          product.flampunkt !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Flampunkt °C
                      </div>
                      <div
                        className={
                          product.flampunkt !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.flampunkt}
                      </div>

                      <div
                        className={
                          product.brytningsindex !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Brytningsindex
                      </div>
                      <div
                        className={
                          product.brytningsindex !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.brytningsindex}
                      </div>

                      <div
                        className={
                          product.lagstaflyttemp !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Lägstaflyttemp °C
                      </div>
                      <div
                        className={
                          product.lagstaflyttemp !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.lagstaflyttemp}
                      </div>

                      <div
                        className={
                          product.nlgi !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        NLGI
                      </div>
                      <div
                        className={
                          product.nlgi !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.nlgi}
                      </div>

                      <div
                        className={
                          product.tval !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Tvål
                      </div>
                      <div
                        className={
                          product.tval !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.tval}
                      </div>

                      <div
                        className={
                          product.basolja40 !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Basolja cSt 40°C
                      </div>
                      <div
                        className={
                          product.basolja40 !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.basolja40}
                      </div>

                      <div
                        className={
                          product.tempomrade !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Tempområde °C
                      </div>
                      <div
                        className={
                          product.tempomrade !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.tempomrade}
                      </div>
                    </div>

                    <div className="grid grid-flow-col auto-cols-max mt-4">
                      <div className="mr-4">
                        <p className="items-center md:flex-initial md:w-max bg-preemYellow">
                          <a
                            href={product.pds}
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
                            href={product.sds}
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
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query categories($slug: String!) {
    categories: sanityProductCategory(slug: { current: { eq: $slug } }) {
      title
      id
      titleSwedish
      slug {
        current
      }
      product {
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
      }
    }
  }
`;
