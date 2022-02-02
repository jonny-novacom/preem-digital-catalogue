import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Jamforelse() {
  return (
    <>
      <div>
        <h3 className="text-center text-preemYellow text-2xl font-medium font-gothamNarrow">
          Jämförelse viskositetsklassificeringar (SAE – ISO VG)
        </h3>
        <div className="my-4 max-w-2xl">
          <StaticImage
            src="../../images/jamforelse.png"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Jämförelse viskositetsklassificeringar (SAE – ISO VG)"
            transformOptions={"cover"}
          />
        </div>
      </div>
    </>
  );
}
