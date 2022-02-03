import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Accordion } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const MANStandard = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProduct(
        filter: { standardMAN: { elemMatch: { title: { ne: "" } } } }
        sort: {
          fields: [produkt, productCategory___product___standardMAN___title]
          order: [ASC, ASC]
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
          standardMAN {
            title
            id
          }
        }
        distinct(field: standardMAN___title)
      }
    }
  `);

  const singleProd = data.allSanityProduct.nodes;
  const cats = data.allSanityProduct.distinct;

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>MAN</Accordion.Header>

          <Accordion.Body>
            <Accordion className="inner cats">
              {cats.map((cats, i) => (
                <Accordion.Item eventKey={i} key={i}>
                  <Accordion.Header>{cats}</Accordion.Header>
                  <Accordion.Body>
                    <div className="py-2">
                      {singleProd
                        .filter(
                          (pub) =>
                            pub.standardMAN[0].title === cats ||
                            pub.standardMAN[1]?.title === cats ||
                            pub.standardMAN[2]?.title === cats ||
                            pub.standardMAN[3]?.title === cats ||
                            pub.standardMAN[4]?.title === cats ||
                            pub.standardMAN[5]?.title === cats ||
                            pub.standardMAN[6]?.title === cats ||
                            pub.standardMAN[7]?.title === cats ||
                            pub.standardMAN[8]?.title === cats ||
                            pub.standardMAN[9]?.title === cats ||
                            pub.standardMAN[10]?.title === cats
                        )
                        .sort((a, b) => (a < b ? -1 : 1))
                        .map((pub, j) => (
                          <div key={j}>
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
                          </div>
                        ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default MANStandard;
