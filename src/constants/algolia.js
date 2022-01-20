const preemCatalogueQuery = `
{
  allSanityProduct(sort: {fields: produkt, order: ASC}) {
      nodes {
        produkt
        id
        shortDescription
        featured
        saps
        sae
        lagstaflyttemp
        vi
        viskositet100
        viskositet40
        _rawApplikationer
        flampunkt
      }
    }
  }
`;

function pageToAlgoliaRecord({
  id,
  produkt,
  shortDescription,
  _rawApplikationer,
  sae,
  viskositet40,
  viskositet100,
  vi,
  flampunkt,
  lagstaflyttemp,
  saps,
}) {
  return {
    objectID: id,
    produkt,
    shortDescription,
    _rawApplikationer,
    sae,
    viskositet40,
    viskositet100,
    vi,
    flampunkt,
    lagstaflyttemp,
    saps,
  };
}

const queries = [
  {
    query: preemCatalogueQuery,
    transformer: ({ data }) =>
      data.allSanityProduct.nodes.map(pageToAlgoliaRecord),
  },
];

module.exports = queries;
