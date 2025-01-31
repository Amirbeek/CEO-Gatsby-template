import { Typography } from '@mui/material';
import * as React from "react";
import DOMPurify from 'dompurify';

export default function SafeTypography({ content }) {
    const safeHTML = DOMPurify.sanitize(content);
    return (
        <Typography variant="h5" sx={{ fontSize: "1.25rem" }} paragraph dangerouslySetInnerHTML={{ __html: safeHTML }} />
    );
}
