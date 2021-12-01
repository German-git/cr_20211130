import PageTitle from '../components/layout/PageTitle'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

const ContactoPage = (props) => {
    return (
        <div class="container main text-center pt-2">

            <PageTitle titulo="Ponte en contacto" />

            <Row>
                <Col md={6}>
                    <FloatingLabel controlId="email" label="E-mail" className="mb-3">
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                    </FloatingLabel>
                    
                    
                </Col>
                <Col md={6}>
                    <FloatingLabel controlId="motivo" label="Seleccione un motivo">
                        <Form.Select aria-label="Seleccione un motivo">
                            <option value="1">Sugerencia</option>
                            <option value="2">Aporte</option>
                            <option value="3">Otro</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <FloatingLabel controlId="mensaje" label="Mensaje">
                        <Form.Control as="textarea" rows={8} />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row>
                <Col className="d-grid gap-2 mt-2">
                    <Button variant="secondary" size="lg">Enviar</Button>
                </Col>
            </Row>

        </div>
    )
}

export default ContactoPage;