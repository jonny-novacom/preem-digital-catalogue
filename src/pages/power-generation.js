import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { GoChevronRight } from "react-icons/go";
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
            {/* <StaticImage
              src="../images/icons/marine.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Marine"
              transformOptions={"cover"}
              className="block mx-auto w-20 mb-4"
            /> */}
            <h3 className="text-center text-preemGreen text-2xl font-bold font-gothamNarrow">
              Min nis di ditinctate nusam quaepti ipsam que voluptum
            </h3>
            <p className="text-center text-gray-500 text-md font-gothamNarrow font-normal mt-2">
              Min nis di ditinctate nusam quaepti ipsam que voluptum, quossunt
              volorem perupta audipis explibus
            </p>
          </div>
          <div className="bg-preemYellow p-4">
            <div className="block mx-auto text-center">
              <Link to="/category/stationary-gas-engines">
                <span className="text-white font-gothamNarrow font-medium inline-block align-top">
                  View all products
                </span>
                <span className="bg-preemGreen w-5 h-5 rounded-full inline-block ml-4">
                  <GoChevronRight
                    className="text-white text-lg text-center block mx-auto"
                    style={{ paddingTop: "1px", paddingLeft: "1px" }}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
