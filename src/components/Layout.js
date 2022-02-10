import React from "react";

import { SiteProvider } from "../utils/context";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyles from "../styles/GlobalStyles";
import Nav from "./Nav";

import "../styles/typography.css";
import SearchEngineOptimisation from "./SearchEngineOptimisation";
import AuthorisedDistributor from "./AuthorisedDistributor";

export default function Layout({ children, location }) {
  const isHome = location.pathname === "/";

  return (
    <>
      <SiteProvider>
        <SearchEngineOptimisation />
        <GlobalStyles />
        <Nav />
        {children}
        {isHome ? "" : <AuthorisedDistributor />}
      </SiteProvider>
    </>
  );
}
