import React from "react";
import { Box, Typography } from "@mui/material";
import Img from "gatsby-image";

const UserInfo = ({ Image, fixedDate }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                margin:' var(--space-sm) 0'
            }}

        >
            {/* Circular Profile Image */}
            <Box
                component={Img}
                fluid={Image}
                sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    border: "2px solid var(--primary-color)",
                    overflow: "hidden"
                }}
            />

            <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold" ,color: 'var(--text-color)'}} >
                    Amirbek Shomurodov
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                    {fixedDate}
                </Typography>
            </Box>
        </Box>
    );
};

export default UserInfo;
