import React from "react";
import Navbar from "./components/Navbar";
import './styles/global.css'
export default function Layout({children}) {
    return <div>
        <Navbar/>
        <div className="content">
            {children}
        </div>
        <footer>
            <p>Copyright 2025 Web Warrior</p>
        </footer>
    </div>
}