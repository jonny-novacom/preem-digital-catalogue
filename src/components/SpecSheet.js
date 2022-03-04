import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function SpecSheet() {
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
          standardCat {
            title
          }
          standardFord {
            title
          }
          standardGM {
            title
          }
          standardMAN {
            title
          }
          standardMercedesBenz {
            title
          }
          standardOther {
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
        }
        distinct(field: saps)
      }
    }
  `);

  const singleProd = data.allSanityProduct.nodes;
  const cats = data.allSanityProduct.distinct;

  const api = singleProd.StandardAPI?.title[0];

  console.log(singleProd);
  console.log(api);

  return (
    <>
      <div className="pb-2 overflow-x-scroll">
        <div className="pb-2 font-medium border-b-8 border-black w-max font-gothamNarrow">
          <div className="inline-block px-2 text-left w-52">Produkt</div>
          <div className="inline-block w-32 px-2 text-center">SAE-klass</div>
          <div className="inline-block w-32 px-2 text-center">ACEA</div>
          <div className="inline-block w-32 px-2 text-center">API</div>
          <div className="inline-block w-32 px-2 text-center">BMW</div>
          <div className="inline-block w-32 px-2 text-center">Cat</div>
          <div className="inline-block w-32 px-2 text-center">Ford</div>
          <div className="inline-block w-32 px-2 text-center">
            GM/Opel/Vauxhall
          </div>
          <div className="inline-block w-32 px-2 text-center">MAN</div>
          <div className="inline-block w-32 px-2 text-center">
            Mercedes Benz
          </div>
          <div className="inline-block w-32 px-2 text-center">Renault</div>
          <div className="inline-block w-32 px-2 text-center">Porsche</div>
          <div className="inline-block w-32 px-2 text-center">Volvo</div>
          <div className="inline-block w-32 px-2 text-center">
            VW/Audi/Skoda
          </div>
        </div>
        <div className="grid grid-cols-16">
          <div className="col-span-1 bg-preemGreen">
            <div className="text-white transform -rotate-90 bg-black">
              LOW SAPS
            </div>
          </div>
          <div className="col-span-15">
            {singleProd
              .filter((thesaps) => thesaps.saps === "High SAPS")
              .map((product) => (
                <div
                  key={product.id}
                  className="odd:bg-gray-100 even:bg-white w-max font-gothamNarrow"
                >
                  <div className="text-sm w-max ">
                    <div className="inline-block p-2 font-medium text-left align-top w-52">
                      {product.produkt}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.sae}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.standardACEA
                        .map((acea) => acea.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.standardAPI.map((api) => api.title).join(", ")}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.standardBMW.map((bmw) => bmw.title).join(", ")}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.standardCat.map((cat) => cat.title).join(", ")}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.standardFord
                        .map((ford) => ford.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.standardGM.map((gm) => gm.title).join(", ")}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.standardMAN.map((man) => man.title).join(", ")}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.standardMercedesBenz
                        .map((merc) => merc.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.standardRenault
                        .map((renault) => renault.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.standardPorsche
                        .map((man) => man.porshce)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.standardVolvo
                        .map((volvo) => volvo.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-32 p-2 text-center align-top">
                      {product.standardVW.map((vw) => vw.title).join(", ")}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
