import { useEffect, useState } from "react";

export default function useLatestData() {
  // products
  const [products, setProducts] = useState();
  // use a side effect to fetch the data from the graphql endpointsd
  useEffect(function () {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
                allProduct {
                  produkt
                  sae
                }
              }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO check for errors
        // set the data to state
        console.log(res.data);
      });
  }, []);
  return {
    products,
  };
}
