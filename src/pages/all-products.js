import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import Pagination from "../components/Pagination";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

export default function allProducts({
  data: { allProductsPage },
  pageContext,
}) {
  const theproducts = allProductsPage.nodes;
  const productCount = allProductsPage.totalCount;

  console.log(pageContext);

  return (
    <>
      <SearchEngineOptimisation
        title={`All products - Page ${pageContext.currentPage || 1} of 8`}
        image=""
        description="Min nis di ditinctate nusam quaepti ipsam que voluptum"
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-40">
          <div className="container mx-auto">
            <StaticImage
              src="../images/icons/marine.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Marine"
              transformOptions={"cover"}
              className="block w-20 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
              Min nis di ditinctate nusam quaepti ipsam que voluptum
            </h3>
            <p className="mt-2 mb-12 font-normal text-center text-gray-500 text-md font-gothamNarrow">
              Min nis di ditinctate nusam quaepti ipsam que voluptum, quossunt
              volorem perupta audipis explibus
            </p>
          </div>
          <div className="px-4 mb-4">
            <Pagination
              pageSize="32"
              totalCount={productCount}
              currentPage={pageContext.currentPage || 1}
              skip={pageContext.skip}
              base="/all-products"
            />
          </div>
          <div className="grid items-center grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 outline outline-4 outline-white neg-outline-offset">
            {theproducts.map((product) => (
              <div key={product.id} className="p-4 border border-gray-300">
                <Link to={`/products/${product.slug.current}`}>
                  <div className="relative h-18">
                    <div className="absolute inset-0 flex items-center justify-center mb-2 text-lg font-bold text-center font-gothamNarrow text-preemGreen line-clamp-2">
                      {product.produkt} {product.sae}
                    </div>
                  </div>
                  <GatsbyImage
                    image={
                      product.mainImage.asset.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={product.produkt}
                    className="block mx-auto"
                    style={{ height: "180px" }}
                    imgStyle={{ objectFit: "contain" }}
                  />
                  <span className="block mt-1 mb-2 text-center h-18 font-gothamNarrow line-clamp-3">
                    {product.shortDescription}
                  </span>
                  <div className="block mx-auto text-center">
                    <span className="inline-block px-10 py-2 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow">
                      För mer information
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 mt-12">
          <Pagination
            pageSize="32"
            totalCount={productCount}
            currentPage={pageContext.currentPage || 1}
            skip={pageContext.skip}
            base="/all-products"
          />
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query allProductsPage($skip: Int = 0, $pageSize: Int = 32) {
    allProductsPage: allSanityProduct(
      sort: { fields: produkt, order: ASC }
      limit: $pageSize
      skip: $skip
    ) {
      totalCount
      nodes {
        produkt
        id
        sae
        shortDescription
        slug {
          current
        }
        mainImage {
          asset {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;
