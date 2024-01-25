import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cards = ({srcImage, title}) => {
    return (
        <>
            <Card bg="transparent" className="p-2" style={{ width: '5.7rem' }}>
                <Card.Img variant="top" src={srcImage} />
                <Card.Title className="text-center font-secondary fs-6 text-light mt-3 fw-light">{title}</Card.Title>
            </Card>
        </>
    )
}

export default Cards