import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const movies = [1, 2, 3, 4]; // placeholder

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <div className="p-4">
                <SearchBar />
                <h2 className="text-lg font-semibold mt-6 mb-4">Showing Today</h2>
                <div className="grid grid-cols-2 gap-4">
                    {movies.map((m, i) => <MovieCard key={i} />)}
                </div>
            </div>
        </div>
    );
} 