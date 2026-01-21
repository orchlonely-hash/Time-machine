import React from "react";
import Counter from "../components/Counter";


export default function Main() {
    const [count, setCount] = React.useState(0);
    return (
        <div className="w-full h-screen flex items-center flex-col">
<<<<<<< HEAD
            
            <Counter />
=======
            <Counter count={count} setCount={setCount}/>
>>>>>>> e084e4b6dafb055dde1b4bff9aa3612ecbef306e
        </div>
    )
}