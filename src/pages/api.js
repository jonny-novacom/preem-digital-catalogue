import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function APIStandardPage({ data: { API } }) {
  return (
    <>
      <div className="mt-40">
        <p>API</p>
        <div>
          <p>{API.title}</p>

          <ul>
            {API.product.map((product) => (
              <li key={product.id}>{product.produkt}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query {
    API: sanityStandardsApi {
      id
      title
      product {
        produkt
        id
      }
    }
  }
`;
