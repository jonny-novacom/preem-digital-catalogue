import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";
import SpecSheet from "../components/SpecSheet";
import ACEAStandard from "../components/standards/ACEA";
import APIStandard from "../components/standards/API";
import BMWStandard from "../components/standards/BMW";
import CatStandard from "../components/standards/Cat";
import FordStandard from "../components/standards/Ford";
import GMStandard from "../components/standards/GMOpelVauxhall";
import MANStandard from "../components/standards/MAN";
import MercedesBenzStandard from "../components/standards/MercedesBenz";
import PorscheStandard from "../components/standards/Porsche";
import ProprietaryStandard from "../components/standards/Proprietary";
import RenaultStandard from "../components/standards/Renault";
import VolvoStandard from "../components/standards/Volvo";
import VWStandard from "../components/standards/VWAudiSkoda";

export default function StandardsPage() {
  return (
    <>
      <SearchEngineOptimisation
        title="Industri- och OEM-standarder för fordon"
        image=""
        description=""
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="container mx-auto mt-40">
          <StaticImage
            src="../images/icons/standards.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Marine"
            transformOptions={"cover"}
            className="block w-12 mx-auto mb-4"
          />
          <h3 className="mb-8 text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
            Industri- och OEM-standarder för fordon
          </h3>
        </div>
        <div className="px-4 mb-12">
          <ACEAStandard />
          <APIStandard />
          <BMWStandard />
          <CatStandard />
          <FordStandard />
          <GMStandard />
          <MANStandard />
          <MercedesBenzStandard />
          <RenaultStandard />
          <PorscheStandard />
          <VolvoStandard />
          <VWStandard />
          <ProprietaryStandard />
        </div>
        {/* <div className="hidden px-4 mb-12 lg:block">
          <SpecSheet />
        </div> */}
      </div>
    </>
  );
}
