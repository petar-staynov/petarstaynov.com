import React from "react";

import Home from "../routes/Home/Home";
import AppMenuButton from "./AppMenu/AppMenuButton";
import Footer from "./Footer/Footer";

export const DataEnContext = React.createContext();
export const DataBgContext = React.createContext();

const App = (props) => {
  const dataEn = require("../data/resumeEn.json");

  return (
    <>
      <DataEnContext.Provider value={dataEn}>
        <AppMenuButton />
        <Home />
        <Footer />
      </DataEnContext.Provider>
    </>
  );
};

export default App;
