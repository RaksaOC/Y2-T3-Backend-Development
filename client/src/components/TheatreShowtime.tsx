import React from 'react';

export default function TheatreShowtime() {
    return (
        <div className="flex items-center bg-neutral-800 rounded-lg p-4">
            <div className="flex-1">
                <div className="text-white font-semibold">movie</div>
                <div className="text-xs text-neutral-400">2025 &bull; 110 min</div>
                <div className="text-xs text-neutral-400">Theatre: 7</div>
            </div>
            <div className="flex gap-2">
                <button className="bg-neutral-700 text-white px-3 py-1 rounded-full text-xs">12:00</button>
                <button className="bg-neutral-700 text-white px-3 py-1 rounded-full text-xs">15:00</button>
                <button className="bg-neutral-700 text-white px-3 py-1 rounded-full text-xs">18:00</button>
            </div>
        </div>
    );
} 