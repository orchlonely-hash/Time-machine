import React from 'react';

export default function TaskList() {
    const tasks = [
        { id: 1, text: 'Learn JSX' },
        { id: 2, text: 'Master Hooks' },
        { id: 3, text: 'Build an App' }
    ];
    return (
        <ul>
            {tasks.map((item) => (
                <div className="">
                    <h1>{item.id}</h1>
                    <li key={item.id}>{item.text}</li>
                </div>
            ))}
        </ul>
    );
}