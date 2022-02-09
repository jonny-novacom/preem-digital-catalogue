import React from "react";

import { SiteProvider } from "../utils/context";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyles from "../styles/GlobalStyles";
import Nav from "./Nav";

import "../styles/typography.css";
import SearchEngineOptimisation from "./SearchEngineOptimisation";

export default function Layout({ children }) {
  return (
    <>
      <SiteProvider>
        <SearchEngineOptimisation />
        <GlobalStyles />
        <Nav />
        {children}
      </SiteProvider>
    </>
  );
}
