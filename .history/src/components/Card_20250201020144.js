import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const FunCard = styled(Card)`
    transition: 1s;
    height: 350px;  /* Set fixed height */
    background-color: ${props => props.theme.face_color};
    color: ${props => props.theme.text_color_header};
    cursor: pointer;

    .title-card {
        transition: 0.3s;
    }

    a {
        color: ${props => props.theme.text_color_header};
    }

    &:hover .title-card {
        color: ${props => props.theme.primary_color};
    }

    @media (min-width: 768px) and (max-width: 992px) {
        height: 360px !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    overflow: hidden;
`;


const Card_p = styled.div`
    color: ${props => props.theme.text_color_header}!important;
    font-size: 13px;
    margin: 0;

    span {
        font-weight: bold;
        color: ${props => props.theme.face_color_hover};
    }
`;

function Cards({ image, title, date, ProjectType, Url }) {
    const navigate = useNavigate();

    const handleRedirect = (url) => {
        navigate(url);
    };

    return (
        <FunCard
            style={{
                marginBottom: '20px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => handleRedirect(Url)}
        >
            <Card.Img
                variant="top"
                src={image}
                style={{
                    borderRadius: '15px 15px 0 0',
                    objectFit: 'cover',
                    height: '220px',
                }}
            />
            <Card.Body>
                <Card_p className="text-muted">
                    <span>{ProjectType}</span> · {date}
                </Card_p>
                <span
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                >
                    <Card.Title className="title-card">{title}</Card.Title>
                </span>
            </Card.Body>
        </FunCard>
    );
}

export default Cards;