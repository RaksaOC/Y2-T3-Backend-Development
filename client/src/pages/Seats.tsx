import React from 'react';
import Header from '../components/Header';
import SeatGrid from '../components/SeatGrid';

export default function Seats() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Seats</h2>
                <SeatGrid />
                <div className="flex justify-end mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded">Next</button>
                </div>
            </div>
        </div>
    );
} 