import React from "react";
import Layout from "../Layout";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import * as styles from "../styles/blog.module.css";
export default function NotFound() {
    return (
        <Layout>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="notfound-container"
            >
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="notfound-title"
                >
                    404
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="notfound-text"
                >
                    Oops! The page you're looking for doesn't exist.
                </motion.p>

                <div className="mt-md">
                    <Link to="/" className={styles.Button}>Go Home</Link>
                </div>

                <motion.div
                    className="notfound-bg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
            </motion.div>
        </Layout>
    );
}
