import React from 'react';

import Home from "../routes/Home/Home";
import AppMenuButton from "./AppMenu/AppMenuButton";
import Footer from "./Footer/Footer";

const App = (props) => {
    return (
        <>
            <AppMenuButton/>
            <Home/>
            <Footer/>
        </>
    )
};

export default App;