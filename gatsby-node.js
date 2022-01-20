exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityProduct(filter: { slug: { current: { ne: null } } }) {
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

  const standardsResult = await graphql(`
    {
      allSanityProductStandard(filter: { slug: { current: { ne: null } } }) {
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
  if (standardsResult.errors) {
    throw standardsResult.errors;
  }

  const api = standardsResult.data.allSanityProductStandard.edges || [];
  api.forEach((edge, id) => {
    const path = `/standards/${edge.node.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/Standards.js"),
      context: { slug: edge.node.slug.current },
    });
  });
};
