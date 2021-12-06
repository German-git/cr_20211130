import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsStar, BsFillStarFill } from "react-icons/bs";

const JuegoItem = (props) => {
    const {nombre, id_genero, genero, gratis, valoracion, recomendado, nota, img_id, imagen} = props;

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

    return (
        <div class="col col-md-4 col-sm-12">
            <Card >
                
                <div class="card-img-top" dangerouslySetInnerHTML={{__html: imagen}} />
                <Card.Body>
                
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Subtitle>Género: {genero}</Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        Valoración: {armarValoracion(valoracion)}
                    </ListGroupItem>

                    <ListGroupItem>
                        Gratis: {gratis === 1 ? "Si" : "No"}
                    </ListGroupItem>
                </ListGroup>
                <Card.Body></Card.Body>
            </Card>
        </div>
    )
}

export default JuegoItem