import React from "react";
import { NavLink } from "react-router-dom"

const navLinks = {
    display: "inline",
    textDecoration: "none",
    fontSize: "18px",
    marginLeft: "15rem"
}

function NavBar(){
    return (
        <div className="nav">
            <div>
                <h3 style={{fontSize: "23px", marginLeft: "2rem"}}>ReelWorld</h3>
            </div>
            <div>
                <NavLink to="/" style={navLinks}>
                    Home
                </NavLink>
                <NavLink to="customerReviews" style={navLinks}>
                    Reviews
                </NavLink>

                <NavLink to="contactUs" style={navLinks}>
                    Contact us
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;