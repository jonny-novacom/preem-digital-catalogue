import { graphql } from "gatsby";
import * as React from "react";
import GlossaryFilter from "../components/GlossaryFilter";
import GlossaryList from "../components/GlossaryList";

export default function GlossaryPage({ data }) {
  const glossaryItems = data.glossaryItems.nodes;
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-40 px-4">
          <GlossaryFilter />
          <GlossaryList glossaryItems={glossaryItems} />
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query GlossaryQuery {
    glossaryItems: allSanityGlossary(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        _rawDescription
        glossarycat {
          id
          title
        }
      }
    }
  }
`;
