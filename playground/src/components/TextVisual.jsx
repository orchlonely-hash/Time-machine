import React from 'react';


export default function TextVisual({ paragraph }) {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
                {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <p className="text-lg">{paragraph}</p>}
        </div>
    );
}