import React, {useState} from 'react';
import './AppMenuButton.scss';
import AppMenu from "./AppMenu";

const AppMenuButton = (props) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <div className='app-menu-button'>
                <button className='btn' onClick={() => handleMenuClick()}>
                    <i className="fas fa-print fa-2x"></i>
                </button>
            </div>
            {
                showMenu === true
                    ? <AppMenu handleClick={() => handleMenuClick()}/>
                    : null
            }
        </div>
    )
};

export default AppMenuButton;