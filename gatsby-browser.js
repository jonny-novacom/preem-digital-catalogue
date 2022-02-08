import React from "react";
import Layout from "./src/components/Layout";
import "./src/styles/global.css";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// exports.onServiceWorkerUpdateFound = () => {
//   if (
//     window.confirm(
//       "This site has been updated with new data. Do you wish to reload the site to get the new data?"
//     )
//   ) {
//     window.location.reload(true);
//   }
// };
