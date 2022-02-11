import * as React from "react";
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
      <div className="max-w-screen-lg mx-auto">
        <div className="px-4 mt-40 mb-24">
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
      </div>
    </>
  );
}
