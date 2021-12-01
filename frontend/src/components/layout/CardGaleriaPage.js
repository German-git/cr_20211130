import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsStar, BsFillStarFill } from "react-icons/bs";

const CardGaleriaPage = (props) => {

    const armarValoracion = (valoracion) => {
        
        let arrValoracion = [];

        for(let v = 1; v < 6; ++v){
            if(valoracion >= v){
                arrValoracion.push(<BsFillStarFill />)
            } else {
                arrValoracion.push(<BsStar />)
            }
        }

        return arrValoracion;
    }

    return(
        <Card style={{ width: '', maxHeight: '' }}>
            <Card.Img variant="top" src={props.image} height="270px" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>Género: {props.genre}</Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    Valoración: {armarValoracion(props.value)}
                </ListGroupItem>

                <ListGroupItem>
                    Gratis: {props.free === 1 ? "Si" : "No"}
                </ListGroupItem>
            </ListGroup>
            <Card.Body></Card.Body>
        </Card>
    )
}

export default CardGaleriaPage