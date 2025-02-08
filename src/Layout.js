import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import './styles/global.css';
import { ThemeProvider } from "./context/ThemeContext";
import { Container } from "@mui/material";
import Footer from "./components/Footer";

export default function Layout({ children }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const hasRefreshed = sessionStorage.getItem("hasRefreshed");
            if (!hasRefreshed) {
                sessionStorage.setItem("hasRefreshed", "true");
                window.location.reload();
            }
        }
    }, []);

    return (
        <ThemeProvider>
            <Navbar />
            <Container
                fixed
                sx={{
                    padding: {
                        xs: '26px',
                        sm: '26px',
                        md: '24px',
                        lg: '32px',
                        xl: '40px',
                    },
                }}
            >
                {children}
            </Container>
            <Footer />
        </ThemeProvider>
    );
}
