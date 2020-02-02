import React from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import './index.css'
import migologo from './img/migologo.png'
import xchangelogo from './img/xchangelogo.png'
import yicailogo from './img/01logo.png'
import yicaiimg from './img/01img.jpg'
import { Media } from 'react-bootstrap'

export default class Page3 extends React.Component {
    render() {
        return (
            <Container fluid className="containerpage3">
                <Row className="rowpage3">
                    <Col sm="12" md={{ size: 12, offset: 1 }} className="colpages3">
                        <p id="brand">brand</p>
                        <img className="logopage3" src={migologo} alt="migologo" />
                        <p>Product Manager / UX Designer / UI Designer</p>
                        <h2>Thinker System</h2>
                    </Col>
                    <Col sm="12" md={{ size: 5, offset: 1 }} className="col2pages3">
                        <p id="textpage3">I’m the one of S/W Product Division at MIGO Corp. as launched the renew CRM System begin from winter of 2019 </p>
                    </Col>
                    <Col sm="12" md={{ size: 12, offset: 1 }} className="col3pages3">
                        <Button color="primary" className="button">View the Project</Button>{' '}
                    </Col>
                </Row>
                <Row className="row2page3">
                    <Col sm="12" md={{ size: 12, offset: 1 }} className="colpages3">
                        <p id="brand">brand</p>
                        <img className="logopage3" src={xchangelogo} alt="xchangelogo" />
                        <p>Project Manager / UI Designer</p>
                        <h2>XChange Sign Up Page</h2>
                    </Col>
                    <Col sm="12" md={{ size: 5, offset: 1 }} className="col2pages3">
                        <p id="textpage3">I’m a volunteer  of 大聚組 at XChange as launched the Signup Page begin from winter of 2019</p>
                    </Col>
                    <Col sm="12" md={{ size: 12, offset: 1 }} className="col3pages3">
                        <Button color="primary" className="button">View the Project</Button>{' '}
                    </Col>
                </Row>
                <Media>
                    <Media.Body>
                        <Col sm="12" md={{ size: 12, offset: 1 }}>
                            <Col sm="12" md={{ size: 12, offset: 0 }} className="colpages3">
                                <p id="brand">brand</p>
                                <img className="logopage3" src={yicailogo} alt="yicailogo" />
                                <p>Project Manager / UX Designer</p>
                                <h2>01 Entertainment Platform</h2>
                            </Col>
                            <Col sm="12" md={{ size: 5, offset: 0 }} className="col2pages3">
                                <p id="textpage3">I lead the Product team at Yoyo Tech. as launched the brand new entertainment platform in the summer of 2019</p>
                            </Col>
                            <Col sm="12" md={{ size: 12, offset: 0 }} className="col3pages3">
                                <Button color="primary" className="button">View the Project</Button>{' '}
                            </Col>
                        </Col>
                    </Media.Body>
                    <img
                        width={400}
                        height={250}
                        className="align-self-center yicaiimg"
                        src={yicaiimg}
                        alt="yicai"
                    />
                </Media>

                <Row className="row3page3" >

                </Row>
            </Container>
        );
    }
}