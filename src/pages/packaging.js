import * as React from "react";
import useLatestData from "../utils/useLatestData";

export default function PackagingPage() {
  const result = useLatestData();
  console.log(result);
  return (
    <>
      <p>Packaging Page</p>
    </>
  );
}
