export default function Counter({ count, setCount }) {
    return (
        <div className="counter" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <h1>Counter: {count}</h1>
            <div className="button-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white p-2 rounded">Increment</button>
            <button onClick={() => setCount(count - 1)} className="bg-red-500 text-white p-2 rounded">Decrement</button>
            </div>
        </div>
    )
}