import { Typography } from '@mui/material';
import * as React from "react";

export default function SafeTypography({ content }) {
    const [safeHTML, setSafeHTML] = React.useState(content);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            import("dompurify").then((DOMPurify) => {
                setSafeHTML(DOMPurify.default.sanitize(content));
            });
        }
    }, [content]);

    return (
        <Typography
            variant="h5"
            sx={{ fontSize: "1.25rem" }}
            paragraph
            dangerouslySetInnerHTML={{ __html: safeHTML }}
        />
    );
}
