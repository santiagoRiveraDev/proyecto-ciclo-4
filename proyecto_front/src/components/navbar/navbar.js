import React from "react";
import { Container, Dropdown, DropdownButton, Nav, Navbar, Row, Image } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import './navbar.css'
import logo from "../img/250px-React.svg.png"

export default class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Navbar fixed="top" id="navbar" bg="primary" variant="dark">
                <Container>
                <Image className="logo" src={logo}/>
                    <Navbar.Brand href="#home">Grupo 14 Mision TIC 2022 <span id="usuario-sub-branm"></span></Navbar.Brand>
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                    </Nav>
                    <DropdownButton id="dropdown-basic-button" title="Usuario">
                    <Dropdown.Header id="dropdown-header">
                    <Row>
                        <FontAwesomeIcon  icon={faUserCircle}></FontAwesomeIcon>
                    </Row>
                    <Row>
                        USUARIO
                    </Row>
                    <Dropdown.Divider />
                    </Dropdown.Header>
                        <Dropdown.Item href="#/action-1">Cerrar sesion</Dropdown.Item>
                        {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                    </DropdownButton>
                </Container>
            </Navbar>
        );
    }
}
