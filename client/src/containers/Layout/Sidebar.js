import React from 'react';
import { Link } from "react-router-dom";
import { GoDashboard } from "react-icons/go";
import { MdDirectionsBoat } from "react-icons/md";

const Sidebar = () => {
    return (
        <aside className="sidebar sidebar-icons-right sidebar-icons-boxed sidebar-expand-lg asideIndex">
            <header className="sidebar-header">
                <span className="logo">
                    <img src="https://freighthub.com/wp-content/themes/freighthub/img/logo/logo.png" alt="logo"/>
                </span>
            </header>

            <nav className="sidebar-navigation ps-container ps-theme-default" data-ps-id="deed17fd-d827-005b-4084-742c37337dc7">
                <ul className="menu">
                    <li className="menu-item">
                        <Link className="menu-link" to="/">
                            <span className="icon">{GoDashboard({ size: 20 })}</span>
                            <span className="title">Main</span>
                        </Link>
                    </li>    
                    <li className="menu-item">
                        <Link className="menu-link" to="/shipments">
                            <span className="icon">{MdDirectionsBoat({ size: 20 })}</span>
                            <span className="title">Shipments</span>
                        </Link>
                    </li>   
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;