import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
    return (
        <div className="flex items-center bg-neutral-900 rounded-full px-4 py-2 w-full max-w-xl mx-auto">
            <Search className="text-neutral-400 mr-2" size={20} />
            <input
                className="bg-transparent outline-none text-white flex-1"
                placeholder="Search"
                disabled
            />
        </div>
    );
} 