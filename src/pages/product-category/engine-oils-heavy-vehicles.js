import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import CommercialAccordion from "../../components/accordions/CommercialAcc";

export default function EngineOilsHeavyVehicles() {
  return (
    <>
      <div className="container mx-auto mt-40">
        <StaticImage
          src="../../images/icons/commercial.svg"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Services"
          className="block mx-auto w-20 mb-4"
        />
        <h3 className="text-center text-preemYellow text-base font-bold font-gothamNarrow mb-0">
          Motoroljor personbilar och lätta transportfordon
        </h3>
        <h4 className="text-center text-preemGreen text-2xl font-gothamNarrow font-bold">
          Produkt, applikationer, specifikationer
        </h4>
      </div>
      <div className="pt-4">
        <CommercialAccordion />
      </div>
    </>
  );
}
