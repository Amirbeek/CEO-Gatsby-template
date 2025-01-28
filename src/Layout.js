import React from "react";
import Navbar from "./components/Navbar";
import './styles/global.css'
import { ThemeProvider } from "./context/ThemeContext";

export default function Layout({ children }) {
    return (
        <ThemeProvider>
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Copyright 2025 Web Warrior</p>
            </footer>
        </ThemeProvider>
    );
}
