import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const APIStandard = () => {
  const { GL4 } = useStaticQuery(graphql`
    query {
      allSanityStandardsApi(filter: { title: { eq: "GL-4" } }) {
        nodes {
          id
          title
          product {
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
            newProduct
            featured
          }
        }
      }
    }
  `);

  const singleAPI = API.distinct;
  const singleProduct = API.nodes;

  return (
    <>
      <p>API</p>
      <div>
        {singleAPI.map((standard, i) => (
          <div key={i}>
            <div>{standard}</div>
            <div>
              {singleProduct.map((prod, j) => (
                <div key={j}>
                  <div>{prod.produkt}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default APIStandard;
