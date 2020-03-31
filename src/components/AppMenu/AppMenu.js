import React from 'react';
import "./AppMenu.scss"

const AppMenu = (props) => {
    return (
        <div className="app-menu">
            <a className="app-menu-item" href="#">Change language</a>
            <a className="app-menu-item" href="#">Print</a>
        </div>
    )
};

export default AppMenu;