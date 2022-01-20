import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function IndustryStandards() {
  const { industryStandards } = useStaticQuery(graphql`
    query {
        industryStandards: allSanityIndustryStandards(sort: { fields: title, order: ASC }) {
        nodes {
          title
          id
        }
      }
    }
  `);

  const theIndustryStandards = industryStandards.nodes;

  return (
    <>
      <div className="container px-4 py-8 mx-auto mb-24 md:w-3/4 lg:w-3/5 xl:w-1/2">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {theIndustryStandards.map((industryStandards, i) => (
            <div key={i} className="flex items-center justify-center h-32">
              <span>{industryStandards.title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
