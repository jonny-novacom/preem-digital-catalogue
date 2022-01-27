import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Accordion } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const APIStandard = () => {
  const { GL4, SN, CI4, CJ4, CK4, FA4, CF, CF2 } = useStaticQuery(graphql`
    query {
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
      CF2: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardAPI: { elemMatch: { title: { eq: "CF-2" } } } }
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
      CI4: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardAPI: { elemMatch: { title: { eq: "CI-4" } } } }
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
      CJ4: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardAPI: { elemMatch: { title: { eq: "CJ-4" } } } }
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
      CK4: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardAPI: { elemMatch: { title: { eq: "CK-4" } } } }
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

      FA4: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardAPI: { elemMatch: { title: { eq: "FA-4" } } } }
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

  const standardCF = CF.nodes;
  const standardCF2 = CF2.nodes;
  const standardCI4 = CI4.nodes;
  const standardCJ4 = CJ4.nodes;
  const standardCK4 = CK4.nodes;
  const standardFA4 = FA4.nodes;
  const standardGL4 = GL4.nodes;
  const standardSN = SN.nodes;

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>API</Accordion.Header>
          <Accordion.Body>
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

            {/* CF-2 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>CF-2</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardCF2.map((cf2, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${cf2.slug.current}`}>
                          <span
                            className={
                              cf2.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {cf2.produkt}{" "}
                          <span
                            className={
                              cf2.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              cf2.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {cf2.sae}
                          </span>
                          <span
                            className={
                              cf2.newProduct === true
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

            {/* CI-4 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>CI-4</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardCI4.map((CI4, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${CI4.slug.current}`}>
                          <span
                            className={
                              CI4.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {CI4.produkt}{" "}
                          <span
                            className={
                              CI4.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              CI4.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {CI4.sae}
                          </span>
                          <span
                            className={
                              CI4.newProduct === true
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

            {/* CJ-4 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>CJ-4</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardCJ4.map((CJ4, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${CJ4.slug.current}`}>
                          <span
                            className={
                              CJ4.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {CJ4.produkt}{" "}
                          <span
                            className={
                              CJ4.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              CJ4.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {CJ4.sae}
                          </span>
                          <span
                            className={
                              CJ4.newProduct === true
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

            {/* CK-4 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>CK-4</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardCK4.map((CK4, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${CK4.slug.current}`}>
                          <span
                            className={
                              CK4.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {CK4.produkt}{" "}
                          <span
                            className={
                              CK4.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              CK4.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {CK4.sae}
                          </span>
                          <span
                            className={
                              CK4.newProduct === true
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

            {/* FA-4 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>FA-4</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardFA4.map((FA4, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${FA4.slug.current}`}>
                          <span
                            className={
                              FA4.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {FA4.produkt}{" "}
                          <span
                            className={
                              FA4.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              FA4.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {FA4.sae}
                          </span>
                          <span
                            className={
                              FA4.newProduct === true
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
