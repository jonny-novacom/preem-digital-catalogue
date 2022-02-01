import SanityBlockContent from "@sanity/block-content-to-react";
import { graphql } from "gatsby";
import * as React from "react";
import GlossaryFilter from "../components/GlossaryFilter";

function GlossaryPageTemplate({ data: { glossaryCategories } }) {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-40 px-4">
          <GlossaryFilter />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            {glossaryCategories.nodes.map((glossary) => (
              <div className="col-span-1">
                <span className="font-gothamNarrow font-bold text-preemGreen text-xl mb-0.5">
                  {glossary.title}
                </span>
                <span className="font-gothamNarrow font-normal text-gray-500">
                  <SanityBlockContent
                    blocks={glossary._rawDescription}
                    projectId="1tbc9cjy"
                    dataset="production"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query GlossaryQueryPage($glossCat: String!) {
    glossaryCategories: allSanityGlossary(
      sort: { fields: title, order: ASC }
      filter: {
        glossarycat: { elemMatch: { slug: { current: { eq: $glossCat } } } }
      }
    ) {
      nodes {
        id
        title
        _rawDescription
        glossarycat {
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

export default GlossaryPageTemplate;
