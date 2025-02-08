import React, {lazy, useState} from "react";
import {
    Typography,
    TextField,
    Button,
    Snackbar,
    Alert,
    Paper,
} from "@mui/material";
const Grid = lazy(() => import("@mui/material/Grid"));

import axios from "axios";
import * as styles from "../../styles/contact.module.css";
import Layout from "../../Layout";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!validateEmail(formData.email)) newErrors.email = "Invalid email";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            await axios.post("https://formcarry.com/s/IA6WaDrT7R2", formData, {
                headers: { Accept: "application/json" },
            });
            setSnackbar({
                open: true,
                message: "Message sent successfully!",
                severity: "success",
            });
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            setSnackbar({
                open: true,
                message: "Failed to send message.",
                severity: "error",
            });
        }
    };

    const handleCloseSnackbar = () =>
        setSnackbar({ ...snackbar, open: false });

    return (
        <Layout >
            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={5}>
                    <Paper className={styles.contactImage}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{ mb: 3, fontWeight: "bolder", color: "#fff" }}
                        >
                            Contact Me
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={7}>
                    <Paper component="form" onSubmit={handleSubmit} className={styles.contactPaper}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    className={styles.inputField}
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    required
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "var(--text-color)",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderWidth: "2px",
                                            },
                                            "&.Mui-focused": {
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "var(--primary-color)",
                                                    borderWidth: "3px",
                                                },
                                            },
                                        },
                                    }}
                                    InputLabelProps={{
                                        classes: { root: styles.inputLabel },
                                    }}

                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    className={styles.inputField}
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    required
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "var(--text-color)",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderWidth: "2px",
                                            },
                                            "&.Mui-focused": {
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "var(--primary-color)",
                                                    borderWidth: "3px",
                                                },
                                            },
                                        },
                                    }}

                                    InputLabelProps={{
                                        classes: { root: styles.inputLabel },
                                    }}

                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    className={styles.inputField}
                                    fullWidth
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    error={!!errors.subject}
                                    helperText={errors.subject}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "var(--text-color)",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderWidth: "2px",
                                            },
                                            "&.Mui-focused": {
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "var(--primary-color)",
                                                    borderWidth: "3px",
                                                },
                                            },
                                        },
                                    }}
                                    InputLabelProps={{
                                        classes: { root: styles.inputLabel },
                                    }}

                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    className={styles.inputField}
                                    fullWidth
                                    label="Message"
                                    name="message"
                                    multiline
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    error={!!errors.message}
                                    helperText={errors.message}
                                    required
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "var(--text-color)",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderWidth: "2px",
                                            },
                                            "&.Mui-focused": {
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "var(--primary-color)",
                                                    borderWidth: "3px",
                                                },
                                            },
                                        },
                                    }}
                                    InputLabelProps={{
                                        classes: { root: styles.inputLabel },
                                    }}

                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "var(--text-color)",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderWidth: "2px",
                                            },
                                            "&.Mui-focused": {
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "var(--primary-color)",
                                                    borderWidth: "3px",
                                                },
                                            },
                                        },
                                    }}
                                    style={{
                                        mt: 2,
                                        backgroundColor: "#5a2de4",
                                        borderRadius: 2,
                                        color: "white",
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Layout>
    );
};

export default Contact;
