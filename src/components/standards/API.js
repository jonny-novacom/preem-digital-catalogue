import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Accordion } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const APIStandard = () => {
  const { GL4, SN, CD, CF } = useStaticQuery(graphql`
    query {
      CD: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardAPI: { elemMatch: { title: { eq: "CD" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardAPI {
            title
          }
          slug {
            current
          }
        }
      }
      CF: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardAPI: { elemMatch: { title: { eq: "CF" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardAPI {
            title
          }
          slug {
            current
          }
        }
      }
      GL4: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardAPI: { elemMatch: { title: { eq: "GL-4" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardAPI {
            title
          }
          slug {
            current
          }
        }
      }
      SN: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardAPI: { elemMatch: { title: { eq: "SN" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardAPI {
            title
          }
          slug {
            current
          }
        }
      }
    }
  `);

  const standardCD = CD.nodes;
  const standardCF = CF.nodes;
  const standardGL4 = GL4.nodes;
  const standardSN = SN.nodes;

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>API</Accordion.Header>
          <Accordion.Body>
            {/* CD*/}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>CD</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardCD.map((cd, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${cd.slug.current}`}>
                          <span
                            className={
                              cd.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {cd.produkt}{" "}
                          <span
                            className={
                              cd.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              cd.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {cd.sae}
                          </span>
                          <span
                            className={
                              cd.newProduct === true
                                ? `text-left text-red-700 text-sm font-gothamNarrow font-bold italic ml-1.5 inline-block`
                                : `hidden`
                            }
                          >
                            {" "}
                            NY!
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* CF */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>CF</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardCF.map((cf, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${cf.slug.current}`}>
                          <span
                            className={
                              cf.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {cf.produkt}{" "}
                          <span
                            className={
                              cf.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              cf.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {cf.sae}
                          </span>
                          <span
                            className={
                              cf.newProduct === true
                                ? `text-left text-red-700 text-sm font-gothamNarrow font-bold italic ml-1.5 inline-block`
                                : `hidden`
                            }
                          >
                            {" "}
                            NY!
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* GL4 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>GL-4</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardGL4.map((gl4, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${gl4.slug.current}`}>
                          <span
                            className={
                              gl4.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {gl4.produkt}{" "}
                          <span
                            className={
                              gl4.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              gl4.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {gl4.sae}
                          </span>
                          <span
                            className={
                              gl4.newProduct === true
                                ? `text-left text-red-700 text-sm font-gothamNarrow font-bold italic ml-1.5 inline-block`
                                : `hidden`
                            }
                          >
                            {" "}
                            NY!
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* SN */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>SN</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardSN.map((sn, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${sn.slug.current}`}>
                          <span
                            className={
                              sn.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {sn.produkt}{" "}
                          <span
                            className={
                              sn.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              sn.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {sn.sae}
                          </span>
                          <span
                            className={
                              sn.newProduct === true
                                ? `text-left text-red-700 text-sm font-gothamNarrow font-bold italic ml-1.5 inline-block`
                                : `hidden`
                            }
                          >
                            {" "}
                            NY!
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default APIStandard;
