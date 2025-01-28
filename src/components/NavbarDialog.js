import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import React from "react";

export default function NavbarDialog({showDialog,handleDialogClose}) {

    return <Dialog open={showDialog} onClose={handleDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>Quick View - Resume</DialogTitle>
        <DialogContent>
            <img src="./cv.png" alt=""/>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
                Close
            </Button>
        </DialogActions>
    </Dialog>
}