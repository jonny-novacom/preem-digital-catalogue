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
          className="block mx-auto w-10 object-contain "
        />
        <p className="text-center mt-3 font-helvetica font-medium">
          Authorised Texaco<sup>®</sup> Lubricants Distributor
        </p>
      </div>
    </>
  );
}
