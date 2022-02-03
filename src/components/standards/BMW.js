import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Accordion } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const BMWStandard = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProduct(
        filter: { standardBMW: { elemMatch: { title: { ne: "" } } } }
        sort: {
          fields: productCategory___product___standardBMW___title
          order: ASC
        }
      ) {
        nodes {
          slug {
            current
          }
          produkt
          id
          newProduct
          featured
          sae
          standardBMW {
            title
            id
          }
        }
        distinct(field: standardBMW___title)
      }
    }
  `);

  const singleProd = data.allSanityProduct.nodes;
  const cats = data.allSanityProduct.distinct;

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>BMW</Accordion.Header>

          <Accordion.Body>
            <Accordion className="inner cats">
              {cats.map((cats, i) => (
                <Accordion.Item eventKey={i} key={i}>
                  <Accordion.Header>{cats}</Accordion.Header>
                  {singleProd
                    .filter((pub) => pub.standardBMW[0].title === cats)
                    .map((pub, j) => (
                      <Accordion.Body key={j}>
                        <Accordion className="inner">
                          <Accordion.Item eventKey={j}>
                            <div className="flex justify-start py-2 pl-10">
                              <Link to={`/products/${pub.slug.current}`}>
                                <span
                                  className={
                                    pub.featured === true
                                      ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2 inline-block`
                                      : `hidden`
                                  }
                                >
                                  <AiFillStar />
                                </span>
                                {pub.produkt}{" "}
                                <span
                                  className={
                                    pub.sae !== null
                                      ? `font-gothamNarrow font-normal text-left text-md text-gray-700`
                                      : `hidden`
                                  }
                                >
                                  {" "}
                                  SAE
                                </span>
                                <span
                                  className={
                                    pub.sae !== null
                                      ? `text-left text-gray-700 text-md font-gothamNarrow font-normal  ml-1`
                                      : `hidden`
                                  }
                                >
                                  {pub.sae}
                                </span>
                                <span
                                  className={
                                    pub.newProduct === true
                                      ? `text-left text-red-700 text-sm font-gothamNarrow font-bold italic ml-1.5 inline-block`
                                      : `hidden`
                                  }
                                >
                                  {" "}
                                  NY!
                                </span>
                              </Link>
                            </div>
                            <div className="h-2"></div>
                          </Accordion.Item>
                        </Accordion>
                      </Accordion.Body>
                    ))}
                </Accordion.Item>
              ))}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default BMWStandard;