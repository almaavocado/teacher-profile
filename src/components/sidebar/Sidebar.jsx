import React from "react";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <aside className="aside">
            <div className="logo-container">
            <svg width="88" height="49" viewBox="0 0 88 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.808 48.64C11.248 48.64 8.70933 48.192 6.192 47.296C3.67467 46.4 1.86133 45.3973 0.752 44.288L4.144 38.208C5.04 39.0187 6.42667 39.872 8.304 40.768C10.224 41.6213 12.0587 42.048 13.808 42.048C16.0693 42.048 17.904 41.5147 19.312 40.448C20.7627 39.3813 21.488 37.9093 21.488 36.032C21.488 34.5813 21.104 33.3227 20.336 32.256C19.568 31.1893 18.6293 30.3147 17.52 29.632C16.4107 28.9067 14.832 28.032 12.784 27.008C10.352 25.8133 8.688 24.9173 7.792 24.32C3.65333 21.5467 1.584 17.7067 1.584 12.8C1.584 8.74666 2.928 5.65333 5.616 3.52C8.304 1.344 11.696 0.255997 15.792 0.255997C20.1867 0.255997 23.92 1.51466 26.992 4.032L23.6 9.856C22.7893 9.00266 21.6373 8.27733 20.144 7.68C18.6933 7.04 17.136 6.72 15.472 6.72C13.3387 6.72 11.6533 7.21066 10.416 8.192C9.22133 9.13066 8.624 10.5387 8.624 12.416C8.624 13.7387 9.008 14.9333 9.776 16C10.544 17.024 11.504 17.92 12.656 18.688C13.8507 19.456 15.4507 20.3947 17.456 21.504C19.376 22.5707 20.848 23.424 21.872 24.064C22.896 24.6613 23.856 25.3867 24.752 26.24C25.9893 27.3493 26.992 28.672 27.76 30.208C28.528 31.744 28.912 33.4293 28.912 35.264C28.912 38.1227 28.2507 40.5547 26.928 42.56C25.648 44.5653 23.856 46.08 21.552 47.104C19.2907 48.128 16.7093 48.64 13.808 48.64ZM48.713 26.048L45.769 19.392L44.425 26.048L40.073 48H32.969L42.697 0.959999H43.465L56.393 26.368L60.233 34.88L64.073 26.368L76.745 0.959999H77.449L87.561 48H80.521L75.785 26.048L74.377 19.392L71.817 26.048L60.425 48H60.041L48.713 26.048Z" fill="#F0A8AF"/>
            </svg>
            </div>

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