import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SanityBlockContent from "@sanity/block-content-to-react";
import { AiOutlineRight } from "react-icons/ai";

const StandardsAccordion = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityStandardsApi {
        nodes {
          id
          title
          product {
            produkt
            id
          }
        }
        distinct(field: title)
      }
    }
  `);

  const standard = data.allSanityStandardsApi.nodes;
  const cats = data.allSanityStandardsApi.distinct;
  const product = data.allSanityStandardsApi.nodes;

  console.log(product);

  return (
    <>
      <div>API</div>
      <Accordion flush>
        {cats.map((cats, i) => (
          <>
            <Accordion.Item eventKey={i} key={i}>
              <Accordion.Header>{cats}</Accordion.Header>
              {standard
                .filter((pub) => pub.title === cats)
                .map((pub, j) => (
                  <Accordion.Body>
                    <Accordion className="inner">
                      <Accordion.Item eventKey={j} key={j}>
                        <Accordion.Header>
                          {pub.product.produkt}
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="px-4 pt-1 pb-4 odd:bg-white -mt-2">
                            {pub.produkt}
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

export default StandardsAccordion;
