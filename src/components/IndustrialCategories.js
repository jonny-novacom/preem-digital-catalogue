import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { GoChevronRight } from "react-icons/go";

export default function IndustrialCategories() {
  const { industrialCategories } = useStaticQuery(graphql`
    query {
      industrialCategories: allSanityProductCategory(
        filter: {
          title: {
            regex: "/(Transmission oils)|(Form oils)|(Hydraulic oils)|(Industrial gear oils)|(Compressor and air tool oils)|(Refrigeration compressor oils)|(Turbine and circulation oils)|(Guide oils, saw chain oils)|(Process, white, transformer and heat transfer oils)|(Metalworking, rust protection)|(Bearing greases)|(Synthetic greases)|(Sliding surfaces, chassis and teeth greases)|(Coolants and washer fluid)|(Brake fluid)|(Cold degreasers and solvents)|(Fuel additive)|(Fuel for petrol engines)|(Fuel for diesel engines)|(Food grade NSF H1 greases)/"
          }
        }
        sort: { fields: titleSwedish, order: ASC }
      ) {
        nodes {
          title
          id
          titleSwedish
          slug {
            current
          }
        }
      }
    }
  `);

  const theIndustrialCategories = industrialCategories.nodes;

  return (
    <>
      <div className="py-8 mx-auto mb-12 px-4">
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
          {theIndustrialCategories.map((industrialCategories, i) => (
            <Link to={`/category/${industrialCategories.slug.current}`} key={i}>
              <div
                key={i}
                className="grid grid-rows-2 items-center justify-center h-32 bg-gray-50 px-2 py-4"
              >
                <span className="text-center font-gothamNarrow font-bold text-preemGreen leading-tight block">
                  {industrialCategories.titleSwedish}
                </span>
                <span className="bg-preemYellow w-6 h-6 rounded-full block mx-auto mt-2">
                  <GoChevronRight className="text-preemGreen text-xl text-center block mt-0.5 ml-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
