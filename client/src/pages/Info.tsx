import React from 'react';
import Header from '../components/Header';
import InfoRow from '../components/InfoRow';

export default function Info() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Info</h2>
                <div className="space-y-2 mb-8">
                    <InfoRow label="Info" />
                    <InfoRow label="Info" />
                    <InfoRow label="Info" />
                    <InfoRow label="Info" />
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded">Reserve</button>
                </div>
            </div>
        </div>
    );
} 