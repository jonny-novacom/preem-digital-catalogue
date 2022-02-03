import * as React from "react";
import ACEAStandard from "../components/standards/ACEA";
import APIStandard from "../components/standards/API";
import BMWStandard from "../components/standards/BMW";
import CatStandard from "../components/standards/Cat";
import PorscheStandard from "../components/standards/Porsche";
import RenaultStandard from "../components/standards/Renault";
import VWStandard from "../components/standards/VWAudiSkoda";

export default function StandardsPage() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-40 mb-24">
          <ACEAStandard />
          <APIStandard />
          <BMWStandard />
          <CatStandard />
          <RenaultStandard />
          <VWStandard />
          <PorscheStandard />
        </div>
      </div>
    </>
  );
}
