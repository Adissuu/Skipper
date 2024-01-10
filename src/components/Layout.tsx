"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Display from './Display';

export default function Layout(props: { children: React.ReactNode }) {
    const [display, setDisplay] = useState(() => {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem('display') as string) ?? true;
        }
        return true;
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('display', JSON.stringify(display));
        }

        console.log(display)
    });
    return (
        <div className="flex relative items-stretch flex-grow overflow-x-hidden min-h-screen bg-orange-900">
            <Sidebar display={display} setDisplay={setDisplay} />
            <Display display={display} />
        </div>
    )
}
