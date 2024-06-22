import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="nav_wrapper">
                        <h4><NavLink to="/">Vikrant Tiwari</NavLink></h4>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/crud">Crud</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;