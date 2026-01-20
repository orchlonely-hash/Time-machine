export default function Counter({ count, setCount }) {
    return (
        <div className="flex flex-col items-center gap-4 m-8 w-fit h-fit justify-center p-4 border-2 border-gray-300 rounded-md">
            <h1>Counter: {count}</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => setCount(count + 1)} className="flex w-24 h-8 bg-green-500 text-white rounded-md justify-center items-center">Increment</button>
                <button onClick={() => setCount(count - 1)} className="flex w-24 h-8 bg-red-500 text-white rounded-md justify-center items-center">Decrement</button>
            </div>
        </div>
    )
}