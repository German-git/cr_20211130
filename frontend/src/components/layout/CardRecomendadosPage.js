import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsStar, BsFillStarFill } from "react-icons/bs";
//import NewLineToText from 'NewLineToText';
import NewLineToText from './NewLineToText';

const CardRecomendadosPage = (props) => {

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
            <Card.Img variant="top" src={props.image} maxHeight="500px" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>Género: {props.genre}</Card.Subtitle>
                <Card.Text>
                    <p></p>
                    <NewLineToText text={props.text}/>
                    
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardRecomendadosPage;