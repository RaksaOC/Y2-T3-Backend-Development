import React from 'react';

export default function InfoRow({ label }: { label: string }) {
    return (
        <div className="flex flex-col">
            <div className="text-white text-sm mb-1">{label}</div>
            <div className="border-b border-neutral-600 w-full" />
        </div>
    );
} 