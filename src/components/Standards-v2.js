import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { Accordion } from "react-bootstrap";
import SanityBlockContent from "@sanity/block-content-to-react";
import { AiFillStar, AiOutlineRight } from "react-icons/ai";

const StandardsV2 = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProduct(
        filter: {
          standard: { elemMatch: { title: { regex: "/(ACEA)|(API)/" } } }
        }
      ) {
        nodes {
          produkt
          id
          _rawApplikationer
          sae
          viskositet40
          viskositet100
          vi
          flampunkt
          lagstaflyttemp
          pds
          sds
          saps
          newProduct
          featured
          standard {
            title
            id
          }
        }
        distinct(field: standard___title)
      }
    }
  `);

  const singleProd = data.allSanityProduct.nodes;
  const cats = data.allSanityProduct.distinct;

  return (
    <>
      <Accordion flush>
        {cats.map((cats, i) => (
          <>
            <Accordion.Item eventKey={i}>
              <Accordion.Header>{cats}</Accordion.Header>
              {singleProd
                .filter((pub) => pub.standard.title === cats)
                .map((pub, j) => (
                  <Accordion.Body>
                    <Accordion className="inner">
                      <Accordion.Item eventKey={j}>
                        <Accordion.Header>
                          <span
                            className={
                              pub.featured === true
                                ? `text-left text-yellow-400 text-sm font-gothamNarrow font-bold italic -ml-6 pr-2`
                                : `hidden`
                            }
                          >
                            <AiFillStar />
                          </span>
                          {pub.produkt}{" "}
                          <span
                            className={
                              pub.newProduct === true
                                ? `text-left text-red-700 text-sm font-gothamNarrow font-bold italic ml-1.5`
                                : `hidden`
                            }
                          >
                            {" "}
                            NY!
                          </span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="px-4 pt-1 pb-4 odd:bg-white -mt-2">
                            <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal mt-2 mb-4">
                              <SanityBlockContent
                                blocks={pub._rawApplikationer}
                                projectId="1tbc9cjy"
                                dataset="production"
                              />
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                              <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                                SAE
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                                {pub.sae}
                              </div>
                              <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                                Viskositet cSt, mm2/s 40°C
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                                {pub.viskositet40}
                              </div>
                              <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                                Viskositet cSt, mm2/s 100°C
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                                {pub.viskositet100}
                              </div>
                              <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                                VI
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                                {pub.vi}
                              </div>
                              <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                                Flampunkt °C
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                                {pub.flampunkt}
                              </div>
                              <div className="font-gothamNarrow font-bold text-left text-md text-gray-700 block col-span-2">
                                Lägstaflyttemp °C
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal col-span-3">
                                {pub.lagstaflyttemp}
                              </div>
                            </div>
                            <div className="grid grid-flow-col auto-cols-min mt-4">
                              <div className="mr-4">
                                <p className="items-center md:flex-initial md:w-max bg-preemYellow">
                                  <a
                                    href={pub.pds}
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
                                    href={pub.sds}
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
                  </Accordion.Body>
                ))}
            </Accordion.Item>
          </>
        ))}
      </Accordion>
    </>
  );
};

// const {
//   allSanityProductStandard: { distinct },
// } = useStaticQuery(query);

//   const singleProd = data.allSanityProductStandard.nodes;
//   const cats = data.allSanityProductStandard.distinct;

//   const chicken = data.allSanityStandardsApi.nodes;

//   console.log(chicken);

//   return (
//     <Accordion flush>
//       {cats.map((cats, i) => {
//         return (
//           <Accordion.Item eventKey={i}>
//             <Accordion.Header>{cats}</Accordion.Header>

//             {singleProd
//               .filter((pub) => pub.title === cats)
//               .map((pub, j) => (
//                 <Accordion.Body>
//                   <Accordion className="inner">
//                     <Accordion.Item eventKey={j}>
//                       <Accordion.Header>{pub.title}</Accordion.Header>
//                       <Accordion.Body>
//                         <p>standard</p>
//                         {chicken.map((stitle, i) => (
//                           <span className="block" key={i}>
//                             {stitle.title}
//                           </span>
//                         ))}
//                       </Accordion.Body>
//                     </Accordion.Item>
//                   </Accordion>
//                 </Accordion.Body>
//               ))}
//           </Accordion.Item>
//         );
//       })}
//     </Accordion>
//   );
// };

export default StandardsV2;