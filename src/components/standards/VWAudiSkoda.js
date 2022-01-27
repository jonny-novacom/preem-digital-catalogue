import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Accordion } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const VWStandard = () => {
  const {
    G052990,
    G055540,
    TL774F,
    VW50101,
    VW50200,
    VW50300,
    VW50301,
    VW50400,
    VW50500,
    VW50501,
    VW50700,
    VW50800,
    VW50900,
  } = useStaticQuery(graphql`
    query {
      G052990: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          standardVW: { elemMatch: { title: { eq: "Part No. G 052 990^" } } }
        }
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
      G055540: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          standardVW: {
            elemMatch: { title: { eq: "Part No. G 055 540 (A2)^" } }
          }
        }
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
      TL774F: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { standardVW: { elemMatch: { title: { eq: "TL 774-F*" } } } }
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
      VW50101: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          standardVW: { elemMatch: { title: { eq: "VW Standard 501 01*" } } }
        }
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
      VW50200: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          standardVW: { elemMatch: { title: { eq: "VW Standard 502 00" } } }
        }
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
      VW50300: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          standardVW: { elemMatch: { title: { eq: "VW Standard 503 00" } } }
        }
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
      VW50301: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          standardVW: { elemMatch: { title: { eq: "VW Standard 503 01" } } }
        }
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
      VW50400: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          standardVW: { elemMatch: { title: { eq: "VW Standard 504 00" } } }
        }
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
      VW50500: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          standardVW: { elemMatch: { title: { eq: "VW Standard 505 00" } } }
        }
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
      VW50501: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          standardVW: { elemMatch: { title: { eq: "VW Standard 505 01" } } }
        }
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
      VW50700: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          standardVW: { elemMatch: { title: { eq: "VW Standard 507 00" } } }
        }
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
      VW50800: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          standardVW: { elemMatch: { title: { eq: "VW Standard 508.00" } } }
        }
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
      VW50900: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          standardVW: { elemMatch: { title: { eq: "VW Standard 509.00" } } }
        }
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

  const standardG052990 = G052990.nodes;
  const standardG055540 = G055540.nodes;
  const standardTL774F = TL774F.nodes;
  const standardVW50101 = VW50101.nodes;
  const standardVW50200 = VW50200.nodes;
  const standardVW50300 = VW50300.nodes;
  const standardVW50301 = VW50301.nodes;
  const standardVW50400 = VW50400.nodes;
  const standardVW50500 = VW50500.nodes;
  const standardVW50501 = VW50501.nodes;
  const standardVW50700 = VW50700.nodes;
  const standardVW50800 = VW50800.nodes;
  const standardVW50900 = VW50900.nodes;

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>VW/Audi/Skoda</Accordion.Header>

          <Accordion.Body>
            {/* Part No. G 052 990^ */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Part No. G 052 990^</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardG052990.map((g052990, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${g052990.slug.current}`}>
                          <span
                            className={
                              g052990.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {g052990.produkt}{" "}
                          <span
                            className={
                              g052990.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              g052990.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {g052990.sae}
                          </span>
                          <span
                            className={
                              g052990.newProduct === true
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

            {/* Part No. G 055 540 (A2)^ */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Part No. G 055 540 (A2)^</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardG055540.map((G055540, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${G055540.slug.current}`}>
                          <span
                            className={
                              G055540.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {G055540.produkt}{" "}
                          <span
                            className={
                              G055540.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              G055540.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {G055540.sae}
                          </span>
                          <span
                            className={
                              G055540.newProduct === true
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

            {/* TL 774-F* */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>TL 774-F*</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardTL774F.map((TL774F, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${TL774F.slug.current}`}>
                          <span
                            className={
                              TL774F.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {TL774F.produkt}{" "}
                          <span
                            className={
                              TL774F.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              TL774F.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {TL774F.sae}
                          </span>
                          <span
                            className={
                              TL774F.newProduct === true
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

            {/* VW Standard 501 01* */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>VW Standard 501 01*</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardVW50101.map((VW50101, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${VW50101.slug.current}`}>
                          <span
                            className={
                              VW50101.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {VW50101.produkt}{" "}
                          <span
                            className={
                              VW50101.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              VW50101.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {VW50101.sae}
                          </span>
                          <span
                            className={
                              VW50101.newProduct === true
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
            {/* VW Standard 502 00 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>VW Standard 502 00</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardVW50200.map((W50200, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${W50200.slug.current}`}>
                          <span
                            className={
                              W50200.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {W50200.produkt}{" "}
                          <span
                            className={
                              W50200.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              W50200.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {W50200.sae}
                          </span>
                          <span
                            className={
                              W50200.newProduct === true
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
            {/* VW Standard 503 00 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>VW Standard 503 00</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardVW50300.map((W50300, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${W50300.slug.current}`}>
                          <span
                            className={
                              W50300.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {W50300.produkt}{" "}
                          <span
                            className={
                              W50300.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              W50300.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {W50300.sae}
                          </span>
                          <span
                            className={
                              W50300.newProduct === true
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
            {/* VW Standard 503 01 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>VW Standard 503 01</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardVW50301.map((W50301, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${W50301.slug.current}`}>
                          <span
                            className={
                              W50301.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {W50301.produkt}{" "}
                          <span
                            className={
                              W50301.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              W50301.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {W50301.sae}
                          </span>
                          <span
                            className={
                              W50301.newProduct === true
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
            {/* VW Standard 504 00 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>VW Standard 504 00</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardVW50400.map((VW50400, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${VW50400.slug.current}`}>
                          <span
                            className={
                              VW50400.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {VW50400.produkt}{" "}
                          <span
                            className={
                              VW50400.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              VW50400.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {VW50400.sae}
                          </span>
                          <span
                            className={
                              VW50400.newProduct === true
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
            {/* VW Standard 505 00 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>VW Standard 505 00</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardVW50500.map((VW50500, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${VW50500.slug.current}`}>
                          <span
                            className={
                              VW50500.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {VW50500.produkt}{" "}
                          <span
                            className={
                              VW50500.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              VW50500.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {VW50500.sae}
                          </span>
                          <span
                            className={
                              VW50500.newProduct === true
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
            {/* VW Standard 505 01 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>VW Standard 505 01</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardVW50501.map((VW50501, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${VW50501.slug.current}`}>
                          <span
                            className={
                              VW50501.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {VW50501.produkt}{" "}
                          <span
                            className={
                              VW50501.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              VW50501.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {VW50501.sae}
                          </span>
                          <span
                            className={
                              VW50501.newProduct === true
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
            {/* VW Standard 507 00 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>VW Standard 507 00</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardVW50700.map((VW50700, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${VW50700.slug.current}`}>
                          <span
                            className={
                              VW50700.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {VW50700.produkt}{" "}
                          <span
                            className={
                              VW50700.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              VW50700.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {VW50700.sae}
                          </span>
                          <span
                            className={
                              VW50700.newProduct === true
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
            {/* VW Standard 508 00 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>VW Standard 508 00</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardVW50800.map((VW50800, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${VW50800.slug.current}`}>
                          <span
                            className={
                              VW50800.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {VW50800.produkt}{" "}
                          <span
                            className={
                              VW50800.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              VW50800.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {VW50800.sae}
                          </span>
                          <span
                            className={
                              VW50800.newProduct === true
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
            {/* VW Standard 509 00 */}
            <Accordion className="inner">
              <Accordion.Item eventKey="0">
                <Accordion.Header>VW Standard 509 00</Accordion.Header>
                <Accordion.Body>
                  <div className="py-2">
                    {standardVW50900.map((VW50900, a) => (
                      <div className="flex justify-start py-2 pl-10" key={a}>
                        <Link to={`/products/${VW50900.slug.current}`}>
                          <span
                            className={
                              VW50900.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {VW50900.produkt}{" "}
                          <span
                            className={
                              VW50900.sae !== null
                                ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                : `hidden`
                            }
                          >
                            {" "}
                            SAE
                          </span>
                          <span
                            className={
                              VW50900.sae !== null
                                ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                : `hidden`
                            }
                          >
                            {VW50900.sae}
                          </span>
                          <span
                            className={
                              VW50900.newProduct === true
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

export default VWStandard;
