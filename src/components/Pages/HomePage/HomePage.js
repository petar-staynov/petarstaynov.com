import React, {useState} from 'react';
import ResumeBg from "./ResumeBG";
import ResumeEn from "./ResumeEN";
import AppMenuButton from "../../AppMenu/AppMenuButton";
import AppMenu from "../../AppMenu/AppMenu";

const HomePage = (props) => {
    const [resumeVariant, setResumeVariant] = useState("en");

    const ButtonBG = () => (
        <button
            type="button"
            className="btn btn-primary"
            onClick={() => setResumeVariant("bg")}
        >Български</button>);

    const ButtonEN = () => (
        <button
            type="button"
            className="btn btn-primary"
            onClick={() => setResumeVariant("en")}
        >English</button>);

    return (
        <div className="container text-center">
            {
                resumeVariant === "bg"
                    ? <ResumeBg/>
                    : <ResumeEn/>
            }
            {
                resumeVariant === "bg"
                    ? <ButtonEN/>
                    : <ButtonBG/>
            }
            <AppMenuButton/>
        </div>
    )
};

export default HomePage;