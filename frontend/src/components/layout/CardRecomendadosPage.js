import { Card } from 'react-bootstrap';
//import NewLineToText from 'NewLineToText';
import NewLineToText from './NewLineToText';

const CardRecomendadosPage = (props) => {

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