import React from 'react';

export default function MovieCard() {
    return (
        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow flex flex-col">
            <div className="bg-neutral-700 h-40 w-full" />
            <div className="p-2">
                <div className="text-sm text-blue-400 font-semibold">movie</div>
                <div className="text-xs text-neutral-400">2025 &bull; 110 min</div>
            </div>
        </div>
    );
} 