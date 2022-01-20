// import { graphql, useStaticQuery } from "gatsby";
// import React from "react";

// import { useGlobalContext } from "../utils/context";
// import SlideY from "../utils/slidey";
// import SingleProduct from "./SingleProduct";

// export default function SingleSaps() {
//   const { sapsIsToggled, setSaps } = useGlobalContext;

//   const { saps } = useStaticQuery(graphql`
//     query {
//       saps: allSanitySaps(sort: { fields: title, order: ASC }) {
//         nodes {
//           title
//         }
//       }
//     }
//   `);

//   const singleSaps = saps.nodes;

//   return (
//     <>
//       <div className="mt-36">
//         {singleSaps.map((saps, i) => (
//           <button
//             key={i}
//             className="p-4 odd:bg-gray-50 even:bg-gray-200 w-screen"
//             onClick={setSaps}
//           >
//             <span className="font-gothamNarrow text-bold text-left text-md text-gray-700 block">
//               {saps.title}
//             </span>
//           </button>

//         ))}

//       </div>

//       <div className="fixed z-40 block bottom-14 lg:hidden md:w-1/2">
//         <SlideY direction={-1} distance={1000} isActive={sapsIsToggled}>
//         <div className="w-full md:w-2/3 h-screen bg-white p-8">
//           <SingleProduct />
//           <p>gewgewgew</p>
//           </div>
//         </SlideY>
//         </div>

//     </>
//   );
// }
