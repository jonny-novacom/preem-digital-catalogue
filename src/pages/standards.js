import * as React from "react";
import ACEAStandard from "../components/standards/ACEA";
import APIStandard from "../components/standards/API";
import RenaultStandard from "../components/standards/Renault";

export default function StandardsPage() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-40">
          <ACEAStandard />
          <APIStandard />
          <RenaultStandard />
        </div>
      </div>
    </>
  );
}
