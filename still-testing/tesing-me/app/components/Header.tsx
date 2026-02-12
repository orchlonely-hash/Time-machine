import Search from "./not-carausel";
import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-gray-600 w-full h-12 flex items-center justify-around">
            <Search></Search>
            <Link href="/Service" className="text-white">Go to service</Link>
            <Link href="/Boredom" className="text-white">Im Bored</Link>
        </div>
    );
}