import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Pdf from "react-to-pdf";

export default function PDFTest() {
  const data = useStaticQuery(graphql`
    query {
      allSanityProduct(
        filter: {
          productCategory: {
            elemMatch: {
              title: {
                eq: "Engine oils passenger cars and light transport vehicles"
              }
            }
          }
        }
        sort: { fields: produkt, order: ASC }
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
          featured
          slug {
            current
          }
          standardACEA {
            title
          }
          standardAPI {
            title
          }
          standardBMW {
            title
          }
          standardFord {
            title
          }
          standardGM {
            title
          }
          standardMercedesBenz {
            title
          }
          standardPorsche {
            title
          }
          standardRenault {
            title
          }
          standardVW {
            title
          }
          standardVolvo {
            title
          }
          standardOther {
            title
          }
        }
        distinct(field: saps)
      }
    }
  `);

  const singleProd = data.allSanityProduct.nodes;

  const ref = React.createRef();
  const options = {
    orientation: "landscape",
  };

  return (
    <div>
      <Pdf
        targetRef={ref}
        filename="chickens.pdf"
        options={options}
        x={5}
        y={5}
        scale={0.5}
      >
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>

      <div ref={ref}>
        <div className="overflow-x-scroll">
          <div className="pb-2 font-medium border-b-8 border-black w-max font-gothamNarrow">
            <div className="inline-block px-2 text-left w-60 ml-15 printer-ml">
              Produkt
            </div>
            <div className="inline-block w-40 px-2 text-center">SAE-klass</div>
            <div className="inline-block w-40 px-2 text-center">ACEA</div>
            <div className="inline-block w-40 px-2 text-center">API</div>
            <div className="inline-block w-40 px-2 text-center">BMW</div>
            <div className="inline-block w-40 px-2 text-center">Ford</div>
            <div className="inline-block w-40 px-2 text-center">
              GM/Opel/Vauxhall
            </div>
            <div className="inline-block w-40 px-2 text-center">
              Mercedes Benz
            </div>
            <div className="inline-block w-40 px-2 text-center">Renault</div>
            <div className="inline-block w-40 px-2 text-center">Porsche</div>
            <div className="inline-block w-40 px-2 text-center">Volvo</div>
            <div className="inline-block w-40 px-2 text-center">
              VW/Audi/Skoda
            </div>
            <div className="inline-block px-2 text-center w-72">Övrigt</div>
          </div>
          <div className="grid grid-cols-16">
            <div className="col-span-1 bg-preemGreen">
              <span
                className="relative block text-white transform -rotate-90 font-gothamNarrow w-max "
                style={{ top: "720px", right: "25px" }}
              >
                Low & Mid SAPS
              </span>
            </div>
            <div className="col-span-15">
              {singleProd
                .filter((thesaps) => thesaps.saps === "Low and Mid SAPS")
                .map((product) => (
                  <div
                    key={product.id}
                    className="odd:bg-gray-100 even:bg-white w-max font-gothamNarrow"
                  >
                    <div className="text-sm w-max ">
                      <div className="inline-block p-2 font-medium text-left align-top w-60">
                        {product.produkt}
                      </div>
                      <div className="inline-block w-40 p-2 text-center align-top">
                        {product.sae}
                      </div>
                      <div className="inline-block w-40 p-2 text-center align-top">
                        {product.standardACEA
                          .map((acea) => acea.title)
                          .join(", ")}
                      </div>
                      <div className="inline-block w-40 p-2 text-center align-top">
                        {product.standardAPI.map((api) => api.title).join(", ")}
                      </div>
                      <div className="inline-block w-40 p-2 text-center align-top">
                        {product.standardBMW.map((bmw) => bmw.title).join(", ")}
                      </div>
                      <div className="inline-block w-40 p-2 text-center align-top">
                        {product.standardFord
                          .map((ford) => ford.title)
                          .join(", ")}
                      </div>
                      <div className="inline-block w-40 p-2 text-center align-top">
                        {product.standardGM.map((gm) => gm.title).join(", ")}
                      </div>
                      <div className="inline-block w-40 p-2 text-center align-top">
                        {product.standardMercedesBenz
                          .map((merc) => merc.title)
                          .join(", ")}
                      </div>
                      <div className="inline-block w-40 p-2 text-center align-top">
                        {product.standardRenault
                          .map((renault) => renault.title)
                          .join(", ")}
                      </div>
                      <div className="inline-block w-40 p-2 text-center align-top">
                        {product.standardPorsche
                          .map((man) => man.porshce)
                          .join(", ")}
                      </div>
                      <div className="inline-block w-40 p-2 text-center align-top">
                        {product.standardVolvo
                          .map((volvo) => volvo.title)
                          .join(", ")}
                      </div>
                      <div className="inline-block w-40 p-2 text-center align-top">
                        {product.standardVW.map((vw) => vw.title).join(", ")}
                      </div>
                      <div className="inline-block p-2 text-center align-top w-72">
                        {product.standardOther
                          .map((other) => other.title)
                          .join(", ")}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
