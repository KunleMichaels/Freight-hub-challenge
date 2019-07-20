import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar ant-col main-menu ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-6 ant-col-xl-5 ant-col-xxl-4 sidebar-icons-right sidebar-icons-boxed sidebar-expand-lg" style={{"zIndex": "1001"}}>
            <header className="sidebar-header">
                <span className="logo">
                    <img src="https://freighthub.com/wp-content/themes/freighthub/img/logo/logo.png" alt="logo"/>
                </span>
            </header>

            <nav className="sidebar-navigation ps-container ps-theme-default" data-ps-id="deed17fd-d827-005b-4084-742c37337dc7">
                <ul className="menu">
                    <li className="menu-item">
                        <Link className="menu-link" to="/">
                            <span className="icon"><i className="fas fa-universal-access"></i></span>
                            <span className="title">Main</span>
                        </Link>
                    </li>    
                    <li className="menu-item">
                        <Link className="menu-link" to="/shipments">
                            <span className="icon"><i className="fas fa-file-download"></i></span>
                            <span className="title">Shipments</span>
                        </Link>
                    </li>   
                </ul>
                <div className="ps-scrollbar-x-rail" style={{"left": "0px", "bottom": "0px"}}><div className="ps-scrollbar-x" tabIndex="0" style={{"left": "0px", "width": "0px"}}></div></div><div className="ps-scrollbar-y-rail"style={{"top": "0px", "right": "2px"}}><div className="ps-scrollbar-y" tabIndex="0" style={{"left": "0px", "height": "0px"}}></div></div>
            </nav>
        </aside>
    );
}

export default Sidebar;