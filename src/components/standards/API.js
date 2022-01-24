import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Accordion } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const APIStandard = () => {
  const { GL4, SN, CD } = useStaticQuery(graphql`
    query {
      CD: allSanityProduct(
        filter: { standardAPI: { elemMatch: { title: { eq: "CD" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          standardAPI {
            title
          }
          slug {
            current
          }
        }
      }
      GL4: allSanityProduct(
        filter: { standardAPI: { elemMatch: { title: { eq: "GL-4" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          standardAPI {
            title
          }
          slug {
            current
          }
        }
      }
      SN: allSanityProduct(
        filter: { standardAPI: { elemMatch: { title: { eq: "SN" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
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
