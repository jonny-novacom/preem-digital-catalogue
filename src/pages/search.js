import React, { useState } from "react";
import { useLunr } from "react-lunr";
import { graphql, useStaticQuery } from "gatsby";
import { Accordion } from "react-bootstrap";
import { GoChevronRight } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const LocalSearch = () => {
  const queryData = useStaticQuery(graphql`
    query {
      localSearchProducts {
        index
        store
      }
    }
  `);
  const index = queryData.localSearchProducts.index;
  const store = queryData.localSearchProducts.store;

  console.log(index);
  console.log(store);

  const [query, setQuery] = useState("");
  const results = useLunr(query, index, store);

  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-36 mb-20">
          <h1 className="font-gothamNarrow font-bold text-center text-3xl mb-4 text-preemGreen block">
            Search
          </h1>

          <div className="container flex justify-center mx-auto">
            <div className="flex border-1">
              <button className="flex items-center justify-center px-3 border-r bg-preemGreen">
                <IoSearchOutline className="text-2xl block text-white" />
              </button>
              <input
                type="text"
                className="px-4 py-3 w-96 font-gothamNarrow focus:outline-none"
                placeholder="Search..."
                name="query"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>

          <h2 className="mt-8 font-gothamNarrow font-bold text-center text-3xl mb-4 text-preemGreen block">
            Results
          </h2>
          {results.length > 0 ? (
            <div>
              {results.map((result) => (
                <Accordion className="inner innersearch" key={result.id}>
                  <Accordion.Item eventKey={result.id}>
                    <Accordion.Header>
                      {result.produkt}
                      <span
                        className={
                          result.sae !== null
                            ? `font-gothamNarrow font-normal text-left text-md text-gray-700 ml-1`
                            : `hidden`
                        }
                      >
                        {" "}
                        SAE
                      </span>
                      <span
                        className={
                          result.sae !== null
                            ? `text-left text-gray-700 text-md font-gothamNarrow font-normal inline-block ml-1`
                            : `hidden`
                        }
                      >
                        {result.sae}
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="pr-4 pt-2 pl-10">
                        <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal mt-2 mb-4">
                          <p className="mb-4">{result.body}</p>
                          <div className="grid grid-cols-5 gap-2">
                            <div
                              className={
                                result.sae !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2`
                                  : `hidden`
                              }
                            >
                              SAE
                            </div>
                            <div
                              className={
                                result.sae !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3`
                                  : `hidden`
                              }
                            >
                              {result.sae}
                            </div>
                            <div
                              className={
                                result.farg !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2`
                                  : `hidden`
                              }
                            >
                              Färg
                            </div>

                            <div
                              className={
                                result.farg !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3`
                                  : `hidden`
                              }
                            >
                              {result.farg}
                            </div>

                            <div
                              className={
                                result.kokpunkt !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Kokpunkt (koncentrat)
                            </div>
                            <div
                              className={
                                result.kokpunkt !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.kokpunkt}
                            </div>

                            <div
                              className={
                                result.isovg !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2`
                                  : `hidden`
                              }
                            >
                              ISO VG
                            </div>
                            <div
                              className={
                                result.isovg !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3`
                                  : `hidden`
                              }
                            >
                              {result.isovg}
                            </div>

                            <div
                              className={
                                result.densitet !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Densitet kg/m³
                            </div>
                            <div
                              className={
                                result.densitet !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.densitet}
                            </div>

                            <div
                              className={
                                result.viskositet40 !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Viskositet cSt, mm2/s 40°C
                            </div>
                            <div
                              className={
                                result.viskositet40 !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.viskositet40}
                            </div>

                            <div
                              className={
                                result.viskositet100 !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Viskositet cSt, mm2/s 100°C
                            </div>
                            <div
                              className={
                                result.viskositet100 !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.viskositet100}
                            </div>

                            <div
                              className={
                                result.vi !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              VI
                            </div>
                            <div
                              className={
                                result.vi !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.vi}
                            </div>

                            <div
                              className={
                                result.tbnbastal !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              TBN Bastal
                            </div>
                            <div
                              className={
                                result.tbnbastal !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.tbnbastal}
                            </div>

                            <div
                              className={
                                result.flampunkt !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Flampunkt °C
                            </div>
                            <div
                              className={
                                result.flampunkt !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.flampunkt}
                            </div>

                            <div
                              className={
                                result.brytningsindex !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Brytningsindex
                            </div>
                            <div
                              className={
                                result.brytningsindex !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.brytningsindex}
                            </div>

                            <div
                              className={
                                result.lagstaflyttemp !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Lägstaflyttemp °C
                            </div>
                            <div
                              className={
                                result.lagstaflyttemp !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.lagstaflyttemp}
                            </div>

                            <div
                              className={
                                result.nlgi !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              NLGI
                            </div>
                            <div
                              className={
                                result.nlgi !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.nlgi}
                            </div>

                            <div
                              className={
                                result.tval !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Tvål
                            </div>
                            <div
                              className={
                                result.tval !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.tval}
                            </div>

                            <div
                              className={
                                result.basolja40 !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Basolja cSt 40°C
                            </div>
                            <div
                              className={
                                result.basolja40 !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.basolja40}
                            </div>

                            <div
                              className={
                                result.tempomrade !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Tempområde °C
                            </div>
                            <div
                              className={
                                result.tempomrade !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.tempomrade}
                            </div>
                          </div>
                          <div className="grid grid-flow-col auto-cols-min mt-4">
                            <div className="mr-4">
                              <p className="items-center md:flex-initial md:w-max bg-preemYellow">
                                <a
                                  href={result.pds}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex justify-center px-3 py-2 text-white transition md:justify-start bg-novaBlue hover:bg-opacity-80 font-gothamNarrow font-bold text-sm"
                                >
                                  See PDS{" "}
                                  <span className="bg-preemGreen w-4 h-4 rounded-full inline-block ml-3 mt-0.5">
                                    <GoChevronRight className="text-white text-base text-center block mx-auto my-auto" />
                                  </span>
                                </a>
                              </p>
                            </div>
                            <div>
                              <p className="items-center md:flex-initial md:w-max bg-preemGreen">
                                <a
                                  href={result.sds}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex justify-center px-3 py-2 text-white transition md:justify-start bg-novaBlue hover:bg-opacity-80 font-gothamNarrow font-bold text-sm"
                                >
                                  See SDS{" "}
                                  <span className="bg-preemYellow w-4 h-4 rounded-full inline-block ml-3 mt-0.5">
                                    <GoChevronRight className="text-white text-base text-center block mx-auto my-auto" />
                                  </span>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}
            </div>
          ) : (
            <p className="mt-2 font-gothamNarrow font-bold text-center mb-4 block text-xl">
              No results!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default LocalSearch;
