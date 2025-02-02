import React from "react";
import { Box, IconButton, Typography, Link } from "@mui/material";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                color: "white",
                textAlign: "center",
                py: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Centers all content
                justifyContent: "center", // Centers vertically
            }}
        >
            {/* Social Media Icons */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                }}
            >
                <IconButton component={Link} href="https://github.com/Amirbeek" target="_blank" sx={{ color: "secondary.main" }}>
                    <FaGithub />
                </IconButton>
                <IconButton component={Link} href="https://www.linkedin.com/in/amirbekshomurodovakmal/" target="_blank" sx={{ color: "secondary.main" }}>
                    <FaLinkedin />
                </IconButton>
                <IconButton component={Link} href="https://www.behance.net/amirbekshomuro" target="_blank" sx={{ color: "secondary.main" }}>
                    <FaBehance />
                </IconButton>
            </Box>

            {/* Copyright Text */}
            <Typography variant="body2" sx={{ color: "#bbb", textAlign: "center" }}>
                © {new Date().getFullYear()} Amirbek's Portfolio. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
