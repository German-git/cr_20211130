import { Card } from 'react-bootstrap';
import NewLineToText from '../layout/NewLineToText';

const RecomendadoItem = (props) => {
    //const {nombre, id_genero, genero, gratis, valoracion, recomendado, nota, img_id, imagen} = props;

    return (
        <div class="col col-md-8 offset-md-2">
            <Card >
                
                <div class="card-img-top" dangerouslySetInnerHTML={{__html: props.imagen}} />
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Subtitle>Género: {props.genero}</Card.Subtitle>
                </Card.Body>
                
                <Card.Body>
                    <Card.Text>
                        <p></p>
                        <NewLineToText text={props.nota}/>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RecomendadoItem