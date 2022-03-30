import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Hr from "../utils/hr";

export default function AuthorisedDistributor() {
  return (
    <>
      <div className="container mx-auto">
        <Hr />
        <StaticImage
          src="../images/texaco-logo.png"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Texaco"
          className="block object-contain w-10 mx-auto "
        />
        <p className="mt-3 mb-8 font-medium text-center font-helvetica">
          Auktoriserad Texaco<sup>®</sup> Smörjmedelsdistributör
        </p>
        <p className="mt-3 mb-12 font-medium text-center font-gothamNarrow">
          Visit{" "}
          <a href="https://www.preem.se/privat/" target="_blank">
            preem.se
          </a>
        </p>
      </div>
    </>
  );
}
