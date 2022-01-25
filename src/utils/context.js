import React, { useState, useContext } from "react";

const SiteContext = React.createContext();

const SiteProvider = ({ children }) => {
  const [searchIsToggled, setSearchIsToggled] = useState(false);
  const [navBarIsToggled, setNavBarIsToggled] = useState(false);
  const [sapsIsToggled, setSapsIsToggled] = useState(false);

  const setSearch = () => {
    setSearchIsToggled(!searchIsToggled);
  };

  const closeSearch = () => {
    setSearchIsToggled(false);
  };

  const setNavBar = () => {
    setNavBarIsToggled(!navBarIsToggled);
  };

  const openNavBar = () => {
    setNavBarIsToggled(true);
  };

  const closeNavBar = () => {
    setNavBarIsToggled(false);
  };

  const setSaps = () => {
    setSapsIsToggled(!sapsIsToggled);
  };
  
  const closeSaps = () => {
    setSapsIsToggled(false);
  };

  return (
    <SiteContext.Provider
      value={{
        searchIsToggled,
        navBarIsToggled,
        sapsIsToggled,
        setSearch,
        closeSearch,
        setNavBar,
        closeNavBar,
        openNavBar,
        setSaps,
        closeSaps,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(SiteContext);
};

export { SiteContext, SiteProvider };
