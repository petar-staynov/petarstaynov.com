import React, {useState} from 'react';
import ResumeBg from "./ResumeBG";
import ResumeEn from "./ResumeEN";
import AppMenuButton from "../../AppMenu/AppMenuButton";
import AppMenu from "../../AppMenu/AppMenu";
import Footer from "../../Footer/Footer";

const HomePage = (props) => {
    return (
        <div className="container text-center">
            <AppMenuButton/>
            <ResumeEn/>
            <Footer/>
        </div>
    )
};

export default HomePage;