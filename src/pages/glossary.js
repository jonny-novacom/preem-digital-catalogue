import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import GlossaryFilter from "../components/GlossaryFilter";
import GlossaryList from "../components/GlossaryList";

export default function GlossaryPage({ data }) {
  const glossaryItems = data.glossaryItems.nodes;
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-40 px-4">
          <div className="container mx-auto">
            <StaticImage
              src="../images/icons/glossary.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Marine"
              transformOptions={"cover"}
              className="block mx-auto w-12 mb-4"
            />
            <h3 className="text-center text-preemGreen text-2xl font-bold font-gothamNarrow mb-8">
              Ord och förkortningar
            </h3>
          </div>
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
