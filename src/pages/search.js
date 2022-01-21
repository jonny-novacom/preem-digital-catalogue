import * as React from "react";
import AlgoliaSearch from "../components/AlgoliaSearch";

export default function SearchPage() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-24">
          <AlgoliaSearch />
        </div>
      </div>
    </>
  );
}
