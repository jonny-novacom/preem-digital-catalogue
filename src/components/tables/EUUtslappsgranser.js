import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function EUUtslappsgranser() {
  return (
    <>
      <div>
        <h3 className="text-center text-preemYellow text-2xl font-medium font-gothamNarrow">
          EU utsläppsgränser tunga fordon
        </h3>
        <p className="text-left text-gray-500 text-md font-gothamNarrow font-normal mt-2 mb-4">
          EU har skärpt kraven på emissioner av NO<sub>x</sub> (kväveoxider) och
          partiklar (sot) från tunga fordon undan för undan. En bil med en Euro
          I motor släpper ut lika mycket partiklar som 36 bilar med Euro
          VI-motorer.
        </p>
        <div className="my-4 max-w-2xl container mx-auto">
          <StaticImage
            src="../../images/eu-utslappsgranser.png"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="EU utsläppsgränser tunga fordon"
            transformOptions={"cover"}
            className="block mx-auto"
          />
        </div>
      </div>
    </>
  );
}
