import { Link } from "react-router";

export default function Header() {
    return (
        <div className="bg-gray-800 text-white p-4 flex space-x-4 justify-center">

            <ul className="flex gap-x-3">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>

        </div>
    )
}a