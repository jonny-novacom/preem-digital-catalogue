import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const APIStandard = () => {
  const { API } = useStaticQuery(graphql`
    query {
      API: allSanityStandardsApi {
        nodes {
          id
          title
          product {
            produkt
          }
        }
        distinct(field: title)
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
