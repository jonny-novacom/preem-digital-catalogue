import React from "react";

import { SiteProvider } from "../utils/context";
import GlobalStyles from "../styles/GlobalStyles";
import Nav from "./Nav";

import "../styles/typography.css";
import SearchEngineOptimisation from "./SearchEngineOptimisation";

export default function Layout({ children }) {
  return (
    <>
      <div className="debug-screens">
        <SiteProvider>
          <SearchEngineOptimisation />
          <GlobalStyles />
          <Nav />
          {children}
        </SiteProvider>
      </div>
    </>
  );
}
