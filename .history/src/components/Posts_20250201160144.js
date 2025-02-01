import { Card } from "@mui/material";

export default function Posts(img, url, title, type, date){
    const handleRedirect = (imgUrl) => {
        
    };
    return(
        <Card>
            <Img fluid={img}/>
             <Card.Body>
                <div>
                <span>{type} · {Da}</span>
                </div>
             </Card.Body>
        </Card>
    )
}