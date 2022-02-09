// import { useStaticQuery } from "gatsby";
// import { getImage, StaticImage } from "gatsby-plugin-image";
// import * as React from "react";
// import BackgroundImage from "gatsby-background-image";
// import { convertToBgImage } from "gbimage-bridge";

// const MarineBanner = () => {
//   const { placeholderImage } = useStaticQuery(
//     graphql`
//       query {
//         placeholderImage: file(
//           relativePath: { eq: "bg-images/marine-bg.jpg" }
//         ) {
//           childImageSharp {
//             gatsbyImageData(
//               width: 200
//               placeholder: BLURRED
//               formats: [AUTO, WEBP, AVIF]
//             )
//           }
//         }
//       }
//     `
//   );

//   console.log(placeholderImage);

//   //   const image = getImage(placeholderImage);

//   //   // Use like this:
//   //   const bgImage = convertToBgImage(image);

//   //   console.log(bgImage);

//   return (
//     <>
//       <div className="p-8">
//         <div className="flex justify-end">
//           <StaticImage
//             src="../../images/texaco-logo.png"
//             quality={95}
//             formats={["AUTO", "WEBP", "AVIF"]}
//             alt="Texaco"
//             transformOptions={"cover"}
//             className="mt-12 mr-6"
//           />
//         </div>
//       </div>
//       <div className="p-8 md:pt-16">
//         <div className="grid grid-cols-8 gap-1 mt-12">
//           <div className="col-span-8 md:col-span-6">
//             <h1 className="block mb-4 text-4xl font-bold leading-none text-white font-gothamNarrow md:text-55xl text-shadow-md md:mt-24 mt:8">
//               Motoroljor
//               <br />
//               personbilar och
//               <br />
//               lätta transportfordon
//             </h1>
//           </div>
//           <div className="col-span-8 md:col-span-2">
//             <StaticImage
//               src="../images/havoline-prods-mg-sae-0w-20.png"
//               quality={95}
//               formats={["AUTO", "WEBP", "AVIF"]}
//               alt="Havoline ProDS MG SAE 0W-20"
//               className="block object-contain w-56 p-4 mx-auto md:mt-12"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MarineBanner;
