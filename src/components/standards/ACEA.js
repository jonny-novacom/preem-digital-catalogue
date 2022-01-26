import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Accordion } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const ACEAStandard = () => {
  const {
    A1,
    A3,
    A4,
    A5,
    B1,
    B2,
    B3,
    B4,
    B5,
    C1,
    C2,
    C3,
    C4,
    C5,
    E2,
    E4,
    E6,
    E7,
    E9,
  } = useStaticQuery(graphql`
    query {
      A1: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "A1" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      A3: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "A3" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      A4: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "A4" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      A5: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "A5" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      B1: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "B1" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      B2: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "B2" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      B3: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "B3" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      B4: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "B4" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      B5: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "B5" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      C1: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "C1" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      C2: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "C2" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      C3: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "C3" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      C4: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "C4" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      C5: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "C5" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      E2: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "E2" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      E4: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "E4" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      E6: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "E6" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      E7: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "E7" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
      E9: allSanityProduct(
        filter: { standardACEA: { elemMatch: { title: { eq: "E9" } } } }
      ) {
        nodes {
          produkt
          id
          newProduct
          featured
          sae
          standardACEA {
            title
          }
          slug {
            current
          }
        }
      }
    }
  `);

  const standardA1 = A1.nodes;
  const standardA3 = A3.nodes;
  const standardA4 = A4.nodes;
  const standardA5 = A5.nodes;
  const standardB1 = B1.nodes;
  const standardB2 = B2.nodes;
  const standardB3 = B3.nodes;
  const standardB4 = B4.nodes;
  const standardB5 = B5.nodes;
  const standardC1 = C1.nodes;
  const standardC2 = C2.nodes;
  const standardC3 = C3.nodes;
  const standardC4 = C4.nodes;
  const standardC5 = C5.nodes;
  const standardE2 = E2.nodes;
  const standardE4 = E4.nodes;
  const standardE6 = E6.nodes;
  const standardE7 = E7.nodes;
  const standardE9 = E9.nodes;

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>ACEA</Accordion.Header>
          <Accordion.Body>
            {/* A1*/}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>A1</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardA1.map((A1, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${A1.slug.current}`}>
                          <span
                            className={
                              A1.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {A1.produkt}{" "}
                          <span
                            className={
                              A1.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              A1.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal ml-1`
                                : `hidden`
                            }
                          >
                            {A1.sae}
                          </span>
                          <span
                            className={
                              A1.newProduct === true
                                ? `text-left text-red-700 text-sm font-gothamNarrow font-bold italic ml-1.5`
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

            {/* A3 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>A3</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardA3.map((A3, b) => (
                      <div className="flex justify-start py-2 pl-10" key={b}>
                        <Link to={`/products/${A3.slug.current}`}>
                          <span
                            className={
                              A3.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {A3.produkt}{" "}
                          <span
                            className={
                              A3.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              A3.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {A3.sae}
                          </span>
                          <span
                            className={
                              A3.newProduct === true
                                ? `text-left text-red-700 text-sm font-gothamNarrow font-bold italic ml-1.5`
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

            {/* A4 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>A4</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardA4.map((A4, c) => (
                      <div className="flex justify-start py-2 pl-10" key={c}>
                        <Link to={`/products/${A4.slug.current}`}>
                          <span
                            className={
                              A4.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {A4.produkt}{" "}
                          <span
                            className={
                              A4.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              A4.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {A4.sae}
                          </span>
                          <span
                            className={
                              A4.newProduct === true
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

            {/* A5 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>A5</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardA5.map((A5, d) => (
                      <div className="flex justify-start py-2 pl-10" key={d}>
                        <Link to={`/products/${A5.slug.current}`}>
                          <span
                            className={
                              A5.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {A5.produkt}{" "}
                          <span
                            className={
                              A5.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              A5.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {A5.sae}
                          </span>
                          <span
                            className={
                              A5.newProduct === true
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

            {/* B1 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>B1</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardB1.map((B1, e) => (
                      <div className="flex justify-start py-2 pl-10" key={e}>
                        <Link to={`/products/${B1.slug.current}`}>
                          <span
                            className={
                              A5.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {B1.produkt}{" "}
                          <span
                            className={
                              B1.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              B1.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {B1.sae}
                          </span>
                          <span
                            className={
                              B1.newProduct === true
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
            {/* B2 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>B2</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardB2.map((B2, f) => (
                      <div className="flex justify-start py-2 pl-10" key={f}>
                        <Link to={`/products/${B2.slug.current}`}>
                          <span
                            className={
                              A5.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {B2.produkt}{" "}
                          <span
                            className={
                              B2.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              B2.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {B2.sae}
                          </span>
                          <span
                            className={
                              B2.newProduct === true
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

            {/* B3 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>B3</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardB3.map((B3, g) => (
                      <div className="flex justify-start py-2 pl-10" key={g}>
                        <Link to={`/products/${B3.slug.current}`}>
                          <span
                            className={
                              A5.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {B3.produkt}{" "}
                          <span
                            className={
                              B3.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              B3.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {B3.sae}
                          </span>
                          <span
                            className={
                              B3.newProduct === true
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

            {/* B4 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>B4</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardB4.map((B4, h) => (
                      <div className="flex justify-start py-2 pl-10" key={h}>
                        <Link to={`/products/${B4.slug.current}`}>
                          <span
                            className={
                              B4.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {B4.produkt}{" "}
                          <span
                            className={
                              B4.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              B4.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {B4.sae}
                          </span>
                          <span
                            className={
                              B4.newProduct === true
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

            {/* B5 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>B5</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardB5.map((B5, i) => (
                      <div className="flex justify-start py-2 pl-10" key={i}>
                        <Link to={`/products/${B5.slug.current}`}>
                          <span
                            className={
                              B5.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {B5.produkt}{" "}
                          <span
                            className={
                              B5.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              B5.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {B5.sae}
                          </span>
                          <span
                            className={
                              B5.newProduct === true
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

            {/* C1 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>C1</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardC1.map((C1, j) => (
                      <div className="flex justify-start py-2 pl-10" key={j}>
                        <Link to={`/products/${C1.slug.current}`}>
                          <span
                            className={
                              C1.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {C1.produkt}{" "}
                          <span
                            className={
                              C1.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              C1.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {C1.sae}
                          </span>
                          <span
                            className={
                              C1.newProduct === true
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

            {/* C2 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>C2</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardC2.map((C2, k) => (
                      <div className="flex justify-start py-2 pl-10" key={k}>
                        <Link to={`/products/${C2.slug.current}`}>
                          <span
                            className={
                              C2.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {C2.produkt}{" "}
                          <span
                            className={
                              C2.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              C2.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {C2.sae}
                          </span>
                          <span
                            className={
                              C2.newProduct === true
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

            {/* C3 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>C3</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardC3.map((C3, l) => (
                      <div className="flex justify-start py-2 pl-10" key={l}>
                        <Link to={`/products/${C3.slug.current}`}>
                          <span
                            className={
                              C3.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {C3.produkt}{" "}
                          <span
                            className={
                              C3.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              C3.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {C3.sae}
                          </span>
                          <span
                            className={
                              C3.newProduct === true
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

            {/* C4 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>C4</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardC4.map((C4, m) => (
                      <div className="flex justify-start py-2 pl-10" key={m}>
                        <Link to={`/products/${C4.slug.current}`}>
                          <span
                            className={
                              C4.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {C4.produkt}{" "}
                          <span
                            className={
                              C4.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              C4.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {C4.sae}
                          </span>
                          <span
                            className={
                              C4.newProduct === true
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

            {/* C5 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>C5</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardC5.map((C5, n) => (
                      <div className="flex justify-start py-2 pl-10" key={n}>
                        <Link to={`/products/${C5.slug.current}`}>
                          <span
                            className={
                              C5.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {C5.produkt}{" "}
                          <span
                            className={
                              C5.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              C5.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {C5.sae}
                          </span>
                          <span
                            className={
                              C5.newProduct === true
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

            {/* E2 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>E2</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardE2.map((E2, o) => (
                      <div className="flex justify-start py-2 pl-10" key={o}>
                        <Link to={`/products/${E2.slug.current}`}>
                          <span
                            className={
                              E2.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {E2.produkt}{" "}
                          <span
                            className={
                              E2.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              E2.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {E2.sae}
                          </span>
                          <span
                            className={
                              E2.newProduct === true
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

            {/* E4 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>E4</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardE4.map((E4, p) => (
                      <div className="flex justify-start py-2 pl-10" key={p}>
                        <Link to={`/products/${E4.slug.current}`}>
                          <span
                            className={
                              E4.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {E4.produkt}{" "}
                          <span
                            className={
                              E4.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              E4.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {E4.sae}
                          </span>
                          <span
                            className={
                              E4.newProduct === true
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

            {/* E6 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>E6</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardE6.map((E6, q) => (
                      <div className="flex justify-start py-2 pl-10" key={q}>
                        <Link to={`/products/${E6.slug.current}`}>
                          <span
                            className={
                              E6.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {E6.produkt}{" "}
                          <span
                            className={
                              E6.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              E6.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {E6.sae}
                          </span>
                          <span
                            className={
                              E6.newProduct === true
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

                {/* E7 */}
                <Accordion className="inner">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>E7</Accordion.Header>
                    <Accordion.Body>
                      <div className="py-2">
                        {standardE7.map((E7, r) => (
                          <div
                            className="flex justify-start py-2 pl-10"
                            key={r}
                          >
                            <Link to={`/products/${E7.slug.current}`}>
                              <span
                                className={
                                  E7.featured === true
                                    ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                    : `hidden`
                                }
                              >
                                <AiFillStar />
                              </span>
                              {E7.produkt}{" "}
                              <span
                                className={
                                  E7.sae !== null
                                    ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                    : `hidden`
                                }
                              >
                                {" "}
                                SAE
                              </span>
                              <span
                                className={
                                  E7.sae !== null
                                    ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                    : `hidden`
                                }
                              >
                                {E7.sae}
                              </span>
                              <span
                                className={
                                  E7.newProduct === true
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

                {/* E9 */}
                <Accordion className="inner">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>E9</Accordion.Header>
                    <Accordion.Body>
                      <div className="py-2">
                        {standardE9.map((E9, s) => (
                          <div
                            className="flex justify-start py-2 pl-10"
                            key={s}
                          >
                            <Link to={`/products/${E9.slug.current}`}>
                              <span
                                className={
                                  E9.featured === true
                                    ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                    : `hidden`
                                }
                              >
                                <AiFillStar />
                              </span>
                              {E9.produkt}{" "}
                              <span
                                className={
                                  E9.sae !== null
                                    ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                    : `hidden`
                                }
                              >
                                {" "}
                                SAE
                              </span>
                              <span
                                className={
                                  E9.sae !== null
                                    ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                    : `hidden`
                                }
                              >
                                {E9.sae}
                              </span>
                              <span
                                className={
                                  E9.newProduct === true
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
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default ACEAStandard;
