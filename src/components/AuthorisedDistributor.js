import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function AuthorisedDistributor() {
  return (
    <>
      <div className="container mx-auto">
        <StaticImage
          src="../images/texaco-logo.png"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Texaco"
          className="block mx-auto w-10 object-contain "
        />
        <p className="text-center mt-3">
          Authorised Texaco® Lubricants Distributor
        </p>
      </div>
    </>
  );
}
