import { Link } from "react-router";
import React from "react";

export default function Header({ className }) {
    return (
        <div className={` bg-violet-400/50 text-white p-3 flex justify-center items-center ${ className } `}>

            <ul className="flex justify-evenly gap-x-30">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Library">Library</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/Complain">Complain</Link>
                </li>
            </ul>

        </div>
    )
}