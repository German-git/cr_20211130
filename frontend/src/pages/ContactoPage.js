import PageTitle from '../components/layout/PageTitle'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

import React, {useState} from 'react'
import axios from 'axios'

const ContactoPage = (props) => {
    const urlContacto = 'http://localhost:3000/api/contacto';

    const initialForm = {
        nombre: '',
        email: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setMsg('')
        setSending(true)

        try {
            const response = await axios.post(urlContacto, formData);
            setMsg(response.data.message);
            if(response.data.error){
                setFormData(initialForm)
            }
        }catch(err){
            console.log(err);
            setMsg('');
            setFormData(initialForm)
        }
        
        setSending(false);
        
    }

    return (
        <div className="container main text-center pt-2">

            <PageTitle titulo="Ponte en contacto" />

            <Form className="form" onSubmit={handleSubmit} method="post" action="">
            <Row>
                <Col md={6}>
                    <FloatingLabel controlId="email" label="E-mail" className="mb-3">
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" name="email" value={formData.email} onChange={handleChange} />
                    </FloatingLabel>
                    
                </Col>
                <Col md={6}>

                    <FloatingLabel controlId="nombre" label="Mi nombre" className="mb-3">
                        <Form.Control type="text" placeholder="Mi nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <FloatingLabel controlId="mensaje" label="Mensaje">
                        <Form.Control as="textarea" rows={8} name="mensaje" value={formData.mensaje} onChange={handleChange} />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    {sending ? (<div className="alert alert-primary" >Enviando...</div>) : '' }
                    {msg ? (<div className="alert alert-primary" >{msg}</div>) : ''}
                </Col>
            </Row>

            <Row>
                <Col className="d-grid gap-2 mt-2">
                    <Button variant="secondary" size="lg" type="submit">Enviar</Button>
                </Col>
            </Row>

            </Form>
        </div>
    )
}

export default ContactoPage;