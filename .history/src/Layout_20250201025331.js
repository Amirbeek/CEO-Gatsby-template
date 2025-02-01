import React from "react";
import Navbar from "./components/Navbar";
import './styles/global.css'
import { ThemeProvider } from "./context/ThemeContext";
import {Container} from "@mui/material";

export default function Layout({ children }) {
    return (
        <ThemeProvider>
            <CursorifyProvider
                cursor={<DefaultCursor />}
                opacity={1}
                delay={1.5}
                defaultCursorVisible={false}
                breakpoint={997}
            ></CursorifyProvider>
            <Navbar/>
            <Container fixed>
                {children}
            </Container>
            <footer>
                <p>Copyright 2025 Web Warrior</p>
            </footer>
        </ThemeProvider>
    );
}
