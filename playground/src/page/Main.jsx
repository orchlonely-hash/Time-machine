import React from "react";
import Counter from "../components/Counter";


export default function Main() {
    const [count, setCount] = React.useState(0);
    return (
        <div className="w-full h-screen flex items-center flex-col">
            <Counter count={count} setCount={setCount}/>
        </div>
    )
}