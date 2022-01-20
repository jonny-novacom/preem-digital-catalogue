import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleProduct from "./SingleProduct";

export default function SapsFilter() {
  const { products } = useStaticQuery(graphql`
    query {
      products: allSanityProduct {
        nodes {
          produkt
          id
          _rawApplikationer
          sae
          viskositet40
          viskositet100
          vi
          flampunkt
          lagstaflyttemp
          pds
          sds
          saps
        }
      }
    }
  `);

  // const sapsFilter = saps.nodes;
  const productsFilter = products.nodes;
  const productsFilter2 = products.nodes.saps;

  console.log(productsFilter2);

  return (
    <>
      <Accordion flush>
        {productsFilter.map((products, saps) => (
          <Accordion.Item eventKey={products.saps.id}>
            <Accordion.Header>{products.produkt}</Accordion.Header>
            <Accordion.Body>
              <SingleProduct />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}
