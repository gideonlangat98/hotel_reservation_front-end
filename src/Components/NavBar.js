import React from "react";
import { NavLink } from "react-router-dom"

const navLinks = {
    display: "inline",
    textDecoration: "none",
    fontSize: "18px",
    marginLeft: "9rem"
}

function NavBar(){
    return (
        <div className="nav">
            <div>
                <h3 style={{fontSize: "25px", marginLeft: "2rem"}}>ReelWorld</h3>
            </div>
            <div>
                <NavLink to="/" style={navLinks}>
                    Home
                </NavLink>

                <NavLink to="/aboutUs" style={navLinks}>
                    About
                </NavLink>

                <NavLink to="/ourRooms" style={navLinks}>
                    Our Rooms
                </NavLink>

                <NavLink to="/restaurant" style={navLinks}>
                    Restaurant
                </NavLink>
                <NavLink to="contactUs" style={navLinks}>
                    Contact Us
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;