import * as React from "react";
import StandardsAccordion from "../components/Standards";
import StandardsV2 from "../components/Standards-v2";
import APIStandard from "../components/standards/API";

export default function StandardsPage() {
  return (
    <>
      <div className="mt-40">
        {/* <StandardsAccordion /> */}
        {/* <StandardsV2 /> */}
        <APIStandard />
      </div>
    </>
  );
}
