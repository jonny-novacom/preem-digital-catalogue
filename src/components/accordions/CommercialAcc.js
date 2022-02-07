import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

import Accordion from "react-bootstrap/Accordion";
import SanityBlockContent from "@sanity/block-content-to-react";
import { AiFillStar } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";

const CommercialAccordion = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProduct(
        filter: {
          productCategory: {
            elemMatch: { title: { eq: "Engine oils heavy vehicles" } }
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
          <>
            <Accordion.Item eventKey={i}>
              <Accordion.Header>{cats}</Accordion.Header>
              {singleProd
                .filter((pub) => pub.saps === cats)
                .map((pub, j) => (
                  <Accordion.Body>
                    <Accordion className="inner cats">
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
                          <div className="pr-4 pt-1 pb-4 odd:bg-white -mt-2 pl-10">
                            <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal mt-2 mb-4">
                              <SanityBlockContent
                                blocks={pub._rawApplikationer}
                                projectId="1tbc9cjy"
                                dataset="production"
                              />
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                              <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                                SAE
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                                {pub.sae}
                              </div>
                              <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                                Viskositet cSt, mm2/s 40°C
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                                {pub.viskositet40}
                              </div>
                              <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                                Viskositet cSt, mm2/s 100°C
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                                {pub.viskositet100}
                              </div>
                              <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                                VI
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                                {pub.vi}
                              </div>
                              <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                                Flampunkt °C
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                                {pub.flampunkt}
                              </div>
                              <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                                Lägstaflyttemp °C
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                                {pub.lagstaflyttemp}
                              </div>
                            </div>
                            <div className="grid grid-flow-col auto-cols-max mt-4">
                              <div className="mr-4">
                                <p className="items-center md:flex-initial md:w-max">
                                  <a
                                    href={pub.pds}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-preemDarkGray py-2 px-10 hover:brightness-95 rounded-full font-gothamNarrow font-medium inline-block align-top bg-preemLightGray text-sm hover:text-preemGreen hover:bg-preemYellow transition-colors"
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
                                    className="text-preemDarkGray py-2 px-10 hover:brightness-95 rounded-full font-gothamNarrow font-medium inline-block align-top bg-preemLightGray text-sm hover:text-preemGreen hover:bg-preemYellow transition-colors"
                                  >
                                    See SDS
                                  </a>
                                </p>
                              </div>
                              <div>
                                <p className="items-center md:flex-initial md:w-max">
                                  <Link
                                    to={`/products/${pub.slug.current}`}
                                    className="text-preemDarkGray py-2 px-10 hover:brightness-95 rounded-full font-gothamNarrow font-medium inline-block align-top bg-preemLightGray text-sm hover:text-preemGreen hover:bg-preemYellow transition-colors"
                                  >
                                    View Product
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                ))}
            </Accordion.Item>
          </>
        ))}
      </Accordion>
    </>
  );
};

export default CommercialAccordion;
