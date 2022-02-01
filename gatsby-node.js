exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { slug: { current: { ne: null } } }
      ) {
        edges {
          node {
            produkt
            id
            slug {
              current
            }
          }
        }
        totalCount
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }

  const products = result.data.allSanityProduct.edges || [];
  products.forEach((edge, id) => {
    const path = `/products/${edge.node.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/Product.js"),
      context: { slug: edge.node.slug.current },
    });
  });

  const categoryResult = await graphql(`
    {
      allSanityProductCategory(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            title
            id
            slug {
              current
            }
          }
        }
        totalCount
      }
    }
  `);
  if (categoryResult.errors) {
    throw categoryResult.errors;
  }

  const categories = categoryResult.data.allSanityProductCategory.edges || [];
  categories.forEach((edge, id) => {
    const path = `/category/${edge.node.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/Category.js"),
      context: { slug: edge.node.slug.current },
    });
  });

  const glossaryCatsResult = await graphql(`
    {
      allSanityGlossaryCategory {
        distinct(field: title)
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (glossaryCatsResult.errors) {
    throw glossaryCatsResult.errors;
  }

  const glossCats = glossaryCatsResult.data.allSanityGlossaryCategory.edges;

  glossCats.forEach((glossCat, id) => {
    const path = `/glossary/${glossCat.node.slug.current}`;
    console.log(path);
    createPage({
      path,
      component: require.resolve("./src/templates/Glossary.js"),
      context: { glossCat: glossCat.node.slug.current },
    });
  });
};
