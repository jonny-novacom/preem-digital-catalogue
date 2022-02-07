import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

export default function PowerGenerationPage() {
  return (
    <>
      <SearchEngineOptimisation
        title="Preem Digital Catalogue"
        image=""
        description=""
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-40">
          <div className="container mx-auto pt-16">
            <StaticImage
              src="../images/icons/power-gen.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Power Generation"
              transformOptions={"cover"}
              className="block mx-auto w-20 mb-4"
            />
            <h3 className="text-center text-preemGreen text-2xl font-bold font-gothamNarrow">
              Min nis di ditinctate nusam quaepti ipsam que voluptum
            </h3>
            <p className="text-center text-gray-500 text-md font-gothamNarrow font-normal mt-2 mb-12">
              Min nis di ditinctate nusam quaepti ipsam que voluptum, quossunt
              volorem perupta audipis explibus
            </p>
          </div>
          <div className="block mx-auto text-center">
            <Link to="/category/stationary-gas-engines">
              <span className="text-preemGreen py-2 px-16 hover:brightness-95 rounded-full font-gothamNarrow font-medium inline-block align-top bg-preemYellow">
                View all products
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
