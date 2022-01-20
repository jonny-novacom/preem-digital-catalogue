import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function StandardsAccordionOLD() {
  const { api, bmw, acea, standards } = useStaticQuery(graphql`
    query {
      standards: allSanityProduct {
        nodes {
          produkt
          id
          standardACEA {
            id
            title
          }
          standardAPI {
            id
            title
          }
          standardBMW {
            id
            title
          }
        }
      }
      acea: allSanityStandardsAcea {
        nodes {
          id
          title
        }
        distinct(field: title)
      }
      api: allSanityStandardsApi {
        nodes {
          id
          title
        }
      }
      bmw: allSanityStandardsBmw {
        nodes {
          id
          title
        }
      }
    }
  `);

  const aceadata = acea.nodes;
  const apidata = api.nodes;
  const bmwdata = bmw.nodes;
  const cats = acea.nodes.distinct;
  const standardsdata = standards.nodes;

  return (
    <>
      <div className="mt-4">
        {aceadata.map((acea) => (
          <div key={acea.id}>
            <div className="block mt-3 font-light">
              <span className="py-2 text-sm">{acea.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        {apidata.map((api) => (
          <div key={api.id}>
            <div className="block mt-3 font-light">
              <span className="py-2 text-sm">{api.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        {bmwdata.map((bmw) => (
          <div key={bmw.id}>
            <div className="block mt-3 font-light">
              <span className="py-2 text-sm">{bmw.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* <Accordion flush>
        {cats.map((cats, i) => (
          <>
            <Accordion.Item eventKey={i}>
              <Accordion.Header>{cats}</Accordion.Header>
              {singleProd
                .filter((pub) => pub.title === cats)
                .map((pub, j) => (
                  <Accordion.Body>
                    <Accordion className="inner">
                      <Accordion.Item eventKey={j}>
                        <Accordion.Header>{pub.produkt}</Accordion.Header>
                        <Accordion.Body>
                          <div className="px-4 pt-1 pb-4 odd:bg-white -mt-2">
                            <p>hello</p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                ))}
            </Accordion.Item>
          </>
        ))}
      </Accordion> */}
    </>
  );
}
