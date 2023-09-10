import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <div className="navbar">
                <NavLink to={"/"}><div className="logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/1089/1089472.png" />
                    <span>seriex</span>
                </div></NavLink>
                <div className="links">
                    <NavLink to={"/playerlist"}>playerlist</NavLink>
                    <NavLink to={"https://discord.gg/9js26X5B6v"}>discord</NavLink>
                    <NavLink>support</NavLink>
                </div>
                <div className="actions">
                    <a href="https://discord.com/invite/9js26X5B6v" className="button"><img src="https://hyperbeam.com/images/PngItem_1083749-p-500.png" /> discord</a>
                    <a href="#" onClick={() => alert("not yet implemented")} className="button cool">login</a>
                </div>
            </div>
        </header>
    );
}