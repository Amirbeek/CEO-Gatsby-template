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
import NavbarDialog from "./NavbarDialog";

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
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [showDialog, setShowDialog] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme);
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
                    zIndex: 1000
                }}
            />

            <div className={styles.childWrapper}>
                <Link to="/" className={styles.logo}>
                    AmirbekShom <span className={styles.lgcm}>_</span>
                </Link>

                <div className={styles.navLinks}>
                    <nav className={styles.desktopNav}>
                        <Button href="/blog" className={styles.Button}>Blog</Button>
                        <Button onClick={handleMenuClick}  className={styles.Button}>Resume</Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={() => setShowDialog(true)}>Quick View</MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                                <a
                                    href={"/Amirbek-Shomurodov-CV.pdf"}
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
                            className={styles.Button}
                        >
                            Github
                        </Button>
                        <Button href="/contact" className={styles.Button}>Contact</Button>
                    </nav>

                    <IconButton onClick={toggleTheme}>
                        {theme === 'light' ? <FaSun size={24} color="#f2994a"/> : <FaMoon size={24} color="#f2994a"/>}
                    </IconButton>
                    <IconButton
                        className={styles.menuIcon}
                        onClick={handleDrawerToggle}
                        aria-label="Open menu"
                    >
                        <FaBars />
                    </IconButton>

                </div>


            </div>

            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <List className={styles.colortext}>
                    <ListItem button component="a" href="/blog" style={{ color: 'var(--text-color)' }}>
                        <ListItemText primary="Blog" />
                    </ListItem>
                    <ListItem button onClick={() => setShowDialog(true)} style={{ color: 'var(--text-color)' }}>
                        <ListItemText primary="Resume" />
                    </ListItem>
                    <ListItem
                        button
                        component="a"
                        href="https://github.com/Amirbeek"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-color)' }}
                    >
                        <ListItemText primary="Github" />
                    </ListItem>
                    <ListItem button component="a" href="/contact" style={{ color: 'var(--text-color)' }}>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>

            </Drawer>
            <NavbarDialog showDialog={showDialog}  handleDialogClose={()=> setShowDialog(false)} handelCloseView={handleMenuClose} />
        </AppBar>
    );
}
