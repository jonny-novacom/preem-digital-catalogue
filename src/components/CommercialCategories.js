import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { GoChevronRight } from "react-icons/go";

export default function CommercialCategories() {
  const { commercialCategories } = useStaticQuery(graphql`
    query {
      commercialCategories: allSanityProductCategory(
        filter: { title: { regex: "/(Motorcycle and 2-stroke oils)/" } }
        sort: { fields: title, order: ASC }
      ) {
        nodes {
          title
          id
          slug {
            current
          }
        }
      }
    }
  `);

  const theCommercialCategories = commercialCategories.nodes;

  return (
    <>
      <div className="py-8 mx-auto mb-12 px-4">
        <div className="grid grid-cols-2 gap-2">
          {theCommercialCategories.map((commercialCategories, i) => (
            <div key={i}>
              <Link to={`/category/${commercialCategories.slug.current}`}>
                <div className="grid grid-rows-2 items-center justify-center h-32 bg-gray-50 px-2 py-4">
                  <span className="text-center font-gothamNarrow font-bold text-preemGreen leading-tight block">
                    {commercialCategories.title}
                  </span>
                  <span className="bg-preemYellow w-6 h-6 rounded-full block mx-auto mt-2">
                    <GoChevronRight className="text-preemGreen text-xl text-center block mt-0.5 ml-0.5" />
                  </span>
                </div>
              </Link>
            </div>
          ))}

          <Link to="/product-category/engine-oils-heavy-vehicles">
            <div className="grid grid-rows-2 items-center justify-center h-32 bg-gray-50 px-2 py-4">
              <span className="text-center font-gothamNarrow font-bold text-preemGreen leading-tight block">
                Motoroljor tunga fordon
              </span>
              <span className="bg-preemYellow w-6 h-6 rounded-full block mx-auto mt-2">
                <GoChevronRight className="text-preemGreen text-xl text-center block mt-0.5 ml-0.5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
