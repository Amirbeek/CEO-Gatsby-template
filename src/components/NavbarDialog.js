import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

export default function NavbarDialog({ showDialog, handleDialogClose, handelCloseView }) {

    return (
        <Dialog open={showDialog} onClose={handleDialogClose}>
            <DialogTitle>Quick View - Resume</DialogTitle>
            <DialogContent>
                <img
                    src="./cv.png"
                    alt="Resume"
                    style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain" }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handelCloseView} color="primary">
                    <a
                        href={"/Amirbek-Shomurodov-CV.pdf"}
                        download
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Download CV
                    </a>
                </Button>
                <Button onClick={handleDialogClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}
