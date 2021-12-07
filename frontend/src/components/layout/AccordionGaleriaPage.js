import { Accordion, Button} from 'react-bootstrap';

const AccordionGaleriaPage = (props) => {

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Buscar por nombre</Accordion.Header>
                <Accordion.Body>
                <div class="input-group mb-3">
                    <input id="txtBuscar" type="text" class="form-control" placeholder="Ingresa el nombre" aria-label="Ingresa el nombre" aria-describedby="button-addon2" />
                    <Button variant="outline-secondary" id="button-addon2" onClick={props.buscar}>Buscar</Button>
                </div>
                </Accordion.Body>
            </Accordion.Item>
            
        </Accordion>
    )
}

export default AccordionGaleriaPage;