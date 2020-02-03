import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Page1/index.css';
import bgimg from './img/bgimg.jpg';
import line1 from './img/line1.png';
import logo from './img/logo.png';
import email from './img/email.png';
import phone from './img/phone.png';

export default class Page1 extends React.Component {
    render() {
        return (
            <Container className="containerpage1">
                <Row className="row header">
                    <Col xs="auto"  className="col header"><a href="#"><img src={logo} className="logo" alt="logo" /></a></Col>
                    <Col className="col">
                        <ul className="ul navTop">
                            <li className="li navTop"><a href="#" className="a navTop">Home</a></li>
                            <li className="li navTop"><a href="#" className="a navTop">About me</a></li>
                            <li className="li navTop"><a href="#" className="a navTop">Skills</a></li>
                            <li className="li navTop"><a href="#" className="a navTop">Projects</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="row content">
                    <Col sm="12" md={{ size: 10, offset: 1 }} className="bgimg">
                        <img src={bgimg} className="bgimg" alt="bgimg" />
                        <Col md={{ size: 8, offset: 1 }} className="title">
                            <h1>Product Manager</h1>
                            <br/>
                            <h2>UI/UX Design Portfolio</h2>
                            <br/>
                            <img src={line1} alt="line1"/>
                            <br/>
                            <p>YICHIN is a based designer who loves using goods to tell a good story.</p>
                            <p id="email">
                                <img src={phone} alt="phone" id="icon"/>0972010671
                                <img src={email} alt="email" id="icon"/>iam017438@gmail.com
                            </p>
                         </Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}