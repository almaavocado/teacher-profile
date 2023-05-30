import React from "react";
import "./sidebar.css";
import Logo from "../../assets/suzy-logo.svg"

const Sidebar = () => {
    return (
        <aside className="aside">

            <a href="#home" className="logo-container">
                <img src={Logo} alt="logo_img" />
            </a>

            <nav className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                            <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                            <i className="icon-user-following"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#resume" className="nav_link">
                            <i className="icon-graduation"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#lessonplans" className="nav_link">
                            <i className="icon-layers"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#languagemanifesto" className="nav_link">
                            <i className="icon-briefcase"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav_footer">
                <span className="copyright">&copy; {new Date().getFullYear()}</span>
            </div>
        </aside>
    )
}

export default Sidebar