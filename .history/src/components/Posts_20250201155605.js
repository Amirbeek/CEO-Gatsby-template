import { Card } from "@mui/material";

export default function Posts(){
    const handleRedirect = (url) => {
        
    };
    return(
        <Card>
            <Card.img
            variant="top"
            src={image}
            style={{
                borderRadius: '15px 15px 0 0',
                objectFit: 'cover',
                height: '220px',
            }}/>
             <Card.Body></Card.Body>
        </Card>
    )
}