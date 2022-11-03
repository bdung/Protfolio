import React, { useState } from "react";
import "./header.css";


const Header = (props) => {
    const[Toggle, showMenu] = useState(false);
    return (

        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">DungBui</a>
                <div className= {Toggle ? "nav__menu show__menu": "nav__menu" }>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i class="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li><li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i class="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li><li className="nav__item">
                            <a href="#project" className="nav__link">
                                <i class="uil uil-suitcase-alt nav__icon"></i>
                                Projects
                            </a>
                        </li><li className="nav__item">
                            <a href="" className="nav__link">
                                <i class="uil uil-file-heart nav__icon"></i>
                                Skills
                            </a>
                        </li><li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i class="uil uil-message nav__icon"></i>
                                Contact 
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close"onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
                </div>
            </nav>

        </header>
    )
   
}
export default Header;