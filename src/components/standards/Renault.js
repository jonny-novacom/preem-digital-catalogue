import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Accordion } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const RenaultStandard = () => {
  const { Axles, RGD, RLD2, RLD3 } = useStaticQuery(graphql`
    query {
      Axles: allSanityProduct(
        filter: { standardAPI: { elemMatch: { title: { eq: "Axles^" } } } }
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
      RGD: allSanityProduct(
        filter: { standardAPI: { elemMatch: { title: { eq: "RGD^" } } } }
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
      RLD2: allSanityProduct(
        filter: { standardAPI: { elemMatch: { title: { eq: "RLD-2" } } } }
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
      RLD3: allSanityProduct(
        filter: { standardAPI: { elemMatch: { title: { eq: "RLD-3" } } } }
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

  const standardAxles = Axles.nodes;
  const standardRGD = RGD.nodes;
  const standardRLD2 = RLD2.nodes;
  const standardRLD3 = RLD3.nodes;

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Renault</Accordion.Header>
          <Accordion.Body>
            {/* Axles */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Axles^</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardAxles.map((Axles, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${Axles.slug.current}`}>
                          <span
                            className={
                              Axles.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {Axles.produkt}{" "}
                          <span
                            className={
                              Axles.newProduct === true
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

            {/* RGD */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>RGD^</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardRGD.map((RGD, b) => (
                      <div className="flex justify-start py-2 pl-10" key={b}>
                        <Link to={`/products/${RGD.slug.current}`}>
                          <span
                            className={
                              RGD.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {RGD.produkt}{" "}
                          <span
                            className={
                              RGD.newProduct === true
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

            {/* RLD-2 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>RLD-2</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardRLD2.map((RLD2, c) => (
                      <div className="flex justify-start py-2 pl-10" key={c}>
                        <Link to={`/products/${RLD2.slug.current}`}>
                          <span
                            className={
                              RLD2.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {RLD2.produkt}{" "}
                          <span
                            className={
                              RLD2.newProduct === true
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

            {/* RLD-3 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>RLD-3</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardRLD3.map((RLD3, d) => (
                      <div className="flex justify-start py-2 pl-10" key={d}>
                        <Link to={`/products/${RLD3.slug.current}`}>
                          <span
                            className={
                              RLD3.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {RLD3.produkt}{" "}
                          <span
                            className={
                              RLD3.newProduct === true
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

export default RenaultStandard;
