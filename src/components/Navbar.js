import React, { useState } from "react";
import { Link } from "gatsby";
import {
    AppBar,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
} from "@mui/material";
import { motion, useSpring, useScroll } from "framer-motion";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import * as styles from "../styles/navbar.module.css";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    console.log(styles.containerWrapper)
    const [anchorEl, setAnchorEl] = useState(null);
    const [theme, setTheme] = useState("light");
    const [showDialog, setShowDialog] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
    }

    return (
        <AppBar position="relative" className={styles.containerWrapper}>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 6,
                    originX: 0,
                    backgroundColor: "#5a2de4",
                }}
            />

            <div className={styles.childWrapper}>
                <Link to="/" className={styles.logo}>
                    AmirbekShom <span>_</span>
                </Link>

                {/* Navigation Links */}
                <div className={styles.navLinks}>
                    {/* Hamburger Menu for Mobile */}
                    <IconButton
                        className={styles.menuIcon}
                        onClick={handleDrawerToggle}
                        aria-label="Open menu"
                    >
                        <FaBars />
                    </IconButton>

                    <nav className={styles.desktopNav}>
                        <Button href="/blog">Blog</Button>
                        <Button onClick={handleMenuClick}>Resume</Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={() => setShowDialog(true)}>Quick View</MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                                <a
                                    href={"./Amirbek-Shomurodov-CV.pdf"}
                                    download
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    Download
                                </a>
                            </MenuItem>
                        </Menu>
                        <Button
                            href="https://github.com/Amirbeek"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </Button>
                        <Button href="/contact">Contact</Button>
                    </nav>

                    {/* Theme Toggle */}
                    <div className={styles.themeToggle} onClick={toggleTheme}>
                        {theme === "light" ? (
                            <FaSun size={24} color="#f2994a" />
                        ) : (
                            <FaMoon size={24} />
                        )}
                    </div>
                </div>
            </div>

            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <List>
                    <ListItem button component="a" href="/blog">
                        <ListItemText primary="Blog" />
                    </ListItem>
                    <ListItem button onClick={() => setShowDialog(true)}>
                        <ListItemText primary="Resume" />
                    </ListItem>
                    <ListItem
                        button
                        component="a"
                        href="https://github.com/Amirbeek"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ListItemText primary="Github" />
                    </ListItem>
                    <ListItem button component="a" href="/contact">
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
}
