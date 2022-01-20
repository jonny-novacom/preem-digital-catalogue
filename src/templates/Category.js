import { graphql } from "gatsby";
import React from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import { Accordion } from "react-bootstrap";
import { GoChevronRight } from "react-icons/go";

export default function SingleProductPage({ data: { categories } }) {
  return (
    <>
      <div className="mt-36">
        <h1 className="font-gothamNarrow font-bold text-center text-3xl mb-4 text-preemGreen block">
          {categories.title}
        </h1>

        {categories.product.map((product) => (
          <Accordion className="inner">
            <Accordion.Item eventKey={product.id}>
              <Accordion.Header>
                {product.produkt}{" "}
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
                          ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2`
                          : `hidden`
                      }
                    >
                      SAE
                    </div>
                    <div
                      className={
                        product.sae !== null
                          ? `text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3`
                          : `hidden`
                      }
                    >
                      {product.sae}
                    </div>
                    <div
                      className={
                        product.farg !== null
                          ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2`
                          : `hidden`
                      }
                    >
                      Färg
                    </div>
                    <div
                      className={
                        product.farg !== null
                          ? `text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3`
                          : `hidden`
                      }
                    >
                      {product.farg}
                    </div>
                    <div
                      className={
                        product.isovg !== null
                          ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2`
                          : `hidden`
                      }
                    >
                      ISO VG
                    </div>
                    <div
                      className={
                        product.isovg !== null
                          ? `text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3`
                          : `hidden`
                      }
                    >
                      {product.isovg}
                    </div>
                    <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                      Viskositet cSt, mm2/s 40°C
                    </div>
                    <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                      {product.viskositet40}
                    </div>
                    <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                      Viskositet cSt, mm2/s 100°C
                    </div>
                    <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                      {product.viskositet100}
                    </div>
                    <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                      VI
                    </div>
                    <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                      {product.vi}
                    </div>
                    <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                      Flampunkt °C
                    </div>
                    <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                      {product.flampunkt}
                    </div>
                    <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                      Lägstaflyttemp °C
                    </div>
                    <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                      {product.lagstaflyttemp}
                    </div>
                  </div>
                  <div className="grid grid-flow-col auto-cols-min mt-4">
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
    </>
  );
}

export const query = graphql`
  query categories($slug: String!) {
    categories: sanityProductCategory(slug: { current: { eq: $slug } }) {
      title
      id
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
        viskositet40
        viskositet100
        vi
        flampunkt
        lagstaflyttemp
        pds
        sds
        newProduct
      }
    }
  }
`;
