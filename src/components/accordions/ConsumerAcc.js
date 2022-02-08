import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

import Accordion from "react-bootstrap/Accordion";
import SanityBlockContent from "@sanity/block-content-to-react";
import { AiFillStar } from "react-icons/ai";

const ConsumerAccordion = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProduct(
        filter: {
          productCategory: {
            elemMatch: {
              title: {
                eq: "Engine oils passenger cars and light transport vehicles"
              }
            }
          }
        }
        sort: { fields: produkt, order: ASC }
      ) {
        nodes {
          produkt
          id
          _rawApplikationer
          sae
          viskositet40
          viskositet100
          vi
          flampunkt
          lagstaflyttemp
          pds
          sds
          saps
          newProduct
          featured
          slug {
            current
          }
        }
        distinct(field: saps)
      }
    }
  `);

  const singleProd = data.allSanityProduct.nodes;
  const cats = data.allSanityProduct.distinct;

  return (
    <>
      <Accordion flush className="standards-acc">
        {cats.map((cats, i) => (
          <Accordion.Item eventKey={i} key={i}>
            <Accordion.Header>{cats}</Accordion.Header>

            <Accordion.Body>
              <Accordion className="inner cats">
                {singleProd
                  .filter((pub) => pub.saps === cats)
                  .map((pub, j) => (
                    <Accordion.Item eventKey={j}>
                      <Accordion.Header>
                        <span
                          className={
                            pub.featured === true
                              ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2`
                              : `hidden`
                          }
                        >
                          <AiFillStar />
                        </span>
                        {pub.produkt} SAE {pub.sae}{" "}
                        <span
                          className={
                            pub.newProduct === true
                              ? `text-left text-red-700 text-sm font-gothamNarrow font-bold italic ml-1.5`
                              : `hidden`
                          }
                        >
                          {" "}
                          NY!
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="pt-1 pb-4 pl-10 pr-4 -mt-2 odd:bg-white">
                          <div className="mt-2 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
                            <SanityBlockContent
                              blocks={pub._rawApplikationer}
                              projectId="1tbc9cjy"
                              dataset="production"
                            />
                          </div>
                          <div className="grid grid-cols-5 gap-2">
                            <div className="block col-span-2 font-bold text-left text-gray-700 font-gothamNarrow text-md">
                              SAE
                            </div>
                            <div className="col-span-3 font-normal text-left text-gray-500 text-md font-gothamNarrow">
                              {pub.sae}
                            </div>
                            <div className="block col-span-2 font-bold text-left text-gray-700 font-gothamNarrow text-md">
                              Viskositet cSt, mm2/s 40°C
                            </div>
                            <div className="col-span-3 font-normal text-left text-gray-500 text-md font-gothamNarrow">
                              {pub.viskositet40}
                            </div>
                            <div className="block col-span-2 font-bold text-left text-gray-700 font-gothamNarrow text-md">
                              Viskositet cSt, mm2/s 100°C
                            </div>
                            <div className="col-span-3 font-normal text-left text-gray-500 text-md font-gothamNarrow">
                              {pub.viskositet100}
                            </div>
                            <div className="block col-span-2 font-bold text-left text-gray-700 font-gothamNarrow text-md">
                              VI
                            </div>
                            <div className="col-span-3 font-normal text-left text-gray-500 text-md font-gothamNarrow">
                              {pub.vi}
                            </div>
                            <div className="block col-span-2 font-bold text-left text-gray-700 font-gothamNarrow text-md">
                              Flampunkt °C
                            </div>
                            <div className="col-span-3 font-normal text-left text-gray-500 text-md font-gothamNarrow">
                              {pub.flampunkt}
                            </div>
                            <div className="block col-span-2 font-bold text-left text-gray-700 font-gothamNarrow text-md">
                              Lägstaflyttemp °C
                            </div>
                            <div className="col-span-3 font-normal text-left text-gray-500 text-md font-gothamNarrow">
                              {pub.lagstaflyttemp}
                            </div>
                          </div>
                          <div className="grid grid-flow-col mt-4 auto-cols-max">
                            <div className="mr-4">
                              <p className="items-center md:flex-initial md:w-max">
                                <a
                                  href={pub.pds}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block px-10 py-2 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
                                >
                                  See PDS
                                </a>
                              </p>
                            </div>
                            <div className="mr-4">
                              <p className="items-center md:flex-initial md:w-max">
                                <a
                                  href={pub.sds}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block px-10 py-2 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
                                >
                                  See SDS
                                </a>
                              </p>
                            </div>
                            <div>
                              <p className="items-center md:flex-initial md:w-max">
                                <Link
                                  to={`/products/${pub.slug.current}`}
                                  className="inline-block px-10 py-2 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
                                >
                                  View Product
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default ConsumerAccordion;
