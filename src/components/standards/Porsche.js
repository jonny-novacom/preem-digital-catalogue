import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Accordion } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const PorscheStandard = () => {
  const { A40, A40s, C20, C30 } = useStaticQuery(graphql`
    query {
      A40: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardPorsche: { elemMatch: { title: { eq: "A40" } } } }
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
      A40s: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardPorsche: { elemMatch: { title: { eq: "A40*" } } } }
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
      C20: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardPorsche: { elemMatch: { title: { eq: "C20" } } } }
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
      C30: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardPorsche: { elemMatch: { title: { eq: "C30" } } } }
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

  const standardA40 = A40.nodes;
  const standardA40s = A40s.nodes;
  const standardC20 = C20.nodes;
  const standardC30 = C30.nodes;

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Porsche</Accordion.Header>

          <Accordion.Body>
            {/* A40 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>A40</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardA40.map((A40, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${A40.slug.current}`}>
                          <span
                            className={
                              A40.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {A40.produkt}{" "}
                          <span
                            className={
                              A40.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              A40.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {A40.sae}
                          </span>
                          <span
                            className={
                              A40.newProduct === true
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

            {/* A40* */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>A40*</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardA40s.map((A40s, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${A40s.slug.current}`}>
                          <span
                            className={
                              A40s.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {A40s.produkt}{" "}
                          <span
                            className={
                              A40s.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              A40s.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {A40s.sae}
                          </span>
                          <span
                            className={
                              A40s.newProduct === true
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

            {/* C20 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>C20</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardC20.map((C20, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${C20.slug.current}`}>
                          <span
                            className={
                              C20.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {C20.produkt}{" "}
                          <span
                            className={
                              C20.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              C20.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {C20.sae}
                          </span>
                          <span
                            className={
                              C20.newProduct === true
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

            {/* C30 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>C30</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardC30.map((C30, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${C30.slug.current}`}>
                          <span
                            className={
                              C30.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {C30.produkt}{" "}
                          <span
                            className={
                              C30.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              C30.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {C30.sae}
                          </span>
                          <span
                            className={
                              C30.newProduct === true
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

export default PorscheStandard;
