import * as React from "react";
import ISO3448 from "../components/tables/ISO3448";
import Jamforelse from "../components/tables/Jamforelse";
import SAEViscMotor from "../components/tables/SAEViscMotor";
import SAEViscTransmission from "../components/tables/SAEViscTransmission";
import APIMotoroljor from "../components/tables/APIMotoroljor";
import HR from "../utils/hr";
import ACEAMotoroljor from "../components/tables/ACEAMotoroljor";
import ACEAMotoroljorDiesel from "../components/tables/ACEAMotoroljorDiesel";
import EUUtslappsgranser from "../components/tables/EUUtslappsgranser";
import APIBasoljeklassificering from "../components/tables/APIBasoljeklassificering";
import NLGI from "../components/tables/NLGI";

export default function TechnicalInformationPage() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-40 px-4">
          <h1 className="font-gothamNarrow font-bold text-center text-3xl mb-4 text-preemGreen block">
            Teknisk information
          </h1>
          <SAEViscMotor />
          <HR />
          <SAEViscTransmission />
          <HR />
          <ISO3448 />
          <HR />
          <Jamforelse />
          <HR />
          <APIMotoroljor />
          <HR />
          <ACEAMotoroljor />
          <HR />
          <ACEAMotoroljorDiesel />
          <HR />
          <EUUtslappsgranser />
          <HR />
          <APIBasoljeklassificering />
          <HR />
          <NLGI />
          <HR />
        </div>
      </div>
    </>
  );
}
