import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TheatreShowtime from '../components/TheatreShowtime';

const theatres = [1, 2, 3]; // placeholder

export default function Theatres() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <div className="p-4">
                <SearchBar />
                <h2 className="text-lg font-semibold mt-6 mb-4">Theatres</h2>
                <div className="space-y-4">
                    {theatres.map((t, i) => <TheatreShowtime key={i} />)}
                </div>
            </div>
        </div>
    );
} 