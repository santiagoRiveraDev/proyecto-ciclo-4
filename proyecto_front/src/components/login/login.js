import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "./login.css"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario:'',
            pass:''
        }
    }
    iniciarSesion(){
    alert(`usuario:${this.state.usuario} - password:${this.state.pass}`)
    }
    render() {
        return (
            <Container id="login-container">
                <Row>
                    <Col>
                        <Row>
                            <h2>Iniciar sesion</h2>
                        </Row>
                        <Row>
                            <Col sm = '12' xs = '12' md = {{span: 4, offset: 4}}
                            lg = {{span: 4, offset: 4}}
                            xl = {{span: 4, offset: 4}}>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control type="text" placeholder="Ingresa tu usuario"
                                        onChange={(e => this.setState({usuario:e.target.value}))}
                                        />
                                        {this.state.usuario}
                                        {/*<Form.Text className="text-muted">
                        Nunca compartiremos su correo electrónico con nadie más.
                        </Form.Text>*/}
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"
                                        onChange={(e)=> this.setState({pass:e.target.value})}
                                        />
                                        {this.state.pass}
                                    </Form.Group>
                                    <Form.Group>
                                        {/*<Form.Check type="checkbox" label="Check me out" />*/}
                                    </Form.Group>
                                    <Button variant="success" type="submit"
                                    onClick = {() => {
                                        this.iniciarSesion()
                                    }
                                    }>
                                        Iniciar sesion
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

//export default ;