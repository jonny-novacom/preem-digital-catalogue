import { graphql } from "gatsby";
import React from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import { Accordion } from "react-bootstrap";
import { GoChevronRight } from "react-icons/go";

export default function SingleStandardsPage({ data: { newstandards } }) {
  return (
    <>
      <div className="mt-36">
        <h1 className="font-gothamNarrow font-bold text-center text-3xl mb-4 text-preemGreen block">
          {newstandards.title}
        </h1>

        {newstandards.standard.map((title, id) => (
          <Accordion className="inner">
            <Accordion.Item eventKey={title.id}>
              <Accordion.Header>
                <span>{title.title}</span>
              </Accordion.Header>
              <Accordion.Body>
                <p>body</p>>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
    </>
  );
}

export const query = graphql`
  query newstandards($slug: String!) {
    newstandards: sanityProductStandard(slug: { current: { eq: $slug } }) {
      title
      id
      slug {
        current
      }
      standard {
        title
        id
        product {
          produkt
          id
        }
      }
    }
  }
`;
