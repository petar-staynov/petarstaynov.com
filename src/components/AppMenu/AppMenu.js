import React from 'react';
import "./AppMenu.scss"

const AppMenu = (props) => {
    const {handleClick} = props;

    const handlePrint = () => {
        //Hide menu
        handleClick();

        //Prevent menu from being shown in print
        setTimeout(() => {
            window.print();
        }, 10);
    };

    const handleSavePdf = () => {

    };


    return (
        <div className="app-menu">
            <button
                className="app-menu-item"
                onClick={handlePrint}>Print / Save as .pdf
            </button>
        </div>
    )
};

export default AppMenu;