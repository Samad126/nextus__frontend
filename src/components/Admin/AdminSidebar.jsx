import { NavLink } from "react-router-dom";
import logo from "../../assets/images/site-logo.svg";

export default function AdminSidebar() {
    return (
        <div id="sidebar">
            <div>
                <a href="#"><img src={logo} alt="" />Next Us</a>
                <button>☰</button>
            </div>
            <div id="sideContents">
                <NavLink to={"/admin"}>Dashboard</NavLink>
                <NavLink to={"/admin/jobs"}>Jobs</NavLink>
                <NavLink to={"/admin/company"}>Company</NavLink>
                <NavLink to={"/admin/contact-us"}>Contact Us</NavLink>
                <NavLink to={"/admin/users"}>Users</NavLink>
            </div>
        </div>
    )
}