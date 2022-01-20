import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  connectHits,
} from "react-instantsearch-dom";
import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";
import SanityBlockContent from "@sanity/block-content-to-react";
import { AiOutlineRight } from "react-icons/ai";

const searchClient = algoliasearch(
  "XLGSS8WN5Z",
  "abba388b0349e0cc5748005e04a48433"
);

const NewHits = connectHits(({ hits }) => {
  return hits.map((item) => {
    const {
      id,
      _rawApplikationer,
      produkt,
      sae,
      viskositet40,
      viskositet100,
      vi,
      flampunkt,
      lagstaflyttemp,
      pds,
      sds,
      saps,
    } = item;
    return (
      <Accordion className="inner innersearch" defaultActiveKey="0">
        <Accordion.Item eventKey={id}>
          <Accordion.Header>{produkt}</Accordion.Header>
          <Accordion.Body>
            <div className="px-4 pt-1 pb-4 odd:bg-white -mt-2">
              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal mt-2 mb-4">
                <SanityBlockContent
                  blocks={_rawApplikationer}
                  projectId="1tbc9cjy"
                  dataset="production"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                  SAE
                </div>
                <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                  {sae}
                </div>
                <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                  Viskositet cSt, mm2/s 40°C
                </div>
                <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                  {viskositet40}
                </div>
                <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                  Viskositet cSt, mm2/s 100°C
                </div>
                <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                  {viskositet100}
                </div>
                <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                  VI
                </div>
                <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                  {vi}
                </div>
                <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                  Flampunkt °C
                </div>
                <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                  {flampunkt}
                </div>
                <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                  Lägstaflyttemp °C
                </div>
                <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                  {lagstaflyttemp}
                </div>
              </div>
              <div className="grid grid-flow-col auto-cols-min mt-4">
                <div className="mr-4">
                  <p className="items-center md:flex-initial md:w-max bg-preemYellow">
                    <a
                      href={pds}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center px-3 py-2 text-white transition md:justify-start bg-novaBlue hover:bg-opacity-80 font-gothamNarrow font-bold text-sm"
                    >
                      See PDS{" "}
                      <span className="bg-preemGreen w-4 h-4 rounded-full inline-block ml-3 mt-0.5">
                        <AiOutlineRight className="text-white inline-block -mt-3 text-xs ml-0.5" />
                      </span>
                    </a>
                  </p>
                </div>
                <div>
                  <p className="items-center md:flex-initial md:w-max bg-preemGreen">
                    <a
                      href={sds}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center px-3 py-2 text-white transition md:justify-start bg-novaBlue hover:bg-opacity-80 font-gothamNarrow font-bold text-sm"
                    >
                      See SDS{" "}
                      <span className="bg-preemYellow w-4 h-4 rounded-full inline-block ml-3 mt-0.5">
                        <AiOutlineRight className="text-white inline-block -mt-3 text-xs ml-0.5" />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  });
});

const Wrapper = styled.section`
  padding: 5rem 0;
  :focus-visible {
    outline: none;
  }
  .ais-SearchBox {
    width: 90vw;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 2rem;
    border: 1px solid black;
    font-family: "Gotham Narrow", "Franklin Gothic Medium", "Tahoma", sans-serif;
    form {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 3rem 3rem;
      input,
      button {
        border: transparent;
        font-size: 1.1rem;
      }
      input {
        border: transparent;
        padding: 0.5rem 1rem;
          outline: none;
      }
      button {
        background: var(--preemGreen);
        svg {
          fill: #fff;
          display: block;
          margin: 0 auto;
          width: 20px;
          height: 20px;
      }
    }
      }
      button.ais-SearchBox-reset {
        background: var(--preemYellow);
      }
    }
  }
`;

const AlgoliaSearch = () => (
  <Wrapper>
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
    >
      <SearchBox
        translations={{
          submitTitle: "Submit your search query.",
          resetTitle: "Clear your search query.",
          placeholder: "Search here...",
        }}
      />
      <NewHits />
    </InstantSearch>
  </Wrapper>
);

export default AlgoliaSearch;
