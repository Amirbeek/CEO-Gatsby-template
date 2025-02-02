import React from "react";
import Navbar from "./components/Navbar";
import './styles/global.css'
import { ThemeProvider } from "./context/ThemeContext";
import {Container} from "@mui/material";
import {CursorifyProvider, DefaultCursor} from '@cursorify/react'
import Footer from "./components/Footer";

export default function Layout({ children }) {
    return (
        <ThemeProvider>
            <CursorifyProvider
                cursor={<DefaultCursor />}
                opacity={1}
                delay={1.5}
                defaultCursorVisible={false}
                breakpoint={997}
            >
            <Navbar/>
            <Container fixed>
                {children}
            </Container>
            <Footer/>
            </CursorifyProvider>
        </ThemeProvider>
    );
}
