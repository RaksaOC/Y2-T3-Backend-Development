import React from 'react';

export default function SeatGrid() {
    const rows = 6;
    const cols = 8;
    const selected = [19, 20, 21]; // example selected seats
    return (
        <div className="flex flex-col items-center gap-2">
            {[...Array(rows)].map((_, r) => (
                <div key={r} className="flex gap-2">
                    {[...Array(cols)].map((_, c) => {
                        const idx = r * cols + c;
                        const isSelected = selected.includes(idx);
                        return (
                            <div
                                key={c}
                                className={`w-6 h-6 rounded-full ${isSelected ? 'bg-red-600' : 'bg-neutral-300'} border border-neutral-700`}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
} 